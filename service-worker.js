const CACHE='rems-control-shell-v44.9-disabled';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('rems-control-shell-')).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',()=>{});
