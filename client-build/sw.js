if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>n(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CfGUZBiG.css",revision:null},{url:"assets/index-ums32oJp.js",revision:null},{url:"index.html",revision:"4fee474943502a3d666eb4d8f31759eb"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-192x192.png",revision:"c25714b6cbf6e7d4a7f228fe88d2b0f3"},{url:"icon-256x256.png",revision:"c25714b6cbf6e7d4a7f228fe88d2b0f3"},{url:"icon-384x384.png",revision:"c25714b6cbf6e7d4a7f228fe88d2b0f3"},{url:"icon-512x512.png",revision:"c25714b6cbf6e7d4a7f228fe88d2b0f3"},{url:"manifest.webmanifest",revision:"3ee057ce97b8a5b3095676a57826ed9a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));