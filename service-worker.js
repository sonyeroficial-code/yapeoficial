/* PWA estable: recursos locales + modo sin conexión. */
const CACHE_NAME = 'yape-pwa-v20260805-1';
const OFFLINE_URL = './offline.html';
const INDEX_URL = './index.html';
const NETWORK_TIMEOUT_MS = 3500;
const PRECACHE_URLS = [
  "./animacion_confetti.gif",
  "./assets/Abraham-vadelomar.png",
  "./assets/Abraham-valdelomar.png",
  "./assets/Bebote.png",
  "./assets/Finalizar.png",
  "./assets/Jhonker.png",
  "./assets/Miguel-grau.png",
  "./assets/Pedro-paulet.png",
  "./assets/Santa-rosa-de-lima.png",
  "./assets/Sonyer.png",
  "./assets/abraham-vadelomar.png",
  "./assets/abraham-valdelomar.png",
  "./assets/animacion_confetti.gif",
  "./assets/animacion_yape_confetti.js",
  "./assets/animacion_yape_confetti_v3.js",
  "./assets/aprobacion.png",
  "./assets/audio_app.mp3",
  "./assets/barra_opciones_perfil.webp",
  "./assets/biometria.png",
  "./assets/carga.png",
  "./assets/carrito.png",
  "./assets/compartir.png",
  "./assets/creditos.png",
  "./assets/dolares.png",
  "./assets/embedded/icono-ayuda-soporte.svg",
  "./assets/embedded/icono-biometria-huella.svg",
  "./assets/embedded/icono-cerrar-gris.svg",
  "./assets/embedded/icono-cerrar-sesion.svg",
  "./assets/embedded/icono-compartir-comprobante.png",
  "./assets/embedded/icono-compras-internet-pos.svg",
  "./assets/embedded/icono-confirmacion-yapeo-alto.svg",
  "./assets/embedded/icono-eliminar-cuenta.svg",
  "./assets/embedded/icono-fecha-calendario.svg",
  "./assets/embedded/icono-flecha-volver-negra.svg",
  "./assets/embedded/icono-hora-reloj.svg",
  "./assets/embedded/icono-informacion-seguridad.svg",
  "./assets/embedded/icono-limites-transaccionales.svg",
  "./assets/embedded/icono-mi-qr.svg",
  "./assets/embedded/icono-mis-datos.svg",
  "./assets/embedded/icono-mis-direcciones.svg",
  "./assets/embedded/icono-notificaciones-yapeo.svg",
  "./assets/embedded/icono-politica-privacidad.svg",
  "./assets/embedded/icono-terminos-condiciones.svg",
  "./assets/embedded/icono-transferencia-bancaria.svg",
  "./assets/embedded/icono-volver-gris.svg",
  "./assets/embedded/logo-yape-circular.svg",
  "./assets/embedded/logo-yape-principal.svg",
  "./assets/embedded/pixel-transparente.svg",
  "./assets/fuente_roboto_01.woff2",
  "./assets/fuente_roboto_02.woff2",
  "./assets/icono_app_yape.svg",
  "./assets/icono_aprobar_compras.svg",
  "./assets/icono_campana.svg",
  "./assets/icono_contactos_yape.webp",
  "./assets/icono_creditos.svg",
  "./assets/icono_dolares.svg",
  "./assets/icono_escanear_qr.svg",
  "./assets/icono_flecha_movimientos.svg",
  "./assets/icono_gaming.webp",
  "./assets/icono_huella_morada.webp",
  "./assets/icono_movimientos.svg",
  "./assets/icono_ojo_mostrar_saldo.svg",
  "./assets/icono_ojo_ocultar_saldo.png",
  "./assets/icono_ojo_ocultar_saldo_backup.svg",
  "./assets/icono_perfil.svg",
  "./assets/icono_promos.webp",
  "./assets/icono_recargar_celular.svg",
  "./assets/icono_remesas.svg",
  "./assets/icono_soat.svg",
  "./assets/icono_soporte.svg",
  "./assets/icono_tienda.svg",
  "./assets/icono_ver_todo_base.webp",
  "./assets/icono_viajar_bus.webp",
  "./assets/icono_yape_svg.svg",
  "./assets/icono_yapear_boton.svg",
  "./assets/icono_yapear_servicios.svg",
  "./assets/jose-quinones.png",
  "./assets/llama.png",
  "./assets/logo-movimiendos.png",
  "./assets/logo_yape_principal.webp",
  "./assets/logobaucher.gif",
  "./assets/mensaje.png",
  "./assets/miguel-grau.png",
  "./assets/movimientosanuncio.png",
  "./assets/pedro-paulet.png",
  "./assets/promo_01.webp",
  "./assets/promo_02.webp",
  "./assets/promo_03.webp",
  "./assets/promo_04.webp",
  "./assets/promo_05.webp",
  "./assets/promo_06.webp",
  "./assets/qr_yape_morado.webp",
  "./assets/recargar.png",
  "./assets/remesas.png",
  "./assets/roboto_latin.woff2",
  "./assets/roboto_simbolos.woff2",
  "./assets/santa-rosa-de-lima.png",
  "./assets/soat.png",
  "./assets/tienda.png",
  "./assets/watermark-jose-quinones.png",
  "./assets/yape_personaje.svg",
  "./bcp.png",
  "./compartir.png",
  "./icon-192.png",
  "./icon-512.png",
  "./img/anuncios/anuncio1.png",
  "./img/anuncios/anuncio2.png",
  "./img/anuncios/anuncio3.png",
  "./img/anuncios/anuncio4.png",
  "./img/anuncios/anuncio5.png",
  "./img/anuncios/anuncio6.png",
  "./img/iconos/aprende_yape.png",
  "./img/iconos/aprobacion.png",
  "./img/iconos/biometria.png",
  "./img/iconos/bus.png",
  "./img/iconos/creditos.png",
  "./img/iconos/dolares.png",
  "./img/iconos/elecciones.png",
  "./img/iconos/entradas.png",
  "./img/iconos/enviar_exterior.png",
  "./img/iconos/escanear_qr.png",
  "./img/iconos/gaming.png",
  "./img/iconos/hijos.png",
  "./img/iconos/mostrar_saldo.png",
  "./img/iconos/movimientos_icon.png",
  "./img/iconos/mundo_proteccion.png",
  "./img/iconos/ocultar_saldo.png",
  "./img/iconos/promos.png",
  "./img/iconos/recargar.png",
  "./img/iconos/recargar_transporte.png",
  "./img/iconos/remesas.png",
  "./img/iconos/servicios.png",
  "./img/iconos/soat.png",
  "./img/iconos/tienda.png",
  "./img/iconos/vermas.png",
  "./img/iconos/yapear.png",
  "./img/iconos/yapear_dolares.png",
  "./img/iconos/yapear_servicios.png",
  "./img/promos/promo1.png",
  "./img/promos/promo2.png",
  "./img/promos/promo3.png",
  "./img/promos/promo4.png",
  "./index.html",
  "./logobaucher.gif",
  "./logomovimientos.svg",
  "./manifest.json",
  "./manifest.webmanifest",
  "./media/logo.gif",
  "./msg-icon.png",
  "./offline.html",
  "./qr.png",
  "./s-icon.png"
];

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('network-timeout')), ms));
}

