const { getApps, initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

function getAdminApp() {
  if (getApps().length) return getApps()[0];

  const projectId = String(process.env.FIREBASE_PROJECT_ID || '').trim();
  const clientEmail = String(process.env.FIREBASE_CLIENT_EMAIL || '').trim();
  const privateKey = String(process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n').trim();

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Faltan FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL o FIREBASE_PRIVATE_KEY en Vercel.');
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
    projectId,
  });
}

function cleanPhone(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 9);
}

function money(value) {
  const n = Number(value || 0);
  if (!Number.isFinite(n)) return '0';
  return n.toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function shortName(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return 'Alguien';
  return text.split(' ').filter(Boolean).slice(0, 2).join(' ').slice(0, 26);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    const configured = Boolean(
      process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
    );
    return res.status(configured ? 200 : 503).json({
      ok: configured,
      service: 'vercel-fcm-push',
      configured,
      projectId: process.env.FIREBASE_PROJECT_ID || null,
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ ok: false, error: 'Método no permitido.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const transferId = String(body.transferId || '').trim();

    if (!/^[A-Za-z0-9_-]{6,1500}$/.test(transferId)) {
      return res.status(400).json({ ok: false, error: 'transferId inválido.' });
    }

    getAdminApp();
    const db = getFirestore();
    const transferRef = db.collection('transfers').doc(transferId);
    const transferSnap = await transferRef.get();

    if (!transferSnap.exists) {
      return res.status(404).json({ ok: false, error: 'Transferencia no encontrada.' });
    }

    const transfer = transferSnap.data() || {};
    if (transfer.pushSentAt) {
      return res.status(200).json({ ok: true, alreadySent: true });
    }

    const toPhone = cleanPhone(transfer.toPhone);
    if (toPhone.length !== 9) {
      return res.status(422).json({ ok: false, error: 'La transferencia no tiene destinatario válido.' });
    }

    const userRef = db.collection('users').doc(toPhone);
    const userSnap = await userRef.get();
    if (!userSnap.exists) {
      await transferRef.set({
        pushSkippedAt: FieldValue.serverTimestamp(),
        pushSkipReason: 'recipient-not-registered',
      }, { merge: true });
      return res.status(200).json({ ok: true, skipped: 'recipient-not-registered' });
    }

    const user = userSnap.data() || {};
    if (user.pushEnabled === false) {
      return res.status(200).json({ ok: true, skipped: 'push-disabled' });
    }

    const tokens = Array.from(new Set(
      (Array.isArray(user.pushTokens) ? user.pushTokens : [])
        .map(v => String(v || '').trim())
        .filter(Boolean)
    )).slice(0, 500);

    if (!tokens.length) {
      await transferRef.set({
        pushSkippedAt: FieldValue.serverTimestamp(),
        pushSkipReason: 'no-push-token',
      }, { merge: true });
      return res.status(200).json({ ok: true, skipped: 'no-push-token' });
    }

    const senderName = shortName(transfer.fromName);
    const code3 = String(transfer.code3 || '').replace(/\D/g, '').slice(0, 3);
    const amount = money(transfer.monto);
    const bodyText = `${senderName} te envió un pago por S/ ${amount}.${code3 ? ` El cód. de seguridad es: ${code3}` : ''}`;

    // Data-only: el service-worker.js crea la notificación en segundo plano.
    // Así evitamos avisos duplicados y mantenemos el diseño/click controlado por la PWA.
    const response = await getMessaging().sendEachForMulticast({
      tokens,
      data: {
        title: 'Confirmación de Pago',
        body: bodyText,
        text: bodyText,
        transferId,
        toPhone,
        fromPhone: cleanPhone(transfer.fromPhone),
        amount: String(transfer.monto || 0),
        code3,
        url: '/',
      },
      webpush: {
        headers: {
          Urgency: 'high',
          TTL: '86400',
        },
      },
    });

    const invalidCodes = new Set([
      'messaging/registration-token-not-registered',
      'messaging/invalid-registration-token',
      'messaging/invalid-argument',
    ]);
    const invalidTokens = [];
    response.responses.forEach((item, index) => {
      const code = item && item.error && item.error.code;
      if (!item.success && invalidCodes.has(code)) invalidTokens.push(tokens[index]);
    });

    if (invalidTokens.length) {
      await userRef.set({
        pushTokens: FieldValue.arrayRemove(...invalidTokens),
        pushUpdatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
    }

    await transferRef.set({
      pushSentAt: FieldValue.serverTimestamp(),
      pushSuccessCount: response.successCount,
      pushFailureCount: response.failureCount,
      pushProvider: 'vercel-fcm',
    }, { merge: true });

    return res.status(200).json({
      ok: true,
      successCount: response.successCount,
      failureCount: response.failureCount,
      invalidTokensRemoved: invalidTokens.length,
    });
  } catch (error) {
    console.error('[send-push]', error);
    return res.status(500).json({
      ok: false,
      error: error && error.message ? error.message : 'Error enviando push.',
    });
  }
};
