(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e77862"],{"4d47":function(e,t,s){"use strict";s.r(t),s.d(t,"I3STreeDebugger",(function(){return j}));var l=s("a4ee"),i=(s("e06a"),s("b2b2")),a=s("59b2"),o=(s("b50f"),s("c120"),s("cea0"),s("d386")),b=s("d791"),c=s("afe1"),n=s("e431"),r=s("0b2d"),h=s("8188"),p=s("5abb"),u=s("1219");let j=class extends p["a"]{constructor(e){super(e)}getTiles(){const e=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,s=this.nodeSR;return e.map(e=>O(e,t,s)).sort((e,t)=>e.lij[0]===t.lij[0]?e.label>t.label?-1:1:e.lij[0]-t.lij[0])}};function O(e,t,s){const l=e.serviceObb;if(Object(i["k"])(l)||Object(i["k"])(t))return null;Object(b["g"])(d,l.quaternion),Object(n["m"])(y,l.center),Object(h["p"])(y,s,0,y,t,0,1),d[12]=y[0],d[13]=y[1],d[14]=y[2];const a=[[],[],[]];Object(n["m"])(y,l.halfSize),Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[0].push([y[0],y[1]]),Object(n["m"])(y,l.halfSize),y[0]=-y[0],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[0].push([y[0],y[1]]),Object(n["m"])(y,l.halfSize),y[0]=-y[0],y[1]=-y[1],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[0].push([y[0],y[1]]),Object(n["m"])(y,l.halfSize),y[1]=-y[1],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[0].push([y[0],y[1]]),a[1].push(a[0][0]),a[1].push(a[0][1]),Object(n["m"])(y,l.halfSize),y[0]=-y[0],y[2]=-y[2],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[1].push([y[0],y[1]]),Object(n["m"])(y,l.halfSize),y[2]=-y[2],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[1].push([y[0],y[1]]),a[2].push(a[0][0]),a[2].push(a[0][3]),Object(n["m"])(y,l.halfSize),y[1]=-y[1],y[2]=-y[2],Object(n["s"])(y,y,d),Object(h["p"])(y,t,0,y,s,0,1),a[2].push([y[0],y[1]]),a[2].push(a[1][3]);const o=new u["a"]({rings:a,spatialReference:s});return{lij:[e.level,e.childCount,0],label:e.id,geometry:o}}Object(l["a"])([Object(a["b"])({constructOnly:!0})],j.prototype,"lv",void 0),Object(l["a"])([Object(a["b"])({constructOnly:!0})],j.prototype,"nodeSR",void 0),j=Object(l["a"])([Object(o["a"])("esri.views.3d.layers.support.I3STreeDebugger")],j);const d=Object(c["d"])(),y=Object(r["f"])()},"5abb":function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var l=s("a4ee"),i=s("9ef0"),a=s("8d60"),o=s("fc29"),b=s("38a4"),c=s("b2b2"),n=s("59b2"),r=(s("b50f"),s("c120"),s("cea0"),s("d386")),h=s("7533"),p=s("0d76"),u=s("21ba"),j=s("a957");const O=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let d=class extends o["a"]{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=O.map(e=>new p["a"]({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=e=>{if(Object(c["l"])(e.label))return e.label;let t=e.lij.toString();return Object(c["l"])(e.loadPriority)&&(t+=` (${e.loadPriority})`),t},t=this.getTiles(),s=new Array,l=new Set((this._labels.size,this._labels.keys()));t.forEach((o,n)=>{const r=o.lij.toString();l.delete(r);const p=o.lij[0],O=o.geometry;if(this.enablePolygons&&!this._polygons.has(r)){const e=new a["a"]({geometry:O,symbol:this._symbols[p%this._symbols.length]});this._polygons.set(r,e),s.push(e)}if(this.enableLabels){const l=e(o),p=n/(t.length-1),d=Object(b["l"])(0,200,p),y=Object(b["l"])(20,6,p)/.75,g=Object(c["l"])(o.loadPriority)&&o.loadPriority>=t.length,f=new i["a"]([d,g?0:d,g?0:d]),w="3d"===this.view.type?()=>new h["a"]({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new j["a"]({text:l,halo:{color:"white",size:1/.75},material:{color:f},size:y})]}):()=>new u["a"]({text:l,haloColor:"white",haloSize:1/.75,color:f,size:y});if(this._labels.has(r)){const e=this._labels.get(r),t=w();(Object(c["k"])(e.symbol)||JSON.stringify(t)!==JSON.stringify(e.symbol))&&(e.symbol=t)}else{const e=new a["a"]({geometry:O.extent.center,symbol:w()});this._labels.set(r,e),s.push(e)}}});const o=new Array;l.forEach(e=>{this._polygons.has(e)&&(o.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(o.push(this._labels.get(e)),this._labels.delete(e))}),this.view.graphics.removeMany(o),this.view.graphics.addMany(s)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};Object(l["a"])([Object(n["b"])({constructOnly:!0})],d.prototype,"view",void 0),Object(l["a"])([Object(n["b"])({readOnly:!0})],d.prototype,"updating",void 0),Object(l["a"])([Object(n["b"])()],d.prototype,"enabled",null),d=Object(l["a"])([Object(r["a"])("esri.views.support.TileTreeDebugger")],d)}}]);
//# sourceMappingURL=chunk-71e77862.35a74f6a.js.map