(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f1b3b92"],{"0e25":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("c649");class r{constructor(){this.items=[]}addObject(e,t){this.items.push({type:0,objectStateId:t,object:e})}addRenderGeometry(e,t,i){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:i})}addExternal(e,t){this.items.push({type:2,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];0===i.type&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];1===i.type&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeAll(){this.items.forEach(e=>{this._removeObjectStateItem(e)}),this.items=[]}_removeObjectStateItem(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}class a{constructor(e,t){this.stateType=e,this.objectIdField=t,this.objectStateSet=new r,this.ids=new Set,this.paused=!1}hasGraphic(e){if(this.objectIdField){const t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}class n{constructor(e){this._graphicsCore=e,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll()),this._stateSets=null}acquireSet(e,t){const i=new a(e,t);this._stateSets.push(i);const r=Object(s["b"])(()=>this.releaseSet(i));return{set:i,handle:r}}releaseSet(e){e.objectStateSet.removeAll();const t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}_addObjectStateSet(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}_removeObjectStateSet(e,t){e.removeObjectState(t.objectStateSet)}setUid(e,t){e.ids.add(t);const i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}setUids(e,t){t.forEach(t=>this.setUid(e,t))}setObjectIds(e,t){t.forEach(t=>e.ids.add(t)),this.initializeSet(e)}addGraphic(e){this._stateSets.forEach(t=>{!t.paused&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)})}removeGraphic(e){this._stateSets.forEach(t=>{t.hasGraphic(e)&&this._removeObjectStateSet(e,t)})}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll())}initializeSet(e){const t=this._graphicsCore.graphics3DGraphics;e.objectIdField?t.forEach(t=>{t&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)}):e.ids.forEach(i=>{const s=t.get(i);s&&this._addObjectStateSet(s,e)})}get test(){return{states:this._stateSets}}}},"0efb":function(e,t,i){"use strict";i.d(t,"a",(function(){return E}));var s=i("a4ee"),r=i("8d60"),a=i("fc29"),n=i("2c4f"),h=i("af40"),c=i("b2b2"),o=i("f4cc"),l=i("3795"),d=i("59b2"),p=(i("b50f"),i("c120"),i("cea0"),i("d386")),u=i("0f1c"),g=i("a6a3"),b=i("d3cf"),y=i("69dd"),m=i("ed70"),f=i("4c84"),O=i("8202"),j=i("0e25"),v=i("3422"),S=i("ba58"),w=i("d347");let I=class extends a["a"]{constructor(e){super(e),this.graphicsCore=null,this.elevationAlignment=new O["a"],this.watchUpdatingTracking=new w["a"],this.handles=new h["a"],this.suspendResumeExtent=null}normalizeCtorArgs(e){let t=null;e.scaleVisibilityEnabled&&(delete(e={...e}).scaleVisibilityEnabled,t=new v["a"]);const i=new f["a"]({owner:e.owner,layer:e.layer,preferredUpdatePolicy:1,graphicSymbolSupported:!0});return{...e,graphicsCore:i,scaleVisibility:t}}initialize(){const e=this.scaleVisibility;Object(c["l"])(e)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>e.layerMinMaxScaleChangeHandler()),"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(e,t)=>{Object(u["a"])(e,t)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})}async setup(){const e=(e,t,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i);if(this.elevationAlignment.setup(this.owner,e,this.graphicsCore,this.view.elevationProvider),Object(c["l"])(this.scaleVisibility)&&"minScale"in this.layer){const t=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this.owner,this.layer,e,this.graphicsCore,t)}this._set("objectStates",new j["a"](this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(Object(o["m"])(t))return;throw t}this.destroyed||(this.handles.add(this.view.watch("clippingArea",()=>this.updateClippingExtent(),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles=Object(c["e"])(this.handles),this.watchUpdatingTracking.destroy(),this._set("elevationAlignment",Object(c["e"])(this.elevationAlignment)),this._set("scaleVisibility",Object(c["e"])(this.scaleVisibility)),this._set("objectStates",Object(c["e"])(this.objectStates)),this._set("graphicsCore",Object(c["e"])(this.graphicsCore))}get suspended(){return!(!Object(c["l"])(this.scaleVisibility)||!this.scaleVisibility.suspended)}get updating(){var e,t;return!!(null!=(e=this.graphicsCore)&&e.updating||Object(c["l"])(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(t=this.watchUpdatingTracking)&&t.updating)}getGraphicFromGraphicUid(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find(t=>t.uid===e);if(t){const e=this.layer instanceof g["a"]?this.layer:null;return Object(b["c"])(t,e)}}}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof y["a"])return x;if("number"==typeof e)return this.highlight([e]);if(e instanceof r["a"])return this.highlight([e]);if(e instanceof n["a"]&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof r["a"]){const t=e.map(e=>e.uid),{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(i,t),s}if("number"==typeof e[0]){const t=e,{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setObjectIds(i,t),s}}return x}updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}updateSuspendResumeExtent(){Object(c["k"])(this.scaleVisibility)||(this.suspendResumeExtent=Object(S["e"])(this.graphicsCore.computedExtent,this.suspendResumeExtent,m["a"],this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))}setupSuspendResumeExtent(){Object(c["k"])(this.scaleVisibility)||(Object(l["a"])(this.graphicsCore,"computedExtent",e=>this.updateSuspendResumeExtent(),!0),this.graphicsCore.watch("extentPadding",e=>this.updateSuspendResumeExtent()))}};Object(s["a"])([Object(d["b"])({constructOnly:!0})],I.prototype,"owner",void 0),Object(s["a"])([Object(d["b"])({constructOnly:!0})],I.prototype,"layer",void 0),Object(s["a"])([Object(d["b"])({readOnly:!0,aliasOf:"owner.view"})],I.prototype,"view",void 0),Object(s["a"])([Object(d["b"])({constructOnly:!0})],I.prototype,"graphicsCore",void 0),Object(s["a"])([Object(d["b"])({constructOnly:!0})],I.prototype,"scaleVisibility",void 0),Object(s["a"])([Object(d["b"])({readOnly:!0})],I.prototype,"elevationAlignment",void 0),Object(s["a"])([Object(d["b"])({readOnly:!0})],I.prototype,"objectStates",void 0),Object(s["a"])([Object(d["b"])({readOnly:!0})],I.prototype,"watchUpdatingTracking",void 0),Object(s["a"])([Object(d["b"])({readOnly:!0})],I.prototype,"suspended",null),Object(s["a"])([Object(d["b"])({readOnly:!0})],I.prototype,"updating",null),I=Object(s["a"])([Object(p["a"])("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],I);const x={remove(){},pause(){},resume(){}},E=I},8202:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var s=i("a4ee"),r=i("fc29"),a=i("ce6d"),n=i("af40"),h=i("b2b2"),c=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),l=i("8a44"),d=i("9180"),p=i("9305");const u=.05;class g{constructor(){this._extents=new l["a"]({allocator:e=>e||Object(d["l"])()}),this._tmpExtent=Object(d["l"])(),this._dirty=!1}get empty(){return 0===this._extents.length}get size(){return this._extents.length}clear(){this._extents.clear()}add(e){this.contains(e)||(this.removeContained(e),Object(d["k"])(this._extents.pushNew(),e),this._dirty=!0)}pop(){return this._dirty&&this.mergeTight(),this._extents.pop()}merge(e){return this.mergeTight(e),e.hasProgressed}mergeTight(e=p["d"]){const t=this._extents,i=new Set;let s=0;for(;s!==t.length;){t.sort((e,t)=>e[0]-t[0]),s=t.length,i.clear();for(let s=0;s<t.length;++s){if(e.done)return;const r=t.getItemAt(s);for(let e=s+1;e<t.length;++e){const s=t.getItemAt(e);if(s[0]>=r[2])break;i.add(s)}i.forEach(s=>{if(r===s)return;if(s[2]<=r[0])return void i.delete(s);const a=Object(d["d"])(r),n=Object(d["d"])(s),h=this._tmpExtent;Object(d["p"])(r,s,h);const c=a+n;(Object(d["d"])(h)-c)/c<u&&(Object(d["k"])(r,h),i.delete(s),t.remove(s),e.madeProgress())}),i.add(r)}}this._dirty=!1}contains(e){return this._extents.some(t=>Object(d["g"])(t,e))}removeContained(e){this._extents.filterInPlace(t=>!Object(d["g"])(e,t))}get test(){const e=this;return{containsPoint:t=>e._extents.some(e=>Object(d["h"])(e,t))}}}let b=class extends r["a"]{constructor(){super(...arguments),this.dirtyExtents=new g,this.globalDirty=!1,this.averageExtentUpdateSize=0,this.dirtyGraphicsSet=new Set,this.handles=new n["a"],this.updateElevation=!1,this.layerView=null,this.graphicsCore=null,this.events=new a["a"]}setup(e,t,i,s){this.layerView=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=s;const r=this.layerView.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",e=>this._elevationChanged(e)),this.layerView.watch("suspended",()=>this.suspendedChange()),r.registerTask(p["b"].ELEVATION_ALIGNMENT,this)])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.layerView=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}suspendedChange(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}get updating(){return this.running}get running(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}get updatingRemaining(){return this.dirtyGraphicsSet.size+this.dirtyExtents.size*this.averageExtentUpdateSize}runTask(e){for(this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run(()=>this.dirtyExtents.merge(e));this.running&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.layerView.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(e){const t=this.layerView.view.renderCoordsHelper,i=0===this.graphicsCore.effectiveUpdatePolicy;for(const s of this.dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),Object(h["l"])(r)&&(r.alignWithElevation(this.elevationProvider,t,i),e.madeProgress()),e.done)return}}_updateDirtyExtents(e){for(;!this.dirtyExtents.empty&&!e.done;){const t=this.dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:t,spatialReference:i});const s=this.dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(t,i,e=>{const t=this.graphicsCore.getGraphics3DGraphicById(e);Object(h["l"])(t)&&t.needsElevationUpdates()&&this.dirtyGraphicsSet.add(e)}),this.averageExtentUpdateSize=.1*(this.dirtyGraphicsSet.size-s)+.9*this.averageExtentUpdateSize,e.madeProgress()}}markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((e,t)=>this.dirtyGraphicsSet.add(t))}_elevationChanged(e){if("scene"===e.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const{extent:t,spatialReference:i}=e;if(this.layerView.suspended){if(!this.updateElevation){const e=this.graphicsCore.computedExtent;e&&t[2]>e.xmin&&t[0]<e.xmax&&t[3]>e.ymin&&t[1]<e.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};Object(s["a"])([Object(c["b"])({readOnly:!0})],b.prototype,"updating",null),Object(s["a"])([Object(c["b"])({readOnly:!0})],b.prototype,"updatingRemaining",null),b=Object(s["a"])([Object(o["a"])("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],b);const y=b},bb49:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return y}));var s=i("a4ee"),r=i("b2b2"),a=i("3795"),n=i("59b2"),h=(i("b50f"),i("c120"),i("cea0"),i("d386")),c=i("66af"),o=i("ebae"),l=i("0efb"),d=i("ba58"),p=i("eec2"),u=i("365a");const g=1.2;let b=class extends(Object(c["a"])(u["a"])){constructor(){super(...arguments),this.type="graphics-3d",this.frustumVisibility=new o["a"],this.slicePlaneEnabled=!1,this.drapeSourceType=1,this.suspendResumeExtent=null,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("graphics3d",new l["a"]({owner:this,layer:this.layer,scaleVisibilityEnabled:!0})),this.graphics3d.setup(),this.frustumVisibility.setup(this),this.setupSuspendResumeExtent(),this.updatingHandles.add(this,"fullOpacity",()=>this.graphics3d.graphicsCore.opacityChange()),this.handles.add(this.layer.on("graphic-update",e=>this.graphics3d.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(Object(p["a"])(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.handles.add(Object(a["m"])(this.view,"basemapTerrain.ready",()=>this.notifyChange("updating")))}destroy(){this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null)),this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))}get legendEnabled(){return this.canResume()&&!this.frustumVisibility.suspended}get suspendInfo(){var e;const t={};return Object(r["l"])(this.graphics3d.scaleVisibility)&&this.graphics3d.scaleVisibility.suspended&&(t.outsideScaleRange=!0),t.outsideOfView=!(null==(e=this.frustumVisibility)||!e.suspended),t}async fetchPopupFeatures(e,t){return Object(r["l"])(t)?t.clientGraphics:null}notifyGraphicGeometryChanged(e){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(e)}get graphics3DGraphics(){return this.graphics3d.graphicsCore.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}get symbolUpdateType(){return this.graphics3d.graphicsCore.symbolUpdateType}getGraphicFromGraphicUid(e){return this.graphics3d.getGraphicFromGraphicUid(e)}whenGraphicBounds(e,t){return this.graphics3d.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphics3d.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.graphics3d.maskOccludee(e)}highlight(e){return this.graphics3d.highlight(e)}get updatePolicy(){var e;return(null==(e=this.graphics3d)?void 0:e.graphicsCore.effectiveUpdatePolicy)||1}canResume(){var e;return super.canResume()&&!(null!=(e=this.graphics3d)&&e.suspended)}isUpdating(){var e,t;return!(!(this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&(this.layer.internal||null!=(e=this.view)&&null!=(t=e.basemapTerrain)&&t.ready))}setupSuspendResumeExtent(){const e=()=>{this.suspendResumeExtent=Object(d["e"])(this.graphics3d.graphicsCore.computedExtent,this.suspendResumeExtent,g,this.graphics3d.graphicsCore.extentPadding),this.frustumVisibility.setExtent(this.suspendResumeExtent)};Object(a["a"])(this.graphics3d.graphicsCore,"computedExtent",()=>e(),!0),Object(a["e"])(this.graphics3d.graphicsCore,"extentPadding",()=>e(),!0)}get performanceInfo(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}}};Object(s["a"])([Object(n["b"])({aliasOf:"layer.graphics"})],b.prototype,"loadedGraphics",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"suspended",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"legendEnabled",null),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"updating",void 0),Object(s["a"])([Object(n["b"])()],b.prototype,"layer",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"frustumVisibility",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"graphics3d",void 0),Object(s["a"])([Object(n["b"])({type:Boolean})],b.prototype,"slicePlaneEnabled",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],b.prototype,"suspendInfo",null),b=Object(s["a"])([Object(h["a"])("esri.views.3d.layers.GraphicsLayerView3D")],b);const y=b},d97e:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("b2b2");function r(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,c){if(Object(s["k"])(t)||!t.lengths.length)return null;const o="upperLeft"===(null==c?void 0:c.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,d=[],p=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:g}=t,b=r(i,a);let y=0;for(const s of u){const e=n(p,g,y,s,i,a,o);e&&d.push(e),y+=s*b}if(d.sort((e,t)=>{let s=o*e[2]-o*t[2];return 0===s&&i&&(s=e[4]-t[4]),s}),d.length){let e=6*d[0][2];l[0]=d[0][0]/e,l[1]=d[0][1]/e,i&&(e=6*d[0][4],l[2]=0!==e?d[0][3]/e:0),(l[0]<p[0]||l[0]>p[1]||l[1]<p[2]||l[1]>p[3]||i&&(l[2]<p[4]||l[2]>p[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?h(g,0,u[0],i,a):null;if(!e)return null;l[0]=e[0],l[1]=e[1],i&&e.length>2&&(l[2]=e[2])}return e}function n(e,t,i,s,a,n,h=1){const c=r(a,n);let o=i,l=i+c,d=0,p=0,u=0,g=0,b=0;for(let r=0,m=s-1;r<m;r++,o+=c,l+=c){const i=t[o],s=t[o+1],r=t[o+2],n=t[l],h=t[l+1],c=t[l+2];let y=i*h-n*s;g+=y,d+=(i+n)*y,p+=(s+h)*y,a&&(y=i*c-n*r,u+=(r+c)*y,b+=y),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),a&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(g*h>0&&(g*=-1),b*h>0&&(b*=-1),!g)return null;const y=[d,p,.5*g];return a&&(y[3]=u,y[4]=.5*b),y}function h(e,t,i,s,a){const n=r(s,a);let h=t,p=t+n,u=0,g=0,b=0,y=0;for(let r=0,m=i-1;r<m;r++,h+=n,p+=n){const t=e[h],i=e[h+1],r=e[h+2],a=e[p],n=e[p+1],m=e[p+2],f=s?o(t,i,r,a,n,m):c(t,i,a,n);if(f)if(u+=f,s){const e=d(t,i,r,a,n,m);g+=f*e[0],b+=f*e[1],y+=f*e[2]}else{const e=l(t,i,a,n);g+=f*e[0],b+=f*e[1]}}return u>0?s?[g/u,b/u,y/u]:[g/u,b/u]:i>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function c(e,t,i,s){const r=i-e,a=s-t;return Math.sqrt(r*r+a*a)}function o(e,t,i,s,r,a){const n=s-e,h=r-t,c=a-i;return Math.sqrt(n*n+h*h+c*c)}function l(e,t,i,s){return[e+.5*(i-e),t+.5*(s-t)]}function d(e,t,i,s,r,a){return[e+.5*(s-e),t+.5*(r-t),i+.5*(a-i)]}},ebae:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var s=i("a4ee"),r=i("fc29"),a=i("af40"),n=i("3795"),h=i("59b2"),c=(i("b50f"),i("c120"),i("cea0"),i("d386")),o=i("f694"),l=i("6b38"),d=i("9305");const p=1.2;let u=class extends r["a"]{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new a["a"],this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new l["a"]({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,i=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",()=>this.viewChange()),t.state.watch("camera",()=>this.viewChange(),!0),s.registerTask(d["b"].FRUSTUM_VISIBILITY,this),i.on("elevation-bounds-change",()=>this.elevationBoundsChange())]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([Object(n["a"])(i,["opacity","wireframe"],()=>this.updateIsVisibleBelowSurface()),Object(n["a"])(t,"map.ground.navigationConstraint.type",()=>this.updateIsVisibleBelowSurface())])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,s=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||s}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*Object(o["e"])(e.spatialReference).radius;else{const{min:i,max:s}=e.basemapTerrain.elevationBounds;t=i-Math.max(1,(s-i)*(p-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}get running(){return this.updating}runTask(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=Object(o["e"])(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};Object(s["a"])([Object(h["b"])({readOnly:!0})],u.prototype,"suspended",void 0),Object(s["a"])([Object(h["b"])({readOnly:!0})],u.prototype,"updating",void 0),u=Object(s["a"])([Object(c["a"])("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],u);const g=u},eec2:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("b2b2"),r=i("9786"),a=i("e2e8");function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=Object(s["l"])(i)&&i.spatialReference;if(Object(s["k"])(i)||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const h=Object(r["d"])(i,t);return Object(s["l"])(h)?Promise.resolve(h):e.view.state.isLocal?Object(a["projectGeometry"])(i,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null)}}}]);
//# sourceMappingURL=chunk-5f1b3b92.631784b1.js.map