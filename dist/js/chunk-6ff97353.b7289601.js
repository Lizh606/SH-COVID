(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ff97353"],{"04c4":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("c120"),s=i("ce76");const r=5e4,a={minX:0,minY:0,maxX:0,maxY:0};function o(e,t,i){a.minX=t[0],a.minY=t[1],a.maxX=t[2],a.maxY=t[3],e.search(a,i)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s["a"](9,Object(n["a"])("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((i,n)=>{e[t++]=n}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),o(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>r&&this._loadIndex()))}}},6517:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i("ce50"),s=i("ce6d"),r=i("e92d"),a=i("b2b2"),o=i("4261"),l=i("9180"),d=i("6655"),h=i("04c4"),c=i("d97e"),u=i("9392"),f=i("8152");const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new u["b"](t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(c["a"])(new f["a"],e.geometry,t.hasZ,t.hasM)),e.centroid)};class p{constructor(e){this.geometryInfo=e,this._boundsStore=new h["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new s["a"],this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(l["h"])(l["a"]);return this._featuresById.forEach(t=>{const i=this._boundsStore.get(t.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{Object(a["k"])(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t(Object(o["h"])(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new n["a"]("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let s;if(this._markedIds.add(t),i?(e.displayId=i.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(a["k"])(this.onFeatureAdd)&&this.onFeatureAdd(e),Object(a["j"])(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=Object(d["r"])(Object(a["k"])(s)?s:Object(l["h"])(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(a["k"])(s)&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){return Object(a["k"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},"88d1":function(e,t,i){"use strict";i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return o}));var n=i("c120"),s=i("7ffa"),r=i("a94c"),a=i("8246");function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a["a"]:"esriGeometryPolyline"===e?a["c"]:a["b"]}}}function l(e,t){if(Object(n["a"])("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${t.includes(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const n=new Function(i);return()=>new n}catch(i){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(e)}}]}function h(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},ce76:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("b50f"),s=i("b2b2"),r=i("8a44"),a=i("4637");class o{constructor(e=9,t){this.compareMinX=c,this.compareMinY=u,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),I.prune(),B.prune(),F.prune()}all(e){this._all(this.data,e)}search(e,t){let i=this.data;const n=this.toBBox;if(_(e,i))for(b.clear();i;){for(let s=0,r=i.children.length;s<r;s++){const r=i.children[s],a=i.leaf?n(r):r;_(e,a)&&(i.leaf?t(r):y(e,a)?this._all(r,t):b.push(r))}i=b.pop()}}collides(e){let t=this.data;const i=this.toBBox;if(!_(e,t))return!1;for(b.clear();t;){for(let n=0,s=t.children.length;n<s;n++){const s=t.children[n],r=t.leaf?i(s):s;if(_(e,r)){if(t.leaf||y(e,r))return!0;b.push(s)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(e){if(!e)return this;let t,i=this.data,r=null,a=0,o=!1;const l=this.toBBox(e);for(B.clear(),F.clear();i||B.length>0;){var d;if(i||(i=Object(s["d"])(B.pop()),r=B.data[B.length-1],a=null!=(d=F.pop())?d:0,o=!0),i.leaf&&(t=Object(n["e"])(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),B.push(i),this._condense(B),this;o||i.leaf||!y(i,l)?r?(a++,i=r.children[a],o=!1):i=null:(B.push(i),F.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=e;for(I.clear();i;){var n;if(!0===i.leaf)for(const e of i.children)t(e);else I.pushArray(i.children);i=null!=(n=I.pop())?n:null}}_build(e,t,i,n){const s=i-t+1;let r=this._maxEntries;if(s<=r){const n=new v(e.slice(t,i+1));return l(n,this.toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const a=new O([]);a.height=n;const o=Math.ceil(s/r),d=o*Math.ceil(Math.sqrt(r));x(e,t,i,d,this.compareMinX);for(let l=t;l<=i;l+=d){const t=Math.min(l+d-1,i);x(e,l,t,o,this.compareMinY);for(let i=l;i<=t;i+=o){const s=Math.min(i+o-1,t);a.children.push(this._build(e,i,s,n-1))}}return l(a,this.toBBox),a}_chooseSubtree(e,t,i,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==i;){let i,n=1/0,s=1/0;for(let r=0,a=t.children.length;r<a;r++){const a=t.children[r],o=f(a),l=p(e,a)-o;l<s?(s=l,n=o<n?o:n,i=a):l===s&&o<n&&(n=o,i=a)}t=i||t.children[0]}return t}_insert(e,t,i){const n=this.toBBox,s=i?e:n(e);B.clear();const r=this._chooseSubtree(s,this.data,t,B);for(r.children.push(e),h(r,s);t>=0&&B.data[t].children.length>this._maxEntries;)this._split(B,t),t--;this._adjustParentBBoxes(s,B,t)}_split(e,t){const i=e.data[t],n=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,n);const r=this._chooseSplitIndex(i,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new v(a):new O(a);o.height=i.height,l(i,this.toBBox),l(o,this.toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this.data=new O([e,t]),this.data.height=e.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let n,s,r;n=s=1/0;for(let a=t;a<=i-t;a++){const t=d(e,0,a,this.toBBox),o=d(e,a,i,this.toBBox),l=g(t,o),h=f(t)+f(o);l<n?(n=l,r=a,s=h<s?h:s):l===n&&h<s&&(s=h,r=a)}return r}_chooseSplitAxis(e,t,i){const n=e.leaf?this.compareMinX:c,s=e.leaf?this.compareMinY:u;this._allDistMargin(e,t,i,n)<this._allDistMargin(e,t,i,s)&&e.children.sort(n)}_allDistMargin(e,t,i,n){e.children.sort(n);const s=this.toBBox,r=d(e,0,t,s),a=d(e,i-t,i,s);let o=m(r)+m(a);for(let l=t;l<i-t;l++){const t=e.children[l];h(r,e.leaf?s(t):t),o+=m(r)}for(let l=i-t-1;l>=t;l--){const t=e.children[l];h(a,e.leaf?s(t):t),o+=m(a)}return o}_adjustParentBBoxes(e,t,i){for(let n=i;n>=0;n--)h(t.data[n],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice(Object(n["e"])(r,i,r.length,s.indexHint),1)}else this.clear();else l(i,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){d(e,0,e.children.length,t,e)}function d(e,t,i,n,s){s||(s=new v([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,a=t;a<i;a++)r=e.children[a],h(s,e.leaf?n(r):r);return s}function h(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function u(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-i)*Math.max(0,r-n)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,i,n,r){const o=[t,i];for(;o.length;){const t=Object(s["d"])(o.pop()),i=Object(s["d"])(o.pop());if(t-i<=n)continue;const l=i+Math.ceil((t-i)/n/2)*n;Object(a["a"])(e,l,i,t,r),o.push(i,l,l,t)}}const b=new r["a"],I=new r["a"],B=new r["a"],F=new r["a"]({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class j extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new n["a"]}}class v extends j{constructor(e){super(),this.children=e,this.leaf=!0}}class O extends j{constructor(e){super(),this.children=e,this.leaf=!1}}},d77e:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return C})),i.d(t,"inferFieldType",(function(){return L})),i.d(t,"inferFields",(function(){return R})),i.d(t,"inferLocationInfo",(function(){return P}));i("e06a");var n=i("2eab"),s=i("ce50"),r=i("e92d"),a=i("7015"),o=i("f4cc"),l=i("e041"),d=i("8188"),h=i("d641"),c=i("7f83"),u=i("9786"),f=i("9392"),m=i("8152"),p=i("6517"),g=i("1ec3"),y=i("6411");const _=/^\s*"([\S\s]*)"\s*$/,x=/""/g,b="\n",I=[","," ",";","|","\t"];function*B(e,t,i){let n=0;for(;n<=e.length;){const s=e.indexOf(t,n),r=e.substring(n,s>-1?s:void 0);n+=r.length+t.length,i&&!r.trim()||(yield r)}}function F(e){const t=e.includes("\r\n")?"\r\n":b;return B(e,t,!0)}function w(e,t){return B(e,t,!1)}function j(e){const t=e.trim();let i=0,n="";for(const s of I){const e=t.split(s).length;e>i&&(i=e,n=s)}return""===n?null:n}function*v(e,t,i,n=(()=>Object.create(null))){let s="",r="",a=0,o=n(),l=0;e:for(const d of e){const e=w(d,i);for(const d of e)if(s+=r+d,r="",a+=O(d),a%2==0){if(a>0){const e=_.exec(s);if(!e){o=n(),l=0,s="",a=0;continue e}o[t[l]]=e[1].replace(x,'"'),l++}else o[t[l]]=s,l++;s="",a=0}else r=i;0===a?(yield o,o=n(),l=0):r=b}}function O(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}var M=i("88d1"),E=i("80b7"),N=i("c1da"),S=i("5996");const T=Object(M["d"])("esriGeometryPoint"),Y=["csv"],X=[0,0];class k{constructor(e,t){this.x=e,this.y=t}}class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}async load(e,t={}){var i;this.loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(null==e||null==(i=e.parsingOptions)?void 0:i.spatialReference)]),s=q(n,e);this.locationInfo=s.locationInfo,this.delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(n);if(this._queryEngine.featureStore.addMany(r),s.layerDefinition.extent=this._queryEngine.fullExtent,s.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new s["a"]("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=Object(o["g"])(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),Object(o["l"])(e)||r["a"].getLogger("esri.layers.CSVLayer").error(new s["a"]("csv-layer:refresh","An error occurred during refresh",{error:e}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions;if(!t)throw new s["a"]("csv-layer:invalid-source","url not defined");const r=Object(l["K"])(t);return(await Object(n["default"])(r.path,{query:{...r.query,...i},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:s}=e.layerDefinition,r=new p["a"]({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new y["a"]({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this.locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:r}=this._queryEngine;let a=[];const o=[],l=s.fields.filter(e=>e.name!==n).map(e=>e.name);let p=0;const g=F(e);g.next();const y={};for(const d of s.fields)if("esriFieldTypeOID"!==d.type&&"esriFieldTypeGlobalID"!==d.type){const e=Object(N["o"])(d);void 0!==e&&(y[d.name]=e)}const _=v(g,l,this.delimiter,Object(M["b"])(y,n));for(const d of _){const e=this._parseCoordinateValue(d[t]),r=this._parseCoordinateValue(d[i]);if(null!=r&&null!=e&&!isNaN(e)&&!isNaN(r)){d[t]=e,d[i]=r;for(const e in d)if(e!==t&&e!==i)if(s.isDateField(e)){const t=new Date(d[e]);d[e]=Q(t,d[e])?t.getTime():null}else if(s.isNumericField(e)){const t=U(d[e]);isNaN(t)?d[e]=null:d[e]=t}d[n]=p,p++,a.push(new k(r,e)),o.push(d)}}if(!Object(c["d"])({wkid:4326},r))if(Object(c["p"])(r))for(const d of a)[d.x,d.y]=Object(u["c"])(d.x,d.y,X);else a=Object(d["j"])(h["a"],a,S["a"].WGS84,r,null);const x=[];for(let d=0;d<a.length;d++){const{x:e,y:t}=a[d],i=o[d];i[n]=d+1,x.push(new f["b"](new m["a"]([],[e,t]),i,null,i[n]))}return x}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=U(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(g["a"])(c["b"],e)}catch{throw new s["a"]("csv-layer:projection-not-supported","Projection not supported")}}}function q(e,t){const i=t.parsingOptions||{},n={delimiter:i.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:i.latitudeField,longitudeFieldName:i.longitudeField}},r=F(e);let a=r.next().value;if(!a)throw new s["a"]("csv-layer:empty-csv","CSV is empty",{csv:e});if(a=a.trim(),!i.delimiter){const e=j(a);if(!e)throw new s["a"]("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");n.delimiter=e}const o=a.split(n.delimiter).filter(e=>!!e),d=n.layerDefinition={name:Object(l["k"])(t.url,Y)||"csv",drawingInfo:T,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:i.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:i.spatialReference||{wkid:102100}}};if(!i.latitudeField||!i.longitudeField){const e=P(o);if(!i.longitudeField&&!e.longitudeFieldName||!i.latitudeField&&!e.latitudeFieldName)throw new s["a"]("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");n.locationInfo={longitudeFieldName:i.longitudeField||e.longitudeFieldName,latitudeFieldName:i.latitudeField||e.latitudeFieldName}}const h=R(r,n.delimiter,o,n.locationInfo);if(i.fields&&i.fields.length){const e=new Map;for(const t of i.fields)e.set(t.name.toLowerCase(),t);for(const t of h){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}if(d.fields=h,!d.fields.some(e=>"esriFieldTypeOID"===e.type&&(d.objectIdField=e.name,!0))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};d.objectIdField=e.name,d.fields.unshift(e)}if(d.timeInfo){const e=new E["a"](d.fields),t=d.timeInfo;if(t.startTimeField){const i=e.get(t.startTimeField);i?(t.startTimeField=i.name,i.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const i=e.get(t.endTimeField);i?(t.endTimeField=i.name,i.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const i=e.get(t.trackIdField);t.trackIdField=i?i.name:null}t.startTimeField||t.endTimeField||(d.timeInfo=null)}return n}const D=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],A=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function P(e){const t=e.map(e=>e.toLowerCase());return{longitudeFieldName:e[t.indexOf(A.find(e=>t.includes(e)))],latitudeFieldName:e[t.indexOf(D.find(e=>t.includes(e)))]}}function R(e,t,i,n){const s=[],r=v(e,i,t),a=[];for(const o of r){if(10===a.length)break;a.push(o)}for(const o of i)if(o===n.longitudeFieldName||o===n.latitudeFieldName)s.push({name:o,type:"esriFieldTypeDouble",alias:o});else{const e=L(a.map(e=>e[o])),t={name:o,type:null,alias:o};switch(e){case"integer":t.type="esriFieldTypeInteger";break;case"double":t.type="esriFieldTypeDouble";break;case"date":t.type="esriFieldTypeDate",t.length=36;break;default:t.type="esriFieldTypeString",t.length=255}s.push(t)}return s}function L(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map(e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=U(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":Q(new Date(e),e)?"date":"string":"string"}}).reduce((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0)}const G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,V=Number.isNaN(new Date("technology 10").getTime());function Q(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(!V&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!G.test(e[n]),n++;i=!t}}return i}const U=function(){const e=Object(a["a"])(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(s){const r=t.exec(s);if(e.factor=n,!r)return NaN;let a=r[1];if(!r[1]){if(!r[2])return NaN;a=r[2],e.factor*=-1}return a=a.replace(i,"").replace(e.decimal,"."),+a*e.factor}}()}}]);
//# sourceMappingURL=chunk-6ff97353.b7289601.js.map