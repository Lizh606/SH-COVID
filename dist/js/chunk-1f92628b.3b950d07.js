(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f92628b"],{"785c":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return W}));var s=r("a4ee"),o=(r("e06a"),r("4856")),i=(r("b423"),r("261a"),r("b48d"),r("478c"),r("667b"),r("ff57"),r("da00"),r("f976"),r("5cdb")),n=r("b2b2"),a=r("e694"),u=r("e041"),c=r("59b2"),l=(r("b50f"),r("c120")),p=(r("cea0"),r("d386")),d=r("74e2"),b=r("a6a3"),y=r("ce50"),h=r("6d5f"),O=r("e92d"),j=r("f4cc"),f=r("dfa0"),m=r("88d1"),g=r("2edc"),v=r("3af1"),S=r("1219");const F=O["a"].getLogger("esri.layers.graphics.sources.GeoJSONSource");let I=class extends h["a"]{constructor(){super(...arguments),this.type="geojson",this.refresh=Object(j["i"])(async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=Object(n["l"])(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(e=>g["default"].fromJSON(e))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(e=>({count:e.count,extent:v["a"].fromJSON(e.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new y["a"]("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const i of e.addFeatures)r.push(this._serializeFeature(i));if(e.deleteFeatures)for(const i of e.deleteFeatures)"objectId"in i&&null!=i.objectId?s.push(i.objectId):"attributes"in i&&null!=i.attributes[t]&&s.push(i.attributes[t]);if(e.updateFeatures)for(const i of e.updateFeatures)o.push(this._serializeFeature(i));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then(({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y["a"]("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return Object(n["k"])(t)?null:"mesh"===t.type||"extent"===t.type?S["a"].fromExtent(t.extent):t}async _startWorker(e){this._connection=await Object(f["b"])("GeoJSONSourceWorker",{strategy:Object(l["a"])("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:u}=this.layer,c="defaults"===this.layer.originOf("spatialReference"),p={url:n,customParameters:u,fields:t&&t.map(e=>e.toJSON()),geometryType:d["a"].toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:c?null:r&&r.toJSON()},b=await this._connection.invoke("load",p,{signal:e});for(const l of b.warnings)F.warn(l.message,{layer:this.layer,warning:l});b.featureErrors.length&&F.warn(`Encountered ${b.featureErrors.length} validation errors while loading features`,b.featureErrors),this.sourceJSON=b.layerDefinition,this.capabilities=Object(m["a"])(this.sourceJSON.hasZ,!0)}};Object(s["a"])([Object(c["b"])()],I.prototype,"capabilities",void 0),Object(s["a"])([Object(c["b"])()],I.prototype,"type",void 0),Object(s["a"])([Object(c["b"])({constructOnly:!0})],I.prototype,"layer",void 0),Object(s["a"])([Object(c["b"])()],I.prototype,"sourceJSON",void 0),I=Object(s["a"])([Object(p["a"])("esri.layers.graphics.sources.GeoJSONSource")],I);const E=I;var x=r("997b"),w=r("8b28"),R=r("662d"),_=r("b911"),J=r("d9fd"),N=r("8e17"),P=r("5a62"),q=r("601a"),k=r("22f4"),T=r("05b7"),D=r("ace4"),C=r("a2b1"),G=r("a1f3"),Q=r("2feb"),z=r("c1da"),B=r("c246"),A=r("10eb"),M=r("69dd"),U=r("f51b"),L=r("5996");const Z=Object(Q["a"])();let V=class extends(Object(J["a"])(Object(w["a"])(Object(R["a"])(Object(x["a"])(Object(q["a"])(Object(P["a"])(Object(N["a"])(Object(_["a"])(Object(a["a"])(b["a"])))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new E({layer:this}),this.spatialReference=L["a"].WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),Object(z["k"])(this.renderer,this.fieldsIndex),Object(z["l"])(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?Object(u["K"])(this.url):null}set renderer(e){Object(z["k"])(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=Object(u["K"])(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e("chunk-2d0a4c1e").then(r.bind(null,"0899"));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Object(U["a"])(this,e)}createQuery(){const e=new M["a"],t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some(t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(M["a"].from(e)||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(M["a"].from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(M["a"].from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(M["a"].from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return Object(n["l"])(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(r=>(r.name===e&&(t=r.domain),!!t)),t}};Object(s["a"])([Object(c["b"])({readOnly:!0,json:{read:!1,write:!1}})],V.prototype,"capabilities",null),Object(s["a"])([Object(c["b"])({type:String})],V.prototype,"copyright",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],V.prototype,"createQueryVersion",null),Object(s["a"])([Object(c["b"])({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),Object(s["a"])([Object(c["b"])({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],V.prototype,"definitionExpression",void 0),Object(s["a"])([Object(c["b"])({type:String})],V.prototype,"displayField",void 0),Object(s["a"])([Object(c["b"])({type:Boolean})],V.prototype,"editingEnabled",void 0),Object(s["a"])([Object(c["b"])(k["b"])],V.prototype,"elevationInfo",void 0),Object(s["a"])([Object(c["b"])(T["a"])],V.prototype,"featureReduction",void 0),Object(s["a"])([Object(c["b"])({type:[G["a"]],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],V.prototype,"fields",void 0),Object(s["a"])([Object(c["b"])(Z.fieldsIndex)],V.prototype,"fieldsIndex",void 0),Object(s["a"])([Object(c["b"])({type:v["a"],json:{name:"extent"}})],V.prototype,"fullExtent",void 0),Object(s["a"])([Object(c["b"])({type:["point","polygon","polyline","multipoint"],json:{read:{reader:d["a"].read}}})],V.prototype,"geometryType",void 0),Object(s["a"])([Object(c["b"])({type:Boolean})],V.prototype,"hasZ",void 0),Object(s["a"])([Object(c["b"])(k["c"])],V.prototype,"id",void 0),Object(s["a"])([Object(c["b"])({type:Boolean,readOnly:!0})],V.prototype,"isTable",null),Object(s["a"])([Object(c["b"])(k["d"])],V.prototype,"labelsVisible",void 0),Object(s["a"])([Object(c["b"])({type:[B["a"]],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:A["a"]},write:!0}})],V.prototype,"labelingInfo",void 0),Object(s["a"])([Object(c["b"])(k["e"])],V.prototype,"legendEnabled",void 0),Object(s["a"])([Object(c["b"])({type:["show","hide"]})],V.prototype,"listMode",void 0),Object(s["a"])([Object(c["b"])({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],V.prototype,"objectIdField",void 0),Object(s["a"])([Object(c["b"])(k["h"])],V.prototype,"opacity",void 0),Object(s["a"])([Object(c["b"])({type:["GeoJSON"]})],V.prototype,"operationalLayerType",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],V.prototype,"parsedUrl",null),Object(s["a"])([Object(c["b"])(k["j"])],V.prototype,"popupEnabled",void 0),Object(s["a"])([Object(c["b"])({type:o["a"],json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),Object(s["a"])([Object(c["b"])({types:i["a"],json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i["b"]}}}})],V.prototype,"renderer",null),Object(s["a"])([Object(c["b"])(k["m"])],V.prototype,"screenSizePerspectiveEnabled",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],V.prototype,"source",void 0),Object(s["a"])([Object(c["b"])({type:L["a"]})],V.prototype,"spatialReference",void 0),Object(s["a"])([Object(c["b"])({type:[D["a"]]})],V.prototype,"templates",void 0),Object(s["a"])([Object(c["b"])()],V.prototype,"title",void 0),Object(s["a"])([Object(c["b"])({json:{read:!1},readOnly:!0})],V.prototype,"type",void 0),Object(s["a"])([Object(c["b"])({type:String,readOnly:!0})],V.prototype,"typeIdField",void 0),Object(s["a"])([Object(c["b"])({type:[C["a"]]})],V.prototype,"types",void 0),Object(s["a"])([Object(c["b"])(k["n"])],V.prototype,"url",null),V=Object(s["a"])([Object(p["a"])("esri.layers.GeoJSONLayer")],V);const W=V},"88d1":function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return a}));var s=r("c120"),o=r("7ffa"),i=r("a94c"),n=r("8246");function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n["c"]:"esriGeometryPolyline"===e?n["e"]:n["d"]}}}function u(e,t){if(Object(s["a"])("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.includes(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const s=new Function(r);return()=>new s}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(o["a"])(e)}}]}function l(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},a94c:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=chunk-1f92628b.3b950d07.js.map