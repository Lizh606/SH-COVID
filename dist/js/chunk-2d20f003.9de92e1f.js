(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f003"],{b285:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var o=r("a4ee"),a=r("2c4f"),l=r("b2b2"),n=r("e694"),i=r("59b2"),c=(r("b50f"),r("c120"),r("cea0"),r("afcf")),s=r("d386"),u=r("5bd5"),b=r("a6a3"),p=r("b911"),j=r("0db5");let d=class extends(Object(p["a"])(Object(j["a"])(Object(n["a"])(b["a"])))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map(e=>{const t=new u["default"];return t.read(e,r),t})}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map(e=>{const t=new u["default"];return t.read(e,r),t})}get fullExtent(){if(Object(l["j"])(this.featureCollections))return null;const e=null;return this.featureCollections.reduce((e,t)=>Object(l["j"])(t.fullExtent)?e:Object(l["j"])(e)?t.fullExtent.clone():e.union(t.fullExtent),e)}get maxScale(){if(Object(l["j"])(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale),e)}set maxScale(e){Object(l["k"])(this.featureCollections)&&this.featureCollections.forEach(t=>{t.maxScale=e}),this._set("maxScale",e)}get minScale(){if(Object(l["j"])(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce((e,t)=>null==e?t.minScale:Math.min(e,t.minScale),e)}set minScale(e){Object(l["k"])(this.featureCollections)&&this.featureCollections.forEach(t=>{t.minScale=e}),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!Object(l["j"])(this.featureCollections))return this.featureCollections.find(t=>t.title===e)}};Object(o["a"])([Object(i["b"])()],d.prototype,"barrierLines",null),Object(o["a"])([Object(i["b"])()],d.prototype,"barrierPoints",null),Object(o["a"])([Object(i["b"])()],d.prototype,"barrierPolygons",null),Object(o["a"])([Object(i["b"])()],d.prototype,"directionLines",null),Object(o["a"])([Object(i["b"])()],d.prototype,"directionPoints",null),Object(o["a"])([Object(i["b"])({type:a["a"].ofType(u["default"])})],d.prototype,"featureCollections",void 0),Object(o["a"])([Object(c["a"])("portal-item","featureCollections",["layers"])],d.prototype,"readFeatureCollectionsFromItem",null),Object(o["a"])([Object(c["a"])("web-map","featureCollections",["featureCollection.layers"])],d.prototype,"readFeatureCollectionsFromWebMap",null),Object(o["a"])([Object(i["b"])({readOnly:!0})],d.prototype,"fullExtent",null),Object(o["a"])([Object(i["b"])({type:["show","hide"]})],d.prototype,"listMode",void 0),Object(o["a"])([Object(i["b"])()],d.prototype,"minScale",null),Object(o["a"])([Object(i["b"])()],d.prototype,"routeInfo",null),Object(o["a"])([Object(i["b"])()],d.prototype,"stops",null),Object(o["a"])([Object(i["b"])({readOnly:!0,json:{read:!1}})],d.prototype,"type",void 0),d=Object(o["a"])([Object(s["a"])("esri.layers.RouteLayer")],d);const f=d}}]);
//# sourceMappingURL=chunk-2d20f003.9de92e1f.js.map