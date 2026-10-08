const C='plating-v1',F=['./','index.html','manifest.json','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('api.anthropic.com'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
