(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbd02"],{"4aed":function(t,e,n){"use strict";n.r(e),n.d(e,"previewWebStyleSymbol",(function(){return a}));var i=n("2eab"),h=n("a915");function a(t,e,n){const h=t.thumbnail&&t.thumbnail.url;return h?Object(i["default"])(h,{responseType:"image"}).then(t=>{const e=c(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e}):t.fetchSymbol().then(t=>e(t,n))}function c(t,e){const n=!/\\.svg$/i.test(t.src)&&e&&e.disableUpsampling,i=Math.max(t.width,t.height);let a=e&&null!=e.maxSize?Object(h["g"])(e.maxSize):120;n&&(a=Math.min(i,a));const c=Math.min(a,e&&null!=e.size?Object(h["g"])(e.size):i);if(c!==i){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=c,t.height=c/e):(t.width=c*e,t.height=c)}return t}}}]);
//# sourceMappingURL=chunk-2d0cbd02.626cf0a9.js.map