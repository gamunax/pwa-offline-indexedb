// life cycle services worker

self.addEventListener('install', event => {
    // download assets
    // create a cache

   console.log('Installing service worker!!!');  

   const installation = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Sw: Installation completed'); 
        self.skipWaiting();
        resolve();
    }, 1);
   })

   // self.skipWaiting(); // here we are telling the browser to skip waiting and activate the new service worker
   event.waitUntil(installation);
});

// when the service worker is activated
self.addEventListener('activate', event => {
    // remove old caches
    console.log('Activating service worker!!!!');

});


// fetch: handle of request http
self.addEventListener('fetch', event => {

    // // apply cache strategy
    // console.log(event.request.url);
    // if (event.request.url.includes('https://reqres.in/')) {
    //     const resp = new Response(`{ok: false, msg: 'Service worker: jajajaja'}`);
    //     event.respondWith(resp);
    // }
});

// sync: get connection to internet
self.addEventListener('sync', event => {
    event.waitUntil(setTimeout(() => {
        console.log('sync', 'We have connection');
        console.log(event);
        console.log(event.tag);
    }, 3000))
});

self.addEventListener('push', event => {
    console.log(event);
});