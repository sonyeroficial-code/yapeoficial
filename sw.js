'use strict';

// Recursos de la carpeta que acompaña a esta app, relativos a su instalación.
const VERSION = '20261011-qr-huella-v2';
const BASE_URL = new URL('./', self.location.href);
const CACHE_NAME = 'yape-offline-visuals-' + VERSION + ':' + BASE_URL.pathname;
const SHELL_URL = new URL('index.html', BASE_URL).href;
const LOCAL_ASSETS = [
  "assets/qr_yape_morado.webp",
  "assets/barra_opciones_perfil.webp",
  "assets/huellateclado.gif",
  "assets/icono_huella_morada.webp",
  "assets/lottie-5.12.2.min.js",
  "assets/animacion/huella_face.json",
  "assets/animacion/icon_huella_.png",
  "assets/embedded/icono-biometria-huella.svg",
  "assets/roboto_latin.woff2",
  "assets/roboto_simbolos.woff2",
  "assets/logo_yape_principal.webp",
  "assets/embedded/logo-yape-principal.svg",
  "assets/login/Cargando_yape.json",
  "assets/animacion_yape_confetti_v3.js",
  "assets/baucher/Check_Logo_bucher.json",
  "assets/animacion_confetti.gif",
  "assets/watermark-jose-quinones.png",
  "assets/Miguel-grau.png",
  "assets/Abraham-vadelomar.png",
  "assets/Pedro-paulet.png",
  "assets/santa-rosa-de-lima.png",
  "assets/jsQR-1.4.0.min.js",
  "assets/Abraham-valdelomar.png",
  "assets/Bebote.png",
  "assets/Finalizar.png",
  "assets/Jhonker.png",
  "assets/Sonyer.png",
  "assets/animacion_yape_confetti.js",
  "assets/aprobacion.png",
  "assets/atras-icon.svg",
  "assets/audio_app.mp3",
  "assets/banco-yape.svg",
  "assets/biometria.png",
  "assets/carga.png",
  "assets/carrito.png",
  "assets/cerrar-g-icon.svg",
  "assets/clave/Seguridad_Cambio_Clave.json",
  "assets/compartir.png",
  "assets/creditos.png",
  "assets/destinos-icon.svg",
  "assets/dolares.png",
  "assets/embedded/icono-ayuda-soporte.svg",
  "assets/embedded/icono-cerrar-gris.svg",
  "assets/embedded/icono-cerrar-sesion.svg",
  "assets/embedded/icono-compartir-comprobante.png",
  "assets/embedded/icono-compras-internet-pos.svg",
  "assets/embedded/icono-confirmacion-yapeo-alto.svg",
  "assets/embedded/icono-eliminar-cuenta.svg",
  "assets/embedded/icono-fecha-calendario.svg",
  "assets/embedded/icono-flecha-volver-negra.svg",
  "assets/embedded/icono-hora-reloj.svg",
  "assets/embedded/icono-informacion-seguridad.svg",
  "assets/embedded/icono-limites-transaccionales.svg",
  "assets/embedded/icono-mi-qr.svg",
  "assets/embedded/icono-mis-datos.svg",
  "assets/embedded/icono-mis-direcciones.svg",
  "assets/embedded/icono-notificaciones-yapeo.svg",
  "assets/embedded/icono-politica-privacidad.svg",
  "assets/embedded/icono-terminos-condiciones.svg",
  "assets/embedded/icono-transferencia-bancaria.svg",
  "assets/embedded/icono-volver-gris.svg",
  "assets/embedded/logo-yape-circular.svg",
  "assets/embedded/pixel-transparente.svg",
  "assets/fuente_roboto_01.woff2",
  "assets/fuente_roboto_02.woff2",
  "assets/home/Animacion_Creditos.json",
  "assets/home/Animacion_Tienda_Cyber.json",
  "assets/icono_app_yape.svg",
  "assets/icono_aprobar_compras.svg",
  "assets/icono_campana.svg",
  "assets/icono_contactos_yape.webp",
  "assets/icono_creditos.svg",
  "assets/icono_dolares.svg",
  "assets/icono_escanear_qr.svg",
  "assets/icono_flecha_movimientos.svg",
  "assets/icono_gaming.webp",
  "assets/icono_movimientos.svg",
  "assets/icono_ojo_mostrar_saldo.svg",
  "assets/icono_ojo_ocultar_saldo.png",
  "assets/icono_ojo_ocultar_saldo_backup.svg",
  "assets/icono_perfil.svg",
  "assets/icono_promos.webp",
  "assets/icono_recargar_celular.svg",
  "assets/icono_remesas.svg",
  "assets/icono_soat.svg",
  "assets/icono_soporte.svg",
  "assets/icono_tienda.svg",
  "assets/icono_ver_todo_base.webp",
  "assets/icono_viajar_bus.webp",
  "assets/icono_yape_svg.svg",
  "assets/icono_yapear_boton.svg",
  "assets/icono_yapear_servicios.svg",
  "assets/llama.png",
  "assets/logo-movimiendos.png",
  "assets/mensaje.png",
  "assets/movimientosanuncio.png",
  "assets/promo_01.webp",
  "assets/promo_02.webp",
  "assets/promo_03.webp",
  "assets/promo_04.webp",
  "assets/promo_05.webp",
  "assets/promo_06.webp",
  "assets/recargar.png",
  "assets/remesas.png",
  "assets/soat.png",
  "assets/yape_personaje.svg",
  "assets/yapeara-icon.svg",
  "assets/yapearservicios/agua_y_luz.png",
  "assets/yapearservicios/claro.png",
  "assets/yapearservicios/entel.png",
  "assets/yapearservicios/ideas_servicios.png",
  "assets/yapearservicios/mensajes.png",
  "assets/yapearservicios/movistar.png",
  "assets/yapearservicios/promo_servcios.png"
];
const ASSET_URLS = LOCAL_ASSETS.map(path => new URL(path, BASE_URL).href);
const OPTIONAL_SHELL = ['manifest.webmanifest', 'manifest.json', 'icon-192.png',
  'icon-512.png', 'icon-maskable-512.png'];
