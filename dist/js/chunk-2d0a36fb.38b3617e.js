(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a36fb"],{"01bf":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return G}));var s=r("6c97"),n=r("b2b2"),o=r("f2e0"),i=r("5996"),a=r("b0f5"),h=r("1a54"),u=r("6655"),c=r("a1f3");function l(e,t){return t}function d(e,t,r,s){switch(r){case 0:return m(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?m(e,t+s,1):g(e,t+s,1)}}function p(e,t,r,s){return 2===r?m(e,t,2):d(e,t,r,s)}function f(e,t,r,s){return 2===r?m(e,t,3):d(e,t,r,s)}function y(e,t,r,s){return 3===r?m(e,t,3):p(e,t,r,s)}function m({translate:e,scale:t},r,s){return e[s]+r*t[s]}function g({translate:e,scale:t},r,s){return e[s]-r*t[s]}class b{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=l,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new h["b"]}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=Object(a["a"])(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!Object(n["j"])(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return new i["a"]}addField(e,t){e.fields.push(c["a"].fromJSON(t));const r=e.fields.map(e=>e.name);this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const s in t.attributes){const e=t.attributes[s];"string"==typeof e&&e.length>r&&(t.attributes[s]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=Object(u["z"])(r.clone(),r,!1,!1,this.transform),o=Object(u["k"])(n,s,!1,!1);let i=null;switch(s){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}o.type=i,e.queryGeometryType=s,e.queryGeometry=o}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;case"mesh":case"extent":break;default:Object(s["a"])(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new h["a"](Object(o["a"])(),null,new this.AttributesConstructor)}allocateCoordinates(){const e=this.lengths.reduce((e,t)=>e+t,0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&n.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?y:t?p:r?f:d}}var P=r("072f");class C{_parseFeatureQuery(e){const t=Object(P["a"])(e.buffer,new b(e.options)),r={...t,spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map(e=>e.toJSON()):void 0};return Promise.resolve(r)}}function G(){return new C}}}]);
//# sourceMappingURL=chunk-2d0a36fb.38b3617e.js.map