(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f29c8d"],{"4cf4":function(e,a,n){"use strict";n.r(a),n.d(a,"fromUrl",(function(){return i}));var r=n("2eab"),t=n("ce50"),l=n("b2b2"),u=n("e041"),c=n("54b4"),s=n("a0b4");async function i(e){var a;const r=null==(a=e.properties)?void 0:a.customParameters,t=await o(e.url,r),l={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(l.layerId=t.layerOrTableId,l.sourceJSON=t.sourceJSON),new t.Constructor(l);const u=new(0,(await n.e("chunk-2d0c8892").then(n.bind(null,"54fc"))).default)({title:t.parsedUrl.title});return y(u,t,l),u}function d(e,a){return e?e.find(e=>e.id===a):null}function y(e,a,n){function r(e,r){const t={...n,layerId:e,sublayerTitleMode:"service-name"};return Object(l["l"])(r)&&(t.sourceJSON=r),new a.Constructor(t)}a.sublayerIds.forEach(n=>{const t=r(n,d(a.sublayerInfos,n));e.add(t)}),a.tableIds.forEach(n=>{const t=r(n,d(a.tableInfos,n));e.tables.add(t)})}async function o(e,a){let n=Object(c["f"])(e);if(Object(l["k"])(n)&&(n=await f(e,a)),Object(l["k"])(n))throw new t["a"]("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:r,sublayer:u}=n;let s;const i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(r){case"MapServer":s=null!=u?"FeatureLayer":v(e,a).then(e=>e?"TileLayer":"MapImageLayer");break;case"ImageServer":s=S(e,a).then(e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!a||"LERC"!==a.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=S(n.url.path,a).then(e=>{if(e){if("Voxel"===(null==e?void 0:e.layerType))return"VoxelLayer";if(null!=e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var a;const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},r=null==(a=e.layers[0])?void 0:a.layerType;if(null!=n[r])return n[r]}}return"SceneLayer"});break;default:s=i[r]}const d={FeatureLayer:!0,SceneLayer:!0},y="FeatureServer"===r,o={parsedUrl:n,Constructor:null,layerOrTableId:y?u:null,sublayerIds:null,tableIds:null},b=await s;if(d[b]&&null==u){const n=await h(e,r,a);if(y&&(o.sublayerInfos=n.layerInfos,o.tableInfos=n.tableInfos),1!==n.layerIds.length+n.tableIds.length)o.sublayerIds=n.layerIds,o.tableIds=n.tableIds;else if(y){var w,p;o.layerOrTableId=null!=(w=n.layerIds[0])?w:n.tableIds[0],o.sourceJSON=null!=(p=n.layerInfos[0])?p:n.tableInfos[0]}}return o.Constructor=await L(b),o}async function f(e,a){var n;const r=await S(e,a);let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":b(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&b(null==(n=r.layers)?void 0:n[0])&&(t="SceneServer"),!t)return null;const d=null!=s?Object(c["g"])(e):null;return{title:Object(l["l"])(d)&&r.name||Object(u["k"])(e),serverType:t,sublayer:s,url:{path:Object(l["l"])(d)?d.serviceUrl:Object(u["K"])(e).path}}}function b(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e,a,n){var r,t;let l,u=!1;if("FeatureServer"===a){const a=await p(e,n);u=!!a.layersJSON,l=a.layersJSON||a.serviceJSON}else l=await S(e,n);const c=null==(r=l)?void 0:r.layers,s=null==(t=l)?void 0:t.tables;return{layerIds:(null==c?void 0:c.map(e=>e.id).reverse())||[],tableIds:(null==s?void 0:s.map(e=>e.id).reverse())||[],layerInfos:u?c:[],tableInfos:u?s:[]}}function w(e){return!e.type||"Feature Layer"===e.type}async function p(e,a){var n,r;let t=await S(e,a);t=t||{},t.layers=(null==(n=t.layers)?void 0:n.filter(w))||[];const l={serviceJSON:t};if(t.currentVersion<10.5)return l;const u=await S(e+"/layers",a);return l.layersJSON={layers:(null==u||null==(r=u.layers)?void 0:r.filter(w))||[],tables:(null==u?void 0:u.tables)||[]},l}async function L(e){return(0,s["a"][e])()}async function v(e,a){return(await S(e,a)).tileInfo}async function S(e,a){return(await Object(r["default"])(e,{responseType:"json",query:{f:"json",...a}})).data}},a0b4:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));const r={BingMapsLayer:async()=>(await n.e("chunk-2d0a4f14").then(n.bind(null,"091f"))).default,BuildingSceneLayer:async()=>(await n.e("chunk-45042cf6").then(n.bind(null,"4d64e"))).default,CSVLayer:async()=>(await n.e("chunk-e4fd0ad0").then(n.bind(null,"2a7d"))).default,ElevationLayer:async()=>(await n.e("chunk-2d22c0b7").then(n.bind(null,"f20e"))).default,FeatureLayer:async()=>(await Promise.resolve().then(n.bind(null,"5bd5"))).default,GroupLayer:async()=>(await n.e("chunk-2d0c8892").then(n.bind(null,"54fc"))).default,GeoRSSLayer:async()=>(await n.e("chunk-2d0a33b6").then(n.bind(null,"00ff"))).default,GeoJSONLayer:async()=>(await n.e("chunk-1f92628b").then(n.bind(null,"785c"))).default,ImageryLayer:async()=>(await Promise.all([n.e("chunk-50ccfab4"),n.e("chunk-1e759e79"),n.e("chunk-2d237932")]).then(n.bind(null,"fc65"))).default,ImageryTileLayer:async()=>(await Promise.all([n.e("chunk-50ccfab4"),n.e("chunk-1e759e79"),n.e("chunk-6bbbfd2f")]).then(n.bind(null,"9917"))).default,IntegratedMeshLayer:async()=>(await n.e("chunk-a1e94d2c").then(n.bind(null,"cafc"))).default,KMLLayer:async()=>(await n.e("chunk-161078e6").then(n.bind(null,"f5fc"))).default,MapImageLayer:async()=>(await n.e("chunk-7abeecf4").then(n.bind(null,"53f8"))).default,MapNotesLayer:async()=>(await n.e("chunk-6b3eda79").then(n.bind(null,"5afa"))).default,OGCFeatureLayer:async()=>(await n.e("chunk-ef0d75d0").then(n.bind(null,"1f69"))).default,OpenStreetMapLayer:async()=>(await n.e("chunk-2d0e9004").then(n.bind(null,"8c58"))).default,PointCloudLayer:async()=>(await n.e("chunk-133f66a4").then(n.bind(null,"44bb"))).default,RouteLayer:async()=>(await n.e("chunk-2d20f003").then(n.bind(null,"b285"))).default,SceneLayer:async()=>(await Promise.resolve().then(n.bind(null,"d321"))).default,StreamLayer:async()=>(await n.e("chunk-2d21a92d").then(n.bind(null,"bba8"))).default,TileLayer:async()=>(await Promise.resolve().then(n.bind(null,"2650"))).default,UnknownLayer:async()=>(await n.e("chunk-2d209b4c").then(n.bind(null,"a9ca"))).default,UnsupportedLayer:async()=>(await n.e("chunk-2d0ac5dd").then(n.bind(null,"18dd"))).default,VectorTileLayer:async()=>(await Promise.all([n.e("chunk-2d57d7a8"),n.e("chunk-60040b3c")]).then(n.bind(null,"173c"))).default,VoxelLayer:async()=>(await n.e("chunk-2d207eeb").then(n.bind(null,"a347"))).default,WebTileLayer:async()=>(await Promise.resolve().then(n.bind(null,"9dc3"))).default,WFSLayer:async()=>(await n.e("chunk-41b20229").then(n.bind(null,"fa4e"))).default,WMSLayer:async()=>(await n.e("chunk-435aa026").then(n.bind(null,"8760"))).default,WMTSLayer:async()=>(await n.e("chunk-6a0cc414").then(n.bind(null,"b039"))).default}}}]);
//# sourceMappingURL=chunk-59f29c8d.2d29dec4.js.map