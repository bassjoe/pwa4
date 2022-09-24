self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("pwa4").then((t) => t.addAll([
      "."
    ]))
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((t) => t || fetch(e.request))
  );
});
