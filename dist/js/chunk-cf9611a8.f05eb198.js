(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf9611a8"],{"3a8b":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var i=a("a4ee"),r=a("b2b2"),s=a("f4cc"),n=a("3795"),o=(a("e92d"),a("cea0"),a("b50f"),a("c120"),a("2dd4"),a("d386")),l=a("843f"),c=a("c802");let d=class extends(Object(c["a"])(l["a"])){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=Object(s["i"])(async e=>{this.redraw((e,t)=>this._redrawImage(e,t),e)},2e3)}initialize(){this.handles.add([Object(n["k"])(this.view.basemapTerrain,"ready",()=>this.initializeMaximumDataResolution()),this.layer.on("redraw",()=>this.redrawDebounced())]),this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(this,"timeExtent",()=>this.updatingHandles.addPromise(this.refreshDebounced()))}initializeMaximumDataResolution(){const e=this.view.basemapTerrain.spatialReference,t=this.layer.fullExtent;t&&e.equals(t.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageElement?e.image=t.imageElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||Object(r["k"])(e.pixelData))return Promise.reject();const a=e.image,i=a.getContext("2d"),s=await this.layer.applyRenderer(e.pixelData,{signal:t}),n=this.layer.applyFilter(s).pixelBlock;if(Object(r["k"])(n))return Promise.reject();a.width=n.width,a.height=n.height;const o=i.createImageData(n.width,n.height);o.data.set(n.getAsRGBA()),i.putImageData(o,0,0)}};d=Object(i["a"])([Object(o["a"])("esri.views.3d.layers.ImageryLayerView3D")],d);const u=d},"6c7a":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var i=a("a4ee"),r=a("e92d"),s=a("f4cc"),n=a("3795"),o=a("59b2"),l=(a("b50f"),a("c120"),a("cea0"),a("d386"));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(n["b"])(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(s["m"])(e)||r["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(i["a"])([Object(o["b"])()],t.prototype,"layer",void 0),t=Object(i["a"])([Object(l["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}},"843f":function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var i=a("a4ee"),r=a("792b"),s=a("e92d"),n=a("b2b2"),o=a("f4cc"),l=a("3795"),c=a("59b2"),d=(a("b50f"),a("c120"),a("cea0"),a("d386")),u=a("3af1"),h=a("9180"),p=a("66af"),b=a("0278"),m=a("caf7");function g(e,t,a){const i=Object(h["B"])(e)/Object(h["u"])(e),r={width:a,height:a};return i>1.0001?r.height=a/i:i<.9999&&(r.width=a*i),r.width=Math.round(r.width/(Object(h["B"])(e)/Object(h["B"])(t))),r.height=Math.round(r.height/(Object(h["u"])(e)/Object(h["u"])(t))),r}function f(e){return m["a"].createSquareGeometry([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function y(e,t){if(!Object(h["w"])(e,t))return f(t);const a=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],r=t[2]-t[0],s=t[3]-t[1],n=i[0]>0&&i[2]>0?3:2,o=a[0]>0&&a[2]>0?3:2,l=(o+1)*(n+1),c=new Float64Array(3*l),d=new Float32Array(2*l),u=new Uint32Array(6*(o*n-1));let p=0,m=0,g=0,y=0,v=0;for(let h=0;h<4;h++){const e=a[h];if(e<=0)continue;let o=0;for(let a=0;a<4;a++){const e=i[a];e<=0||(c[m++]=t[0]+o,c[m++]=t[1]+p,c[m++]=-1,d[g++]=o/r,d[g++]=p/s,a<3&&h<3&&(1!==a||1!==h)&&(u[v++]=y,u[v++]=y+1,u[v++]=y+n+1,u[v++]=y+1,u[v++]=y+n+2,u[v++]=y+n+1),y++,o+=e)}p+=e}const w=new Uint32Array(u.length);return new b["a"]([["position",{size:3,data:c,exclusive:!0}],["normal",{size:3,data:O,exclusive:!0}],["uv0",{size:2,data:d,exclusive:!0}]],[["position",u],["normal",w],["uv0",u]])}const O=[0,0,1];var v=a("eec2"),w=a("6611"),j=a("6061"),x=a("1e2c"),_=a("ad96"),E=a("365a"),R=a("6c7a");const T=s["a"].getLogger("esri.views.3d.layers.DynamicLayerView3D");let P=class extends(Object(R["a"])(Object(p["a"])(E["a"]))){constructor(){super(...arguments),this.drapeSourceType=0,this.updatePolicy=1,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this.refreshDebounced=Object(o["i"])(async e=>{this.destroyed||await this._doRefresh(e).catch(e=>{Object(o["m"])(e)||s["a"].getLogger(this.declaredClass).error(e)})},2e3)}initialize(){this.addResolvingPromise(Object(v["a"])(this).then(e=>this._set("fullExtentInLocalViewSpatialReference",e))),this.updatingHandles.add(this,"suspended",()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(e=>{this._overlays[e.index]=e,this._updateImageExtent(e)})}_updateImageExtent(e){const t=this._clippedExtent(e.extent,S);if(Object(n["k"])(t))return;const a=g(e.extent,t,e.resolution);let i=e.pixelRatio*this.view.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(a.width>e){const t=e/a.width;a.height=Math.floor(a.height*t),a.width=e,i*=t}if(a.height>t){const e=t/a.height;a.width=Math.floor(a.width*e),a.height=t,i*=e}}const r=this._extents[e.index];r&&Object(h["o"])(r.extent,t)&&this._imageSizeEquals(t,r.imageSize,a)||(this._extents[e.index]={extent:Object(h["l"])(t),imageSize:a,pixelRatio:i},this.suspended||this._fetch(e.index).catch(e=>{Object(o["m"])(e)||T.error(e)}))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&t.push(this._fetch(a,e));await Object(o["j"])(t)}canResume(){if(!super.canResume())return!1;if(this._isScaleRangeLayer()){const{minScale:e,maxScale:t}=this.layer;if(e>0||t>0){const a=this.view.scale;if(a<t||e>0&&a>e)return!1}}return!0}isUpdating(){return this._images.some(e=>!!e.loadingPromise)}async processResult(e,t,a){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const a=t.extent;if(new u["a"](a[0],a[1],a[2],a[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await Object(r["b"])(this._images,async(a,i)=>{a&&(await e(a,t),await this._createStageObjects(i,a.image,t))})}_imageSizeEquals(e,t,a){if(!this.maximumDataResolution)return!1;const i=Object(h["B"])(e)/this.maximumDataResolution.x,r=Object(h["u"])(e)/this.maximumDataResolution.y,s=i/t.width,n=r/t.height,o=i/a.width,l=r/a.height,c=Math.abs(s-o),d=Math.abs(n-l),u=w["a"].TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return c<=u&&d<=u}async _fetch(e,t){if(this.suspended)return;const a=this._extents[e],i=a.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:Object(h["l"])(i)});const r=this._images[e];r.loadingAbortController&&(r.loadingAbortController.abort(),r.loadingAbortController=null);const s=new u["a"](i[0],i[1],i[2],i[3],this._spatialReference);if(0===s.width||0===s.height)return void this._clearImage(e);const n=new AbortController;r.loadingAbortController=n,Object(o["r"])(t,()=>n.abort());const l=n.signal,c=this._waitFetchReady(l).then(()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:l},{height:i,width:r}=a.imageSize;return this.layer.fetchImage(s,r,i,t)}).then(e=>{if(Object(o["n"])(l))throw T.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Object(o["e"])();return this.processResult(r,e)}).then(()=>Object(h["k"])(r.renderExtent,i));r.loadingPromise=c,Object(o["c"])(c,()=>{c===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}),this.notifyChange("updating"),await c.then(async()=>{if(l.aborted)throw Object(o["e"])();await this._createStageObjects(e,r.image,l),this.notifyChange("updating")}).catch(e=>{throw e&&!Object(o["m"])(e)&&T.error(e),this.notifyChange("updating"),e})}_clearImage(e){const t=this._images[e];if(t){Object(n["l"])(t.renderGeometry)&&(this.view.basemapTerrain.overlayManager.renderer.removeGeometries([t.renderGeometry],this,2),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,a){const i=this.view._stage,s=this._images[e],l=this.view.basemapTerrain.overlayManager.renderer,c=()=>{i.remove(s.texture),s.texture=null,Object(n["l"])(s.renderGeometry)&&(l.removeGeometries([s.renderGeometry],this,2),s.renderGeometry=null)};if(t){const d=new x["a"](t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:33071,t:33071}});let u;if(await Object(r["d"])(this._images[0===e?1:0].loadingPromise),Object(o["w"])(a),0===e)u=f(s.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void c();u=y(e,s.renderExtent)}c(),i.add(d),i.loadSynchronous(d),s.texture=d,Object(n["k"])(s.material)?(s.material=new _["a"]({transparent:!0,textureId:d.id}),i.add(s.material)):s.material.setParameters({textureId:d.id}),s.renderGeometry=new j["a"](u,s.material),s.renderGeometry.origin=this._overlays[e].renderLocalOrigin,l.addGeometries([s.renderGeometry],this,2)}else c(),i.remove(s.material),s.material=null}_isScaleRangeLayer(){return"minScale"in this.layer&&"maxScale"in this.layer}_isScaleRangeActive(){return!!this._isScaleRangeLayer()&&(this.layer.minScale>0||this.layer.maxScale>0)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return Object(h["k"])(t,e);const a=this.view.basemapTerrain;return a.ready?Object(h["v"])(e,a.extent,t):Object(h["k"])(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await Object(l["k"])(this.view,"stationary",e),Object(o["w"])(e)}};Object(i["a"])([Object(c["b"])()],P.prototype,"layer",void 0),Object(i["a"])([Object(c["b"])()],P.prototype,"suspended",void 0),Object(i["a"])([Object(c["b"])({readOnly:!0})],P.prototype,"fullExtentInLocalViewSpatialReference",void 0),Object(i["a"])([Object(c["b"])()],P.prototype,"updating",void 0),P=Object(i["a"])([Object(d["a"])("esri.views.3d.layers.DynamicLayerView3D")],P);const S=Object(h["l"])(),C=P},ad73:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var i=a("b2b2"),r=a("c1da");async function s(e,t=e.popupTemplate){if(!Object(i["l"])(t))return[];const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:c}=e;if(a.includes("*"))return["*"];const d=s?await Object(r["n"])(e):[],u=Object(r["j"])(e.fieldsIndex,[...a,...d]);return o&&u.push(o),u&&n&&e.fieldsIndex.has(n)&&-1===u.indexOf(n)&&u.push(n),u&&l&&e.fieldsIndex.has(l)&&-1===u.indexOf(l)&&u.push(l),c&&c.forEach(t=>{const{keyField:a}=t;u&&a&&e.fieldsIndex.has(a)&&-1===u.indexOf(a)&&u.push(a)}),u}function n(e,t){return e.popupTemplate?e.popupTemplate:Object(i["l"])(t)&&t.defaultPopupTemplateEnabled&&Object(i["l"])(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},ad96:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var i=a("b061"),r=a("68af"),s=a("35b3"),n=a("7438"),o=a("8675"),l=a("7c51"),c=a("a4ee"),d=a("d272"),u=a("c6d7"),h=a("8e97"),p=a("c3a4"),b=a("ca98"),m=a("da35"),g=a("fa1e"),f=a("c829"),y=a("87b7"),O=a("f3d9"),v=a("189c");class w extends b["a"]{initializeProgram(e){const t=w.shader.get(),a=this.configuration,i=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new f["a"](e.rctx,i,g["a"])}bindPass(e,t){Object(h["c"])(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(u["a"])(this.program,t))}bindDraw(e){Object(h["d"])(this.program,e),Object(d["c"])(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,t){const a=this.configuration,i=3===e,r=2===e;return Object(v["g"])({blending:0!==a.output&&7!==a.output||!a.transparent?null:i?j:Object(n["a"])(e),culling:Object(v["c"])(a.cullFace),depthTest:{func:Object(n["b"])(e)},depthWrite:i?a.writeDepth&&v["e"]:Object(n["c"])(e),colorWrite:v["d"],stencilWrite:a.sceneHasOcludees?y["j"]:null,stencilTest:a.sceneHasOcludees?t?y["f"]:y["e"]:null,polygonOffset:i||r?null:Object(n["h"])(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}w.shader=new p["a"](O["a"],()=>a.e("chunk-2d215c84").then(a.bind(null,"c056")));const j=Object(v["i"])(1,771);class x extends m["a"]{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(c["a"])([Object(m["b"])({count:8})],x.prototype,"output",void 0),Object(c["a"])([Object(m["b"])({count:3})],x.prototype,"cullFace",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"slicePlaneEnabled",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"transparent",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"enableOffset",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"writeDepth",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"sceneHasOcludees",void 0),Object(c["a"])([Object(m["b"])({count:4})],x.prototype,"transparencyPassType",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"multipassTerrainEnabled",void 0),Object(c["a"])([Object(m["b"])()],x.prototype,"cullAboveGround",void 0);class _ extends s["a"]{constructor(e){super(e,R),this.supportsEdges=!0,this.techniqueConfig=new x}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<n["e"],this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,i,r,s,n){Object(l["i"])(e,t,i,r,s,void 0,n)}requiresSlot(e,t){return 20===e||(4===Object(i["b"])(t)?2===e:e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2))}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new E(e):void 0}createBufferWriter(){return new o["a"](o["d"])}}class E extends r["a"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(w,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}const R={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...s["b"]}},c802:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var i=a("a4ee"),r=a("ce50"),s=a("b2b2"),n=a("59b2"),o=(a("b50f"),a("c120"),a("cea0"),a("d386")),l=a("4ae5"),c=a("22f4"),d=a("69dd"),u=a("ad73");const h=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)throw new r["a"]("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:i}=a,n=Object(u["a"])(a,t);if(!i||!Object(s["l"])(n))throw new r["a"]("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:n});const o=await n.getRequiredFields(),c=new d["a"];c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=o,c.outSpatialReference=e.spatialReference;const h=this.view.resolution,p="2d"===this.view.type?new l["a"](h,h,this.view.spatialReference):new l["a"](.5*h,.5*h,this.view.spatialReference),{returnTopmostRaster:b,showNoDataRecords:m}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},g={returnDomainValues:!0,returnTopmostRaster:b,pixelSize:p,showNoDataRecords:m,signal:Object(s["l"])(t)?t.signal:null};return a.queryVisibleRasters(c,g).then(e=>e)}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return Object(i["a"])([Object(n["b"])()],t.prototype,"layer",void 0),Object(i["a"])([Object(n["b"])()],t.prototype,"suspended",void 0),Object(i["a"])([Object(n["b"])(c["a"])],t.prototype,"timeExtent",void 0),Object(i["a"])([Object(n["b"])()],t.prototype,"view",void 0),t=Object(i["a"])([Object(o["a"])("esri.views.layers.ImageryLayerView")],t),t}},eec2:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("b2b2"),r=a("9786"),s=a("e2e8");function n(e){const t=e.view.spatialReference,a=e.layer.fullExtent,n=Object(i["l"])(a)&&a.spatialReference;if(Object(i["k"])(a)||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(a.clone());const o=Object(r["d"])(a,t);return Object(i["l"])(o)?Promise.resolve(o):e.view.state.isLocal?Object(s["projectGeometry"])(a,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null)}},f3d9:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return u}));var i=a("d272"),r=a("4db9"),s=a("d047"),n=a("c6d7"),o=a("ebd5"),l=a("4377"),c=a("3886"),d=a("690a");function u(e){const t=new d["a"];return t.include(r["a"],{linearDepth:!1}),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),t.vertex.code.add(c["a"]`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(i["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(s["a"]),t.include(n["b"],e)),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("opacity","float"),t.varyings.add("vTexCoord","vec2"),7===e.output?t.fragment.code.add(c["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${c["a"].float(o["b"])}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(t.fragment.include(l["a"]),t.fragment.code.add(c["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${c["a"].float(o["b"])}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}const h=Object.freeze({__proto__:null,build:u})}}]);
//# sourceMappingURL=chunk-cf9611a8.f05eb198.js.map