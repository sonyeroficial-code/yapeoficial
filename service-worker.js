'use strict';

// v249: arranque OFFLINE-FIRST.
// Importante en Android: navigator.onLine puede ser true aunque los datos
// estén encendidos pero no haya megas/salida real a Internet.
const CACHE_VERSION = 'yape-pwa-offline-first-v249-20260903';
const APP_SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const NETWORK_TIMEOUT_MS = 2200;

const SCOPE_URL = self.registration.scope;
const SHELL_HOME_URL = new URL('./', SCOPE_URL).href;
const SHELL_INDEX_URL = new URL('index.html', SCOPE_URL).href;
const MANIFEST_URL = new URL('manifest.webmanifest', SCOPE_URL).href;

const APP_SHELL = [
  './',
  'index.html',
  'manifest.webmanifest',
  'favicon-32.png',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
].map((asset) => new URL(asset, SCOPE_URL).href);

function fetchWithTimeout(request, timeoutMs = NETWORK_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const req = request instanceof Request
    ? new Request(request, { signal: controller.signal })
    : new Request(request, { signal: controller.signal });

  return fetch(req).finally(() => clearTimeout(timer));
}

async function putSafe(cacheName, key, response) {
  if (!response || !response.ok) return;
  try {
    const cache = await caches.open(cacheName);
    await cache.put(key, response.clone());
  } catch (_) {
    // El almacenamiento lleno nunca debe bloquear la app.
  }
}

async function cacheAppShell() {
  const cache = await caches.open(APP_SHELL_CACHE);
  await Promise.allSettled(
    APP_SHELL.map(async (asset) => {
      try {
        const response = await fetchWithTimeout(
          new Request(asset, { cache: 'reload' }),
          3000
        );
        if (response.ok) await cache.put(asset, response);
      } catch (_) {
        // Si no hay Internet real, conservamos lo que ya exista en cachés viejas.
      }
    })
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheAppShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Solo limpiamos versiones antiguas cuando la versión nueva realmente
    // tiene una copia local del inicio. Así una actualización sin megas no
    // puede borrar la última versión offline funcional.
    const current = await caches.open(APP_SHELL_CACHE);
    const hasCurrentShell = !!(
      (await current.match(SHELL_INDEX_URL)) ||
      (await current.match(SHELL_HOME_URL))
    );

    if (hasCurrentShell) {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith('yape-pwa-') &&
            key !== APP_SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      );
    }

    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const type = event.data && event.data.type;
  if (type === 'SKIP_WAITING') self.skipWaiting();
  if (type === 'CACHE_APP_SHELL') event.waitUntil(cacheAppShell());

  // Compatibilidad con el código de la app que pide precargar recursos.
  if (type === 'CACHE_URLS' && Array.isArray(event.data.urls)) {
    event.waitUntil((async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      await Promise.allSettled(event.data.urls.map(async (url) => {
        try {
          const absolute = new URL(url, SCOPE_URL);
          if (absolute.origin !== self.location.origin) return;
          const response = await fetchWithTimeout(absolute.href, 2500);
          if (response.ok) await cache.put(absolute.href, response);
        } catch (_) {}
      }));
    })());
  }
});

async function refreshNavigation(request) {
  try {
    const response = await fetchWithTimeout(request);
    if (!response || !response.ok) return;

    // Guardamos el HTML actualizado bajo index.html para que cualquier
    // lanzamiento futuro pueda abrirlo de inmediato sin red.
    await putSafe(RUNTIME_CACHE, SHELL_INDEX_URL, response);
    await putSafe(RUNTIME_CACHE, request, response);
  } catch (_) {
    // Sin salida real a Internet: la copia local sigue funcionando.
  }
}

async function navigationResponse(event) {
  const request = event.request;

  // OFFLINE-FIRST: nunca esperamos a la red si ya existe una copia local.
  const cached =
    (await caches.match(request, { ignoreSearch: true })) ||
    (await caches.match(SHELL_INDEX_URL, { ignoreSearch: true })) ||
    (await caches.match(SHELL_HOME_URL, { ignoreSearch: true }));

  if (cached) {
    event.waitUntil(refreshNavigation(request));
    return cached;
  }

  // Primera visita sin caché: intentar red, pero nunca quedar congelado.
  try {
    const response = await fetchWithTimeout(request);
    if (response && response.ok) {
      await putSafe(RUNTIME_CACHE, SHELL_INDEX_URL, response);
      return response;
    }
  } catch (_) {}

  return new Response(
    '<!doctype html><html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;background:#780699;color:white;font-family:system-ui;display:grid;place-items:center;height:100vh;text-align:center;padding:24px;box-sizing:border-box"><div><strong>Sin conexión</strong><br><small>Abre la app una vez con Internet para guardar la versión offline.</small></div></body></html>',
    { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

async function refreshStatic(request) {
  try {
    const response = await fetchWithTimeout(request);
    if (response && response.ok && response.status === 200) {
      await putSafe(RUNTIME_CACHE, request, response);
    }
  } catch (_) {}
}

async function staticResponse(event) {
  const request = event.request;
  const cached = await caches.match(request, { ignoreSearch: false });

  if (cached) {
    event.waitUntil(refreshStatic(request));
    return cached;
  }

  try {
    const response = await fetchWithTimeout(request);
    if (response && response.ok && response.status === 200) {
      await putSafe(RUNTIME_CACHE, request, response);
    }
    return response;
  } catch (_) {
    return Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (request.headers.has('range')) return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(navigationResponse(event));
    return;
  }

  if (url.href === MANIFEST_URL) {
    event.respondWith(staticResponse(event));
    return;
  }

  event.respondWith(staticResponse(event));
});

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (_) {
    payload = { body: event.data ? event.data.text() : '' };
  }

  const data = payload.data || {};
  const notification = payload.notification || {};
  const title = notification.title || data.title || payload.title || 'Notificación';
  const body = notification.body || data.body || data.text || payload.body || '';
  const targetUrl = data.url || data.click_action || './index.html';
  const tag = data.transferId || data.tag || '';
  const options = {
    body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [180, 80, 180],
    data: { url: targetUrl }
  };
  if (tag) {
    options.tag = tag;
    options.renotify = true;
  }

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const requestedUrl = new URL(
    (event.notification.data && event.notification.data.url) || './index.html',
    self.registration.scope
  ).href;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(async (clients) => {
        for (const client of clients) {
          if ('navigate' in client) await client.navigate(requestedUrl);
          if ('focus' in client) return client.focus();
        }
        return self.clients.openWindow(requestedUrl);
      })
  );
});
