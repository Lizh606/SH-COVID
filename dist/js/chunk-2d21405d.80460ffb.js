(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21405d"],{aebe:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h}));var a=r("b2b2"),n=r("a21b"),o=r("04f0"),f=r("e764"),i=r("e431"),b=r("47f8"),s=r("8188"),u=r("5996"),c=r("05ff");class l{transform(t){const e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];Object(a["l"])(e.pointIdFilterMap)&&r.push(e.pointIdFilterMap.buffer);for(const a of e.attributes)"buffer"in a.values&&Object(n["c"])(a.values.buffer)&&a.values.buffer!==e.rgb.buffer&&r.push(a.values.buffer);return Promise.resolve({result:e,transferList:r})}_transform(t){const e=Object(c["e"])(t.schema,t.geometryBuffer);let r=e.length/3,n=null;const o=[],f=Object(c["d"])(t.primaryAttributeData,e,r);Object(a["l"])(t.primaryAttributeData)&&f&&o.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:f});const i=Object(c["d"])(t.modulationAttributeData,e,r);Object(a["l"])(t.modulationAttributeData)&&i&&o.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let b=Object(c["b"])(t.rendererInfo,f,i,r);if(t.filterInfo&&t.filterInfo.length>0&&Object(a["l"])(t.filterAttributesData)){const a=t.filterAttributesData.map(t=>{const a=Object(c["d"])(t,e,r),n={attributeInfo:t.attributeInfo,values:a};return o.push(n),n});n=new Uint32Array(r),r=Object(c["c"])(e,b,n,t.filterInfo,a)}for(const a of t.userAttributesData){const t=Object(c["d"])(a,e,r);o.push({attributeInfo:a.attributeInfo,values:t})}3*r<b.length&&(b=new Uint8Array(b.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(e,r,t.elevationOffset);const s=this._transformCoordinates(e,r,t.obb,u["a"].fromJSON(t.inSR),u["a"].fromJSON(t.outSR));return{obb:t.obb,points:s,rgb:b,attributes:o,pointIdFilterMap:n}}_transformCoordinates(t,e,r,a,n){if(!Object(s["p"])(t,a,0,t,n,0,e))throw Error("Can't reproject");const f=Object(b["d"])(r.center[0],r.center[1],r.center[2]),u=Object(b["c"])(),c=Object(b["c"])();Object(o["b"])(p,r.quaternion);const l=new Float32Array(3*e);for(let o=0;o<e;o++)u[0]=t[3*o]-f[0],u[1]=t[3*o+1]-f[1],u[2]=t[3*o+2]-f[2],Object(i["w"])(c,u,p),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(c[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(c[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(c[2])),l[3*o]=u[0],l[3*o+1]=u[1],l[3*o+2]=u[2];return l}_applyElevationOffsetInPlace(t,e,r){if(0!==r)for(let a=0;a<e;a++)t[3*a+2]+=r}}const p=Object(f["b"])();function h(){return new l}}}]);
//# sourceMappingURL=chunk-2d21405d.80460ffb.js.map