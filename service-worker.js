/* Yape PWA estable: arranque rápido, caché progresiva y modo sin conexión. */
const CACHE_VERSION = '20260806-stable-1';
const SHELL_CACHE = `yape-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `yape-runtime-${CACHE_VERSION}`;
const OFFLINE_URL = './offline.html';
const INDEX_URL = './index.html';
const NETWORK_TIMEOUT_MS = 4500;
const REMOTE_TIMEOUT_MS = 3500;

/* Solo recursos pequeños y esenciales durante la instalación.
   El index (aprox. 3 MB) se guarda después, cuando la app ya está visible. */
const INSTALL_CORE = [
  OFFLINE_URL,
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './bcp.png',
  './assets/embedded/logo-yape-principal.svg',
  './assets/embedded/pixel-transparente.svg'
];

const WARM_SHELL = [
  INDEX_URL,
  './',
  './roboto_latin.woff2',
  './notificacion.mp3',
  './assets/animacion_yape_confetti_v3.js',
  './assets/icono_ojo_mostrar_saldo.svg',
  './assets/icono_ojo_ocultar_saldo.png',
  './assets/icono_escanear_qr.svg',
  './assets/icono_yapear_boton.svg',
  './assets/icono_yapear_servicios.svg',
  './assets/icono_recargar_celular.svg',
  './assets/icono_perfil.svg',
  './assets/icono_campana.svg',
  './assets/logo_yape_principal.webp',
  './assets/watermark-jose-quinones.png'
];

function fetchWithTimeout(request, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms || NETWORK_TIMEOUT_MS);
  const source = request instanceof Request ? request : new Request(request);
  const timed = new Request(source, { signal: controller.signal });
  return fetch(timed).finally(() => clearTimeout(timer));
}

async function putSafe(cache, request, response) {
  try {
    if (response && response.ok && response.type !== 'opaque') {
      await cache.put(request, response.clone());
    } else if (response && response.type === 'opaque') {
      await cache.put(request, response.clone());
    }
  } catch (_) {}
}

function jsResponse(code) {
  return new Response(code || '', {
    status: 200,
    headers: { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}
function emptyJs(){ return jsResponse(''); }

function firebaseStub(url) {
  const p = url.pathname;
  if (p.includes('firebase-app')) return jsResponse(`export function initializeApp(o,n){return{name:n||'[DEFAULT]',options:o||{}}}export function getApps(){return[]}export function getApp(){return{}}`);
  if (p.includes('firebase-analytics')) return jsResponse(`export function getAnalytics(){return {}}export async function isSupported(){return false}export function logEvent(){}`);
  if (p.includes('firebase-messaging')) return jsResponse(`export async function isSupported(){return false}export function getMessaging(){return {}}export async function getToken(){return ''}export async function deleteToken(){return true}export function onMessage(){return function(){}}`);
  if (p.includes('firebase-firestore')) return jsResponse(`const e=()=>new Error('offline network unavailable');export function getFirestore(){return {}}export function doc(){return {path:[...arguments].join('/')}}export function collection(){return {path:[...arguments].join('/')}}export function query(){return {args:[...arguments]}}export function where(){return {where:[...arguments]}}export function limit(n){return {limit:n}}export async function getDoc(){throw e()}export async function getDocs(){throw e()}export async function setDoc(){throw e()}export async function updateDoc(){throw e()}export async function deleteDoc(){throw e()}export function onSnapshot(r,o,f){try{if(typeof f==='function')setTimeout(()=>f(e()),0)}catch(_){}return function(){}}export function serverTimestamp(){return new Date()}export function arrayUnion(){return [...arguments]}export function arrayRemove(){return [...arguments]}export class Timestamp{constructor(seconds=0,nanoseconds=0){this.seconds=seconds;this.nanoseconds=nanoseconds}toDate(){return new Date(this.seconds*1000)}static now(){return new Timestamp(Math.floor(Date.now()/1000),0)}static fromDate(d){return new Timestamp(Math.floor(d.getTime()/1000),0)}}`);
  return emptyJs();
}

async function cacheSequential(urls) {
  const cache = await caches.open(SHELL_CACHE);
  for (const url of urls) {
    try {
      const existing = await cache.match(url);
      if (existing) continue;
      const response = await fetchWithTimeout(new Request(url, { cache:'reload' }), 7000);
      await putSafe(cache, url, response);
    } catch (_) {}
  }
}

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(cacheSequential(INSTALL_CORE));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(k => (k.startsWith('yape-') || k.startsWith('app-cache-') || k.startsWith('pwa-shell-')) && ![SHELL_CACHE, RUNTIME_CACHE].includes(k))
      .map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data.type === 'CACHE_APP_SHELL') event.waitUntil(cacheSequential(WARM_SHELL));
});

async function navigationStrategy(request, event) {
  const shell = await caches.open(SHELL_CACHE);
  const cached = (await shell.match(request)) || (await shell.match(INDEX_URL)) || (await shell.match('./'));

  if (cached) {
    if (self.navigator.onLine !== false) {
      const refresh = fetchWithTimeout(request, NETWORK_TIMEOUT_MS)
        .then(async response => {
          if (response && response.ok) {
            await putSafe(shell, request, response);
            await putSafe(shell, INDEX_URL, response);
          }
        }).catch(() => {});
      event.waitUntil(refresh);
    }
    return cached;
  }

  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    await putSafe(shell, request, response);
    await putSafe(shell, INDEX_URL, response);
    return response;
  } catch (_) {
    return (await shell.match(OFFLINE_URL)) || new Response('Sin conexión', {
      status: 200,
      headers: { 'Content-Type':'text/html; charset=utf-8' }
    });
  }
}

async function sameOriginAssetStrategy(request) {
  if (request.headers.has('range')) return fetch(request);
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    await putSafe(cache, request, response);
    return response;
  } catch (_) {
    if (request.destination === 'image') {
      return (await caches.match('./assets/embedded/pixel-transparente.svg')) || new Response('', {status:204});
    }
    if (request.destination === 'style') return new Response('', {status:200, headers:{'Content-Type':'text/css'}});
    if (request.destination === 'script') return emptyJs();
    return new Response('', {status:504, statusText:'Offline'});
  }
}

async function remoteScriptStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const url = new URL(request.url);
  try {
    const response = await fetchWithTimeout(request, REMOTE_TIMEOUT_MS);
    await putSafe(cache, request, response);
    return response;
  } catch (_) {
    if (url.hostname === 'www.gstatic.com' && url.pathname.includes('/firebasejs/')) return firebaseStub(url);
    if (url.hostname.includes('cdnjs.cloudflare.com') && url.pathname.includes('lottie')) return jsResponse('window.lottie=window.lottie||{loadAnimation:function(){return{destroy:function(){},play:function(){},stop:function(){}}}};');
    if (url.hostname.includes('cdn.jsdelivr.net') && url.pathname.toLowerCase().includes('jsqr')) return jsResponse('window.jsQR=window.jsQR||function(){return null};');
    return emptyJs();
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    if (request.destination === 'script' || url.hostname === 'www.gstatic.com' || url.hostname.includes('cdnjs.cloudflare.com') || url.hostname.includes('cdn.jsdelivr.net')) {
      event.respondWith(remoteScriptStrategy(request));
    }
    return;
  }

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(navigationStrategy(request, event));
    return;
  }

  event.respondWith(sameOriginAssetStrategy(request));
});
