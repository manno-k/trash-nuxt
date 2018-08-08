importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "trash-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4b7d39bcf75af0bc5f99.js",
    "revision": "cdf137a8121cd4aee1eb3073dc6d3bad"
  },
  {
    "url": "/_nuxt/layouts/default.b9e228bd1dcd91c60dbe.js",
    "revision": "5180b9f66d2aca96317ff023e17ac60c"
  },
  {
    "url": "/_nuxt/manifest.21ef375a586d928976f5.js",
    "revision": "5d807cc353275f17d299ab4c12e42c3b"
  },
  {
    "url": "/_nuxt/pages/cn.0b9f329e2048e437c4ab.js",
    "revision": "0b46e67bf1052ea8be4fb8973b9d7d15"
  },
  {
    "url": "/_nuxt/pages/index.2598cc8e130267a6b1b8.js",
    "revision": "3484de52cf4771342cc14ccf19d92f7c"
  },
  {
    "url": "/_nuxt/pages/tw.d6e9ae18b2260d2f3631.js",
    "revision": "336be7fd8badf9f875423526b56413d1"
  },
  {
    "url": "/_nuxt/vendor.432660ef2260581cb2e0.js",
    "revision": "717582294227a88d6ba9ef5b7034e60d"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

