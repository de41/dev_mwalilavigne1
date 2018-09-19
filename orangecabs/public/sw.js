self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(){
    console.log('[Service Worker] Activing Service Worker ...', event);
    return screenLeft.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('[Service Worker] Fetching something .....', event);
    event.respondWith(fetch(event.request));
});