const STATIC_HOSTS = new Set(['www.gstatic.com', 'fonts.gstatic.com',
  'fonts.googleapis.com', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'unpkg.com']);
const ASSET_EXTENSION = /\.(?:png|svg|gif|webp|jpe?g|ico|json|woff2?|ttf|otf|js|css|mp3|webmanifest)$/i;
const downloads = new Map();
const networkQueue = [];
let networkCount = 0;
let warmCount = 0;
let allPending = null;

function normalize(value) {
  try {
    const url = new URL(value, BASE_URL);
    url.hash = '';
    if (!/^https?:$/.test(url.protocol)) return null;
    return url;
  } catch (_) { return null; }
}

function canWarm(url) {
  if (!url) return false;
  if (url.origin === BASE_URL.origin) {
    return url.href === SHELL_URL ||
      (url.pathname.startsWith(BASE_URL.pathname + 'assets/') && ASSET_EXTENSION.test(url.pathname)) ||
      OPTIONAL_SHELL.some(path => url.pathname === new URL(path, BASE_URL).pathname);
  }
  return STATIC_HOSTS.has(url.hostname) &&
    (ASSET_EXTENSION.test(url.pathname) || url.hostname === 'fonts.googleapis.com');
}

function usable(response, url) {
  if (!response || !response.ok || response.status === 206) return false;
  // Algunos hostings responden index.html con 200 cuando una imagen no existe.
  const type = response.headers.get('content-type') || '';
  if (url !== SHELL_URL && /(?:text\/html|application\/xhtml\+xml)/i.test(type)) return false;
  return true;
}

async function findCached(url) {
  try {
  const cache = await caches.open(CACHE_NAME);
  const current = await cache.match(url);
  if (usable(current, url)) return current;
  // Conserva los archivos válidos ya guardados, sin borrar otras cachés.
  for (const name of await caches.keys()) {
    if (name === CACHE_NAME || !/^(?:app-offline-resources-|interbank-pwa-|yape-offline-visuals-)/.test(name)) continue;
    const old = await (await caches.open(name)).match(url);
    if (usable(old, url)) {
      try { await cache.put(url, old.clone()); } catch (_) {}
      return old;
    }
  }
  return null;
  } catch (_) { return null; }
}

async function timedFetch(request, timeout) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try { return await fetch(request, {signal: controller.signal}); }
  finally { clearTimeout(timer); }
}

function drainNetwork() {
  while (networkCount < 4 && networkQueue.length) {
    const job = networkQueue.shift();
    networkCount++;
    Promise.resolve().then(job.run).then(job.resolve, job.reject).finally(() => {
      networkCount--; drainNetwork();
    });
  }
}

function networkSlot(run) {
  return new Promise((resolve, reject) => {
    networkQueue.push({run, resolve, reject}); drainNetwork();
  });
}

function cacheAsset(value, refresh = false) {
  const url = normalize(value);
  if (!canWarm(url)) return Promise.resolve(false);
  const key = url.href;
  if (downloads.has(key)) return downloads.get(key);
  const pending = (async () => {
    if (!refresh && await findCached(key)) return true;
    try {
      return await networkSlot(async () => {
        const request = new Request(key, {cache: 'no-cache', mode: 'cors', credentials: 'same-origin'});
        const response = await timedFetch(request, 20000);
        if (!usable(response, key)) return false;
        await (await caches.open(CACHE_NAME)).put(key, response);
        return true;
      });
    } catch (_) { return false; }
  })().finally(() => downloads.delete(key));
  downloads.set(key, pending);
  return pending;
}

