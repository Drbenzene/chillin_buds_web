if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9fd836e9d73eaa1aff4409688a578c97"},{url:"/_next/static/2WR5g-LsyVUBPHp0dzuSF/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/2WR5g-LsyVUBPHp0dzuSF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/183-d871656af97581d4.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/425-d9e40dd8510cb0f7.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/619-2cd920de6673a0e8.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/961-fddad7358a1274e1.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/app/admin/page-05e403bdc6a4645e.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/app/layout-f403e3e4272c4e2f.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/app/page-f76571153683fa8f.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/app/search/page-aed9dc4f9b0769e8.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/app/upload/page-834211969584f04e.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/bce60fc1-1b8aa8bcc2d8b1fb.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/main-6c2a6efe331b80b4.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/main-app-4ab6f1414b29150e.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a4307a5d2621c355.js",revision:"2WR5g-LsyVUBPHp0dzuSF"},{url:"/_next/static/css/c7d5eb45757203f5.css",revision:"c7d5eb45757203f5"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/IMG_20210224_194553.660b013b.webp",revision:"660b013b"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/bg.b8125141.webp",revision:"b8125141"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/cbd.29028076.png",revision:"db0bc23cc15eb8b84f6a0507b7837813"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/images/icons/icon-128x128.png",revision:"29656591ca5bc937f16ccd4a64778b72"},{url:"/images/icons/icon-144x144.png",revision:"f54efa6defb8a0d4b0fcb86d8b531390"},{url:"/images/icons/icon-152x152.png",revision:"1bd272258181db53f89e06e84abc2f5f"},{url:"/images/icons/icon-192x192.png",revision:"d0f2ac742e04d04fd2884ed412a968c2"},{url:"/images/icons/icon-384x384.png",revision:"63dd8e9102fa735952959acec5c2df29"},{url:"/images/icons/icon-512x512.png",revision:"a028119ffaafe2b30caad3360c4c4640"},{url:"/images/icons/icon-72x72.png",revision:"b7c4e0514d108ddb7aecebc6963f790b"},{url:"/images/icons/icon-96x96.png",revision:"5367a9c8a03e36c971224da5bb1f0383"},{url:"/manifest.json",revision:"53f8cc49609e69575b84aed91ed4119e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
