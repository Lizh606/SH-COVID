(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237e8a"],{fcb9:function(e,t,a){"use strict";a.r(t),a.d(t,"previewCIMSymbol",(function(){return u}));var l=a("a915"),n=a("6b49"),i=a("d445"),c=a("4bad");const o=new n["CIMSymbolRasterizer"](null,!0),s=120;async function u(e,t={}){const{size:a,maxSize:n,node:u,opacity:d}=t,r=t.cimOptions||t,{feature:h,fieldMap:m,geometryType:p,style:y}=r,f=Object(i["c"])(e),w=Math.min(null!=a?a:f,null!=n?n:Object(l["h"])(s));w!==f&&(e=e.clone(),Object(i["e"])(e,w,{preserveOutlineWidth:!0}));let b=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(b=1);const g=await o.rasterizeCIMSymbolAsync(e,h,m,p,{scaleFactor:b,style:y}),M=document.createElement("canvas");M.width=g.imageData.width,M.height=g.imageData.height,M.getContext("2d").putImageData(g.imageData,0,0);let v=M.width/b,C=M.height/b;if(null!=a&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=v/C;v=e<=1?Math.ceil(w*e):w,C=e<=1?w:Math.ceil(w/e)}const I=new Image(v,C);I.src=M.toDataURL(),null!=d&&(I.style.opacity=""+d);let O=I;if(null!=t.effectView){const e={shape:{type:"image",x:0,y:0,width:v,height:C,src:I.src},fill:null,stroke:null,offset:[0,0]};O=Object(c["a"])([[e]],[v,C],{effectView:t.effectView})}return u&&u.appendChild(O),O}}}]);
//# sourceMappingURL=chunk-2d237e8a.18e13e67.js.map