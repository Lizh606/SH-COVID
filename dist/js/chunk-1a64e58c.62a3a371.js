(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a64e58c"],{"5b29":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var s=r("a4ee"),i=(r("e06a"),r("b2b2")),a=r("59b2"),o=(r("b50f"),r("c120"),r("cea0"),r("afcf")),n=r("d386"),c=r("8d60");let l=class extends c["a"]{};Object(s["a"])([Object(a["b"])()],l.prototype,"events",void 0),Object(s["a"])([Object(a["b"])()],l.prototype,"strings",void 0),l=Object(s["a"])([Object(n["a"])("esri.rest.support.DirectionsFeature")],l);const u=l;var p=r("2edc"),b=r("3af1"),d=r("5996"),y=r("521c"),O=r("4ae5");let m=class extends p["default"]{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const s=null!=(r=t.summary.envelope.spatialReference)?r:t.spatialReference,i=s&&d["a"].fromJSON(s);return e.map(e=>{var t,r;const s=this._decompressGeometry(e.compressedGeometry),a=new y["a"]({...s,spatialReference:i}),o=null!=(t=null==(r=e.events)?void 0:r.map(e=>{const{arriveTimeUTC:t,ETA:r,point:{x:s,y:a,z:o},strings:n}=e;return new u({geometry:new O["a"]({x:s,y:a,z:o,hasZ:void 0!==o,spatialReference:i}),attributes:{ETA:r,arriveTimeUTC:t},strings:n})}))?t:[];return new u({attributes:e.attributes,events:o,geometry:a,strings:e.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(i["r"])(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,s=0,i=0;const a=[];let o,n,c,l,u,p,b,d,y=0,O=0,m=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[y],32)){y=2;const e=parseInt(u[y],32);y++,p=parseInt(u[y],32),y++,1&e&&(O=u.indexOf("|")+1,b=parseInt(u[O],32),O++),2&e&&(m=u.indexOf("|",O)+1,d=parseInt(u[m],32),m++)}else p=parseInt(u[y],32),y++;for(;y<u.length&&"|"!==u[y];){o=parseInt(u[y],32)+t,y++,t=o,n=parseInt(u[y],32)+r,y++,r=n;const e=[o/p,n/p];O&&(l=parseInt(u[O],32)+s,O++,s=l,e.push(l/b)),m&&(c=parseInt(u[m],32)+i,m++,i=c,e.push(c/d)),a.push(e)}return{paths:[a],hasZ:O>0,hasM:m>0}}_mergePolylinesToSinglePath(e,t){if(0===e.length)return new y["a"]({spatialReference:t});const r=[];for(const o of e)for(const e of o.paths)r.push(...e);const s=[];r.forEach((e,t)=>{0!==t&&e[0]===r[t-1][0]&&e[1]===r[t-1][1]||s.push(e)});const{hasM:i,hasZ:a}=e[0];return new y["a"]({hasM:i,hasZ:a,paths:[s],spatialReference:t})}};Object(s["a"])([Object(a["b"])({type:b["a"],json:{read:{source:"summary.envelope"}}})],m.prototype,"extent",void 0),Object(s["a"])([Object(a["b"])()],m.prototype,"features",void 0),Object(s["a"])([Object(o["a"])("features")],m.prototype,"readFeatures",null),Object(s["a"])([Object(a["b"])()],m.prototype,"geometryType",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"mergedGeometry",null),Object(s["a"])([Object(a["b"])()],m.prototype,"routeId",void 0),Object(s["a"])([Object(a["b"])()],m.prototype,"routeName",void 0),Object(s["a"])([Object(a["b"])({value:null,readOnly:!0})],m.prototype,"strings",null),Object(s["a"])([Object(a["b"])({json:{read:{source:"summary.totalDriveTime"}}})],m.prototype,"totalDriveTime",void 0),Object(s["a"])([Object(a["b"])({json:{read:{source:"summary.totalLength"}}})],m.prototype,"totalLength",void 0),Object(s["a"])([Object(a["b"])({json:{read:{source:"summary.totalTime"}}})],m.prototype,"totalTime",void 0),m=Object(s["a"])([Object(n["a"])("esri.rest.support.DirectionsFeatureSet")],m);const f=m},7945:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r("a4ee"),i=r("fa8a"),a=r("6a0e"),o=r("59b2"),n=(r("b50f"),r("c120"),r("cea0"),r("d386"));const c=new i["a"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let l=class extends a["a"]{constructor(e){super(e),this.description=null,this.type=null}};Object(s["a"])([Object(o["b"])({type:String,json:{write:!0}})],l.prototype,"description",void 0),Object(s["a"])([Object(o["b"])({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s["a"])([Object(n["a"])("esri.rest.support.GPMessage")],l);const u=l},"95a2":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r("a4ee"),i=r("fa8a"),a=r("59b2"),o=(r("b50f"),r("c120"),r("cea0"),r("d386")),n=r("7945");const c=new i["a"]({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let l=class extends n["a"]{constructor(e){super(e),this.type=null}};Object(s["a"])([Object(a["b"])({type:String,json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=Object(s["a"])([Object(o["a"])("esri.rest.support.NAMessage")],l);const u=l},"98bd":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y}));var s=r("a4ee"),i=(r("e92d"),r("cea0"),r("b50f"),r("c120"),r("2dd4"),r("d386")),a=r("2eab"),o=r("a3a2"),n=r("a8d5"),c=r("c279"),l=r("bb72");const u=Object(o["a"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function p(e,t,r){const s=[],i=[],o={},p={},b=Object(l["c"])(e),{path:d}=b;t.stops&&t.stops.features&&Object(c["a"])(t.stops.features,i,"stops.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(c["a"])(t.pointBarriers.features,i,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(c["a"])(t.polylineBarriers.features,i,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(c["a"])(t.polygonBarriers.features,i,"polygonBarriers.features",o);const y=await Object(n["a"])(i);for(const a in o){const e=o[a];s.push(a),p[a]=y.slice(e[0],e[1])}if(Object(c["e"])(p,s)){let e=null;try{e=await Object(c["c"])(d,t.apiKey,r)}catch{}e&&!e.hasZ&&Object(c["b"])(p,s)}for(const a in p)p[a].forEach((e,r)=>{t.get(a)[r].geometry=e});const O={...r,query:{...b.query,...u.toQueryParams(t),f:"json"}},m=d.endsWith("/solve")?d:d+"/solve",f=await Object(a["default"])(m,O);return Object(c["d"])(f)}var b=r("9209");let d=class extends b["a"]{constructor(e){super(e)}solve(e,t){return p(this.url,e,t)}};d=Object(s["a"])([Object(i["a"])("esri.tasks.RouteTask")],d);const y=d},a3a2:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const s=e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t};class i{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const i=this._options[e];if(i){const a="boolean"!=typeof i&&i.name?i.name:e,o="boolean"!=typeof i&&i.getter?i.getter(t):t[e];null!=o&&(r[a]=s(o)?o.join(","):"object"==typeof o?JSON.stringify(o):o)}else r[e]=t[e]},this),r}}function a(e){return new i(e)}},c279:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return J})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return E}));var s=r("2eab"),i=r("ce50"),a=r("b2b2"),o=r("9d1d"),n=r("e041"),c=r("bb72"),l=r("a4ee"),u=r("6a0e"),p=r("59b2"),b=(r("b50f"),r("c120"),r("cea0"),r("d386")),d=r("7ffa"),y=r("448d"),O=r("fa8a");const m=Object(O["b"])()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),f=(Object(O["b"])()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),Object(O["b"])()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),Object(O["b"])()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),Object(O["b"])()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),Object(O["b"])()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),j=(Object(O["b"])()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),Object(O["b"])()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),Object(O["b"])()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}));var h;let v=h=class extends u["a"]{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new h(Object(d["a"])({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(l["a"])([Object(p["b"])({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"description",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"id",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"name",void 0),Object(l["a"])([Object(p["b"])({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),Object(l["a"])([Object(p["b"])({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),Object(l["a"])([Object(y["a"])(m)],v.prototype,"simplificationToleranceUnits",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),Object(l["a"])([Object(y["a"])(j)],v.prototype,"type",void 0),Object(l["a"])([Object(p["b"])({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),Object(l["a"])([Object(y["a"])(f)],v.prototype,"uturnAtJunctions",void 0),v=h=Object(l["a"])([Object(b["a"])("esri.rest.support.TravelMode")],v);const g=v;let T=class extends u["a"]{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(l["a"])([Object(p["b"])()],T.prototype,"currentVersion",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"defaultTravelMode",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"directionsLanguage",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"directionsSupportedLanguages",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"directionsTimeAttribute",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"hasZ",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"impedance",void 0),Object(l["a"])([Object(p["b"])()],T.prototype,"networkDataset",void 0),Object(l["a"])([Object(p["b"])({type:[g]})],T.prototype,"supportedTravelModes",void 0),T=Object(l["a"])([Object(b["a"])("esri.rest.support.NetworkServiceDescription")],T);const N=T;var A=r("8d60"),w=r("afcf"),M=r("2edc"),B=r("95a2"),S=r("5b29");let k=class extends u["a"]{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l["a"])([Object(p["b"])({type:S["a"],json:{write:!0}})],k.prototype,"directions",void 0),Object(l["a"])([Object(p["b"])({type:A["a"],json:{write:!0}})],k.prototype,"route",void 0),Object(l["a"])([Object(p["b"])({type:String,json:{write:!0}})],k.prototype,"routeName",void 0),Object(l["a"])([Object(p["b"])({type:[A["a"]],json:{write:!0}})],k.prototype,"stops",void 0),k=Object(l["a"])([Object(b["a"])("esri.rest.support.RouteResult")],k);const R=k;function U(e){return e&&M["default"].fromJSON(e).features.map(e=>e)}let D=class extends u["a"]{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return U(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return U(e)}readPolygonBarriers(e){return U(e)}};Object(l["a"])([Object(p["b"])({aliasOf:"pointBarriers"})],D.prototype,"barriers",void 0),Object(l["a"])([Object(p["b"])({type:[B["a"]]})],D.prototype,"messages",void 0),Object(l["a"])([Object(p["b"])({type:[A["a"]]})],D.prototype,"pointBarriers",void 0),Object(l["a"])([Object(w["a"])("pointBarriers",["barriers","pointBarriers"])],D.prototype,"readPointBarriers",null),Object(l["a"])([Object(p["b"])({type:[A["a"]]})],D.prototype,"polylineBarriers",void 0),Object(l["a"])([Object(w["a"])("polylineBarriers")],D.prototype,"readPolylineBarriers",null),Object(l["a"])([Object(p["b"])({type:[A["a"]]})],D.prototype,"polygonBarriers",void 0),Object(l["a"])([Object(w["a"])("polygonBarriers")],D.prototype,"readPolygonBarriers",null),Object(l["a"])([Object(p["b"])({type:[R]})],D.prototype,"routeResults",void 0),D=Object(l["a"])([Object(b["a"])("esri.rest.support.RouteResultsContainer")],D);const P=D;function I(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}function J(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function x(e){const t=[],r=[],{directions:s=[],routes:{features:i=[],spatialReference:o=null}={},stops:{features:n=[],spatialReference:c=null}={},barriers:l,polygonBarriers:u,polylineBarriers:p,messages:b}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let y,O,m=!0;const f=i&&o||n&&c||l&&l.spatialReference||u&&u.spatialReference||p&&p.spatialReference;s.forEach(e=>{t.push(y=e.routeName),r[y]={directions:e}}),i.forEach(e=>{-1===t.indexOf(y=e.attributes.Name)&&(t.push(y),r[y]={}),Object(a["k"])(e.geometry)&&(e.geometry.spatialReference=f),r[y].route=e}),n.forEach(e=>{O=e.attributes,-1===t.indexOf(y=O.RouteName||d)&&(t.push(y),r[y]={}),y!==d&&(m=!1),Object(a["k"])(e.geometry)&&(e.geometry.spatialReference=f),null==r[y].stops&&(r[y].stops=[]),r[y].stops.push(e)}),n.length>0&&!0===m&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const j=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return P.fromJSON({routeResults:j,pointBarriers:l,polygonBarriers:u,polylineBarriers:p,messages:b})}function E(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a["k"])(e)&&e.hasZ)return!0}return!1}async function L(e,t,r){if(!e)throw new i["a"]("network-service:missing-url","Url to Network service is missing");const a=Object(c["a"])({f:"json",token:t},r),{data:o}=await Object(s["default"])(e,a);o.supportedTravelModes||(o.supportedTravelModes=[]);for(let s=0;s<o.supportedTravelModes.length;s++)o.supportedTravelModes[s].id||(o.supportedTravelModes[s].id=o.supportedTravelModes[s].itemId);const n=o.currentVersion>=10.4?C(e,t,r):F(e,r),{defaultTravelMode:l,supportedTravelModes:u}=await n;return o.defaultTravelMode=l,o.supportedTravelModes=u,N.fromJSON(o)}async function F(e,t){var r,i;const a=Object(c["a"])({f:"json"},t),{data:l}=await Object(s["default"])(e.replace(/\/rest\/.*$/i,"/info"),a);if(!l||!l.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:u}=l,p=Object(n["I"])(u)+"/sharing/rest/portals/self",{data:b}=await Object(s["default"])(p,a),d=Object(o["b"])("helperServices.routingUtilities.url",b);if(!d)return{supportedTravelModes:[],defaultTravelMode:null};const y=Object(c["c"])(u),O=/\/solve$/i.test(y.path)?"Route":/\/solveclosestfacility$/i.test(y.path)?"ClosestFacility":"ServiceAreas",m=Object(c["a"])({f:"json",serviceName:O},t),f=Object(n["I"])(d)+"/GetTravelModes/execute",j=await Object(s["default"])(f,m),h=[];let v=null;if(null!=j&&null!=(r=j.data)&&null!=(i=r.results)&&i.length){const e=j.data.results;for(const t of e){var g;if("supportedTravelModes"===t.paramName){if(null!=(g=t.value)&&g.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);h.push(t)}}else"defaultTravelMode"===t.paramName&&(v=t.value)}}return{supportedTravelModes:h,defaultTravelMode:v}}async function C(e,t,r){try{const i=Object(c["a"])({f:"json",token:t},r),a=Object(n["I"])(e)+"/retrieveTravelModes",{data:{supportedTravelModes:o,defaultTravelMode:l}}=await Object(s["default"])(a,i);return{supportedTravelModes:o,defaultTravelMode:l}}catch(a){throw new i["a"]("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:a})}}}}]);
//# sourceMappingURL=chunk-1a64e58c.62a3a371.js.map