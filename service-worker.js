"use strict";var precacheConfig=[["/ziba/index.html","d14aa8700d196e5a4c1cd9b35239acec"],["/ziba/static/css/main.899ac7c0.css","2fbaa732c38b7835facb5b5fe1cd35fb"],["/ziba/static/js/main.c2fff81a.js","04e6e7fccc857a4a9f7870c9b7caa788"],["/ziba/static/media/legend_goal_1.fe021556.svg","fe0215563f0c90d9c41bc14a380aaa5c"],["/ziba/static/media/legend_goal_10.8ed80699.svg","8ed80699a232cb4f1e57321067c80d3d"],["/ziba/static/media/legend_goal_11.4561153c.svg","4561153cb3847a5ca8e54ac31a5b1fb6"],["/ziba/static/media/legend_goal_12.2b0f9cf0.svg","2b0f9cf018c055b0a2e65f3d59b3b139"],["/ziba/static/media/legend_goal_13.831018cb.svg","831018cb1ef4d44a96e6de390532ff14"],["/ziba/static/media/legend_goal_14.ac99e6d0.svg","ac99e6d0e3f349df8d983c298d416ccc"],["/ziba/static/media/legend_goal_15.29972a52.svg","29972a52344b5534c40c6376a8e5781d"],["/ziba/static/media/legend_goal_16.77f8da37.svg","77f8da37512ad114daf95be5a9b7423a"],["/ziba/static/media/legend_goal_17.37e3be4e.svg","37e3be4e6d9004c0d0d3676fb4009ec7"],["/ziba/static/media/legend_goal_2.f8c8ef69.svg","f8c8ef69436575e0df2941d8e3a1463f"],["/ziba/static/media/legend_goal_3.70ead330.svg","70ead3304f24dd4a506464aa0c4ec261"],["/ziba/static/media/legend_goal_4.8c523f92.svg","8c523f925def881065b690a200699e7b"],["/ziba/static/media/legend_goal_5.080edd35.svg","080edd3506294535f83fcb694b3b2bdf"],["/ziba/static/media/legend_goal_6.2e92fe97.svg","2e92fe9712fbc2c1bb81c3cc49207fba"],["/ziba/static/media/legend_goal_7.572f4458.svg","572f44585117fc99c925e2192f44f910"],["/ziba/static/media/legend_goal_8.dd33c931.svg","dd33c931ee35d09d69a5a5477195e033"],["/ziba/static/media/legend_goal_9.40bb3fba.svg","40bb3fba26de0fc73808028188ff608f"],["/ziba/static/media/logo-vertical.50d5f670.svg","50d5f670ebf4dafab52aa736bdec8527"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/ziba/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});