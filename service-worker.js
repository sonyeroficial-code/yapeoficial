'use strict';

const CACHE_NAME = 'yape-pwa-v210-20260902';
const CACHE_PREFIX = 'yape-pwa-';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest?v=210',
  './manifest.json',
  './app-logo.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

async function updateShell() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.allSettled(APP_SHELL.map(async (url) => {
    const response = await fetch(url, { cache: 'reload' });
    if (response && response.ok) await cache.put(url, response.clone());
  }));
}

self.addEventListener('install', (event) => {
  event.waitUntil(updateShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
        return caches.delete(name);
      }
      return Promise.resolve(false);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const type = event.data && event.data.type;
  if (type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  if (type === 'CACHE_APP_SHELL') event.waitUntil(updateShell());
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.ok) {
      const key = request.mode === 'navigate' ? './index.html' : request;
      await cache.put(key, response.clone());
    }
    return response;
  } catch (error) {
    return (await cache.match(request)) || (await cache.match('./index.html')) || Response.error();
  }
}

async function cacheWithRefresh(request, event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const refresh = fetch(request).then(async (response) => {
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  if (event) event.waitUntil(refresh);
  return cached || (await refresh) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (!request || request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/service-worker.js')) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname.endsWith('/manifest.webmanifest') || url.pathname.endsWith('/manifest.json')) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheWithRefresh(request, event));
});

self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; }
  catch (error) { payload = { body: event.data ? event.data.text() : '' }; }

  const notification = payload.notification || payload;
  const data = payload.data || notification.data || {};
  const title = notification.title || 'Yape';
  const options = {
    body: notification.body || '',
    icon: notification.icon || './icon-192.png',
    badge: './icon-192.png',
    tag: notification.tag || data.tag || 'yape-notificacion',
    renotify: Boolean(notification.renotify),
    data: {
      url: data.url || notification.url || './index.html'
    }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      if ('focus' in client) {
        if ('navigate' in client) await client.navigate(target);
        return client.focus();
      }
    }
    return self.clients.openWindow ? self.clients.openWindow(target) : undefined;
  })());
});
