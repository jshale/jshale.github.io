const CACHE_NAME = "static";
const urls = [
  "/",
  "index.html",
  "sw.js",
  "/public/src/css/stlye.css",
  "/public/src/js/app.js",
  "public/checklist/index.html",
];
// Pre-caching the app shell for basic offline funcitionality
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Precaching app shell!");
      cache.addAll(urls);
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
    }),
  );
});
