if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const o=e=>i(e,r),f={module:{uri:r},exports:n,require:o};a[r]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CCcBbBFz6sWbH1GFfJYWO/_buildManifest.js",revision:"b9450fd95141c2b1b50dc91f114ee801"},{url:"/_next/static/CCcBbBFz6sWbH1GFfJYWO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/109-23a3599b875f63c5.js",revision:"23a3599b875f63c5"},{url:"/_next/static/chunks/829-5d335ac5a52ae65b.js",revision:"5d335ac5a52ae65b"},{url:"/_next/static/chunks/94726e6d-58199bf89f2c49b3.js",revision:"58199bf89f2c49b3"},{url:"/_next/static/chunks/ea88be26.23d0fcd5556dee2d.js",revision:"23d0fcd5556dee2d"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-879e4b52f99dd887.js",revision:"879e4b52f99dd887"},{url:"/_next/static/chunks/pages/404-a74202088a8a32d4.js",revision:"a74202088a8a32d4"},{url:"/_next/static/chunks/pages/_app-f1ad6da91f03129c.js",revision:"f1ad6da91f03129c"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ec7ac66b5105e907.js",revision:"ec7ac66b5105e907"},{url:"/_next/static/css/7dc34659b3306609.css",revision:"7dc34659b3306609"},{url:"/_next/static/css/ca6af830f94754e8.css",revision:"ca6af830f94754e8"},{url:"/_next/static/css/f77b7788eee396ac.css",revision:"f77b7788eee396ac"},{url:"/_next/static/media/Calibre-Black.707e8663.woff2",revision:"707e8663"},{url:"/_next/static/media/Calibre-BlackItalic.1fef1822.woff2",revision:"1fef1822"},{url:"/_next/static/media/Calibre-Bold.dc7066a5.woff2",revision:"dc7066a5"},{url:"/_next/static/media/Calibre-BoldItalic.c1024c36.woff2",revision:"c1024c36"},{url:"/_next/static/media/Calibre-Light.d7e98823.woff2",revision:"d7e98823"},{url:"/_next/static/media/Calibre-LightItalic.e4a91e14.woff2",revision:"e4a91e14"},{url:"/_next/static/media/Calibre-Medium.5111882c.woff2",revision:"5111882c"},{url:"/_next/static/media/Calibre-MediumItalic.be217c2e.woff2",revision:"be217c2e"},{url:"/_next/static/media/Calibre-Regular.909f29a1.woff2",revision:"909f29a1"},{url:"/_next/static/media/Calibre-RegularItalic.00b20aab.woff2",revision:"00b20aab"},{url:"/_next/static/media/Calibre-Semibold.63d76c8c.woff2",revision:"63d76c8c"},{url:"/_next/static/media/Calibre-SemiboldItalic.a958d780.woff2",revision:"a958d780"},{url:"/_next/static/media/Calibre-Thin.271aa736.woff2",revision:"271aa736"},{url:"/_next/static/media/Calibre-ThinItalic.a449c255.woff2",revision:"a449c255"},{url:"/_next/static/media/JetBrainsMono-Bold.361c6dbd.woff2",revision:"361c6dbd"},{url:"/_next/static/media/JetBrainsMono-BoldItalic.a328fd9b.woff2",revision:"a328fd9b"},{url:"/_next/static/media/JetBrainsMono-ExtraBold.9a496520.woff2",revision:"9a496520"},{url:"/_next/static/media/JetBrainsMono-ExtraBoldItalic.e0c56c41.woff2",revision:"e0c56c41"},{url:"/_next/static/media/JetBrainsMono-Italic.8715f23e.woff2",revision:"8715f23e"},{url:"/_next/static/media/JetBrainsMono-Medium.56a03373.woff2",revision:"56a03373"},{url:"/_next/static/media/JetBrainsMono-MediumItalic.08700a5f.woff2",revision:"08700a5f"},{url:"/_next/static/media/JetBrainsMono-Regular.0bb0fc01.woff2",revision:"0bb0fc01"},{url:"/favicons/android-chrome-192x192.png",revision:"60adb84399df73322ea9336445b17763"},{url:"/favicons/android-chrome-512x512.png",revision:"5a8e97eb80820733baefaa0efd134a18"},{url:"/favicons/apple-touch-icon.png",revision:"391eaeb483429aab9dd273f6d808a7e0"},{url:"/favicons/favicon-16x16.png",revision:"b02874a35570d24b994f59e17bace40a"},{url:"/favicons/favicon-32x32.png",revision:"5bea6fb0be8abaa69a84598cbdb343ab"},{url:"/favicons/favicon.ico",revision:"61163a93ee1d0c14e60779e466003e18"},{url:"/favicons/site.webmanifest",revision:"03f454ba8ef22393aca0e46eccb50e67"},{url:"/fonts/Calibre/Calibre-Black.woff2",revision:"36ffd75d821e3d35f0260e7ee71f2294"},{url:"/fonts/Calibre/Calibre-BlackItalic.woff2",revision:"57442766c282f7f2243c7123d0fc0b33"},{url:"/fonts/Calibre/Calibre-Bold.woff2",revision:"87cc6590c65275a830c12acc9817874c"},{url:"/fonts/Calibre/Calibre-BoldItalic.woff2",revision:"2efc6f2bac2d3c720aab0a3dca82463a"},{url:"/fonts/Calibre/Calibre-Light.woff2",revision:"183de736efe789394f26ed013b0b5cdd"},{url:"/fonts/Calibre/Calibre-LightItalic.woff2",revision:"f34c1430353885b55d271d473235eb6a"},{url:"/fonts/Calibre/Calibre-Medium.woff2",revision:"46b36969c7bb1d7ed4c8253e8f274788"},{url:"/fonts/Calibre/Calibre-MediumItalic.woff2",revision:"3df14639dd2cb07c83bd39707d70910f"},{url:"/fonts/Calibre/Calibre-Regular.woff2",revision:"b63c62e591d0c8fbe2c8f009883346d5"},{url:"/fonts/Calibre/Calibre-RegularItalic.woff2",revision:"35657aa2d12ff78e3d8a8a5ba28c2c35"},{url:"/fonts/Calibre/Calibre-Semibold.woff2",revision:"d8b856473a51d7eec2a9bccf2fbea54c"},{url:"/fonts/Calibre/Calibre-SemiboldItalic.woff2",revision:"8f3e4b3eaed73e67bbc4fc81f308a35f"},{url:"/fonts/Calibre/Calibre-Thin.woff2",revision:"7d7d9bd8558b1df58d4682d2b1be7d9e"},{url:"/fonts/Calibre/Calibre-ThinItalic.woff2",revision:"dd10d58f7aa26b4de8c8ab98f984f030"},{url:"/fonts/Calibre/_Calibre.scss",revision:"7cefd863c6abad86373661d9a61e3daa"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",revision:"63a1019d2b51b21694f850aeb9bc1018"},{url:"/fonts/JetBrainsMono/JetBrainsMono-BoldItalic.woff2",revision:"2ae6bcd7881599d63204b10fa5a341d1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2",revision:"8e7024a8af502c88f27b14f5b908d2a1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.woff2",revision:"2f5619c1232f40a3db6c0f9e969bd7cc"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",revision:"25d08cca52c3530b9dfb8cb9f50a06d6"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",revision:"cb46fdd3d9a6162984ee0840fb84bdfe"},{url:"/fonts/JetBrainsMono/JetBrainsMono-MediumItalic.woff2",revision:"f1a3a53b5aa2bb3ddea185f16b8085cf"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",revision:"29db71a58086c177f6e2332206ec4e9c"},{url:"/fonts/JetBrainsMono/_JetBrainsMono.scss",revision:"4eb507a781ed5cd8484f27324f00c35f"},{url:"/footer-curve.svg",revision:"389f5016e80c7394f1ac0f67c0bd2e8b"},{url:"/footer/background.png",revision:"c445b49a4e471ec1dbb4f3de6195035d"},{url:"/footer/cyclist.gif",revision:"4421150abf00f9197ea79118dec916ea"},{url:"/footer/volkswagen.gif",revision:"4184b68ddaed02cebed2d3aed6239868"},{url:"/icon-192x192.png",revision:"3950eb070be06f2b3aa98637e287471c"},{url:"/icon-256x256.png",revision:"e09cc6892e48288fb5af5fa0f208d999"},{url:"/icon-384x384.png",revision:"fb7c954891de25599fcdd19777e8a475"},{url:"/icon-512x512.png",revision:"6c735d865271053a1856fc4e0281218d"},{url:"/left-pattern.svg",revision:"636a902d520fe7fcd87845009d60a620"},{url:"/logo.svg",revision:"d97d42971122e68dab10b09765cf06ce"},{url:"/lottie/lottie.json",revision:"2e9364d63c2acb9cac2f92b6a1626185"},{url:"/manifest.json",revision:"ad58865292a937aec977261b3df5ed4a"},{url:"/preview.png",revision:"5439506880cbe268168cbafcd0230b10"},{url:"/project-bg.svg",revision:"4410e8a36a86c9b96af57cebbb90da9f"},{url:"/projects/blur/airbnb-blur.webp",revision:"efd5e76f82139b73680a0bf069e5f1d5"},{url:"/projects/blur/inshorts-blur.webp",revision:"83658507d531a2e7afeae18486c9afba"},{url:"/projects/blur/medium-blur.webp",revision:"26121f315455405f92e32066989f2be2"},{url:"/projects/blur/tesla-blur.webp",revision:"a1e0df416728bd2ea07fe88b8d25d75e"},{url:"/projects/doktor.jpeg",revision:"1cc8bab832f3a5ab133c226e9ff3fcf5"},{url:"/projects/glasses.jpeg",revision:"2440d3102857a268e506fcb8934fdfe5"},{url:"/projects/palmierfood.jpeg",revision:"33750e9d1c0c71e26ce99a421ba40042"},{url:"/projects/tech/alan.svg",revision:"7ebb30121ac8f7379361f62946bce939"},{url:"/projects/tech/chakra-ui.svg",revision:"cadc6b5ba38acb59809f32ec067c291c"},{url:"/projects/tech/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/projects/tech/mapbox.svg",revision:"caa9aca22ebeb8e7bc0550a2a4efcdf5"},{url:"/projects/tech/metamask.svg",revision:"fbf33967fa244d21d61fb85f233fc331"},{url:"/projects/tech/mongodb.svg",revision:"af804f594ce7af2e48cec3a31283c679"},{url:"/projects/tech/moralis.svg",revision:"1cf323f2c5d5a26356299e0f13871145"},{url:"/projects/tech/nextjs.svg",revision:"b7442d0c0f25545250db94b2ba290578"},{url:"/projects/tech/react.svg",revision:"ebfb3a104c4ad193bf41e7eb5ccb1e29"},{url:"/projects/tech/redux.svg",revision:"5303018d945f48c8d8eb00e250e72776"},{url:"/projects/tech/sanity.io.svg",revision:"e2fdcf374f1e2af25baa831c8a7bc414"},{url:"/projects/tech/sass.svg",revision:"b446ca5a397c1ef6fb94cd02c4e94335"},{url:"/projects/tech/stripe.svg",revision:"32bbcf78a6343325c6fe43ff16a5ba4d"},{url:"/projects/tech/styledcomponents.svg",revision:"837c6b955af0093e5c7c0361bfac951a"},{url:"/projects/tech/tailwindcss.svg",revision:"9796f161fbe0845caa30ff1df54afefe"},{url:"/projects/tech/typescript.svg",revision:"592b2c1ebe113ba914fe260f6647c60b"},{url:"/projects/watches.jpeg",revision:"99cb3f10270a0ec0155b09c291dd47b2"},{url:"/right-pattern.svg",revision:"537ba8cb190abb1ea2ad3de93f6e6508"},{url:"/skills/antdesign.svg",revision:"785c9a6c9e708de9adcc4059e9b0a5fc"},{url:"/skills/chakra-ui.svg",revision:"cadc6b5ba38acb59809f32ec067c291c"},{url:"/skills/cpp.svg",revision:"97f481bbec8bf061ea4675d0628a145d"},{url:"/skills/css.svg",revision:"a70a7e3e545f3ddc5707d4c4da8cfa17"},{url:"/skills/figma.svg",revision:"b668b32570abdf72ffe84f44a7ce1396"},{url:"/skills/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/skills/git.svg",revision:"8f888496f4ef70c566e7d50a1b197594"},{url:"/skills/html.svg",revision:"3db31354b42e05f52a09785930349076"},{url:"/skills/java.svg",revision:"276b55022e43459292a34218942c024a"},{url:"/skills/javascript.svg",revision:"1087a45912befaeb7b35342cbb290551"},{url:"/skills/mongodb.svg",revision:"af804f594ce7af2e48cec3a31283c679"},{url:"/skills/moralis.svg",revision:"1cf323f2c5d5a26356299e0f13871145"},{url:"/skills/mysql.svg",revision:"3aefea6f0041d2421f84aa95a098e542"},{url:"/skills/nextjs.svg",revision:"b7442d0c0f25545250db94b2ba290578"},{url:"/skills/nodejs.svg",revision:"40a5272b213d8b241f2141a66da87ad0"},{url:"/skills/python.svg",revision:"cd433691b28892cda18f6443adbfbb74"},{url:"/skills/react.svg",revision:"ebfb3a104c4ad193bf41e7eb5ccb1e29"},{url:"/skills/redux.svg",revision:"5303018d945f48c8d8eb00e250e72776"},{url:"/skills/sanity-io.svg",revision:"e2fdcf374f1e2af25baa831c8a7bc414"},{url:"/skills/sass.svg",revision:"b446ca5a397c1ef6fb94cd02c4e94335"},{url:"/skills/stripe.svg",revision:"32bbcf78a6343325c6fe43ff16a5ba4d"},{url:"/skills/styledcomponents.svg",revision:"837c6b955af0093e5c7c0361bfac951a"},{url:"/skills/tailwindcss.svg",revision:"9796f161fbe0845caa30ff1df54afefe"},{url:"/skills/tanstack-query.svg",revision:"9541d1dd6a037b02d2e009e590724e4a"},{url:"/skills/typescript.svg",revision:"592b2c1ebe113ba914fe260f6647c60b"},{url:"/skills/vite.svg",revision:"86f0c9163c4eb30ebc3516a4565cce5a"},{url:"/skills/webpack.svg",revision:"3d3c3c5d7df65c95e6771bd410863430"},{url:"/sounds/charge-up.wav",revision:"663d6af2f4d8f32361ca44975b2c59db"},{url:"/sounds/disable-sound.mp3",revision:"cf602b2081a275a749d9631a5a72df0a"},{url:"/sounds/enable-sound.mp3",revision:"ad6c6f0fd8ac86f14c71d9bb906c77db"},{url:"/sounds/glug-a.mp3",revision:"438a61d8fcfa7c976afdfffbb19ae056"},{url:"/sounds/key1.wav",revision:"c7a96e8ca2b438598bfd87019330ab6f"},{url:"/sounds/key2.wav",revision:"11c235c6afa491d3a6899d55a314ccd7"},{url:"/sounds/key3.wav",revision:"da32d4d6458fabc316282dd3f086a358"},{url:"/sounds/key4.wav",revision:"28d23943f4268f0f7af496214e251db0"},{url:"/sounds/key5.wav",revision:"faa84c1a0b1d669e2044cd4ae960e5c2"},{url:"/sounds/key6.wav",revision:"74dc9ce3adec6cda7712690fdc09fd9e"},{url:"/sounds/pop-down.mp3",revision:"a0249d355a7e4bbba56b8af25c537184"},{url:"/sounds/song.mp3",revision:"79b1714e438e506e69543fdc994d0be7"},{url:"/work/aviate.mp4",revision:"29ef1105bd3dd915723876219262876f"},{url:"/work/dukaan.mp4",revision:"4dc1d7bea5436a53f2375bad27fe4d2e"},{url:"/work/macbook-bottom.svg",revision:"6fabbf4ef9edd8145908a162a1dc544b"},{url:"/work/macbook-cover.svg",revision:"058b42f32df62e0d727d424a35596642"},{url:"/work/macbook-top.svg",revision:"694700f16385812339aec211a97cdfad"},{url:"/work/spacenos.mp4",revision:"cc1a1af136052cea59e7e633722883e4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));