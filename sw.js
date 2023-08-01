// Defina um nome para a versão do Service Worker
const CACHE_VERSION = 'v1';

// Defina uma lista de recursos que você deseja armazenar em cache
const CACHE_FILES = [
  '/',
  '/index.html',
  'https://github.com/canalqb/manifest/raw/main/maskable_icon.png',
  // Adicione aqui outros recursos estáticos que deseja armazenar em cache
];

// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

// Evento de ativação do Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento fetch do Service Worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
