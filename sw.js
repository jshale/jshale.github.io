const CACHE_NAME = "v1";
const urls = ["/"];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urls)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
