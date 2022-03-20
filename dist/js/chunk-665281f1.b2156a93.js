(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665281f1"],{"536f":function(e,t,a){"use strict";function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e){let t=0,a=0;for(let r=0;r<e.length;r++){const i=e[r].size;"number"==typeof i&&(t+=i,a++)}return t/a}function n(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?i(e.stops):t}function s(e,t){if(!t)return e;const a=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:a,minSize:r}=t;return(n(a,e)+n(r,e))/2});let r=0;const i=a.length;if(0===i)return e;for(let n=0;n<i;n++)r+=a[n];const s=Math.floor(r/i);return Math.max(s,e)}function o(e){const t=e&&e.renderer,a="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return a;const i="visualVariables"in t?s(a,t.visualVariables):a;if("simple"===t.type)return r(i,t.symbol);if("unique-value"===t.type){let e=i;return t.uniqueValueInfos.forEach(t=>{e=r(e,t.symbol)}),e}if("class-breaks"===t.type){let e=i;return t.classBreakInfos.forEach(t=>{e=r(e,t.symbol)}),e}return t.type,i}a.d(t,"a",(function(){return o}))},"537c":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("a4ee"),i=a("ce50"),n=a("b2b2"),s=a("f4cc"),o=a("59b2"),l=(a("b50f"),a("c120"),a("cea0"),a("d386")),c=a("22f4"),u=a("70ce"),d=a("536f"),h=a("82fa"),p=a("ad73"),b=a("f353");const m=e=>{let t=class extends e{initialize(){this.exportImageParameters=new u["a"]({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return Promise.reject(new i["a"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const r=this.get("view.scale"),o=[],l=async e=>{const a=0===e.minScale||r<=e.minScale,i=0===e.maxScale||r>=e.maxScale;if(e.visible&&a&&i)if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const a=Object(p["a"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(n["l"])(a)&&o.unshift({sublayer:e,popupTemplate:a})}},c=a.sublayers.toArray().reverse().map(l);await Promise.all(c);const u=o.map(async({sublayer:a,popupTemplate:r})=>{await a.load().catch(()=>{});const i=a.createQuery(),s=Object(n["l"])(t)?t.event:null,o=Object(d["a"])({renderer:a.renderer,event:s}),l=this.createFetchPopupFeaturesQueryGeometry(e,o);if(i.geometry=l,i.outFields=await Object(p["b"])(a,r),"map-image"===this.layer.type&&"floors"in this.view){var c,u;const e=null==(c=this.view)||null==(u=c.floors)?void 0:u.clone(),t=Object(b["c"])(e,a);Object(n["l"])(t)&&(i.where=i.where?`(${i.where}) AND (${t})`:t)}const h=await this._loadArcadeModules(r);return h&&h.arcadeUtils.hasGeometryOperations(r)||(i.maxAllowableOffset=l.width/o),(await a.queryFeatures(i)).features});return(await Object(s["j"])(u)).reduce((e,t)=>t.value?[...e,...t.value]:e,[]).filter(e=>null!=e)}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some(e=>"expression"===e.type))return Object(h["e"])()}};return Object(r["a"])([Object(o["b"])()],t.prototype,"exportImageParameters",void 0),Object(r["a"])([Object(o["b"])({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(r["a"])([Object(o["b"])()],t.prototype,"layer",void 0),Object(r["a"])([Object(o["b"])()],t.prototype,"suspended",void 0),Object(r["a"])([Object(o["b"])(c["a"])],t.prototype,"timeExtent",void 0),t=Object(r["a"])([Object(l["a"])("esri.views.layers.MapImageLayerView")],t),t}},"6c7a":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("a4ee"),i=a("e92d"),n=a("f4cc"),s=a("3795"),o=a("59b2"),l=(a("b50f"),a("c120"),a("cea0"),a("d386"));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(s["b"])(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(n["m"])(e)||i["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(r["a"])([Object(o["b"])()],t.prototype,"layer",void 0),t=Object(r["a"])([Object(l["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}},"843f":function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var r=a("a4ee"),i=a("792b"),n=a("e92d"),s=a("b2b2"),o=a("f4cc"),l=a("3795"),c=a("59b2"),u=(a("b50f"),a("c120"),a("cea0"),a("d386")),d=a("3af1"),h=a("9180"),p=a("66af"),b=a("0278"),m=a("caf7");function f(e,t,a){const r=Object(h["B"])(e)/Object(h["u"])(e),i={width:a,height:a};return r>1.0001?i.height=a/r:r<.9999&&(i.width=a*r),i.width=Math.round(i.width/(Object(h["B"])(e)/Object(h["B"])(t))),i.height=Math.round(i.height/(Object(h["u"])(e)/Object(h["u"])(t))),i}function g(e){return m["a"].createSquareGeometry([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function y(e,t){if(!Object(h["w"])(e,t))return g(t);const a=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],i=t[2]-t[0],n=t[3]-t[1],s=r[0]>0&&r[2]>0?3:2,o=a[0]>0&&a[2]>0?3:2,l=(o+1)*(s+1),c=new Float64Array(3*l),u=new Float32Array(2*l),d=new Uint32Array(6*(o*s-1));let p=0,m=0,f=0,y=0,v=0;for(let h=0;h<4;h++){const e=a[h];if(e<=0)continue;let o=0;for(let a=0;a<4;a++){const e=r[a];e<=0||(c[m++]=t[0]+o,c[m++]=t[1]+p,c[m++]=-1,u[f++]=o/i,u[f++]=p/n,a<3&&h<3&&(1!==a||1!==h)&&(d[v++]=y,d[v++]=y+1,d[v++]=y+s+1,d[v++]=y+1,d[v++]=y+s+2,d[v++]=y+s+1),y++,o+=e)}p+=e}const x=new Uint32Array(d.length);return new b["a"]([["position",{size:3,data:c,exclusive:!0}],["normal",{size:3,data:O,exclusive:!0}],["uv0",{size:2,data:u,exclusive:!0}]],[["position",d],["normal",x],["uv0",d]])}const O=[0,0,1];var v=a("eec2"),x=a("6611"),j=a("6061"),w=a("1e2c"),_=a("ad96"),P=a("365a"),E=a("6c7a");const S=n["a"].getLogger("esri.views.3d.layers.DynamicLayerView3D");let T=class extends(Object(E["a"])(Object(p["a"])(P["a"]))){constructor(){super(...arguments),this.drapeSourceType=0,this.updatePolicy=1,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this.refreshDebounced=Object(o["i"])(async e=>{this.destroyed||await this._doRefresh(e).catch(e=>{Object(o["m"])(e)||n["a"].getLogger(this.declaredClass).error(e)})},2e3)}initialize(){this.addResolvingPromise(Object(v["a"])(this).then(e=>this._set("fullExtentInLocalViewSpatialReference",e))),this.updatingHandles.add(this,"suspended",()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(e=>{this._overlays[e.index]=e,this._updateImageExtent(e)})}_updateImageExtent(e){const t=this._clippedExtent(e.extent,C);if(Object(s["k"])(t))return;const a=f(e.extent,t,e.resolution);let r=e.pixelRatio*this.view.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(a.width>e){const t=e/a.width;a.height=Math.floor(a.height*t),a.width=e,r*=t}if(a.height>t){const e=t/a.height;a.width=Math.floor(a.width*e),a.height=t,r*=e}}const i=this._extents[e.index];i&&Object(h["o"])(i.extent,t)&&this._imageSizeEquals(t,i.imageSize,a)||(this._extents[e.index]={extent:Object(h["l"])(t),imageSize:a,pixelRatio:r},this.suspended||this._fetch(e.index).catch(e=>{Object(o["m"])(e)||S.error(e)}))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&t.push(this._fetch(a,e));await Object(o["j"])(t)}canResume(){if(!super.canResume())return!1;if(this._isScaleRangeLayer()){const{minScale:e,maxScale:t}=this.layer;if(e>0||t>0){const a=this.view.scale;if(a<t||e>0&&a>e)return!1}}return!0}isUpdating(){return this._images.some(e=>!!e.loadingPromise)}async processResult(e,t,a){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const a=t.extent;if(new d["a"](a[0],a[1],a[2],a[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await Object(i["b"])(this._images,async(a,r)=>{a&&(await e(a,t),await this._createStageObjects(r,a.image,t))})}_imageSizeEquals(e,t,a){if(!this.maximumDataResolution)return!1;const r=Object(h["B"])(e)/this.maximumDataResolution.x,i=Object(h["u"])(e)/this.maximumDataResolution.y,n=r/t.width,s=i/t.height,o=r/a.width,l=i/a.height,c=Math.abs(n-o),u=Math.abs(s-l),d=x["a"].TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return c<=d&&u<=d}async _fetch(e,t){if(this.suspended)return;const a=this._extents[e],r=a.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:Object(h["l"])(r)});const i=this._images[e];i.loadingAbortController&&(i.loadingAbortController.abort(),i.loadingAbortController=null);const n=new d["a"](r[0],r[1],r[2],r[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const s=new AbortController;i.loadingAbortController=s,Object(o["r"])(t,()=>s.abort());const l=s.signal,c=this._waitFetchReady(l).then(()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:l},{height:r,width:i}=a.imageSize;return this.layer.fetchImage(n,i,r,t)}).then(e=>{if(Object(o["n"])(l))throw S.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Object(o["e"])();return this.processResult(i,e)}).then(()=>Object(h["k"])(i.renderExtent,r));i.loadingPromise=c,Object(o["c"])(c,()=>{c===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}),this.notifyChange("updating"),await c.then(async()=>{if(l.aborted)throw Object(o["e"])();await this._createStageObjects(e,i.image,l),this.notifyChange("updating")}).catch(e=>{throw e&&!Object(o["m"])(e)&&S.error(e),this.notifyChange("updating"),e})}_clearImage(e){const t=this._images[e];if(t){Object(s["l"])(t.renderGeometry)&&(this.view.basemapTerrain.overlayManager.renderer.removeGeometries([t.renderGeometry],this,2),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,a){const r=this.view._stage,n=this._images[e],l=this.view.basemapTerrain.overlayManager.renderer,c=()=>{r.remove(n.texture),n.texture=null,Object(s["l"])(n.renderGeometry)&&(l.removeGeometries([n.renderGeometry],this,2),n.renderGeometry=null)};if(t){const u=new w["a"](t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:33071,t:33071}});let d;if(await Object(i["d"])(this._images[0===e?1:0].loadingPromise),Object(o["w"])(a),0===e)d=g(n.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void c();d=y(e,n.renderExtent)}c(),r.add(u),r.loadSynchronous(u),n.texture=u,Object(s["k"])(n.material)?(n.material=new _["a"]({transparent:!0,textureId:u.id}),r.add(n.material)):n.material.setParameters({textureId:u.id}),n.renderGeometry=new j["a"](d,n.material),n.renderGeometry.origin=this._overlays[e].renderLocalOrigin,l.addGeometries([n.renderGeometry],this,2)}else c(),r.remove(n.material),n.material=null}_isScaleRangeLayer(){return"minScale"in this.layer&&"maxScale"in this.layer}_isScaleRangeActive(){return!!this._isScaleRangeLayer()&&(this.layer.minScale>0||this.layer.maxScale>0)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return Object(h["k"])(t,e);const a=this.view.basemapTerrain;return a.ready?Object(h["v"])(e,a.extent,t):Object(h["k"])(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await Object(l["k"])(this.view,"stationary",e),Object(o["w"])(e)}};Object(r["a"])([Object(c["b"])()],T.prototype,"layer",void 0),Object(r["a"])([Object(c["b"])()],T.prototype,"suspended",void 0),Object(r["a"])([Object(c["b"])({readOnly:!0})],T.prototype,"fullExtentInLocalViewSpatialReference",void 0),Object(r["a"])([Object(c["b"])()],T.prototype,"updating",void 0),T=Object(r["a"])([Object(u["a"])("esri.views.3d.layers.DynamicLayerView3D")],T);const C=Object(h["l"])(),I=T},"997a":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var r=a("a4ee"),i=(a("e92d"),a("cea0"),a("b50f"),a("c120"),a("2dd4"),a("d386")),n=a("843f"),s=a("537c"),o=a("e94b");let l=class extends(Object(s["a"])(n["a"])){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(this,"exportImageVersion",()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(e,t){return Object(o["a"])(e,t,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};l=Object(r["a"])([Object(i["a"])("esri.views.3d.layers.MapImageLayerView3D")],l);const c=l},ad73:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));var r=a("b2b2"),i=a("c1da");async function n(e,t=e.popupTemplate){if(!Object(r["l"])(t))return[];const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:s,typeIdField:o,globalIdField:l,relationships:c}=e;if(a.includes("*"))return["*"];const u=n?await Object(i["n"])(e):[],d=Object(i["j"])(e.fieldsIndex,[...a,...u]);return o&&d.push(o),d&&s&&e.fieldsIndex.has(s)&&-1===d.indexOf(s)&&d.push(s),d&&l&&e.fieldsIndex.has(l)&&-1===d.indexOf(l)&&d.push(l),c&&c.forEach(t=>{const{keyField:a}=t;d&&a&&e.fieldsIndex.has(a)&&-1===d.indexOf(a)&&d.push(a)}),d}function s(e,t){return e.popupTemplate?e.popupTemplate:Object(r["l"])(t)&&t.defaultPopupTemplateEnabled&&Object(r["l"])(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},ad96:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var r=a("b061"),i=a("68af"),n=a("35b3"),s=a("7438"),o=a("8675"),l=a("7c51"),c=a("a4ee"),u=a("d272"),d=a("c6d7"),h=a("8e97"),p=a("c3a4"),b=a("ca98"),m=a("da35"),f=a("fa1e"),g=a("c829"),y=a("87b7"),O=a("f3d9"),v=a("189c");class x extends b["a"]{initializeProgram(e){const t=x.shader.get(),a=this.configuration,r=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new g["a"](e.rctx,r,f["a"])}bindPass(e,t){Object(h["c"])(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(d["a"])(this.program,t))}bindDraw(e){Object(h["d"])(this.program,e),Object(u["c"])(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,t){const a=this.configuration,r=3===e,i=2===e;return Object(v["g"])({blending:0!==a.output&&7!==a.output||!a.transparent?null:r?j:Object(s["a"])(e),culling:Object(v["c"])(a.cullFace),depthTest:{func:Object(s["b"])(e)},depthWrite:r?a.writeDepth&&v["e"]:Object(s["c"])(e),colorWrite:v["d"],stencilWrite:a.sceneHasOcludees?y["j"]:null,stencilTest:a.sceneHasOcludees?t?y["f"]:y["e"]:null,polygonOffset:r||i?null:Object(s["h"])(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}x.shader=new p["a"](O["a"],()=>a.e("chunk-2d215c84").then(a.bind(null,"c056")));const j=Object(v["i"])(1,771);class w extends m["a"]{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(c["a"])([Object(m["b"])({count:8})],w.prototype,"output",void 0),Object(c["a"])([Object(m["b"])({count:3})],w.prototype,"cullFace",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"slicePlaneEnabled",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"transparent",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"enableOffset",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"writeDepth",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"sceneHasOcludees",void 0),Object(c["a"])([Object(m["b"])({count:4})],w.prototype,"transparencyPassType",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"multipassTerrainEnabled",void 0),Object(c["a"])([Object(m["b"])()],w.prototype,"cullAboveGround",void 0);class _ extends n["a"]{constructor(e){super(e,E),this.supportsEdges=!0,this.techniqueConfig=new w}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<s["e"],this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,r,i,n,s){Object(l["i"])(e,t,r,i,n,void 0,s)}requiresSlot(e,t){return 20===e||(4===Object(r["b"])(t)?2===e:e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2))}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new P(e):void 0}createBufferWriter(){return new o["a"](o["d"])}}class P extends i["a"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(x,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}const E={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...n["b"]}},e94b:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("e06a");var r=a("b2b2"),i=a("8048"),n=(a("536f"),a("3af1"));function s(e,t,a,s=new n["a"]){let o;if("2d"===a.type)o=t*a.resolution;else if("3d"===a.type){const n=a.overlayPixelSizeInMapUnits(e),s=a.basemapSpatialReference;o=Object(r["l"])(s)&&!s.equals(a.spatialReference)?Object(i["f"])(s)/Object(i["f"])(a.spatialReference):t*n}const l=e.x-o,c=e.y-o,u=e.x+o,d=e.y+o,{spatialReference:h}=a;return s.xmin=Math.min(l,u),s.ymin=Math.min(c,d),s.xmax=Math.max(l,u),s.ymax=Math.max(c,d),s.spatialReference=h,s}new n["a"]},eec2:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("b2b2"),i=a("9786"),n=a("e2e8");function s(e){const t=e.view.spatialReference,a=e.layer.fullExtent,s=Object(r["l"])(a)&&a.spatialReference;if(Object(r["k"])(a)||!s)return Promise.resolve(null);if(s.equals(t))return Promise.resolve(a.clone());const o=Object(i["d"])(a,t);return Object(r["l"])(o)?Promise.resolve(o):e.view.state.isLocal?Object(n["projectGeometry"])(a,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null)}},f3d9:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var r=a("d272"),i=a("4db9"),n=a("d047"),s=a("c6d7"),o=a("ebd5"),l=a("4377"),c=a("3886"),u=a("690a");function d(e){const t=new u["a"];return t.include(i["a"],{linearDepth:!1}),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),t.vertex.code.add(c["a"]`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(r["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(n["a"]),t.include(s["b"],e)),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("opacity","float"),t.varyings.add("vTexCoord","vec2"),7===e.output?t.fragment.code.add(c["a"]`
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
    `)),t}const h=Object.freeze({__proto__:null,build:d})}}]);
//# sourceMappingURL=chunk-665281f1.b2156a93.js.map