self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open('pwa4')
			.then(cache => cache.addAll([
				".",
			]))
	);
});

/*
self.addEventListener('activate', event => {
	console.log('service worker activated');
});
*/

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
			.match(event.request)
			.then(response => response || fetch(event.request))
	);
});
