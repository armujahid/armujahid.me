                        importScripts("/assets/js/workbox-v3.3.1/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.3.1"});

            self.__precacheManifest = [{"url":"/index.html","revision":"2936c37194ad943778ba19f407627577"},{"url":"/style.css","revision":"03f0922141dc9d128e91023c2eecddc6"},{"url":"/2018/06/reactnd","revision":"a445932749223bc864549b10e1d16f7e"},{"url":"/2018/02/hacking","revision":"128409be8997fad3948177e02383bcbb"}];
            workbox.core.setCacheNameDetails({
    prefix: 'arm-blog',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// use configured precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// Runtime cache
workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate()
);