async function fetchWithTimeout(request, ms = NETWORK_TIMEOUT_MS) {
  return Promise.race([fetch(request), timeout(ms)]);
}

async function cachePut(cache, request, response) {
  try {
    if (response && (response.ok || response.type === 'opaque')) {
      await cache.put(request, response.clone());
    }
  } catch (_) {}
}

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(PRECACHE_URLS.map(async url => {
      try {
        const response = await fetch(new Request(url, {cache:'reload'}));
        await cachePut(cache, url, response);
      } catch (_) {}
    }));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

async function navigationStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetchWithTimeout(request);
    await cachePut(cache, request, fresh);
    return fresh;
  } catch (_) {
    return (await cache.match(request)) ||
           (await cache.match(INDEX_URL)) ||
           (await cache.match('./')) ||
           (await cache.match(OFFLINE_URL)) ||
           new Response('<!doctype html><meta charset="utf-8"><title>Sin conexión</title><p>Abre la aplicación una vez con internet para preparar el modo sin conexión.</p>', {headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) {
    fetch(request).then(response => cachePut(cache, request, response)).catch(() => {});
    return cached;
  }
  const response = await fetchWithTimeout(request);
  await cachePut(cache, request, response);
  return response;
}

async function crossOriginStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetchWithTimeout(request, 3000);
    await cachePut(cache, request, response);
    return response;
  } catch (_) {
    if (request.destination === 'image') {
      return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>', {headers:{'Content-Type':'image/svg+xml'}});
    }
    if (request.destination === 'style') return new Response('', {headers:{'Content-Type':'text/css'}});
    if (request.destination === 'script') return new Response('/* recurso remoto no disponible sin conexión */', {headers:{'Content-Type':'application/javascript'}});
    return new Response('', {status:504, statusText:'Offline'});
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(navigationStrategy(request));
    return;
  }

  if (url.origin !== self.location.origin) {
    event.respondWith(crossOriginStrategy(request));
    return;
  }

  event.respondWith(cacheFirst(request).catch(async () => {
    const cache = await caches.open(CACHE_NAME);
    const fallback = await cache.match(request);
    if (fallback) return fallback;
    if (request.destination === 'image') return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>', {headers:{'Content-Type':'image/svg+xml'}});
    if (request.destination === 'style') return new Response('', {headers:{'Content-Type':'text/css'}});
    if (request.destination === 'script') return new Response('/* offline */', {headers:{'Content-Type':'application/javascript'}});
    return new Response('', {status:504, statusText:'Offline'});
  }));
});
