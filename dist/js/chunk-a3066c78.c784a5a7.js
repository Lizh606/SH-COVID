(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3066c78"],{"1cb4":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var i=s("50e6"),r=s("dff3");class o{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let s=0,i=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(s=t),e[1]%2&&(i=t)),[s,i]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=256,s=e.spatialReference.isGeographic,o=[],n=e.lods.length;for(let r=0;r<n;r++){const t=e.lods[r],n=s?t.resolution:2*t.resolution;o.push(new i["a"]({level:t.level,scale:t.scale,resolution:n}))}return new r["a"]({size:[t,t],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:o})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=512,s=[],o=e.lods.length;for(let r=0;r<o;r++){const t=e.lods[r],o=.5*t.resolution;s.push(new i["a"]({level:t.level,scale:t.scale,resolution:o}))}return new r["a"]({size:[t,t],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:s})}}},"51b2":function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s("8c71"),r=s("db21"),o=s("bc05");function n(e,t,s,i,r,o){const{iconRotationAlignment:n,textRotationAlignment:l,iconTranslate:a,iconTranslateAnchor:h,textTranslate:c,textTranslateAnchor:u}=i;let d=0;for(const y of e.colliders){const[e,i]=0===y.partIndex?a:c,_=0===y.partIndex?h:u,f=y.minLod<=o&&o<=y.maxLod;d+=f?0:1,y.enabled=f,y.xScreen=y.xTile*r[0]+y.yTile*r[3]+r[6],y.yScreen=y.xTile*r[1]+y.yTile*r[4]+r[7],0===_?(y.xScreen+=s*e-t*i,y.yScreen+=t*e+s*i):(y.xScreen+=e,y.yScreen+=i),1===(0===y.partIndex?n:l)?(y.dxScreen=y.dxPixels,y.dyScreen=y.dyPixels):(y.dxScreen=s*(y.dxPixels+y.width/2)-t*(y.dyPixels+y.height/2)-y.width/2,y.dyScreen=t*(y.dxPixels+y.width/2)+s*(y.dyPixels+y.height/2)-y.height/2)}e.colliders.length>0&&d===e.colliders.length&&(e.unique.show=!1)}class l{constructor(e,t,s,n,l,a){this._symbols=e,this._styleRepository=n,this._zoom=l,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new o["a"](t,s,r["a"]),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const r of e)for(const e of r.symbols)this._allNeededMatrices.has(e.tile)||this._allNeededMatrices.set(e.tile,Object(i["a"])(e.tile.transforms.tileUnitsToPixels))}work(e){const t=this._gridIndex;function s(e){const s=e.xScreen+e.dxScreen,i=e.yScreen+e.dyScreen,r=s+e.width,o=i+e.height,[n,l,a,h]=t.getCellSpan(s,i,r,o);for(let c=l;c<=h;c++)for(let e=n;e<=a;e++){const n=t.cells[c][e];for(const e of n){const t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,l=t+e.width,a=n+e.height;if(!(r<t||s>l||o<n||i>a))return!0}}return!1}const i=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const t=this._symbols[this._currentLayerCursor],r=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-i>e)return!1;const o=t.symbols[this._currentSymbolCursor];if(!o.unique.show)continue;n(o,this._si,this._co,r,this._allNeededMatrices.get(o.tile),this._zoom);const l=o.unique;if(!l.show)continue;const{iconAllowOverlap:a,iconIgnorePlacement:h,textAllowOverlap:c,textIgnorePlacement:u}=r;for(const e of o.colliders){if(!e.enabled)continue;const t=l.parts[e.partIndex];t.show&&(!(e.partIndex?c:a)&&s(e)&&(e.hard?l.show=!1:t.show=!1))}if(l.show)for(const e of o.colliders){if(!e.enabled)continue;if(e.partIndex?u:h)continue;if(!l.parts[e.partIndex].show)continue;const t=e.xScreen+e.dxScreen,s=e.yScreen+e.dyScreen,i=t+e.width,r=s+e.height,[o,n,a,c]=this._gridIndex.getCellSpan(t,s,i,r);for(let l=n;l<=c;l++)for(let t=o;t<=a;t++)this._gridIndex.cells[l][t].push(e)}}}return!0}_getProperties(e){const t=this._styleProps.get(e);if(t)return t;const s=this._zoom,i=this._styleRepository.getStyleLayerByUID(e),r=0!==i.getLayoutValue("symbol-placement",s);let o=i.getLayoutValue("icon-rotation-alignment",s);2===o&&(o=r?0:1);let n=i.getLayoutValue("text-rotation-alignment",s);2===n&&(n=r?0:1);const l=i.getPaintValue("icon-translate",s),a=i.getPaintValue("icon-translate-anchor",s),h=i.getPaintValue("text-translate",s),c=i.getPaintValue("text-translate-anchor",s),u={iconAllowOverlap:i.getLayoutValue("icon-allow-overlap",s),iconIgnorePlacement:i.getLayoutValue("icon-ignore-placement",s),textAllowOverlap:i.getLayoutValue("text-allow-overlap",s),textIgnorePlacement:i.getLayoutValue("text-ignore-placement",s),iconRotationAlignment:o,textRotationAlignment:n,iconTranslateAnchor:a,iconTranslate:l,textTranslateAnchor:c,textTranslate:h};return this._styleProps.set(e,u),u}}},"81af":function(e,t,s){"use strict";s.d(t,"a",(function(){return S}));var i=s("2eab"),r=s("c120"),o=s("f4cc"),n=s("e041"),l=s("dfa0"),a=(s("7ce4"),s("d267"),s("1956"),s("d17d"),s("9f8b"),s("a1ff")),h=(s("0fa6"),s("a9c0"));class c{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new h["a"](0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new h["a"];let s=null,i=-1;for(let r=0;r<this._free.length;++r){const o=this._free[r];e<=o.width&&t<=o.height&&(null===s||o.y<=s.y&&o.x<=s.x)&&(s=o,i=r)}return null===s?new h["a"]:(this._free.splice(i,1),s.width<s.height?(s.width>e&&this._free.push(new h["a"](s.x+e,s.y,s.width-e,t)),s.height>t&&this._free.push(new h["a"](s.x,s.y+t,s.width,s.height-t))):(s.width>e&&this._free.push(new h["a"](s.x+e,s.y,s.width-e,s.height)),s.height>t&&this._free.push(new h["a"](s.x,s.y+t,e,s.height-t))),new h["a"](s.x,s.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){const s=this._free[t];if(s.y===e.y&&s.height===e.height&&s.x+s.width===e.x)s.width+=e.width;else if(s.x===e.x&&s.width===e.width&&s.y+s.height===e.y)s.height+=e.height;else if(e.y===s.y&&e.height===s.height&&e.x+e.width===s.x)s.x=e.x,s.width+=e.width;else{if(e.x!==s.x||e.width!==s.width||e.y+e.height!==s.y)continue;s.y=e.y,s.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}}class u{constructor(e,t,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=s,this._binPack=new c(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,t){const s=[],i=this._glyphSource,r=new Set,o=1/256;for(const l of t){const e=Math.floor(l*o);r.add(e)}const n=[];return r.forEach(t=>{if(t<=256){const s=e+t;if(this._rangePromises.has(s))n.push(this._rangePromises.get(s));else{const r=i.getRange(e,t).then(()=>{this._rangePromises.delete(s)},()=>{this._rangePromises.delete(s)});this._rangePromises.set(s,r),n.push(r)}}}),Promise.all(n).then(()=>{let r=this._glyphIndex[e];r||(r={},this._glyphIndex[e]=r);for(const o of t){const t=r[o];if(t){s[o]={sdf:!0,rect:t.rect,metrics:t.metrics,page:t.page,code:o};continue}const n=i.getGlyph(e,o);if(!n||!n.metrics)continue;const l=n.metrics;let a;if(0===l.width)a=new h["a"](0,0,0,0);else{const e=3,t=l.width+2*e,s=l.height+2*e;let i=t%4?4-t%4:4,r=s%4?4-s%4:4;1===i&&(i=5),1===r&&(r=5),a=this._binPack.allocate(t+i,s+r),a.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new c(this.width-4,this.height-4),a=this._binPack.allocate(t+i,s+r));const o=this._glyphData[this._currentPage],h=n.bitmap;let u,d;if(h)for(let n=0;n<s;n++){u=t*n,d=this.width*(a.y+n+1)+a.x;for(let e=0;e<t;e++)o[d+e+1]=h[u+e]}}r[o]={rect:a,metrics:l,tileIDs:null,page:this._currentPage},s[o]={sdf:!0,rect:a,metrics:l,page:this._currentPage,code:o},this._dirties[this._currentPage]=!0}return s})}removeGlyphs(e){for(const t in this._glyphIndex){const s=this._glyphIndex[t];if(!s)continue;let i;for(const t in s)if(i=s[t],i.tileIDs.delete(e),0===i.tileIDs.size){const e=this._glyphData[i.page],r=i.rect;let o,n;for(let t=0;t<r.height;t++)for(o=this.width*(r.y+t)+r.x,n=0;n<r.width;n++)e[o+n]=0;delete s[t],this._dirties[i.page]=!0}}}bind(e,t,s,i=0){this._textures[s]||(this._textures[s]=new a["a"](e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const r=this._textures[s];r.setSamplingMode(t),this._dirties[s]&&r.setData(this._glyphData[s]),e.bindTexture(r,i),this._dirties[s]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}}var d=s("013b");class y{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const t=e.getMessage();for(;t.next();)switch(t.tag()){case 3:{const e=t.getMessage();let s,i,r,o,n,l,a;for(;e.next();)switch(e.tag()){case 1:s=e.getUInt32();break;case 2:i=e.getBytes();break;case 3:r=e.getUInt32();break;case 4:o=e.getUInt32();break;case 5:n=e.getSInt32();break;case 6:l=e.getSInt32();break;case 7:a=e.getUInt32();break;default:e.skip()}e.release(),s&&(this._metrics[s]={width:r,height:o,left:n,top:l,advance:a},this._bitmaps[s]=i);break}default:t.skip()}t.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class _{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}}class f{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t){const s=this._getFontStack(e);if(s.getRange(t))return Promise.resolve();const r=256*t,o=r+255,n=this._baseURL.replace("{fontstack}",e).replace("{range}",r+"-"+o);return Object(i["default"])(n,{responseType:"array-buffer"}).then(e=>{s.addRange(t,new y(new d["a"](new Uint8Array(e.data),new DataView(e.data))))}).catch(()=>{s.addRange(t,new y)})}getGlyph(e,t){const s=this._getFontStack(e);if(!s)return;const i=Math.floor(t/256);if(i>256)return;const r=s.getRange(i);return r?{metrics:r.getMetrics(t),bitmap:r.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new _),t}}var g=s("793f");const p="dasharray-";class m{constructor(e,t,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||t<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=t,s>0&&(this._maxItemSize=s),this._binPack=new c(e-4,t-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new c(this._pageWidth-4,this._pageHeight-4);const e=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),s=new Uint32Array(e*t);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,t=!1){let s,i,r=this._mosaicRects[e];if(r)return r;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(e&&e.startsWith(p)?([s,i]=this._rasterizeDash(e),t=!0):s=this._sprites.getSpriteInfo(e),!s||!s.width||!s.height||s.width<0||s.height<0)return null;const o=s.width,n=s.height,[l,a,h]=this._allocateImage(o,n);return l.width<=0?null:(this._copy(l,s,a,h,t,i),r={rect:l,width:o,height:n,sdf:s.sdf,simplePattern:!1,pixelRatio:s.pixelRatio,page:a},this._mosaicRects[e]=r,r)}getSpriteItems(e){const t={};for(const s of e)t[s.name]=this.getSpriteItem(s.name,s.repeat);return t}getMosaicItemPosition(e,t){const s=this.getSpriteItem(e,t),i=s&&s.rect;if(!i)return null;i.width=s.width,i.height=s.height;const r=s.width,o=s.height,n=2;return{tl:[i.x+n,i.y+n],br:[i.x+n+r,i.y+n+o],page:s.page}}bind(e,t,s=0,i=0){this._textures[s]||(this._textures[s]=new a["a"](e,{pixelFormat:6408,dataType:5121,wrapMode:33071,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));const r=this._textures[s];r.setSamplingMode(t),this._dirties[s]&&r.setData(new Uint8Array(this._mosaicsData[s].buffer)),e.bindTexture(r,i),this._dirties[s]=!1}static _copyBits(e,t,s,i,r,o,n,l,a,h,c){let u=i*t+s,d=l*o+n;if(c){d-=o;for(let n=-1;n<=h;n++,u=((n+h)%h+i)*t+s,d+=o)for(let t=-1;t<=a;t++)r[d+t]=e[u+(t+a)%a]}else for(let y=0;y<h;y++){for(let t=0;t<a;t++)r[d+t]=e[u+t];u+=t,d+=o}}_copy(e,t,s,i,r,o){if(!this._sprites||"loaded"!==this._sprites.loadStatus||s>=this._mosaicsData.length)return;const n=new Uint32Array(o?o.buffer:this._sprites.image.buffer),l=this._mosaicsData[s];l&&n||console.error("Source or target images are uninitialized!");const a=2,h=o?t.width:this._sprites.width;m._copyBits(n,h,t.x,t.y,l,i[0],e.x+a,e.y+a,t.width,t.height,r),this._dirties[s]=!0}_allocateImage(e,t){e+=2,t+=2;const s=Math.max(e,t);if(this._maxItemSize&&this._maxItemSize<s){const s=new h["a"](0,0,e,t);return this._mosaicsData.push(new Uint32Array(e*t)),this._dirties.push(!0),this._size.push([e,t]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,t]]}let i=e%4?4-e%4:4,r=t%4?4-t%4:4;1===i&&(i=5),1===r&&(r=5);const o=this._binPack.allocate(e+i,t+r);return o.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new c(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,t)):[o,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const t=/\[(.*?)\]/,s=e.match(t);if(!s)return null;const i=s[1].split(",").map(Number),r=e.slice(e.lastIndexOf("-")+1),[o,n,l]=g["d"].rasterizeDash(i,r);return[{x:0,y:0,width:n,height:l,sdf:!0,pixelRatio:1},new Uint8Array(o.buffer)]}}var b=s("bf7f"),w=s("ae54");class S{constructor(e,t,s){this._layer=e,this._styleRepository=t,this.devicePixelRatio=s,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){this._connection&&(this._connection.close(),this._connection=null),this._styleRepository=null,this._layer=null,this._spriteMosaic&&(this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic=null)}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then(e=>{this._spriteMosaic=new m(1024,1024,250),this._spriteMosaic.setSpriteSource(e)});const t=new f(this._layer.currentStyleInfo.glyphsUrl?Object(n["e"])(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new u(1024,1024,t),this._broadcastPromise=Object(l["b"])("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(t=>(this._connection=t,Promise.all(this._connection.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,vectorTileLayerMaxBuffers:Object(r["a"])("vectortilelayer-max-buffers")},e))))}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}async setStyle(e,t){await this._broadcastPromise,this._styleRepository=e,this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then(e=>{this._spriteMosaic=new m(1024,1024,250),this._spriteMosaic.setSpriteSource(e)});const s=new f(this._layer.currentStyleInfo.glyphsUrl?Object(n["e"])(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new u(1024,1024,s),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:t,vectorTileLayerMaxBuffers:Object(r["a"])("vectortilelayer-max-buffers")})),this._broadcastPromise}fetchTileData(e,t){return this._getRefKeys(e,t).then(e=>{const s=this._layer.sourceNameToSource,i=[];for(const t in s)i.push(t);return this._getSourcesData(i,e,t)})}parseTileData(e,t){const s=e&&e.data;if(!s)return Promise.resolve(null);const{sourceName2DataAndRefKey:i,transferList:r}=s;return 0===Object.keys(i).length?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.getAvailableClient().then(s=>s.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:i,styleLayerUIDs:e.styleLayerUIDs},{...t,transferList:r})))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}perfReport({key:e,milliseconds:t}){Object(b["b"])(e,t,"ms")}async _getTilePayload(e,t,s){const i=w["a"].pool.acquire(e.id),r=this._layer.sourceNameToSource[t].getSourceTileUrl(i.level,i.row,i.col);w["a"].pool.release(i);try{return{protobuff:await this.request(r,s),sourceName:t}}catch(n){if(Object(o["m"])(n))throw n;return{protobuff:null,sourceName:t}}}request(e,t){return Object(i["default"])(e,{responseType:"array-buffer",...t}).then(({data:e})=>e)}_getRefKeys(e,t){const s=this._layer.sourceNameToSource,i=new Array;for(const r in s){const o=s[r].getRefKey(e,t);i.push(o)}return Object(o["j"])(i)}_getSourcesData(e,t,s){const i=[];for(let r=0;r<t.length;r++)if(null==t[r].value||null==e[r])i.push(null);else{const o=this._getTilePayload(t[r].value,e[r],s);i.push(o)}return Object(o["j"])(i).then(e=>{const s={},i=[];for(let r=0;r<e.length;r++)if(e[r].value&&e[r].value&&e[r].value.protobuff&&e[r].value.protobuff.byteLength>0){const o=t[r].value.id;s[e[r].value.sourceName]={refKey:o,protobuff:e[r].value.protobuff},i.push(e[r].value.protobuff)}return{sourceName2DataAndRefKey:s,transferList:i}})}}},ac41:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("b2b2"),r=s("db21");function o(e,t){if(e.priority-t.priority)return e.priority-t.priority;const s=e.tile.key,i=t.tile.key;return s.world-i.world?s.world-i.world:s.level-i.level?s.level-i.level:s.row-i.row?s.row-i.row:s.col-i.col?s.col-i.col:e.xTile-t.xTile?e.xTile-t.xTile:e.yTile-t.yTile}class n{constructor(e,t,s,i,r,o){this._visibleTiles=e,this._symbolRepository=t,this._createCollisionJob=s,this._assignTileSymbolsOpacity=i,this._symbolLayerSorter=r,this._isLayerVisible=o,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}get running(){return this._running}setScreenSize(e,t){this._screenWidth===e&&this._screenHeight===t||this.restart(),this._screenWidth=e,this._screenHeight=t}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const t=performance.now();if(!this._selectionJob.work(e))return!1;if(this._selectionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const t=performance.now();if(!this._collisionJob.work(e))return!1;if(this._collisionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const t=performance.now();if(!this._opacityJob.work(e))return!1;if(this._opacityJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let o=0;o<e.length;o++){const t=e[o];for(let e=0;e<t.uniqueSymbols.length;e++){const s=t.uniqueSymbols[e];for(const e of s.tileSymbols)e.selectedForRendering=!1}}const t=[];let s=0,i=0;const r=this._isLayerVisible;function n(n){let l;const a=performance.now();for(;i<e.length;i++,s=0){const o=e[i],h=o.styleLayerUID;if(!r(h)){t[i]||(t[i]={styleLayerUID:h,symbols:[]});continue}t[i]=t[i]||{styleLayerUID:h,symbols:[]};const c=t[i];for(;s<o.uniqueSymbols.length;s++){if(l=o.uniqueSymbols[s],s%100==99&&performance.now()-a>n)return!1;let e=null,t=!1,i=!1;for(const s of l.tileSymbols)if(!i||!t){const r=s.tile;(!e||r.isCoverage||r.neededForCoverage&&!t)&&(e=s,(r.neededForCoverage||r.isCoverage)&&(i=!0),r.isCoverage&&(t=!0))}if(e.selectedForRendering=!0,i){c.symbols.push(e),l.show=!0;for(const e of l.parts)e.show=!0}else l.show=!1}}for(const e of t)e.symbols.sort(o);return!0}const l=this._symbolLayerSorter;return{work:n,get sortedSymbols(){return t.sort(l)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,t=this._visibleTiles;let s=0;function r(t,s){const i=t.symbols;for(const[e,r]of i)l(r,s);e(t,s);for(const e of t.childrenTiles)r(e,s)}return{work(e){const o=performance.now();for(;s<t.length;s++){if(performance.now()-o>e)return!1;const n=t[s];Object(i["l"])(n.parentTile)||r(n,performance.now())}return!0}}}}function l(e,t){for(const s of e){const e=s.unique;for(const s of e.parts){const i=s.targetOpacity>.5?1:-1;s.startOpacity+=i*((t-s.startTime)/r["d"]),s.startOpacity=Math.min(Math.max(s.startOpacity,0),1),s.startTime=t,s.targetOpacity=e.show&&s.show?1:0}}}},bf7f:function(e,t,s){"use strict";function i(e,t,s,i,r,o){e.fillStyle=t,e.fillRect(s,i,r,o)}function r(e,t,s,i,r,o){e.strokeStyle=t,e.strokeRect(s,i,r,o)}function o(e,t){const s=window.COLLISION_XRAY;for(let o=0;o<t.length;++o){const n=!t[o].unique.show;if(s||!n)for(const l of t[o].colliders){if(!l.enabled)continue;const a=!t[o].unique.parts[l.partIndex].show;if(!s&&a)continue;const h=l.xScreen,c=l.yScreen,u=l.dxScreen,d=l.dyScreen;e.globalAlpha=n||a?.2:1,i(e,"green",h-1,c-1,3,3),r(e,"red",h+u,c+d,l.width,l.height),i(e,"blue",h+u-1,c+d-1,3,3),e.globalAlpha=1}}}function n(e,t,s){if(!window.PERFORMANCE_RECORDING_STORAGE)return;const i=window.PERFORMANCE_RECORDING_STORAGE;i.perf=i.perf||{};const r=i.perf;r[e]=r[e]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:s},r[e].time+=t,r[e].samples.push(t),(null==r[e].min||t<r[e].min)&&(r[e].min=t),(null==r[e].max||t>r[e].max)&&(r[e].max=t)}s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return n}))},ce88:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return q}));var i=s("a4ee"),r=s("ce50"),o=s("b2b2"),n=s("f4cc"),l=s("3795"),a=s("59b2"),h=(s("b50f"),s("c120"),s("cea0"),s("d386")),c=s("1cb4"),u=s("aefa"),d=s("8c71"),y=s("9180"),_=s("66b9"),f=s("81af"),g=s("cba1"),p=s("51b2"),m=s("ac41"),b=s("d5e4"),w=s("bc05");function S(e,t){const s=[],i=new b["a"](4096,s,()=>{const e=new g["b"];return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e}),r=new m["a"](s,i,(t,s,i)=>new p["a"](t,s,i,e.styleRepository,e.key.level,0),(e,t)=>{Object(w["d"])(e,t,!1)},()=>0,e=>{const s=t.getStyleLayerByUID(e).getLayoutProperty("visibility");return!s||1!==s.getValue()});s.push(e),i.add(e),r.setScreenSize(512,512),r.continue(1/0)}var x=s("ae54");class v extends f["a"]{constructor(e,t,s,i,r){super(e,t,s),this._memCache=i,this._loader=r,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map}destroy(){this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,t,s,i){const r=new x["a"](e,t,s,0);let l=this._memCache.get(r.id);if(Object(o["l"])(l))return l.retain(),l;const a=await this._getVectorTileData(r);if(Object(n["w"])(i),!this._layer)return null;if(l=this._memCache.get(r.id),Object(o["l"])(l))return l.retain(),l;const h=this._layer.tileInfo.getTileBounds(Object(y["l"])(),r);return l=new _["a"](r,h[0],h[3],512,512,this._styleRepository,this._memCache),Object(o["l"])(a)?(l.setData(a),l.retain(),this._memCache.put(r.id,l,l.memoryUsage*l.referenced,u["a"])):l.setData(null),l.neededForCoverage=!0,l.transforms.tileUnitsToPixels=Object(d["c"])(1/8,0,0,0,1/8,0,0,0,1),S(l,this._styleRepository),l}_getVectorTileData(e){const t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);const s=new AbortController,i={signal:s.signal},r=this._getParsedVectorTileData(e,i).then(e=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),e)).catch(()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null));return this._ongoingTileRequests.set(t,r),this._ongoingRequestToController.set(t,s),r}_getParsedVectorTileData(e,t){return this.fetchTileData(e,t).then(s=>this.parseTileData({key:e,data:s},t))}request(e,t){return this._loader.request(e,"binary",t)}}var P=s("3b1a"),T=s("361b");const R=1e-6;class C{constructor(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new T["a"]}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=Object(o["f"])(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,t,s){const{context:i}=e,r=s.layers;s.backgroundBucketIds.length>0&&(e.renderPass="background",s.backgroundBucketIds.forEach(i=>this._renderStyleLayer(s.getLayerById(i),e,t,!0))),i.setBlendingEnabled(!1),i.setDepthTestEnabled(!0),i.setDepthWriteEnabled(!0),i.setDepthFunction(515),e.renderPass="opaque";for(let o=r.length-1;o>=0;o--)this._renderStyleLayer(r[o],e,t,!1);i.setDepthWriteEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let o=0;o<r.length;o++)this._renderStyleLayer(r[o],e,t,!1);i.setDepthTestEnabled(!1),e.renderPass="symbol";for(let o=0;o<r.length;o++)this._renderStyleLayer(r[o],e,t,!1);i.bindVAO()}_renderStyleLayer(e,t,s,i=!1){if(!(i||e&&s.layerData.has(e.uid)))return;const r=e.getLayoutProperty("visibility");if(r&&1===r.getValue())return;const{renderPass:o}=t;let n;switch(e.type){case 0:if("background"!==o)return;n="vtlBackground";break;case 1:if("opaque"!==o&&"translucent"!==t.renderPass)return;n="vtlFill";break;case 2:if("translucent"!==o)return;n="vtlLine";break;case 4:if("symbol"!==o)return;n="vtlCircle";break;case 3:if("symbol"!==o)return;n="vtlSymbol"}const l=t.displayLevel;void 0!==e.minzoom&&e.minzoom>l+R||void 0!==e.maxzoom&&e.maxzoom<=l-R||(t.styleLayerUID=e.uid,t.styleLayer=e,this.drawWithBrush(t,s,n))}drawWithBrush(e,t,s){if(!this._brushCache.has(s)){const e=P["b"][s];this._brushCache.set(s,new e)}this._brushCache.get(s).drawMany(e,[t])}}var k=s("901e"),I=s("66af"),M=s("45e3"),O=s("8b9d"),L=s("365a");let D=class extends(Object(M["a"])(Object(I["a"])(L["a"]))){constructor(){super(...arguments),this.type="vector-tile-3d"}initialize(){if(Object(o["k"])(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new r["a"]("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const e=O["q"].force512VTL?this.layer.tileInfo:this.layer.compatibleTileInfo256,t=this._getTileInfoSupportError(e,this.layer.fullExtent);if(t)return this.addResolvingPromise(Promise.reject(t));const{basemapTerrain:s,spatialReference:i,pixelRatio:a}=this.view,h=Object(l["m"])(this.view,"basemapTerrain.tilingSchemeLocked").then(()=>{const e=s.tilingScheme,t=e.pixelSize;let r;this.schemaHelper=new c["a"](t,i.isGeographic),r=256===t?this.layer.compatibleTileInfo256:this.view.spatialReference.isGeographic?this.layer.compatibleTileInfo512:this.layer.tileInfo;const o=this._getTileInfoCompatibilityError(r,e);if(o)throw o;this._set("tileInfo",r)});this._tileHandlerController=new AbortController;const u=this.view.resourceController;this._memCache=u.memoryController.newCache(this.layer.uid,e=>{e.release()});const{style:d}=this.layer.currentStyleInfo,y=new k["a"](d),_=s.mapTileRequester;this._tileHandler=new v(this.layer,y,a,this._memCache,_);const f=this._tileHandlerController.signal,g=e=>u.schedule(e),p=this._tileHandler.start({signal:f,schedule:g}),m=this._tileHandler.spriteMosaic;m.then(e=>{!Object(n["n"])(f)&&this._tileHandler&&(this.painter=new C(e,this._tileHandler.glyphMosaic))}),p.then(()=>this._tileHandlerController=null);const b=()=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const{style:e}=this.layer.currentStyleInfo,t=new k["a"](e),s=new v(this.layer,t,a,this._memCache,_),i=s.start({signal:this._tileHandlerController.signal,schedule:g}),r=s.spriteMosaic;i.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([i,r]).then(([,e])=>{const t=this._tileHandler,i=this.painter;this.painter=new C(e,s.glyphMosaic),this._tileHandler=s,this.emit("data-changed"),t.destroy(),i&&i.dispose()}))};this.updatingHandles.add(this,"layer.currentStyleInfo",b),this.updatingHandles.add(this,"view.pixelRatio",b);const w=Promise.all([h,p,m]);this.addResolvingPromise(w)}destroy(){this.painter=Object(o["f"])(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),Object(o["e"])(this._tileHandler),this._memCache=Object(o["e"])(this._memCache),this._tileHandler=null}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,s=e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,s);return 1===i.minLevel&&256===this.tileInfo.size[0]&&(i.minLevel=0),i}async fetchTile(e,t,s,i){return this._tileHandler.getVectorTile(e,t,s,i)}};Object(i["a"])([Object(a["b"])({aliasOf:"layer.fullExtent"})],D.prototype,"fullExtent",void 0),Object(i["a"])([Object(a["b"])()],D.prototype,"layer",void 0),Object(i["a"])([Object(a["b"])()],D.prototype,"tileInfo",void 0),Object(i["a"])([Object(a["b"])()],D.prototype,"dataLevelRange",null),Object(i["a"])([Object(a["b"])()],D.prototype,"updatingProgressValue",void 0),D=Object(i["a"])([Object(h["a"])("esri.views.3d.layers.VectorTileLayerView3D")],D);const q=D},d5e4:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s("b2b2"),r=s("bc05");const o=32,n=8,l=64;class a{constructor(e,t,s){this.tileCoordRange=e,this._visibleTiles=t,this._createUnique=s,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return Object(i["k"])(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,t){this._uniqueSymbolLayerArray=null;let s=this._tiles.get(e.id);s||(s={symbols:new Map},this._tiles.set(e.id,s));const i=new Map;if(t)for(const r of t)s.symbols.has(r)&&(i.set(r,s.symbols.get(r)),s.symbols.delete(r));else for(const[r,o]of e.layerData)s.symbols.has(r)&&(i.set(r,s.symbols.get(r)),s.symbols.delete(r));this._removeSymbols(i);const a=e.symbols,h=new Map;for(const[c,u]of a){let e=u.length;if(e>=o){let t=this.tileCoordRange;do{t/=2,e/=4}while(e>n&&t>l);const i=new r["a"](this.tileCoordRange,this.tileCoordRange,t);h.set(c,{flat:u,index:i}),s.symbols.set(c,{flat:u,index:i});for(const e of u)i.getCell(e.xTile,e.yTile).push(e)}else h.set(c,{flat:u}),s.symbols.set(c,{flat:u})}this._addSymbols(e.key,a)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[t,s]of this._tiles){const i=new Map;for(const t of e)s.symbols.has(t)&&(i.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(i),0===s.symbols.size&&this._tiles.delete(t)}}removeTile(e){this._uniqueSymbolLayerArray=null;const t=this._tiles.get(e.id);if(!t)return;const s=new Map;for(const[i,r]of e.symbols)t.symbols.has(i)&&(s.set(i,t.symbols.get(i)),t.symbols.delete(i));this._removeSymbols(s),0===t.symbols.size&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[t,{flat:s}]of e)for(const e of s){const s=e.unique,i=s.tileSymbols,r=i.length-1;for(let t=0;t<r;t++)if(i[t]===e){i[t]=i[r];break}if(i.length=r,0===r){const e=this._uniqueSymbolsReferences.get(t);e.delete(s),0===e.size&&this._uniqueSymbolsReferences.delete(t)}e.unique=null}}_addSymbols(e,t){if(0===t.size)return;const s=this._visibleTiles;for(const i of s)i.parentTile||i.key.world!==e.world||i.key.level===e.level&&!i.key.equals(e)||this._matchSymbols(i,e,t);for(const[r,o]of t)for(const e of o)if(Object(i["k"])(e.unique)){const t=this._createUnique();e.unique=t,t.tileSymbols.push(e);let s=this._uniqueSymbolsReferences.get(r);s||(s=new Set,this._uniqueSymbolsReferences.set(r,s)),s.add(t)}}_matchSymbols(e,t,s){if(e.key.level>t.level){const s=e.key.level-t.level;if(e.key.row>>s!==t.row||e.key.col>>s!==t.col)return}if(t.level>e.key.level){const s=t.level-e.key.level;if(t.row>>s!==e.key.row||t.col>>s!==e.key.col)return}if(t.equals(e.key)){for(const i of e.childrenTiles)this._matchSymbols(i,t,s);return}const o=new Map;for(const[n,l]of s){const s=[];for(const i of l){const o=Object(r["c"])(this.tileCoordRange,i.xTile,t.level,t.col,e.key.level,e.key.col),n=Object(r["c"])(this.tileCoordRange,i.yTile,t.level,t.row,e.key.level,e.key.row);o>=0&&o<this.tileCoordRange&&n>=0&&n<this.tileCoordRange&&s.push({symbol:i,xTransformed:o,yTransformed:n})}const a=[],h=e.key.level<t.level?1:1<<e.key.level-t.level,c=this._tiles.get(e.id).symbols.get(n);if(c){const e=c.flat;for(const t of s){let s,r=!1;const o=t.xTransformed,n=t.yTransformed;s=Object(i["l"])(c.index)?c.index.getCell(o,n):e;const l=t.symbol,u=l.hash;for(const e of s)if(u===e.hash&&Math.abs(o-e.xTile)<=h&&Math.abs(n-e.yTile)<=h){const t=e.unique;l.unique=t,t.tileSymbols.push(l),r=!0;break}r||a.push(l)}}a.length>0&&o.set(n,a)}for(const i of e.childrenTiles)this._matchSymbols(i,t,o)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,t=new Array(e.size);let s,i=0;for(const[r,o]of e){const e=new Array(o.size);s=0;for(const t of o)e[s++]=t;t[i]={styleLayerUID:r,uniqueSymbols:e},i++}return t}}}}]);
//# sourceMappingURL=chunk-a3066c78.c784a5a7.js.map