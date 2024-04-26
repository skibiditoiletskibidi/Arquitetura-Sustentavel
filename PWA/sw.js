self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('minha-pwa-cache').then(cache => {
        return cache.addAll([
          '/',
          '/Inicio/index.html',
          '/Inicio/product.css',
        ]);
      })
    );
  });
  self.addEventListener('activate', event => {
    console.log('Service Worker ativado');
  });
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });