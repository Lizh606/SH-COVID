(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8df2c5c"],{"34e7":function(n,t,e){"use strict";e.r(t),e.d(t,"registerFunctions",(function(){return y}));var r=e("f7be"),c=e("8549"),u=e("89da"),i=e("df16"),o=e("f4cc"),a=e("3af1"),l=e("3760"),f=e("bb51"),s=e("57dc"),b=e("4ae5"),O=e("1219"),j=e("521c"),g=e("a9ab"),d=e("8048");function w(n){return 0===r["d"].indexOf("4.")?O["a"].fromExtent(n):new O["a"]({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function h(n){if(Object(u["L"])(n,2,2),n[0]instanceof l["a"]&&n[1]instanceof l["a"]);else if(n[0]instanceof l["a"]&&null===n[1]);else if(n[1]instanceof l["a"]&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function m(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return Object(o["s"])(0);let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=Object(i["g"])(n.spatialReference)/Object(d["d"])(n.spatialReference));let r=0;if("polyline"===n.type)for(const u of n.paths)for(let n=1;n<u.length;n++)r+=Object(i["i"])(u[n],u[n-1],e);else if("polygon"===n.type)for(const u of n.rings){for(let n=1;n<u.length;n++)r+=Object(i["i"])(u[n],u[n-1],e);(u[0][0]!==u[u.length-1][0]||u[0][1]!==u[u.length-1][1]||void 0!==u[0][2]&&u[0][2]!==u[u.length-1][2])&&(r+=Object(i["i"])(u[0],u[u.length-1],e))}else"extent"===n.type&&(r+=2*Object(i["i"])([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*Object(i["i"])([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs(Object(u["e"])(n.zmax,0)*e-Object(u["e"])(n.zmin,0)*e));const c=new j["a"]({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return Object(f["v"])(c,t)}function y(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null===e[0]||null===e[1]||Object(f["h"])(e[0],e[1])}))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["q"])(e[0],e[1])}))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["A"])(e[0],e[1])}))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["d"])(e[0],e[1])}))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["C"])(e[0],e[1])}))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["c"])(e[0],e[1])}))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null!==e[1]&&Object(f["t"])(e[0],e[1])}))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return Object(u["L"])(e,2,2),e[0]===e[1]||(e[0]instanceof l["a"]&&e[1]instanceof l["a"]?Object(f["j"])(e[0],e[1]):!(!Object(u["J"])(e[0])||!Object(u["J"])(e[1]))&&e[0].getTime()===e[1].getTime())}))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,3,3),e[0]instanceof l["a"]&&e[1]instanceof l["a"])return Object(f["w"])(e[0],e[1],Object(u["z"])(e[2]));if(e[0]instanceof l["a"]&&null===e[1])return!1;if(e[1]instanceof l["a"]&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null===e[0]||null===e[1]?null:Object(f["p"])(e[0],e[1])}))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){const i=[];if(0===(r=Object(u["k"])(r)).length)throw new Error("Function called with wrong number of Parameters");if(1===r.length)if(Object(u["w"])(r[0])){const n=Object(u["k"])(r[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof l["a"]))throw new Error("Illegal Argument");i.push(n[t])}}else{if(!Object(u["x"])(r[0])){if(r[0]instanceof l["a"])return Object(u["N"])(Object(c["a"])(r[0]),t.spatialReference);if(null===r[0])return null;throw new Error("Illegal Argument")}{const n=Object(u["k"])(r[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof l["a"]))throw new Error("Illegal Argument");i.push(n[t])}}}else for(let t=0;t<r.length;t++)if(null!==r[t]){if(!(r[t]instanceof l["a"]))throw new Error("Illegal Argument");i.push(r[t])}return 0===i.length?null:Object(f["B"])(i)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null!==e[0]&&null===e[1]?Object(c["a"])(e[0]):null===e[0]?null:Object(f["g"])(e[0],e[1])}))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return h(e=Object(u["k"])(e)),null===e[0]&&null===e[1]?null:null===e[0]?Object(c["a"])(e[1]):null===e[1]?Object(c["a"])(e[0]):Object(f["z"])(e[0],e[1])}))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,2),!(e[1]instanceof a["a"])&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");return null===e[1]?null:Object(f["b"])(e[0],e[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,2),!(e[1]instanceof j["a"])&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return[];if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");return null===e[1]?[Object(c["a"])(e[0])]:Object(f["e"])(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(Object(u["L"])(r,1,2),null===(r=Object(u["k"])(r))[0])return 0;if(Object(u["K"])(r[0]))return r[0].sumArea(Object(c["c"])(Object(u["e"])(r[1],-1)),!1,t.abortSignal).then(n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n});if(Object(u["w"])(r[0])||Object(u["x"])(r[0])){const n=Object(u["m"])(r[0],t.spatialReference);return null===n?0:Object(f["u"])(n,Object(c["c"])(Object(u["e"])(r[1],-1)))}if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["u"])(r[0],Object(c["c"])(Object(u["e"])(r[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(Object(u["L"])(r,1,2),null===(r=Object(u["k"])(r))[0])return 0;if(Object(u["K"])(r[0]))return r[0].sumArea(Object(c["c"])(Object(u["e"])(r[1],-1)),!0,t.abortSignal).then(n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n});if(Object(u["w"])(r[0])||Object(u["x"])(r[0])){const n=Object(u["m"])(r[0],t.spatialReference);return null===n?0:Object(f["l"])(n,Object(c["c"])(Object(u["e"])(r[1],-1)))}if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["l"])(r[0],Object(c["c"])(Object(u["e"])(r[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(Object(u["L"])(r,1,2),null===(r=Object(u["k"])(r))[0])return 0;if(Object(u["K"])(r[0]))return r[0].sumLength(Object(c["b"])(Object(u["e"])(r[1],-1)),!1,t.abortSignal).then(n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n});if(Object(u["w"])(r[0])||Object(u["x"])(r[0])){const n=Object(u["l"])(r[0],t.spatialReference);return null===n?0:Object(f["v"])(n,Object(c["b"])(Object(u["e"])(r[1],-1)))}if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["v"])(r[0],Object(c["b"])(Object(u["e"])(r[1],-1)))}))},n.functions.length3d=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(Object(u["L"])(r,1,2),null===(r=Object(u["k"])(r))[0])return 0;if(Object(u["w"])(r[0])||Object(u["x"])(r[0])){const n=Object(u["l"])(r[0],t.spatialReference);return null===n?0:!0===n.hasZ?m(n,Object(c["b"])(Object(u["e"])(r[1],-1))):Object(f["v"])(n,Object(c["b"])(Object(u["e"])(r[1],-1)))}if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return!0===r[0].hasZ?m(r[0],Object(c["b"])(Object(u["e"])(r[1],-1))):Object(f["v"])(r[0],Object(c["b"])(Object(u["e"])(r[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(Object(u["L"])(r,1,2),null===(r=Object(u["k"])(r))[0])return 0;if(Object(u["K"])(r[0]))return r[0].sumLength(Object(c["b"])(Object(u["e"])(r[1],-1)),!0,t.abortSignal).then(n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n});if(Object(u["w"])(r[0])||Object(u["x"])(r[0])){const n=Object(u["l"])(r[0],t.spatialReference);return null===n?0:Object(f["o"])(n,Object(c["b"])(Object(u["e"])(r[1],-1)))}if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["o"])(r[0],Object(c["b"])(Object(u["e"])(r[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){r=Object(u["k"])(r),Object(u["L"])(r,2,3);let i=r[0];(Object(u["w"])(r[0])||Object(u["x"])(r[0]))&&(i=Object(u["o"])(r[0],t.spatialReference));let o=r[1];if((Object(u["w"])(r[1])||Object(u["x"])(r[1]))&&(o=Object(u["o"])(r[1],t.spatialReference)),!(i instanceof l["a"]))throw new Error("Illegal Argument");if(!(o instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["i"])(i,o,Object(c["b"])(Object(u["e"])(r[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){e=Object(u["k"])(e),Object(u["L"])(e,2,3);const r=e[0],i=e[1];if(!(r instanceof b["a"]))throw new Error("Illegal Argument");if(!(i instanceof b["a"]))throw new Error("Illegal Argument");const o=new j["a"]({paths:[],spatialReference:r.spatialReference});return o.addPath([r,i]),Object(f["o"])(o,Object(c["b"])(Object(u["e"])(e[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,3),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return e[0]instanceof O["a"]||e[0]instanceof j["a"]?Object(f["f"])(e[0],r,Object(c["b"])(Object(u["e"])(e[2],-1))):e[0]instanceof a["a"]?Object(f["f"])(w(e[0]),r,Object(c["b"])(Object(u["e"])(e[2],-1))):e[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,3),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return e[0]instanceof O["a"]||e[0]instanceof j["a"]?Object(f["n"])(e[0],r,Object(c["b"])(Object(u["e"])(e[2],-1))):e[0]instanceof a["a"]?Object(f["n"])(w(e[0]),r,Object(c["b"])(Object(u["e"])(e[2],-1))):e[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,4),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");return Object(f["k"])(e[0],r,Object(u["U"])(Object(u["e"])(e[2],!0)),Object(c["b"])(Object(u["e"])(e[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,3),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(c["a"])(e[0]):Object(f["a"])(e[0],r,Object(c["b"])(Object(u["e"])(e[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,3),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(c["a"])(e[0]):Object(f["m"])(e[0],r,Object(c["b"])(Object(u["e"])(e[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,2,6),null===e[0])return null;if(!(e[0]instanceof O["a"]||e[0]instanceof j["a"]))throw new Error("Illegal Argument");const r=Object(u["P"])(e[1]);if(isNaN(r))throw new Error("Illegal Argument");const i=Object(u["P"])(Object(u["e"])(e[4],10));if(isNaN(i))throw new Error("Illegal Argument");const o=Object(u["P"])(Object(u["e"])(e[5],0));if(isNaN(o))throw new Error("Illegal Argument");return Object(f["s"])(e[0],r,Object(c["b"])(Object(u["e"])(e[2],-1)),Object(u["z"])(Object(u["e"])(e[3],"round")).toLowerCase(),i,o)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){e=Object(u["k"])(e),Object(u["L"])(e,2,3);let r=e[0];if(null===r)return null;if(!(r instanceof l["a"]))throw new Error("Illegal Argument");r instanceof a["a"]&&(r=O["a"].fromExtent(r));const c=Object(u["P"])(e[1]);if(isNaN(c))throw new Error("Illegal Argument");const i=Object(u["e"])(e[2],null);if(null===i)return Object(f["x"])(r,c);if(i instanceof b["a"])return Object(f["x"])(r,c,i);throw new Error("Illegal Argument")}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){if(r=Object(u["k"])(r),Object(u["L"])(r,1,1),null===r[0])return null;let o=r[0];if((Object(u["w"])(r[0])||Object(u["x"])(r[0]))&&(o=Object(u["o"])(r[0],t.spatialReference)),null===o)return null;if(!(o instanceof l["a"]))throw new Error("Illegal Argument");return o instanceof b["a"]?Object(u["N"])(Object(c["a"])(r[0]),t.spatialReference):o instanceof O["a"]?o.centroid:o instanceof j["a"]?Object(i["f"])(o):o instanceof s["a"]?Object(i["e"])(o):o instanceof a["a"]?o.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,r){r=Object(u["k"])(r),Object(u["L"])(r,1,1);const i=[];if(null===r[0])return null;if(!(r[0]instanceof l["a"]))throw new Error("Illegal Argument");return r[0]instanceof b["a"]||r[0]instanceof a["a"]?[Object(u["N"])(Object(c["a"])(r[0]),t.spatialReference)]:Object(f["y"])(r[0]).then(n=>{if(n instanceof O["a"]){const t=[],e=[];for(let r=0;r<n.rings.length;r++)if(n.isClockwise(n.rings[r])){const e=Object(g["a"])({rings:[n.rings[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e)}else e.push({ring:n.rings[r],pt:n.getPoint(r,0)});for(let n=0;n<e.length;n++)for(let r=0;r<t.length;r++)if(t[r].contains(e[n].pt)){t[r].addRing(e[n].ring);break}return t}if(n instanceof j["a"]){const t=[];for(let e=0;e<n.paths.length;e++){const r=Object(g["a"])({paths:[n.paths[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r)}return t}if(r[0]instanceof s["a"]){const n=Object(u["N"])(Object(c["a"])(r[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)i.push(n.getPoint(t));return i}return null})}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,1,1),null===e[0])return!0;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["r"])(e[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=Object(u["k"])(e),Object(u["L"])(e,1,1),null===e[0])return null;if(!(e[0]instanceof l["a"]))throw new Error("Illegal Argument");return Object(f["y"])(e[0])}))})}},bb51:function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"b",(function(){return b})),e.d(t,"c",(function(){return j})),e.d(t,"d",(function(){return g})),e.d(t,"e",(function(){return O})),e.d(t,"f",(function(){return Z})),e.d(t,"g",(function(){return x})),e.d(t,"h",(function(){return A})),e.d(t,"i",(function(){return d})),e.d(t,"j",(function(){return w})),e.d(t,"k",(function(){return J})),e.d(t,"l",(function(){return K})),e.d(t,"m",(function(){return S})),e.d(t,"n",(function(){return M})),e.d(t,"o",(function(){return B})),e.d(t,"p",(function(){return R})),e.d(t,"q",(function(){return h})),e.d(t,"r",(function(){return k})),e.d(t,"s",(function(){return N})),e.d(t,"t",(function(){return p})),e.d(t,"u",(function(){return q})),e.d(t,"v",(function(){return C})),e.d(t,"w",(function(){return E})),e.d(t,"x",(function(){return z})),e.d(t,"y",(function(){return I})),e.d(t,"z",(function(){return F})),e.d(t,"A",(function(){return m})),e.d(t,"B",(function(){return L})),e.d(t,"C",(function(){return y}));e("e06a");var r=e("dfa0"),c=(e("4ae5"),e("a9ab"));function u(n){var t;return Array.isArray(n)?null==(t=n[0])?void 0:t.spatialReference:null==n?void 0:n.spatialReference}function i(n){return n?Array.isArray(n)?n.map(i):n.toJSON?n.toJSON():n:n}function o(n){return Array.isArray(n)?n.map(n=>Object(c["a"])(n)):Object(c["a"])(n)}function a(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}let l;async function f(){return l||(l=Object(r["b"])("geometryEngineWorker",{strategy:"distributed"})),l}async function s(n,t){return(await f()).invoke("executeGEOperation",{operation:n,parameters:i(t)})}async function b(n,t){return o(await s("clip",[u(n),n,t]))}async function O(n,t){return o(await s("cut",[u(n),n,t]))}function j(n,t){return s("contains",[u(n),n,t])}function g(n,t){return s("crosses",[u(n),n,t])}function d(n,t,e){return s("distance",[u(n),n,t,e])}function w(n,t){return s("equals",[u(n),n,t])}function h(n,t){return s("intersects",[u(n),n,t])}function m(n,t){return s("touches",[u(n),n,t])}function y(n,t){return s("within",[u(n),n,t])}function A(n,t){return s("disjoint",[u(n),n,t])}function p(n,t){return s("overlaps",[u(n),n,t])}function E(n,t,e){return s("relate",[u(n),n,t,e])}function k(n){return s("isSimple",[u(n),n])}async function I(n){return o(await s("simplify",[u(n),n]))}async function x(n,t){return o(await s("difference",[u(n),n,t]))}async function F(n,t){return o(await s("symmetricDifference",[u(n),n,t]))}async function R(n,t){return o(await s("intersect",[u(n),n,t]))}async function L(n,t=null){const e=a(n,t);return o(await s("union",[u(e),e]))}async function N(n,t,e,r,c,i){return o(await s("offset",[u(n),n,t,e,r,c,i]))}async function v(n,t,e,r=!1){const c=[u(n),n,t,e,r];return o(await s("buffer",c))}async function S(n,t,e,r,c,i){const a=[u(n),n,t,e,r,c,i];return o(await s("geodesicBuffer",a))}function P(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}async function z(n,t,e){var r;if(null==n)throw new Error("Illegal Argument Exception");const c=n.spatialReference;e=null!=(r=e)?r:P(n);const u=n.constructor.fromJSON(await s("rotate",[c,n,t,e]));return u.spatialReference=c,u}async function J(n,t,e,r){return o(await s("generalize",[u(n),n,t,e,r]))}async function Z(n,t,e){return o(await s("densify",[u(n),n,t,e]))}async function M(n,t,e,r=0){return o(await s("geodesicDensify",[u(n),n,t,e,r]))}function q(n,t){return s("planarArea",[u(n),n,t])}function C(n,t){return s("planarLength",[u(n),n,t])}function K(n,t,e){return s("geodesicArea",[u(n),n,t,e])}function B(n,t,e){return s("geodesicLength",[u(n),n,t,e])}}}]);
//# sourceMappingURL=chunk-f8df2c5c.ff0c3236.js.map