const CACHE_NAME = "static";
const urls = [
  "index.html",
  "sw.js",
  "/public/src/css/stlye.css",
  "/public/src/js/app.js",
  "public/checklist/index.html",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Precaching app shell!");
      cache.addAll(urls);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
