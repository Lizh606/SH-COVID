(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ecd40d4"],{"0959":function(t,e,n){"use strict";n.r(e),n.d(e,"ElevationSamplerWorker",(function(){return c})),n.d(e,"default",(function(){return c}));var r=n("c120"),i=n("b2b2"),o=n("ce76"),a=n("e9ba");class c{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new o["a"];const r=this.createMeshData(t),a=Object(i["l"])(e)?await e.invoke("createIndexThread",r,{transferList:n}):this.createIndexThread(r).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this.createPooledRBush();return t.components?this.createIndexComponentsThread(n,e,t.components.map(t=>new Uint32Array(t))):this.createIndexAllThread(n,e)}createIndexAllThread(t,e){const n=new Array(e.length/9);let r=0;for(let i=0;i<e.length;i+=9)n[r++]=s(e,i+0,i+3,i+6);return t.load(n),{result:t.toJSON()}}createIndexComponentsThread(t,e,n){let r=0;for(const a of n)r+=a.length/3;const i=new Array(r);let o=0;for(const a of n)for(let t=0;t<a.length;t+=3)i[o++]=s(e,3*a[t+0],3*a[t+1],3*a[t+2]);return t.load(i),{result:t.toJSON()}}createMeshData(t){const e=(t.transform?Object(a["b"])({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(t=>!t.faces)?{position:e}:{position:e,components:t.components.map(t=>t.faces)}}createPooledRBush(){return new o["a"](9,Object(r["a"])("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function s(t,e,n,r){return{minX:Math.min(t[e+0],t[n+0],t[r+0]),maxX:Math.max(t[e+0],t[n+0],t[r+0]),minY:Math.min(t[e+1],t[n+1],t[r+1]),maxY:Math.max(t[e+1],t[n+1],t[r+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[r+0],t[r+1],t[r+2]]}}},"33b0":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s}));var r=n("38a4"),i=n("04f0"),o=n("b139"),a=n("e431");function c(t=p){return[t[0],t[1],t[2],t[3]]}function s(t,e,n=c()){return Object(a["m"])(h(n),t),n[3]=e,n}function l(t,e,n=c()){return Object(i["i"])(b,h(t),u(t)),Object(i["i"])(m,h(e),u(e)),Object(i["g"])(b,m,b),f(n,Object(r["p"])(Object(i["c"])(h(n),b)))}function h(t){return t}function u(t){return Object(r["h"])(t[3])}function f(t,e){return t[3]=e,t}const p=[0,0,1,0],b=Object(o["b"])(),m=Object(o["b"])();c()},"3ebc":function(t,e,n){"use strict";function r(t,e){var n;return t.isGeographic||t.isWebMercator&&(null==(n=null==e?void 0:e.geographic)||n)}n.d(e,"a",(function(){return r}))},"64d5":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r,i=n("a4ee"),o=n("6a0e"),a=n("b2b2"),c=n("59b2"),s=(n("b50f"),n("c120"),n("cea0"),n("d386")),l=n("d791"),h=n("afe1"),u=n("e431"),f=n("0b2d"),p=n("4ae5"),b=n("8188"),m=n("f694"),d=n("33b0"),g=n("8190"),j=n("668b"),x=n("4c96");let O=r=class extends o["a"]{constructor(t){super(t),this.origin=Object(f["f"])(),this.translation=Object(f["f"])(),this.rotation=Object(d["d"])(),this.scale=Object(f["h"])(1,1,1),this.geographic=!0}get localMatrix(){const t=Object(h["d"])();return Object(l["f"])(t,t,this.scale),Object(l["e"])(t,t,Object(d["a"])(this.rotation),Object(d["b"])(this.rotation)),Object(l["a"])(t,t,this.translation),t}get localMatrixInverse(){return Object(l["b"])(Object(h["d"])(),this.localMatrix)}applyLocal(t,e){return Object(u["s"])(e,t,this.localMatrix)}applyLocalInverse(t,e){return Object(u["s"])(e,t,this.localMatrixInverse)}project(t,e){const n=new Float64Array(t.length),r=g["v"].fromTypedArray(n),i=g["v"].fromTypedArray(t);if(this.geographic){const t=Object(m["h"])(Object(m["e"])(e)),o=Object(h["d"])();return Object(b["d"])(e,this.origin,o,t),Object(l["m"])(o,o,this.localMatrix),Object(j["e"])(r,i,o),Object(b["p"])(n,t,0,n,e,0,n.length/3),n}const{localMatrix:o,origin:a}=this;Object(l["n"])(o,h["a"])?Object(x["a"])(r,i):Object(j["e"])(r,i,o);for(let c=0;c<n.length;c+=3)n[c+0]+=a[0],n[c+1]+=a[1],n[c+2]+=a[2];return n}getOriginPoint(t){const[e,n,r]=this.origin;return new p["a"]({x:e,y:n,z:r,spatialReference:t})}equals(t){return Object(a["l"])(t)&&this.geographic===t.geographic&&Object(u["q"])(this.origin,t.origin)&&Object(l["p"])(this.localMatrix,t.localMatrix)}clone(){const t={origin:Object(f["d"])(this.origin),translation:Object(f["d"])(this.translation),rotation:Object(d["d"])(this.rotation),scale:Object(f["d"])(this.scale),geographic:this.geographic};return new r(t)}};Object(i["a"])([Object(c["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"origin",void 0),Object(i["a"])([Object(c["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"translation",void 0),Object(i["a"])([Object(c["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"rotation",void 0),Object(i["a"])([Object(c["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],O.prototype,"scale",void 0),Object(i["a"])([Object(c["b"])({type:Boolean,nonNullable:!0,json:{write:!0}})],O.prototype,"geographic",void 0),Object(i["a"])([Object(c["b"])()],O.prototype,"localMatrix",null),Object(i["a"])([Object(c["b"])()],O.prototype,"localMatrixInverse",null),O=r=Object(i["a"])([Object(s["a"])("esri.geometry.support.MeshTransform")],O);const y=O},ce76:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("b50f"),i=n("b2b2"),o=n("8a44"),a=n("4637");class c{constructor(t=9,e){this.compareMinX=u,this.compareMinY=f,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),O.prune(),y.prune(),M.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const r=this.toBBox;if(j(t,n))for(O.clear();n;){for(let i=0,o=n.children.length;i<o;i++){const o=n.children[i],a=n.leaf?r(o):o;j(t,a)&&(n.leaf?e(o):g(t,a)?this._all(o,e):O.push(o))}n=O.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!j(t,e))return!1;for(O.clear();e;){for(let r=0,i=e.children.length;r<i;r++){const i=e.children[r],o=e.leaf?n(i):i;if(j(t,o)){if(e.leaf||g(t,o))return!0;O.push(i)}}e=O.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new B([]),this}remove(t){if(!t)return this;let e,n=this.data,o=null,a=0,c=!1;const s=this.toBBox(t);for(M.clear(),w.clear();n||M.length>0;){var l;if(n||(n=Object(i["d"])(M.pop()),o=M.data[M.length-1],a=null!=(l=w.pop())?l:0,c=!0),n.leaf&&(e=Object(r["g"])(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;c||n.leaf||!g(n,s)?o?(a++,n=o.children[a],c=!1):n=null:(M.push(n),w.push(a),a=0,o=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(y.clear();n;){var r;if(!0===n.leaf)for(const t of n.children)e(t);else y.pushArray(n.children);n=null!=(r=y.pop())?r:null}}_build(t,e,n,r){const i=n-e+1;let o=this._maxEntries;if(i<=o){const r=new B(t.slice(e,n+1));return s(r,this.toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(o)),o=Math.ceil(i/o**(r-1)));const a=new _([]);a.height=r;const c=Math.ceil(i/o),l=c*Math.ceil(Math.sqrt(o));x(t,e,n,l,this.compareMinX);for(let s=e;s<=n;s+=l){const e=Math.min(s+l-1,n);x(t,s,e,c,this.compareMinY);for(let n=s;n<=e;n+=c){const i=Math.min(n+c-1,e);a.children.push(this._build(t,n,i,r-1))}}return s(a,this.toBBox),a}_chooseSubtree(t,e,n,r){for(;r.push(e),!0!==e.leaf&&r.length-1!==n;){let n,r=1/0,i=1/0;for(let o=0,a=e.children.length;o<a;o++){const a=e.children[o],c=p(a),s=m(t,a)-c;s<i?(i=s,r=c<r?c:r,n=a):s===i&&c<r&&(r=c,n=a)}e=n||e.children[0]}return e}_insert(t,e,n){const r=this.toBBox,i=n?t:r(t);M.clear();const o=this._chooseSubtree(i,this.data,e,M);for(o.children.push(t),h(o,i);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(i,M,e)}_split(t,e){const n=t.data[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);const o=this._chooseSplitIndex(n,i,r);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(o,n.children.length-o),c=n.leaf?new B(a):new _(a);c.height=n.height,s(n,this.toBBox),s(c,this.toBBox),e?t.data[e-1].children.push(c):this._splitRoot(n,c)}_splitRoot(t,e){this.data=new _([t,e]),this.data.height=t.height+1,s(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let r,i,o;r=i=1/0;for(let a=e;a<=n-e;a++){const e=l(t,0,a,this.toBBox),c=l(t,a,n,this.toBBox),s=d(e,c),h=p(e)+p(c);s<r?(r=s,o=a,i=h<i?h:i):s===r&&h<i&&(i=h,o=a)}return o}_chooseSplitAxis(t,e,n){const r=t.leaf?this.compareMinX:u,i=t.leaf?this.compareMinY:f;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)}_allDistMargin(t,e,n,r){t.children.sort(r);const i=this.toBBox,o=l(t,0,e,i),a=l(t,n-e,n,i);let c=b(o)+b(a);for(let s=e;s<n-e;s++){const e=t.children[s];h(o,t.leaf?i(e):e),c+=b(o)}for(let s=n-e-1;s>=e;s--){const e=t.children[s];h(a,t.leaf?i(e):e),c+=b(a)}return c}_adjustParentBBoxes(t,e,n){for(let r=n;r>=0;r--)h(e.data[r],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],o=i.children;o.splice(Object(r["g"])(o,n,o.length,i.indexHint),1)}else this.clear();else s(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function s(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,r,i){i||(i=new B([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let o,a=e;a<n;a++)o=t.children[a],h(i,t.leaf?r(o):o);return i}function h(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function f(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function b(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function d(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function j(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,r,o){const c=[e,n];for(;c.length;){const e=Object(i["d"])(c.pop()),n=Object(i["d"])(c.pop());if(e-n<=r)continue;const s=n+Math.ceil((e-n)/r/2)*r;Object(a["a"])(t,s,n,e,o),c.push(n,s,s,e)}}const O=new o["a"],y=new o["a"],M=new o["a"],w=new o["a"]({deallocator:void 0});class A{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Y extends A{constructor(){super(...arguments),this.height=1,this.indexHint=new r["a"]}}class B extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class _ extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},e9ba:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return x})),n.d(e,"e",(function(){return O}));var r=n("b2b2"),i=n("8048"),o=n("dae5"),a=n("d791"),c=n("afe1"),s=n("1c92"),l=n("8188"),h=n("f694"),u=n("64d5"),f=n("8190"),p=n("668b"),b=n("3ebc"),m=n("4554");function d(t,e,n){return Object(b["a"])(e.spatialReference,n)?M(t,e,n):y(t,e,n)}function g(t,e,n){const{position:i,normal:o,tangent:a}=t;if(Object(r["k"])(e))return{position:i,normal:o,tangent:a};const c=e.localMatrix;return d({position:Object(m["h"])(i,new Float64Array(i.length),c),normal:Object(r["l"])(o)?Object(m["g"])(o,new Float32Array(o.length),c):null,tangent:Object(r["l"])(a)?Object(m["i"])(a,new Float32Array(a.length),c):null},e.getOriginPoint(n),{geographic:e.geographic})}function j(t,e,n){if(null!=n&&n.useTransform){var r;const{position:i,normal:o,tangent:a}=t;return{vertexAttributes:{position:i,normal:o,tangent:a},transform:new u["a"]({origin:[e.x,e.y,null!=(r=e.z)?r:0],geographic:Object(b["a"])(e.spatialReference,n)})}}return{vertexAttributes:d(t,e,n),transform:null}}function x(t,e,n){return Object(b["a"])(e.spatialReference,n)?_(t,e,n):B(t,e,n)}function O(t,e,n,i){if(Object(r["k"])(e))return x(t,n,i);const o=g(t,e,n.spatialReference);return n.equals(e.getOriginPoint(n.spatialReference))?B(o,n,i):Object(b["a"])(n.spatialReference,i)?_(o,n,i):B(o,n,i)}function y(t,e,n){const r=new Float64Array(t.position.length),i=t.position,o=e.x,a=e.y,c=e.z||0,{horizontal:s,vertical:l}=E(n?n.unit:null,e.spatialReference);for(let h=0;h<i.length;h+=3)r[h+0]=i[h+0]*s+o,r[h+1]=i[h+1]*s+a,r[h+2]=i[h+2]*l+c;return{position:r,normal:t.normal,tangent:t.tangent}}function M(t,e,n){const r=e.spatialReference,i=v(e,n,F),o=new Float64Array(t.position.length),a=w(t.position,i,r,o),c=Object(s["a"])(S,i);return{position:a,normal:A(a,o,t.normal,c,r),tangent:Y(a,o,t.tangent,c,r)}}function w(t,e,n,r){Object(p["e"])(f["v"].fromTypedArray(r),f["v"].fromTypedArray(t),e);const i=new Float64Array(t.length);return Object(m["a"])(r,i,n)}function A(t,e,n,i,o){if(Object(r["k"])(n))return null;const a=new Float32Array(n.length);return Object(p["a"])(f["u"].fromTypedArray(a),f["u"].fromTypedArray(n),i),Object(m["b"])(a,t,e,o,a),a}function Y(t,e,n,i,o){if(Object(r["k"])(n))return null;const a=new Float32Array(n.length);Object(p["a"])(f["u"].fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f["u"].fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),i);for(let r=3;r<a.length;r+=4)a[r]=n[r];return Object(m["d"])(a,t,e,o,a),a}function B(t,e,n){const r=new Float64Array(t.position.length),i=t.position,o=e.x,a=e.y,c=e.z||0,{horizontal:s,vertical:l}=E(n?n.unit:null,e.spatialReference);for(let h=0;h<i.length;h+=3)r[h+0]=(i[h+0]-o)/s,r[h+1]=(i[h+1]-a)/s,r[h+2]=(i[h+2]-c)/l;return{position:r,normal:t.normal,tangent:t.tangent}}function _(t,e,n){const r=e.spatialReference;v(e,n,F);const i=Object(a["b"])(N,F),o=new Float64Array(t.position.length),c=X(t.position,r,i,o),l=Object(s["a"])(S,i);return{position:c,normal:T(t.normal,t.position,o,r,l),tangent:R(t.tangent,t.position,o,r,l)}}function v(t,e,n){Object(l["d"])(t.spatialReference,[t.x,t.y,t.z||0],n,Object(h["g"])(t.spatialReference));const{horizontal:r,vertical:i}=E(e?e.unit:null,t.spatialReference);return Object(a["f"])(n,n,[r,r,i]),n}function X(t,e,n,r){const i=Object(m["f"])(t,e,r),o=f["v"].fromTypedArray(i),a=new Float64Array(i.length),c=f["v"].fromTypedArray(a);return Object(p["e"])(c,o,n),a}function T(t,e,n,i,o){if(Object(r["k"])(t))return null;const a=Object(m["c"])(t,e,n,i,new Float32Array(t.length)),c=f["u"].fromTypedArray(a);return Object(p["a"])(c,c,o),a}function R(t,e,n,i,o){if(Object(r["k"])(t))return null;const a=Object(m["e"])(t,e,n,i,new Float32Array(t.length)),c=f["u"].fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return Object(p["a"])(c,c,o),a}function E(t,e){if(Object(r["k"])(t))return I;const n=e.isGeographic?1:Object(i["e"])(e),o=e.isGeographic?1:Object(i["g"])(e),a=Object(i["c"])(1,t,"meters");return{horizontal:a*n,vertical:a*o}}const F=Object(c["d"])(),N=Object(c["d"])(),S=Object(o["b"])(),I={horizontal:1,vertical:1}}}]);
//# sourceMappingURL=chunk-3ecd40d4.e43ed8d0.js.map