async function reportStatus(target) {
  const cache = await caches.open(CACHE_NAME);
  const checks = await Promise.all([SHELL_URL, ...ASSET_URLS].map(async url => usable(await cache.match(url), url)));
  const saved = checks.filter(Boolean).length;
  const data = {type: 'OFFLINE_CACHE_STATUS', version: VERSION, cacheName: CACHE_NAME,
    total: checks.length, cached: saved, complete: saved === checks.length,
    running: warmCount > 0};
  const clients = target ? [target] : await self.clients.matchAll({type: 'window', includeUncontrolled: true});
  clients.forEach(client => { try { client.postMessage(data); } catch (_) {} });
  return data;
}

async function warmBatch(urls) {
  warmCount++;
  try {
    await reportStatus();
    await Promise.all(urls.map(url => cacheAsset(url)));
  } finally {
    warmCount--;
    await reportStatus();
  }
}

function warmAll() {
  if (allPending) return allPending;
  allPending = warmBatch([SHELL_URL, ...ASSET_URLS,
    ...OPTIONAL_SHELL.map(path => new URL(path, BASE_URL).href)])
    .finally(() => { allPending = null; });
  return allPending;
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    // Activa pronto; las imágenes se descargan después sin frenar la interfaz.
    const saved = await cacheAsset(SHELL_URL, true);
    if (!saved && !(await findCached(SHELL_URL))) throw new Error('No se pudo guardar index.html');
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.clients.claim();
    await reportStatus();
  })());
});

self.addEventListener('message', event => {
  const data = event.data || {};
  let work;
  if (data.type === 'CACHE_ALL_ASSETS') work = warmAll();
  else if (data.type === 'CACHE_APP_SHELL') work = warmBatch([SHELL_URL]);
  else if (data.type === 'CACHE_URLS' && Array.isArray(data.urls)) {
    const urls = Array.from(new Set(data.urls.slice(0, 200).filter(url => typeof url === 'string' && canWarm(normalize(url)))));
    work = warmBatch(urls);
  } else if (data.type === 'GET_OFFLINE_CACHE_STATUS') work = reportStatus(event.source);
  else if (data.type === 'SKIP_WAITING') work = self.skipWaiting();
  if (work) event.waitUntil(work.catch(() => {}));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range')) return;
  const url = normalize(request.url);
  if (!url) return;

  if (request.mode === 'navigate' && url.origin === BASE_URL.origin && url.pathname.startsWith(BASE_URL.pathname)) {
    // Inicio utiliza la copia local de inmediato; la red actualiza en segundo plano.
    const refresh = (async () => {
      try {
        const response = await timedFetch(new Request(request, {cache: 'no-cache'}), 8000);
        if (response.ok && /text\/html/i.test(response.headers.get('content-type') || '')) {
          try { await (await caches.open(CACHE_NAME)).put(SHELL_URL, response.clone()); } catch (_) {}
        }
        return response;
      } catch (_) { return null; }
    })();
    event.waitUntil(refresh.then(() => {}));
    event.respondWith((async () => {
      const cached = await findCached(SHELL_URL);
      if (cached) return cached;
      return (await refresh) || Response.error();
    })());
    return;
  }

  const isManifest = url.origin === BASE_URL.origin &&
    /\/manifest\.(?:json|webmanifest)$/.test(url.pathname);
  if (isManifest) {
    const refresh = (async () => {
      try {
        const response = await timedFetch(new Request(request, {cache: 'no-cache'}), 5000);
        if (!usable(response, url.href)) return null;
        try { await (await caches.open(CACHE_NAME)).put(request, response.clone()); } catch (_) {}
        return response;
      } catch (_) { return null; }
    })();
    event.waitUntil(refresh.then(() => {}));
    event.respondWith((async () => (await findCached(url.href)) || (await refresh) || Response.error())());
    return;
  }

  if (!canWarm(url)) return;
  // QR, huella, animaciones, billetes, anuncios y fuentes: caché primero.
  const response = (async () => {
    const cached = await findCached(url.href);
    if (cached) return cached;
    try {
      const fresh = await timedFetch(request, 20000);
      if (usable(fresh, url.href)) {
        try { await (await caches.open(CACHE_NAME)).put(request, fresh.clone()); } catch (_) {}
      }
      return fresh;
    } catch (_) { return Response.error(); }
  })();
  // Mantiene vivo el worker hasta que termine de escribir la copia.
  event.waitUntil(response.then(() => {}));
  event.respondWith(response);
});
