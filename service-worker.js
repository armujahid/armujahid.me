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