(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03e5"],{"66c2":function(e,t,s){"use strict";s.r(t),s.d(t,"execute",(function(){return o}));var a=s("ce50"),r=s("b2b2");let n;function o(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const o=Object(r["u"])(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then(async r=>{let i,u,c,l,b;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(i=new Blob([r.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),l=n.readAsText(i),"json"!==s)))){try{u=JSON.parse(l||null)}catch(d){const s={...d,url:e,requestOptions:t};throw new a["a"]("request:server",d.message,s)}if(u.error){const s={...u.error,url:e,requestOptions:t};throw new a["a"]("request:server",u.error.message,s)}}}else"native"===s&&(r.data.signal=o,c=await fetch(r.data.url,r.data));switch(s){case"blob":b=i;break;case"json":b=u;break;case"native":b=c;break;case"text":b=l;break;default:b=r.data}return{data:b,requestOptions:t,ssl:r.ssl,url:e}})}}}]);
//# sourceMappingURL=chunk-2d0d03e5.ab1e9c92.js.map