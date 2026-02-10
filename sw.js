const CACHE_NAME = "boss-store-v1";
const assets = [
  "./",
  "./index.html",
  "https://cdn.tailwindcss.com",
  "https://unpkg.com/lucide@latest"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetching
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

