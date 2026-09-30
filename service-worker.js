'use strict';

// The file list and revisions are generated from the delivered ZIP.
const BUILD = '08a66e2e84d1b79b';
const LOCAL_FILES = [
  {
    "url": "assets/Abraham-vadelomar.png",
    "revision": "8784c5c577bd2518434f"
  },
  {
    "url": "assets/Abraham-valdelomar.png",
    "revision": "95b347973d980e6a98e1"
  },
  {
    "url": "assets/Bebote.png",
    "revision": "719e3acc0d41c989f98a"
  },
  {
    "url": "assets/Finalizar.png",
    "revision": "2dc90ef213bce7a5c912"
  },
  {
    "url": "assets/Jhonker.png",
    "revision": "22fa58a763a9936f969a"
  },
  {
    "url": "assets/Miguel-grau.png",
    "revision": "cea0a811a61e834638e8"
  },
  {
    "url": "assets/Pedro-paulet.png",
    "revision": "03d333826178ddf36f7c"
  },
  {
    "url": "assets/Sonyer.png",
    "revision": "9afea225455a698601e8"
  },
  {
    "url": "assets/animacion/huella_face.json",
    "revision": "6ab9d761937b9b5ec355"
  },
  {
    "url": "assets/animacion/icon_huella_.png",
    "revision": "9a129c9b9ab16fc74c32"
  },
  {
    "url": "assets/animacion_confetti.gif",
    "revision": "ad87813dad47c7fee73e"
  },
  {
    "url": "assets/animacion_yape_confetti.js",
    "revision": "fc9742f0cf4ab5e63458"
  },
  {
    "url": "assets/animacion_yape_confetti_v3.js",
    "revision": "fc9742f0cf4ab5e63458"
  },
  {
    "url": "assets/aprobacion.png",
    "revision": "234778f9c417010e2953"
  },
  {
    "url": "assets/atras-icon.svg",
    "revision": "98212891bc95fef74b12"
  },
  {
    "url": "assets/audio_app.mp3",
    "revision": "d61d429f240ba44f683f"
  },
  {
    "url": "assets/banco-yape.svg",
    "revision": "90ac1cb4fa72072afca3"
  },
  {
    "url": "assets/barra_opciones_perfil.webp",
    "revision": "92efbb35ead48ba485ee"
  },
  {
    "url": "assets/baucher/Check_Logo_bucher.json",
    "revision": "8b2e7ba8242cd39303f2"
  },
  {
    "url": "assets/biometria.png",
    "revision": "8fc145baab9a3db04586"
  },
  {
    "url": "assets/carga.png",
    "revision": "d218a592b41af1fa447f"
  },
  {
    "url": "assets/carrito.png",
    "revision": "c36ec7a4900989e5a080"
  },
  {
    "url": "assets/cerrar-g-icon.svg",
    "revision": "e5a649e0561f3c07f73b"
  },
  {
    "url": "assets/clave/Seguridad_Cambio_Clave.json",
    "revision": "5f7376941198e1761705"
  },
  {
    "url": "assets/compartir.png",
    "revision": "903906d792608b5c2ebf"
  },
  {
    "url": "assets/creditos.png",
    "revision": "4eb95f64ebf42fabed09"
  },
  {
    "url": "assets/destinos-icon.svg",
    "revision": "112d428f7a4d7517087c"
  },
  {
    "url": "assets/dolares.png",
    "revision": "2024ce8fe8480901c1a8"
  },
  {
    "url": "assets/embedded/icono-ayuda-soporte.svg",
    "revision": "1720a112f54170a9abe9"
  },
  {
    "url": "assets/embedded/icono-biometria-huella.svg",
    "revision": "0984908391cbdf62e8e4"
  },
  {
    "url": "assets/embedded/icono-cerrar-gris.svg",
    "revision": "7368e189f47ee01f0296"
  },
  {
    "url": "assets/embedded/icono-cerrar-sesion.svg",
    "revision": "4805e71aee2cc5e77e25"
  },
  {
    "url": "assets/embedded/icono-compartir-comprobante.png",
    "revision": "bc690ddb669e793b4dc0"
  },
  {
    "url": "assets/embedded/icono-compras-internet-pos.svg",
    "revision": "f8564b7750745b8b576b"
  },
  {
    "url": "assets/embedded/icono-confirmacion-yapeo-alto.svg",
    "revision": "8cdcc6e489eb9a02882d"
  },
  {
    "url": "assets/embedded/icono-eliminar-cuenta.svg",
    "revision": "ce3d8ec7c6c2d1bc9025"
  },
  {
    "url": "assets/embedded/icono-fecha-calendario.svg",
    "revision": "e58f758ad6564875fcc5"
  },
  {
    "url": "assets/embedded/icono-flecha-volver-negra.svg",
    "revision": "75885bbaf3f455920cce"
  },
  {
    "url": "assets/embedded/icono-hora-reloj.svg",
    "revision": "7929bb70b8f99dc4a9b7"
  },
  {
    "url": "assets/embedded/icono-informacion-seguridad.svg",
    "revision": "4a9ae1d4be02342bea3c"
  },
  {
    "url": "assets/embedded/icono-limites-transaccionales.svg",
    "revision": "1d16f4e7b89c4da934e6"
  },
  {
    "url": "assets/embedded/icono-mi-qr.svg",
    "revision": "f47661fe3739e87da480"
  },
  {
    "url": "assets/embedded/icono-mis-datos.svg",
    "revision": "6f38537da4b13ac00d8f"
  },
  {
    "url": "assets/embedded/icono-mis-direcciones.svg",
    "revision": "cbad7d45379d85287a50"
  },
  {
    "url": "assets/embedded/icono-notificaciones-yapeo.svg",
    "revision": "46e5aec6f31f0b5bdf26"
  },
  {
    "url": "assets/embedded/icono-politica-privacidad.svg",
    "revision": "12c1a0b899e1673d1e41"
  },
  {
    "url": "assets/embedded/icono-terminos-condiciones.svg",
    "revision": "2c15c896b8cbd4122ec9"
  },
  {
    "url": "assets/embedded/icono-transferencia-bancaria.svg",
    "revision": "c39234363e71fa7fb237"
  },
  {
    "url": "assets/embedded/icono-volver-gris.svg",
    "revision": "68a9d697e1cc17768816"
  },
  {
    "url": "assets/embedded/logo-yape-circular.svg",
    "revision": "b7c98f800e05aae4ce9b"
  },
  {
    "url": "assets/embedded/logo-yape-principal.svg",
    "revision": "93f3d4ddf9f244d9195a"
  },
  {
    "url": "assets/embedded/pixel-transparente.svg",
    "revision": "ffc9f5e4fdeea83920c1"
  },
  {
    "url": "assets/fuente_roboto_01.woff2",
    "revision": "2addf2d86d7a5778653b"
  },
  {
    "url": "assets/fuente_roboto_02.woff2",
    "revision": "1404ca348bd75ef836f4"
  },
  {
    "url": "assets/home/Animacion_Creditos.json",
    "revision": "ef1351a2ab6516ab41fe"
  },
  {
    "url": "assets/home/Animacion_Tienda_Cyber.json",
    "revision": "1105af32861d10a35513"
  },
  {
    "url": "assets/huellateclado.gif",
    "revision": "7285f3367c859e18d344"
  },
  {
    "url": "assets/icono_app_yape.svg",
    "revision": "99a5924fd530e44d1519"
  },
  {
    "url": "assets/icono_aprobar_compras.svg",
    "revision": "61b9fa029541fa49df19"
  },
  {
    "url": "assets/icono_campana.svg",
    "revision": "fbee7d4a5b0f196eb405"
  },
  {
    "url": "assets/icono_contactos_yape.webp",
    "revision": "c774e87295501ae4abc1"
  },
  {
    "url": "assets/icono_creditos.svg",
    "revision": "5c8e3ef26feac354f0bb"
  },
  {
    "url": "assets/icono_dolares.svg",
    "revision": "f2f3fcace94fdcea7d9e"
  },
  {
    "url": "assets/icono_escanear_qr.svg",
    "revision": "225046adcfcedd37045d"
  },
  {
    "url": "assets/icono_flecha_movimientos.svg",
    "revision": "03d64f4da546a29861b2"
  },
  {
    "url": "assets/icono_gaming.webp",
    "revision": "c40875a9685d1ff780db"
  },
  {
    "url": "assets/icono_huella_morada.webp",
    "revision": "c5af4f30e6e760a0ad70"
  },
  {
    "url": "assets/icono_movimientos.svg",
    "revision": "d4ff5f6629f4c5bc2370"
  },
  {
    "url": "assets/icono_ojo_mostrar_saldo.svg",
    "revision": "fd26613d98f204fb5d8c"
  },
  {
    "url": "assets/icono_ojo_ocultar_saldo.png",
    "revision": "0b4ea3f83eef16f275ba"
  },
  {
    "url": "assets/icono_ojo_ocultar_saldo_backup.svg",
    "revision": "d36f6e34caba9e9cdfd6"
  },
  {
    "url": "assets/icono_perfil.svg",
    "revision": "734774dfcbbca1d77bea"
  },
  {
    "url": "assets/icono_promos.webp",
    "revision": "f75eefa5ab1d019b28fe"
  },
  {
    "url": "assets/icono_recargar_celular.svg",
    "revision": "111c6cdb859e7daacd05"
  },
  {
    "url": "assets/icono_remesas.svg",
    "revision": "ee9c073beb14b42079ee"
  },
  {
    "url": "assets/icono_soat.svg",
    "revision": "e534adc31fb2233d0b68"
  },
  {
    "url": "assets/icono_soporte.svg",
    "revision": "066d66a13199e03a4c0d"
  },
  {
    "url": "assets/icono_tienda.svg",
    "revision": "1fc1741ab1ebbb2fcaa9"
  },
  {
    "url": "assets/icono_ver_todo_base.webp",
    "revision": "088087c6abb673a57918"
  },
  {
    "url": "assets/icono_viajar_bus.webp",
    "revision": "1b3a7b7d5d2fb2e75832"
  },
  {
    "url": "assets/icono_yape_svg.svg",
    "revision": "066d66a13199e03a4c0d"
  },
  {
    "url": "assets/icono_yapear_boton.svg",
    "revision": "4d6bb94f6198535d1c8d"
  },
  {
    "url": "assets/icono_yapear_servicios.svg",
    "revision": "e0d6d587759611c5201d"
  },
  {
    "url": "assets/llama.png",
    "revision": "eae770956d25b46b8cbf"
  },
  {
    "url": "assets/login/Cargando_yape.json",
    "revision": "03f35c82d389afba1854"
  },
  {
    "url": "assets/logo-movimiendos.png",
    "revision": "a411166eef0e89f8fde7"
  },
  {
    "url": "assets/logo_yape_principal.webp",
    "revision": "7411cb590764b9bd87ff"
  },
  {
    "url": "assets/mensaje.png",
    "revision": "a81c0a8119ec82659e20"
  },
  {
    "url": "assets/movimientosanuncio.png",
    "revision": "b4e2da83794ac0f9dc0d"
  },
  {
    "url": "assets/promo_01.webp",
    "revision": "7eb3171de40a88150ea8"
  },
  {
    "url": "assets/promo_02.webp",
    "revision": "8276d80e4d36daac28e9"
  },
  {
    "url": "assets/promo_03.webp",
    "revision": "6b217a8c2d615adc6523"
  },
  {
    "url": "assets/promo_04.webp",
    "revision": "45468ccffece6d1c4b76"
  },
  {
    "url": "assets/promo_05.webp",
    "revision": "39e9e81354d227abb3c7"
  },
  {
    "url": "assets/promo_06.webp",
    "revision": "955e5fc8af6182603b8f"
  },
  {
    "url": "assets/qr_yape_morado.webp",
    "revision": "8f7f427e3c3a6c436e2a"
  },
  {
    "url": "assets/recargar.png",
    "revision": "39397487b0401cbed71c"
  },
  {
    "url": "assets/remesas.png",
    "revision": "a44b1c62d68c193bf8e8"
  },
  {
    "url": "assets/roboto_latin.woff2",
    "revision": "1404ca348bd75ef836f4"
  },
  {
    "url": "assets/roboto_simbolos.woff2",
    "revision": "2addf2d86d7a5778653b"
  },
  {
    "url": "assets/santa-rosa-de-lima.png",
    "revision": "674a564bc6aa9e4d2815"
  },
  {
    "url": "assets/soat.png",
    "revision": "fdce31dc53336fe284b7"
  },
  {
    "url": "assets/jsQR-1.4.0.min.js",
    "revision": "32214c74ee92d37de6d8"
  },
  {
    "url": "assets/lottie-5.12.2.min.js",
    "revision": "a0757321f974527bda3c"
  },
  {
    "url": "assets/watermark-jose-quinones.png",
    "revision": "54dc81cffe3c2a953b05"
  },
  {
    "url": "assets/yape_personaje.svg",
    "revision": "17ae0c28c5584edb7a9b"
  },
  {
    "url": "assets/yapeara-icon.svg",
    "revision": "e7f745a094fcbba40e94"
  },
  {
    "url": "assets/yapearservicios/agua_y_luz.png",
    "revision": "65028d5a0b973669c10c"
  },
  {
    "url": "assets/yapearservicios/claro.png",
    "revision": "6e93cd5a04eb5d6e9ec0"
  },
  {
    "url": "assets/yapearservicios/entel.png",
    "revision": "978112b6293cd56ab144"
  },
  {
    "url": "assets/yapearservicios/ideas_servicios.png",
    "revision": "369ce228bbff4a7f8abe"
  },
  {
    "url": "assets/yapearservicios/mensajes.png",
    "revision": "d7fae8d79bdf84820d9f"
  },
  {
    "url": "assets/yapearservicios/movistar.png",
    "revision": "9dd10e2fb6f7f5ce3bde"
  },
  {
    "url": "assets/yapearservicios/promo_servcios.png",
    "revision": "fe3e0850342fea77e63c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "12f6edee1a1ba4810936"
  }
];
const REMOTE_FILES = [
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
];
const SHELL = 'app-offline-shell-v1';
const RESOURCES = 'app-offline-resources-v1';
const META = 'app-offline-metadata-v1';
const scope = self.registration.scope;
const home = new URL('./', scope).href;
const index = new URL('index.html', scope).href;
const originalEntry = new URL('index-16-limpio-v35-carga-nombre-yapear.html', scope).href;
const local = new Map(LOCAL_FILES.map(file => [new URL(file.url, scope).href, file.revision]));
const requested = new Set(REMOTE_FILES);
const jobs = new Map();
const downloads = new Map();
const failures = new Map();
let warming = null;
let migration = null;
let lastStatus = {};
const DAY = 24 * 60 * 60 * 1000;

