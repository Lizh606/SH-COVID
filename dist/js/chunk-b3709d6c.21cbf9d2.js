(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3709d6c"],{"04c4":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("c120"),i=n("ce76");const s=5e4,a={minX:0,minY:0,maxX:0,maxY:0};function o(e,t,n){a.minX=t[0],a.minY=t[1],a.maxX=t[2],a.maxY=t[3],e.search(a,n)}class u{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i["a"](9,Object(r["a"])("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,r)=>{e[t++]=r}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),o(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>s&&this._loadIndex()))}}},"21ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p}));var r=n("7f83"),i=n("c1da");class s{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const l=new Set;function d(e,t,n,r=!1,s){l.clear();for(const a in n){const u=e.get(a);if(!u)continue;const c=n[a],d=h(u,c);if(d!==c&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:d}}),l.add(u.name),u&&(r||u.editable)){const e=Object(i["v"])(u,d);if(e)return o(Object(i["w"])(e,u,d));t[u.name]=d}}for(const i of e.requiredFields)if(!l.has(i.name))return o(`missing required field "${i.name}"`);return null}function h(e,t){let n=t;return"string"==typeof t&&Object(i["p"])(e)?n=parseFloat(t):null!=t&&Object(i["q"])(e)&&"string"!=typeof t&&(n=String(t)),Object(i["t"])(n)}let f;function p(e,t){if(!e||!Object(r["l"])(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(){return f||(f=await n.e("chunk-180660b2").then(n.bind(null,"00ac")),f)}async function y(e,t){!Object(r["l"])(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await m()}},"461f":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("d97e"),i=n("9392"),s=n("8152");const a={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new i["b"](t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(r["a"])(new s["a"],e.geometry,t.hasZ,t.hasM)),e.centroid)}},6517:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("ce50"),i=n("ce6d"),s=n("e92d"),a=n("b2b2"),o=n("4261"),u=n("9180"),c=n("6655"),l=n("04c4"),d=n("461f");class h{constructor(e){this.geometryInfo=e,this._boundsStore=new l["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new i["a"],this.featureAdapter=d["a"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(u["l"])(u["a"]);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{Object(a["l"])(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const r of e){const e=this._boundsStore.get(r.objectId);e&&t(Object(o["s"])(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new r["a"]("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let i;if(this._markedIds.add(t),n?(e.displayId=n.displayId,i=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(a["l"])(this.onFeatureAdd)&&this.onFeatureAdd(e),Object(a["k"])(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);i=Object(c["r"])(Object(a["l"])(i)?i:Object(u["l"])(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(a["l"])(i)&&this._boundsStore.set(t,i),this._featuresById.set(t,e)}_remove(e){return Object(a["l"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},"659c":function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return H})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return $}));n("e06a");var r=n("2eab"),i=n("ce50"),s=n("fa2a"),a=n("b2b2"),o=n("f4cc"),u=n("e041"),c=n("8188"),l=n("7f83"),d=n("74e2"),h=n("e3a3");function f(e){var t;return null!=(t=m(e))?t:p(e)}function p(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}function m(e){var t,n,r,i;const s=y.exec(e);if(!s)return null;const a=s.groups,o=+a.year,u=+a.month-1,c=+a.day,l=+(null!=(t=a.hours)?t:"0"),d=+(null!=(n=a.minutes)?n:"0"),h=+(null!=(r=a.seconds)?r:"0");if(l>23)return null;if(d>59)return null;if(h>59)return null;const f=null!=(i=a.ms)?i:"0",p=f?+f.padEnd(3,"0").substring(0,3):0;let m;if(a.isUTC)m=Date.UTC(o,u,c,l,d,h,p);else if(a.offsetSign){const e=+a.offsetHours,t=+a.offsetMinutes;m=6e4*("+"===a.offsetSign?-1:1)*(60*e+t)+Date.UTC(o,u,c,l,d,h,p)}else m=new Date(o,u,c,l,d,h,p).getTime();return Number.isNaN(m)?null:m}const y=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var g=n("68dc"),b=n("a1f3"),_=n("5996"),w=n("3af1");const x="xlink:href",j="2.0.0",F="__esri_wfs_id__",S="wfs-layer:getWFSLayerTypeInfo-error",I="wfs-layer:empty-service",O="wfs-layer:feature-type-not-found",v="wfs-layer:geojson-not-supported",T="wfs-layer:kvp-encoding-not-supported",B="wfs-layer:malformed-json",M="wfs-layer:unknown-geometry-type",E="wfs-layer:unknown-field-type",C="wfs-layer:unsupported-spatial-reference",P="wfs-layer:unsupported-wfs-version";async function k(e,t){const n=X((await Object(r["default"])(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:j,...null==t?void 0:t.customParameters},signal:null==t?void 0:t.signal})).data);return q(e,n),n}function X(e){const t=K(e);te(t),ne(t);const n=t.firstElementChild,r=Object(s["a"])(G(n));return{operations:N(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const Y=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function N(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(Object(g["b"])(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(x)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(x)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(x)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;Y.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new i["a"](T,"WFS service doesn't support key/value pair (KVP) encoding");if(Object(a["k"])(n.GetFeature.outputFormat))throw new i["a"](v,"WFS service doesn't support GeoJSON output format");return n}function q(e,t){Object(u["v"])(e)&&(Object(u["q"])(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=Object(u["J"])(t.operations.DescribeFeatureType.url)),Object(u["q"])(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=Object(u["J"])(t.operations.GetFeature.url)))}function G(e){return Object(g["a"])(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{var t,r;const i=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(r=t.groups)?void 0:r.wkid,10);Number.isNaN(i)||n.add(i)};return Object(g["b"])(e,{Name:e=>{const{name:n,prefix:r}=ee(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=R(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}})}function R(e){let t,n,r,i;for(const s of e.children)switch(s.localName){case"LowerCorner":[t,n]=s.textContent.split(" ").map(e=>Number.parseFloat(e));break;case"UpperCorner":[r,i]=s.textContent.split(" ").map(e=>Number.parseFloat(e))}return{xmin:t,ymin:n,xmax:r,ymax:i,spatialReference:l["b"]}}function A(e,t,n){return Object(s["b"])(e,e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t)}async function L(e,t,n,r={}){var i;const{featureType:s,extent:a}=await D(e,t,n,r),{fields:o,geometryType:u,swapXY:c,objectIdField:l,geometryField:d}=await U(e,s.typeName,r);return{url:e.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:o,geometryField:d,geometryType:u,objectIdField:l,spatialReference:null!=(i=r.spatialReference)?i:_["a"].WGS84,extent:a,swapXY:c,wfsCapabilities:e,customParameters:r.customParameters}}async function D(e,t,n,r={}){const{spatialReference:s=_["a"].WGS84}=r,o=e.readFeatureTypes(),u=t?A(o,t,n):o.next().value;if(Object(a["k"])(u))throw t?new i["a"](O,`The type '${t}' could not be found in the service`):new i["a"](I,"The service is empty");let d=new w["a"]({...u.extent,spatialReference:s});if(!Object(l["d"])(s,l["b"]))try{await Object(c["g"])(l["b"],s,void 0,r),d=Object(c["m"])(d,l["b"])}catch{throw new i["a"](C,"Projection not supported")}return{extent:d,spatialReference:s,featureType:u}}async function U(e,t,n={}){const[r,s]=await Object(o["j"])([J(e.operations.DescribeFeatureType.url,t,n),V(e,t,n)]);if(r.error||s.error)throw new i["a"](S,`An error occurred while getting info about the feature type '${t}'`,{error:r.error||s.error});const{fields:u,errors:c}=r.value,l=r.value.geometryType||s.value.geometryType,d=s.value.swapXY;if(Object(a["k"])(l))throw new i["a"](M,"The geometry type could not be determined for type '"+t,{typeName:t,geometryType:l,fields:u,errors:c});return{...$(u),geometryType:l,swapXY:d}}function $(e){var t;const n=e.find(e=>"geometry"===e.type);let r=e.find(e=>"oid"===e.type);return e=e.filter(e=>"geometry"!==e.type),r||(r=new b["a"]({name:F,type:"oid",alias:F}),e.unshift(r)),{geometryField:null!=(t=null==n?void 0:n.name)?t:null,objectIdField:r.name,fields:e}}async function V(e,t,n={}){var i;let s,a=!1;const[o,u]=await Promise.all([H(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),Object(r["default"])(e.operations.GetFeature.url,{responseType:"text",query:Q(t,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),c="FeatureCollection"===o.type&&(null==(i=o.features[0])?void 0:i.geometry);if(c){let e;switch(s=d["a"].fromJSON(Object(h["b"])(c.type)),c.type){case"Point":e=c.coordinates;break;case"LineString":case"MultiPoint":e=c.coordinates[0];break;case"MultiLineString":case"Polygon":e=c.coordinates[0][0];break;case"MultiPolygon":e=c.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),i=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===i&&(a=!0)}}return{geometryType:s,swapXY:a}}async function J(e,t,n){return W(t,(await Object(r["default"])(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:j,TYPENAME:t,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}function W(e,t){const{name:n}=ee(e),r=K(t);ne(r);const o=Object(s["b"])(Object(g["a"])(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:ee(e.getAttribute("type")).name})}),({name:e})=>e===n);if(Object(a["l"])(o)){const e=Object(s["b"])(Object(g["a"])(r.firstElementChild,{complexType:e=>e}),e=>e.getAttribute("name")===o.typeName);if(Object(a["l"])(e))return Z(e)}throw new i["a"](O,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}const z=new Set(["objectid","fid"]);function Z(e){var t,n;const r=[],s=[];let a;const o=Object(g["a"])(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of o){const o=u.getAttribute("name");if(!o)continue;let c,l;if(u.hasAttribute("type")?c=ee(u.getAttribute("type")).name:Object(g["b"])(u,{simpleType:{restriction:e=>(c=ee(e.getAttribute("base")).name,{maxLength:e=>{l=+e.getAttribute("value")}})}}),!c)continue;const d="true"===u.getAttribute("nillable");let h=!1;switch(c.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":s.push(new b["a"]({name:o,alias:o,type:"integer",nullable:d}));break;case"float":case"double":case"decimal":s.push(new b["a"]({name:o,alias:o,type:"double",nullable:d}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":s.push(new b["a"]({name:o,alias:o,type:"string",nullable:d,length:null!=(t=l)?t:255}));break;case"datetime":case"date":s.push(new b["a"]({name:o,alias:o,type:"date",nullable:d,length:null!=(n=l)?n:36}));break;case"pointpropertytype":a="point",h=!0;break;case"multipointpropertytype":a="multipoint",h=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",h=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",h=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":h=!0,r.push(new i["a"](M,`geometry type '${c}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new i["a"](E,`Unknown field type '${c}'`,{type:(new XMLSerializer).serializeToString(e)}))}h&&s.push(new b["a"]({name:o,alias:o,type:"geometry",nullable:d}))}for(const i of s)if("integer"===i.type&&!i.nullable&&z.has(i.name.toLowerCase())){i.type="oid";break}return{geometryType:a,fields:s,errors:r}}async function H(e,t,n,s){let{data:a}=await Object(r["default"])(e,{responseType:"text",query:Q(t,n,s),signal:null==s?void 0:s.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var o;if(null!=s&&null!=(o=s.dateFields)&&o.length){const e=new Set(s.dateFields);return JSON.parse(a,(t,n)=>e.has(t)?f(n):n)}return JSON.parse(a)}catch(u){throw new i["a"](B,"Error while parsing the response",{response:a,error:u})}}function Q(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:j,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==n?void 0:n.startIndex,COUNT:null==n?void 0:n.count,...null==n?void 0:n.customParameters}}function K(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function ee(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!=n?n:t}}function te(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==j)throw new i["a"](P,`Unsupported WFS version ${t}. Supported version: ${j}`)}function ne(e){let t,n;if(Object(g["b"])(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new i["a"]("wfs-layer:"+t,n)}},"68dc":function(e,t,n){"use strict";function r(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*i(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*i(n,e)}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},"727a":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("ce50"),i=n("e92d"),s=n("b2b2"),a=n("f4cc"),o=n("7f83"),u=n("6655"),c=n("6517"),l=n("1ec3"),d=n("6411"),h=n("e3a3"),f=n("21ca"),p=n("659c"),m=n("80b7");class y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,n=await Object(p["d"])(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(e=>e.name),signal:e});await Object(h["d"])(n),Object(a["w"])(e);const r=Object(h["a"])(n,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!Object(o["d"])(this._queryEngine.spatialReference,o["b"]))for(const a of r)Object(s["l"])(a.geometry)&&(a.geometry=Object(u["d"])(Object(l["b"])(Object(u["k"])(a.geometry,this._queryEngine.geometryType,!1,!1),o["b"],this._queryEngine.spatialReference)));let i=1;for(const s of r){const e={};Object(f["d"])(this._fieldsIndex,e,s.attributes,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=i++)}return r}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:n,getFeatureOutputFormat:r,spatialReference:i,fields:o,geometryType:u,featureType:l,objectIdField:h,customParameters:f}=e;this._featureType=l,this._customParameters=f,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._fieldsIndex=new m["a"](o),await this._checkProjection(i),Object(a["w"])(t),this._queryEngine=new d["a"]({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:i,timeInfo:null,featureStore:new c["a"]({geometryType:u,hasM:!1,hasZ:!1})});const p=await this._snapshotFeatures(Object(s["u"])(t.signal));return this._queryEngine.featureStore.addMany(p),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new r["a"]("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=Object(a["h"])(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),Object(a["m"])(e)||i["a"].getLogger("esri.layers.WFSLayer").error(new r["a"]("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await Object(l["a"])(o["b"],e)}catch{throw new r["a"]("unsupported-projection","Projection not supported",{spatialReference:e})}}}},ce76:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("b50f"),i=n("b2b2"),s=n("8a44"),a=n("4637");class o{constructor(e=9,t){this.compareMinX=d,this.compareMinY=h,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),w.prune(),x.prune(),j.prune(),F.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const r=this.toBBox;if(b(e,n))for(w.clear();n;){for(let i=0,s=n.children.length;i<s;i++){const s=n.children[i],a=n.leaf?r(s):s;b(e,a)&&(n.leaf?t(s):g(e,a)?this._all(s,t):w.push(s))}n=w.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!b(e,t))return!1;for(w.clear();t;){for(let r=0,i=t.children.length;r<i;r++){const i=t.children[r],s=t.leaf?n(i):i;if(b(e,s)){if(t.leaf||g(e,s))return!0;w.push(i)}}t=w.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new O([]),this}remove(e){if(!e)return this;let t,n=this.data,s=null,a=0,o=!1;const u=this.toBBox(e);for(j.clear(),F.clear();n||j.length>0;){var c;if(n||(n=Object(i["d"])(j.pop()),s=j.data[j.length-1],a=null!=(c=F.pop())?c:0,o=!0),n.leaf&&(t=Object(r["g"])(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),j.push(n),this._condense(j),this;o||n.leaf||!g(n,u)?s?(a++,n=s.children[a],o=!1):n=null:(j.push(n),F.push(a),a=0,s=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(x.clear();n;){var r;if(!0===n.leaf)for(const e of n.children)t(e);else x.pushArray(n.children);n=null!=(r=x.pop())?r:null}}_build(e,t,n,r){const i=n-t+1;let s=this._maxEntries;if(i<=s){const r=new O(e.slice(t,n+1));return u(r,this.toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(s)),s=Math.ceil(i/s**(r-1)));const a=new v([]);a.height=r;const o=Math.ceil(i/s),c=o*Math.ceil(Math.sqrt(s));_(e,t,n,c,this.compareMinX);for(let u=t;u<=n;u+=c){const t=Math.min(u+c-1,n);_(e,u,t,o,this.compareMinY);for(let n=u;n<=t;n+=o){const i=Math.min(n+o-1,t);a.children.push(this._build(e,n,i,r-1))}}return u(a,this.toBBox),a}_chooseSubtree(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){let n,r=1/0,i=1/0;for(let s=0,a=t.children.length;s<a;s++){const a=t.children[s],o=f(a),u=m(e,a)-o;u<i?(i=u,r=o<r?o:r,n=a):u===i&&o<r&&(r=o,n=a)}t=n||t.children[0]}return t}_insert(e,t,n){const r=this.toBBox,i=n?e:r(e);j.clear();const s=this._chooseSubtree(i,this.data,t,j);for(s.children.push(e),l(s,i);t>=0&&j.data[t].children.length>this._maxEntries;)this._split(j,t),t--;this._adjustParentBBoxes(i,j,t)}_split(e,t){const n=e.data[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);const s=this._chooseSplitIndex(n,i,r);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(s,n.children.length-s),o=n.leaf?new O(a):new v(a);o.height=n.height,u(n,this.toBBox),u(o,this.toBBox),t?e.data[t-1].children.push(o):this._splitRoot(n,o)}_splitRoot(e,t){this.data=new v([e,t]),this.data.height=e.height+1,u(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let r,i,s;r=i=1/0;for(let a=t;a<=n-t;a++){const t=c(e,0,a,this.toBBox),o=c(e,a,n,this.toBBox),u=y(t,o),l=f(t)+f(o);u<r?(r=u,s=a,i=l<i?l:i):u===r&&l<i&&(i=l,s=a)}return s}_chooseSplitAxis(e,t,n){const r=e.leaf?this.compareMinX:d,i=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}_allDistMargin(e,t,n,r){e.children.sort(r);const i=this.toBBox,s=c(e,0,t,i),a=c(e,n-t,n,i);let o=p(s)+p(a);for(let u=t;u<n-t;u++){const t=e.children[u];l(s,e.leaf?i(t):t),o+=p(s)}for(let u=n-t-1;u>=t;u--){const t=e.children[u];l(a,e.leaf?i(t):t),o+=p(a)}return o}_adjustParentBBoxes(e,t,n){for(let r=n;r>=0;r--)l(t.data[r],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],s=i.children;s.splice(Object(r["g"])(s,n,s.length,i.indexHint),1)}else this.clear();else u(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function u(e,t){c(e,0,e.children.length,t,e)}function c(e,t,n,r,i){i||(i=new O([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s,a=t;a<n;a++)s=e.children[a],l(i,e.leaf?r(s):s);return i}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function b(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,r,s){const o=[t,n];for(;o.length;){const t=Object(i["d"])(o.pop()),n=Object(i["d"])(o.pop());if(t-n<=r)continue;const u=n+Math.ceil((t-n)/r/2)*r;Object(a["a"])(e,u,n,t,s),o.push(n,u,u,t)}}const w=new s["a"],x=new s["a"],j=new s["a"],F=new s["a"]({deallocator:void 0});class S{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class I extends S{constructor(){super(...arguments),this.height=1,this.indexHint=new r["a"]}}class O extends I{constructor(e){super(),this.children=e,this.leaf=!0}}class v extends I{constructor(e){super(),this.children=e,this.leaf=!1}}},e3a3:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return M}));var r=n("ce50"),i=n("9392"),s=n("8152"),a=n("c1da");const o={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return o[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*d(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const o of e){var a;const{geometry:e,properties:c,id:l}=o;if(e&&u(e.type)!==n)continue;const d=c||{};let h=null!=(a=d[r])?a:null;r&&null!=l&&!d[r]&&(d[r]=h=l);const f=new i["b"](e?g(new s["a"],e,t):null,d,null,h);yield f}}function h(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){return!m(e)}function p(e){return m(e)}function m(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":return b(e,t,n);case"MultiLineString":return _(e,t,n);case"MultiPoint":return w(e,t,n);case"MultiPolygon":return x(e,t,n);case"Point":return j(e,t,n);case"Polygon":return F(e,t,n)}}function b(e,t,n){return O(e,t.coordinates,n),e}function _(e,t,n){for(const r of t.coordinates)O(e,r,n);return e}function w(e,t,n){return O(e,t.coordinates,n),e}function x(e,t,n){for(const r of t.coordinates){S(e,r[0],n);for(let t=1;t<r.length;t++)I(e,r[t],n)}return e}function j(e,t,n){return T(e,t.coordinates,n),e}function F(e,t,n){const r=t.coordinates;S(e,r[0],n);for(let i=1;i<r.length;i++)I(e,r[i],n);return e}function S(e,t,n){const r=y(t);f(r)?v(e,r,n):O(e,r,n)}function I(e,t,n){const r=y(t);p(r)?v(e,r,n):O(e,r,n)}function O(e,t,n){for(const r of t)T(e,r,n);e.lengths.push(t.length)}function v(e,t,n){for(let r=t.length-1;r>=0;r--)T(e,t[r],n);e.lengths.push(t.length)}function T(e,t,n){const[r,i,s]=t;e.coords.push(r,i),n.hasZ&&e.coords.push(s||0)}function B(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function M(e){if(!e)throw new r["a"]("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r["a"]("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!i.test(n))throw new r["a"]("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function E(e,t={}){const n=[],r=new Set,i=new Set;let s,o=!1,d=null,f=!1,{geometryType:p=null}=t,m=!1;for(const a of c(e)){const{geometry:e,properties:t,id:c}=a;if((!e||(p||(p=u(e.type)),u(e.type)===p))&&(o||(o=h(l(e))),f||(f=null!=c,f&&(s=typeof c,d=Object.keys(t).filter(e=>t[e]===c))),f&&null!=c&&(d.length>1?d=d.filter(e=>t[e]===c):1===d.length&&(d=t[d[0]]===c?d:[])),!m&&t)){let e=!0;for(const s in t){if(r.has(s))continue;const a=t[s];if(null==a){e=!1,i.add(s);continue}const o=B(a);"unknown"!==o?(i.delete(s),r.add(s),n.push({name:s,alias:s,type:o})):i.add(s)}m=e}}const y=d&&1===d.length&&d[0]||null;if(y)for(const u of n)if(u.name===y&&Object(a["p"])(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:p,hasZ:o,objectIdFieldName:y,objectIdFieldType:s,unknownFields:Array.from(i)}}function C(e,t){return Array.from(d(c(e),t))}}}]);
//# sourceMappingURL=chunk-b3709d6c.21cbf9d2.js.map