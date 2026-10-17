const CACHE_NAME = 'solobloom-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // ネットワークを優先し、オフライン時はキャッシュを返す最低限の動作
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});