function isStatic(url) {
  if (url.origin === self.location.origin) {
    if (!url.pathname.startsWith(new URL(scope).pathname)) return false;
    return local.has(url.href) || /\.(?:png|svg|gif|webp|jpe?g|ico|json|woff2?|ttf|otf|js|css|mp3|webmanifest)$/i.test(url.pathname);
  }
  if (url.protocol !== 'https:') return false;
  if (url.hostname === 'res.cloudinary.com') {
    return /\/(?:image|raw)\/upload\//.test(url.pathname) ||
      (/\/video\/upload\//.test(url.pathname) && /\.(?:gif|webp|png|jpe?g)$/i.test(url.pathname));
  }
  if (url.hostname === 'www.gstatic.com') return /^\/firebasejs\/10\.12\.2\/[\w.-]+\.js$/.test(url.pathname);
  if (url.hostname === 'fonts.googleapis.com') return /^\/css2?$/.test(url.pathname);
  if (url.hostname === 'fonts.gstatic.com') return /\.(?:woff2?|ttf|otf)$/i.test(url.pathname);
  if (['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'unpkg.com'].includes(url.hostname)) return /\.(?:js|css)$/i.test(url.pathname);
  // Public image/font/animation files only: never cache account/API responses.
  return /\.(?:png|svg|gif|webp|jpe?g|woff2?|ttf|otf|json)$/i.test(url.pathname) &&
    !/(?:^|\.)(?:googleapis\.com|firebaseio\.com|firebaseapp\.com)$/.test(url.hostname);
}

function imageUrl(url) {
  return /\.(?:png|svg|gif|webp|jpe?g|ico)$/i.test(url.pathname) ||
    (url.hostname === 'res.cloudinary.com' && /\/image\/upload\//.test(url.pathname));
}

async function match(cacheName, url) {
  const cache = await caches.open(cacheName);
  return cache.match(url, {ignoreVary: true});
}

function metaKey(url) {
  return new URL('__offline_meta__/' + encodeURIComponent(url), scope).href;
}

async function readMeta(url) {
  try { const r = await match(META, metaKey(url)); return r ? await r.json() : {}; }
  catch (_) { return {}; }
}

async function writeMeta(url, data) {
  const cache = await caches.open(META);
  await cache.put(metaKey(url), new Response(JSON.stringify(data), {headers: {'Content-Type': 'application/json'}}));
}

async function validResponse(response, url) {
  if (response.type === 'opaque') return imageUrl(url);
  if (!response.ok || response.status === 206) return false;
  const type = (response.headers.get('Content-Type') || '').toLowerCase();
  // Some hosts return index.html with HTTP 200 for a missing asset.
  if (/text\/html/.test(type)) return false;
  if (/\.json$/i.test(url.pathname)) {
    try { await response.clone().json(); } catch (_) { return false; }
  } else {
    const body = await response.clone().arrayBuffer();
    if (!body.byteLength) return false;
    if (!type || /octet-stream|text\/plain/.test(type)) {
      const prefix = new TextDecoder().decode(body.slice(0, 160)).trim();
      if (/^(?:<!doctype\s+html|<html\b)/i.test(prefix)) return false;
    }
  }
  return true;
}

function addJob(value, force = false) {
  try {
    const url = new URL(value, scope);
    url.hash = '';
    if (!isStatic(url)) return;
    // Missing files in the supplied ZIP cannot be downloaded by precaching.
    if (url.origin === self.location.origin && !local.has(url.href)) return;
    requested.add(url.href);
    jobs.set(url.href, !!force || !!jobs.get(url.href));
  } catch (_) {}
}

async function dependencies(response, url) {
  if (response.type === 'opaque') return;
  const type = response.headers.get('Content-Type') || '';
  if (/\.css$/i.test(url.pathname) || /text\/css/.test(type) || url.hostname === 'fonts.googleapis.com') {
    const css = await response.clone().text();
    for (const item of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) {
      try { addJob(new URL(item[1], response.url || url.href).href); } catch (_) {}
    }
  }
  if (url.hostname === 'www.gstatic.com' && /\.js$/i.test(url.pathname)) {
    const js = await response.clone().text();
    for (const item of js.matchAll(/(?:from\s*|import\s*)["']([^"']+)["']/g)) {
      try { addJob(new URL(item[1], response.url || url.href).href); } catch (_) {}
    }
  }
}

async function download(urlString, request) {
  if (downloads.has(urlString)) return (await downloads.get(urlString)).clone();
  const task = (async () => {
    const url = new URL(urlString);
    const controller = new AbortController();
    // Allow a slow mobile connection to receive the complete file body.
    const timer = setTimeout(() => controller.abort(), 60000);
    try {
      const options = {signal: controller.signal, cache: 'no-cache'};
      let response;
      if (url.origin === self.location.origin) {
        response = await fetch(new Request(request || url.href, options));
      } else {
        try { response = await fetch(url.href, {...options, mode: 'cors', credentials: 'omit'}); }
        catch (error) {
          if (controller.signal.aborted || !imageUrl(url)) throw error;
          response = await fetch(url.href, {...options, mode: 'no-cors', credentials: 'omit'});
        }
      }
      if (!(await validResponse(response, url))) throw new Error('Archivo no válido: ' + response.status);
      try {
        const cache = await caches.open(RESOURCES);
        // cache.put replaces the old file only after its complete body is saved.
        await cache.put(url.href, response.clone());
        await writeMeta(url.href, {revision: local.get(url.href) || '', savedAt: Date.now(), build: BUILD});
        failures.delete(url.href);
      } catch (_) {
        failures.set(url.href, 'No se pudo guardar el archivo en el almacenamiento del navegador');
      }
      await dependencies(response, url);
      return response;
    } catch (error) {
      failures.set(url.href, String(error && error.message || error));
      throw error;
    } finally { clearTimeout(timer); }
  })();
  downloads.set(urlString, task);
  try { return (await task).clone(); }
  finally { downloads.delete(urlString); }
}

async function migrateOldCache() {
  if (migration) return migration;
  migration = (async () => {
    const meta = await readMeta('migration');
    if (meta.done) return;
    const target = await caches.open(RESOURCES);
    const old = (await caches.keys()).filter(name => name.startsWith('yape-pwa-')).reverse();
    for (const name of old) {
      const cache = await caches.open(name);
      for (const request of await cache.keys()) {
        const url = new URL(request.url);
        if (!isStatic(url) || await match(RESOURCES, url.href)) continue;
        const response = await cache.match(request);
        if (response && await validResponse(response, url)) await target.put(url.href, response);
      }
    }
    // Retain old caches: an incomplete update must not erase existing offline files.
    await writeMeta('migration', {done: true});
  })().catch(() => { migration = null; });
  return migration;
}

async function status() {
  const cache = await caches.open(RESOURCES);
  let localSaved = 0, localCurrent = 0, remoteSaved = 0;
  for (const [url, revision] of local) {
    if (await cache.match(url, {ignoreVary: true})) {
      localSaved++;
      if ((await readMeta(url)).revision === revision) localCurrent++;
    }
  }
  const remote = [...requested].filter(url => !local.has(url));
  for (const url of remote) if (await cache.match(url, {ignoreVary: true})) remoteSaved++;
  lastStatus = {type: 'OFFLINE_CACHE_STATUS', build: BUILD, running: !!warming,
    localTotal: local.size, localSaved, localCurrent, remoteTotal: remote.length,
    remoteSaved, complete: localCurrent === local.size && remoteSaved === remote.length,
    pending: local.size - localCurrent + remote.length - remoteSaved,
    failed: [...failures.keys()]};
  const clients = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
  clients.forEach(client => client.postMessage(lastStatus));
  return lastStatus;
}

async function warm() {
  // Messages arriving during a download may add a failed file for retry.
  // Finish the current pass, then process the queued work instead of dropping it.
  if (warming) return warming.then(() => { if (jobs.size) return warm(); });
  warming = (async () => {
    await migrateOldCache();
    const processed = new Set();
    while (jobs.size) {
      const batch = [...jobs].filter(([url]) => !processed.has(url)).slice(0, 2);
      if (!batch.length) break;
      await Promise.allSettled(batch.map(async ([url, force]) => {
        jobs.delete(url);
        processed.add(url);
        const cached = await match(RESOURCES, url);
        const meta = await readMeta(url);
        // Recheck unchanged URLs daily too, in case an asset was replaced on
        // the host without publishing another service-worker file.
        const fresh = Date.now() - (meta.savedAt || 0) < DAY;
        const current = local.has(url) ? meta.revision === local.get(url) && fresh : fresh;
        if (cached && current && !force) { await dependencies(cached, new URL(url)); return; }
        await download(url);
      }));
    }
  })();
  try { await warming; }
  finally { warming = null; await status(); }
}

function warmAll(force = false) {
  local.forEach((_, url) => addJob(url, force));
  [...requested].forEach(url => addJob(url, force));
  return warm();
}

async function saveNavigation(request) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch(new Request(request, {cache: 'no-cache', signal: controller.signal}));
    if (!response.ok || !/text\/html/i.test(response.headers.get('Content-Type') || '')) return response;
    // Consume the entire body before replacing the previous shell.
    const text = await response.clone().text();
    if (!/<html\b/i.test(text)) return response;
    const cache = await caches.open(SHELL);
    await cache.put(index, response.clone());
    await cache.put(new URL(request.url || request, scope).href, response.clone());
    return response;
  } finally { clearTimeout(timer); }
}

async function navigation(event) {
  const cache = await caches.open(SHELL);
  const cached = await cache.match(index) || await cache.match(event.request, {ignoreSearch: true});
  if (cached) {
    event.waitUntil(saveNavigation(event.request).catch(() => {}));
    return cached;
  }
  try { const response = await saveNavigation(event.request); if (response && response.ok) return response; } catch (_) {}
  // Last fallback is the previous worker's shell, including the original HTML filename.
  const old = await caches.match(event.request, {ignoreSearch: true}) || await caches.match(index) || await caches.match(home);
  if (old) return old;
  return new Response('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sin conexión</title><body style="font-family:system-ui;padding:30px"><h2>Sin conexión</h2><p>Abre la app con internet para guardar sus archivos en este celular.</p></body></html>', {status: 503, headers: {'Content-Type': 'text/html; charset=utf-8'}});
}

async function staticResponse(event) {
  const url = new URL(event.request.url);
  url.hash = '';
  const cached = await match(RESOURCES, url.href);
  if (cached) return cached;
  try { return await download(url.href, event.request); }
  catch (_) { return Response.error(); }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    // Save the HTML; the large asset download continues after activation.
    for (const entry of [index, home, originalEntry]) {
      try { const response = await saveNavigation(new Request(entry)); if (response && response.ok) break; } catch (_) {}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => { await self.clients.claim(); await warmAll(); })());
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type === 'SKIP_WAITING') event.waitUntil(self.skipWaiting());
  if (data.type === 'CACHE_APP_SHELL') event.waitUntil(saveNavigation(new Request(index)).catch(() => {}));
  if (data.type === 'CACHE_ALL_ASSETS') event.waitUntil(warmAll(data.force === true));
  if (data.type === 'CACHE_URLS' && Array.isArray(data.urls)) {
    data.urls.slice(0, 300).forEach(url => addJob(url));
    event.waitUntil(warm());
  }
  if (data.type === 'GET_OFFLINE_STATUS') event.waitUntil(status().then(value => {
    if (event.ports && event.ports[0]) event.ports[0].postMessage(value);
  }));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range')) return;
  const url = new URL(request.url);
  if (request.mode === 'navigate' && url.origin === self.location.origin) {
    event.respondWith(navigation(event)); return;
  }
  if (!isStatic(url)) return;
  if (url.origin !== self.location.origin) requested.add(url.href);
  // Register lifetime protection synchronously, before doing any async work.
  const response = staticResponse(event);
  event.respondWith(response);
  event.waitUntil(response.then(() => { if (jobs.size) return warm(); }).catch(() => {}));
});

// Existing push and notification-click behavior is appended unchanged below.

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
