(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b02611"],{"15ec":function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n("e041"),l=n("0224");function r(e){return{origin:"portal-item",url:Object(t["K"])(e.itemUrl),portal:e.portal||l["a"].getDefault(),portalItem:e,readResourcePaths:[]}}},"3b92":function(e,a,n){"use strict";n.r(a),n.d(a,"getFirstLayerOrTableId",(function(){return m})),n.d(a,"getNumLayersAndTables",(function(){return v})),n.d(a,"load",(function(){return d})),n.d(a,"preprocessFSItemData",(function(){return w}));var t=n("ce50"),l=n("a0b4"),r=n("0224"),u=n("15ec"),i=n("60ec"),c=n("a0aa");async function d(e,a){const n=e.instance.portalItem;return n&&n.id?(await n.load(a),o(e),s(e,a)):Promise.resolve()}function o(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new t["a"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}async function s(e,a){const n=e.instance,t=n.portalItem,{url:l,title:r}=t,c=Object(u["a"])(t);if("group"===n.type)return n.read({title:r},c),y(n,e);l&&n.read({url:l},c);const d=await p(e,a);return d&&n.read(d,c),n.resourceReferences={portalItem:t,paths:c.readResourcePaths},n.read({title:r},c),Object(i["a"])(n,c)}function y(e,a){let n;const r=e.portalItem.type;switch(r){case"Feature Service":case"Feature Collection":n=l["a"].FeatureLayer;break;case"Stream Service":n=l["a"].StreamLayer;break;case"Scene Service":n=l["a"].SceneLayer;break;default:throw new t["a"]("portal:unsupported-item-type-as-group",`The item type '${r}' is not supported as a 'IGroupLayer'`)}let u;return n().then(e=>(u=e,p(a))).then(async a=>"Feature Service"===r?(a=await w(a,e.portalItem.url),h(e,u,a)):v(a)>0?h(e,u,a):f(e,u))}function f(e,a){return e.portalItem.url?Object(c["a"])(e.portalItem.url).then(n=>{var t,l;function r(e){return{id:e.id,name:e.name}}n&&h(e,a,{layers:null==(t=n.layers)?void 0:t.map(r),tables:null==(l=n.tables)?void 0:l.map(r)})}):Promise.resolve()}function h(e,a,n){let t=n.layers||[];const l=n.tables||[];"Feature Collection"===e.portalItem.type&&(t.forEach(e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&l.push(e)}),t=t.filter(e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)})),t.reverse().forEach(t=>{const l=b(e,a,n,t);e.add(l)}),l.reverse().forEach(t=>{const l=b(e,a,n,t);e.tables.add(l)})}function b(e,a,n,t){const l=new a({portalItem:e.portalItem.clone(),layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||r["a"].getDefault()};l.read(t,a);const u=n.showLegend;null!=u&&l.read({showLegend:u},a)}return l}function p(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const n=e.instance;return n.portalItem.fetchData("json",a).catch(()=>null).then(async e=>{if(k(n)){let a,t=!0;return e&&v(e)>0&&(null==n.layerId&&(n.layerId=m(e)),a=L(e,n.layerId),a&&(1===v(e)&&(t=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),t&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),a}return e})}async function w(e,a){var n,t;if(null==(null==(n=e)?void 0:n.layers)||null==(null==(t=e)?void 0:t.tables)){const n=await Object(c["a"])(a);(e=e||{}).layers=e.layers||(null==n?void 0:n.layers),e.tables=e.tables||(null==n?void 0:n.tables)}return e}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const n=e.tables;return n&&n.length?n[0].id:null}function L(e,a){const n=e.layers;if(n)for(let l=0;l<n.length;l++)if(n[l].id===a)return n[l];const t=e.tables;if(t)for(let l=0;l<t.length;l++)if(t[l].id===a)return t[l];return null}function v(e){var a,n,t,l;return(null!=(a=null==e||null==(n=e.layers)?void 0:n.length)?a:0)+(null!=(t=null==e||null==(l=e.tables)?void 0:l.length)?t:0)}function k(e){return"stream"!==e.type&&"layerId"in e}},a0aa:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("2eab");async function l(e){const{data:a}=await Object(t["default"])(e,{responseType:"json",query:{f:"json"}});return a}},a0b4:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));const t={BingMapsLayer:async()=>(await n.e("chunk-2d0a4f14").then(n.bind(null,"091f"))).default,BuildingSceneLayer:async()=>(await n.e("chunk-45042cf6").then(n.bind(null,"4d64e"))).default,CSVLayer:async()=>(await n.e("chunk-e4fd0ad0").then(n.bind(null,"2a7d"))).default,ElevationLayer:async()=>(await n.e("chunk-2d22c0b7").then(n.bind(null,"f20e"))).default,FeatureLayer:async()=>(await Promise.resolve().then(n.bind(null,"5bd5"))).default,GroupLayer:async()=>(await n.e("chunk-2d0c8892").then(n.bind(null,"54fc"))).default,GeoRSSLayer:async()=>(await n.e("chunk-2d0a33b6").then(n.bind(null,"00ff"))).default,GeoJSONLayer:async()=>(await n.e("chunk-1f92628b").then(n.bind(null,"785c"))).default,ImageryLayer:async()=>(await Promise.all([n.e("chunk-084afda9"),n.e("chunk-1e759e79"),n.e("chunk-2d237932")]).then(n.bind(null,"fc65"))).default,ImageryTileLayer:async()=>(await Promise.all([n.e("chunk-084afda9"),n.e("chunk-1e759e79"),n.e("chunk-6bbbfd2f")]).then(n.bind(null,"9917"))).default,IntegratedMeshLayer:async()=>(await n.e("chunk-a1e94d2c").then(n.bind(null,"cafc"))).default,KMLLayer:async()=>(await n.e("chunk-161078e6").then(n.bind(null,"f5fc"))).default,MapImageLayer:async()=>(await n.e("chunk-2d0c84a6").then(n.bind(null,"53f8"))).default,MapNotesLayer:async()=>(await n.e("chunk-6b3eda79").then(n.bind(null,"5afa"))).default,OGCFeatureLayer:async()=>(await n.e("chunk-ef0d75d0").then(n.bind(null,"1f69"))).default,OpenStreetMapLayer:async()=>(await n.e("chunk-2d0e9004").then(n.bind(null,"8c58"))).default,PointCloudLayer:async()=>(await n.e("chunk-133f66a4").then(n.bind(null,"44bb"))).default,RouteLayer:async()=>(await n.e("chunk-2d20f003").then(n.bind(null,"b285"))).default,SceneLayer:async()=>(await Promise.resolve().then(n.bind(null,"d321"))).default,StreamLayer:async()=>(await n.e("chunk-2d21a92d").then(n.bind(null,"bba8"))).default,TileLayer:async()=>(await Promise.resolve().then(n.bind(null,"2650"))).default,UnknownLayer:async()=>(await n.e("chunk-2d209b4c").then(n.bind(null,"a9ca"))).default,UnsupportedLayer:async()=>(await n.e("chunk-2d0ac5dd").then(n.bind(null,"18dd"))).default,VectorTileLayer:async()=>(await Promise.all([n.e("chunk-46e562d8"),n.e("chunk-60040b3c")]).then(n.bind(null,"173c"))).default,VoxelLayer:async()=>(await n.e("chunk-2d207eeb").then(n.bind(null,"a347"))).default,WebTileLayer:async()=>(await Promise.resolve().then(n.bind(null,"9dc3"))).default,WFSLayer:async()=>(await n.e("chunk-41b20229").then(n.bind(null,"fa4e"))).default,WMSLayer:async()=>(await n.e("chunk-435aa026").then(n.bind(null,"8760"))).default,WMTSLayer:async()=>(await n.e("chunk-6a0cc414").then(n.bind(null,"b039"))).default}}}]);
//# sourceMappingURL=chunk-00b02611.aa298046.js.map