(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f8e1d9"],{"0513":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));var r=i("a4ee"),a=i("ce50"),s=i("e92d"),n=i("3795"),l=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),c=i("66af"),h=i("45e3"),d=i("365a"),f=i("6c7a");const b=s["a"].getLogger("esri.views.3d.layers.WMTSLayerView3d");let p=class extends(Object(f["a"])(Object(h["a"])(Object(c["a"])(d["a"])))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}initialize(){const e=Object(n["m"])(this.view,"basemapTerrain.tilingSchemeDone").then(()=>{const e=()=>new a["a"]("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.");if(!this.view.basemapTerrain.tilingSchemeLocked)throw e();const t=this.view.basemapTerrain.tilingScheme,i=this.layer.activeLayer;let r;if(i&&i.tileMatrixSet){r=i.tileMatrixSet;const e=r.tileInfo,a=this._getTileInfoSupportError(e,r.fullExtent)||this._getTileInfoCompatibilityError(e,t);if(a)throw a}else{if(r=this._getCompatibleTileMatrixSet(),!r)throw e();i.tileMatrixSetId=r.id}this._set("tileInfo",r.tileInfo),this._set("fullExtent",r.fullExtent),this.layer.fullExtent=r.fullExtent});this.addResolvingPromise(e),this.when(()=>this._initialized())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(this,"layer.activeLayer.styleId",()=>this.refresh()),this.updatingHandles.add(this,"tileMatrixSet",()=>this.refresh()),this.updatingHandles.add(this.layer,"activeLayer",e=>{let t=e.tileMatrixSet;if(t){const e=this._getTileInfoError(t.tileInfo,t.fullExtent);e&&(b.error("The selected tile matrix set is not compatible with the view",e),t=null)}else t=this._getCompatibleTileMatrixSet(),t?e.tileMatrixSetId=t.id:b.error("The layer does not provide a tiling scheme that is compatible with the view");this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getCompatibleTileMatrixSet(){return this.layer.activeLayer.tileMatrixSets.find(e=>{const t=e.tileInfo;return!this._getTileInfoError(t,e.fullExtent)})}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};Object(r["a"])([Object(l["b"])({readOnly:!0})],p.prototype,"hasMixedImageFormats",null),Object(r["a"])([Object(l["b"])()],p.prototype,"fullExtent",void 0),Object(r["a"])([Object(l["b"])()],p.prototype,"layer",void 0),Object(r["a"])([Object(l["b"])()],p.prototype,"suspended",void 0),Object(r["a"])([Object(l["b"])()],p.prototype,"tileInfo",void 0),p=Object(r["a"])([Object(o["a"])("esri.views.3d.layers.WMTSLayerView3D")],p);const u=p},"6c7a":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i("a4ee"),a=i("e92d"),s=i("f4cc"),n=i("3795"),l=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386"));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(n["b"])(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(s["m"])(e)||a["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(r["a"])([Object(l["b"])()],t.prototype,"layer",void 0),t=Object(r["a"])([Object(o["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=chunk-68f8e1d9.7620a022.js.map