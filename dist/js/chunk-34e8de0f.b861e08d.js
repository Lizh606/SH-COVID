(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e8de0f"],{"18c6":function(t,e,i){"use strict";i.d(e,"a",(function(){return R})),i.d(e,"b",(function(){return U})),i.d(e,"c",(function(){return I})),i.d(e,"d",(function(){return A})),i.d(e,"e",(function(){return E})),i.d(e,"f",(function(){return F})),i.d(e,"g",(function(){return M})),i.d(e,"h",(function(){return w}));var n=i("ce50"),s=i("c84e"),r=i("9b77");function a(t,e){const i=s["e"].SIZE_FIELD_STOPS|s["e"].SIZE_MINMAX_VALUE|s["e"].SIZE_SCALE_STOPS|s["e"].SIZE_UNIT_VALUE,n=(t&(s["f"].FIELD_TARGETS_OUTLINE|s["f"].MINMAX_TARGETS_OUTLINE|s["f"].SCALE_TARGETS_OUTLINE|s["f"].UNIT_TARGETS_OUTLINE))>>>4;return e.isOutline||e.isOutlinedFill?i&n:i&~n}const o=0,u=8,c=7,d=8,h=11,l=11,v=12,p=13,S=14,f=15,g=15,m=16,b=17,y=18,V=19,O=20,z=21,x=22;function M(t,e){switch(t){case s["d"].FILL:return R.from(e);case s["d"].LINE:return I.from(e);case s["d"].MARKER:return A.from(e);case s["d"].TEXT:return F.from(e);case s["d"].LABEL:return U.from(e);default:throw new Error("Unable to createMaterialKey for unknown geometryType "+t)}}function w(t){switch(E.load(t).geometryType){case s["d"].MARKER:return new A(t);case s["d"].FILL:return new R(t);case s["d"].LINE:return new I(t);case s["d"].TEXT:return new F(t);case s["d"].LABEL:return new U(t)}}class E{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(d,h)}set geometryType(t){this.setBits(t,d,h)}get mapAligned(){return!!this.bit(O)}set mapAligned(t){this.setBit(O,t)}get sdf(){return!!this.bit(l)}set sdf(t){this.setBit(l,t)}get pattern(){return!!this.bit(v)}set pattern(t){this.setBit(v,t)}get textureBinding(){return this.bits(o,u)}set textureBinding(t){this.setBits(t,o,u)}get geometryTypeString(){switch(this.geometryType){case s["d"].FILL:return"fill";case s["d"].MARKER:return"marker";case s["d"].LINE:return"line";case s["d"].TEXT:return"text";case s["d"].LABEL:return"label";default:throw new n["a"]("Unable to handle unknown geometryType: "+this.geometryType)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let n=e,s=0;n<i;n++,s++)this.setBit(n,0!=(t&1<<s))}bits(t,e){let i=0;for(let n=t,s=0;n<e;n++,s++)i|=this.bit(n)<<s;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(c&this.textureBinding)}}E.shared=new E(0);const _=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(m)}set vvSizeMinMaxValue(t){this.setBit(m,t)}get vvSizeScaleStops(){return 0!==this.bit(b)}set vvSizeScaleStops(t){this.setBit(b,t)}get vvSizeFieldStops(){return 0!==this.bit(y)}set vvSizeFieldStops(t){this.setBit(y,t)}get vvSizeUnitValue(){return 0!==this.bit(V)}set vvSizeUnitValue(t){this.setBit(V,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const i=a(t,e)&t;this.vvSizeMinMaxValue=!!(i&s["e"].SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(i&s["e"].SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(i&s["e"].SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(i&s["e"].SIZE_SCALE_STOPS)}},T=t=>class extends t{get vvRotation(){return 0!==this.bit(f)}set vvRotation(t){this.setBit(f,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&s["e"].ROTATION)}},L=t=>class extends t{get vvColor(){return 0!==this.bit(p)}set vvColor(t){this.setBit(p,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&s["e"].COLOR)}},j=t=>class extends t{get vvOpacity(){return 0!==this.bit(S)}set vvOpacity(t){this.setBit(S,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&s["e"].OPACITY)}};class R extends(L(j(_(E)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s["d"].FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(g)}set dotDensity(t){this.setBit(g,t)}get simple(){return!!this.bit(x)}set simple(t){this.setBit(x,t)}get outlinedFill(){return!!this.bit(z)}set outlinedFill(t){this.setBit(z,t)}}R.shared=new R(0);class A extends(L(j(T(_(E))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s["d"].MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}A.shared=new A(0);class I extends(L(j(_(E)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s["d"].LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}I.shared=new I(0);class F extends(L(j(T(_(E))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s["d"].TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}F.shared=new F(0);class U extends(_(E)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s["d"].LABEL,e.setVV(t.vvFlags,t),e.mapAligned=Object(r["a"])(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0)},"6c7a":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("a4ee"),s=i("e92d"),r=i("f4cc"),a=i("3795"),o=i("59b2"),u=(i("b50f"),i("c120"),i("cea0"),i("d386"));const c=t=>{let e=class extends t{initialize(){this.handles.add(Object(a["b"])(this,"layer","refresh",t=>{this.doRefresh(t.dataChanged).catch(t=>{Object(r["m"])(t)||s["a"].getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return Object(n["a"])([Object(o["b"])()],e.prototype,"layer",void 0),e=Object(n["a"])([Object(u["a"])("esri.layers.mixins.RefreshableLayerView")],e),e}},"8c81":function(t,e,i){"use strict";i.d(e,"a",(function(){return O})),i.d(e,"b",(function(){return z})),i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return C})),i.d(e,"e",(function(){return W})),i.d(e,"f",(function(){return N})),i.d(e,"g",(function(){return B})),i.d(e,"h",(function(){return P})),i.d(e,"i",(function(){return D})),i.d(e,"j",(function(){return q})),i.d(e,"k",(function(){return I})),i.d(e,"l",(function(){return a})),i.d(e,"m",(function(){return E})),i.d(e,"n",(function(){return w})),i.d(e,"o",(function(){return u})),i.d(e,"p",(function(){return M})),i.d(e,"q",(function(){return T})),i.d(e,"r",(function(){return o})),i.d(e,"s",(function(){return x})),i.d(e,"t",(function(){return U})),i.d(e,"u",(function(){return n})),i.d(e,"v",(function(){return F})),i.d(e,"w",(function(){return s})),i.d(e,"x",(function(){return A})),i.d(e,"y",(function(){return p})),i.d(e,"z",(function(){return S})),i.d(e,"A",(function(){return f})),i.d(e,"B",(function(){return g})),i.d(e,"C",(function(){return v})),i.d(e,"D",(function(){return l})),i.d(e,"E",(function(){return m})),i.d(e,"F",(function(){return b})),i.d(e,"G",(function(){return y})),i.d(e,"H",(function(){return V})),i.d(e,"I",(function(){return h})),i.d(e,"J",(function(){return c})),i.d(e,"K",(function(){return _})),i.d(e,"L",(function(){return r})),i.d(e,"M",(function(){return R})),i.d(e,"N",(function(){return j})),i.d(e,"O",(function(){return L}));const n=1e-30,s=4294967295,r=512,a=8,o=29,u=24,c=8,d={metrics:{width:15,height:17,left:0,top:-7,advance:14}},h=0,l=0,v=0,p=1,S=2,f=3,g=4,m=5,b=6,y=5,V=6,O=1,z=2,x=2,M=1,w=2,E=4,_=1.05,T=6,L=5,j=6,R=1.15,A=2,I=8,F=500,U=10,C=2,B=0,N=1,P=4,D=8,W=4,q=1},"9b77":function(t,e,i){"use strict";function n(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}i.d(e,"a",(function(){return n}))},b969:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return S}));var n=i("a4ee"),s=i("e92d"),r=i("f4cc"),a=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),u=i("2d39"),c=i("566d"),d=i("bdb8"),h=i("365a"),l=i("6c7a");const v=s["a"].getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let p=class extends(Object(l["a"])(Object(c["a"])(h["a"]))){update(t){this.strategy.update(t).catch(t=>{Object(r["m"])(t)||v.error(t)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new u["a"],this.container.addChild(this._bitmapContainer),this.strategy=new d["a"]({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};Object(n["a"])([Object(a["b"])()],p.prototype,"strategy",void 0),Object(n["a"])([Object(a["b"])()],p.prototype,"updating",void 0),p=Object(n["a"])([Object(o["a"])("esri.views.2d.layers.BaseDynamicLayerView2D")],p);const S=p},bdb8:function(t,e,i){"use strict";i.d(e,"a",(function(){return x}));var n=i("a4ee"),s=i("fc29"),r=i("f4cc"),a=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),u=i("3af1"),c=i("9180"),d=i("7f83"),h=i("dff3");const l=Math.PI/180;function v(t){return t*l}function p(t,e){const i=v(e.rotation),n=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[r,a]=e.size;return t[0]=Math.round(a*s+r*n),t[1]=Math.round(a*n+r*s),t}function S(t,e,i,n){const[s,r]=e,[a,o]=n,u=.5*i;return t[0]=s-u*a,t[1]=r-u*o,t[2]=s+u*a,t[3]=r+u*o,t}var f=i("c73a"),g=i("018d"),m=i("ae54");const b=Object(c["l"])(),y=[0,0],V=new m["a"](0,0,0,0),O={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let z=class extends s["a"]{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=O.hidpi,this.imageMaxWidth=O.imageMaxWidth,this.imageMaxHeight=O.imageMaxHeight,this.imageRotationSupported=O.imageRotationSupported,this.imageNormalizationSupported=O.imageNormalizationSupported,this.update=Object(r["i"])(async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,n=Object(d["e"])(i.spatialReference),s=this.hidpi?t.pixelRatio:1,r=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];r?(y[0]=i.worldScreenWidth,y[1]=i.size[1]):this.imageRotationSupported?(y[0]=i.size[0],y[1]=i.size[1]):p(y,i);const a=Math.floor(y[0]*s)>this.imageMaxWidth||Math.floor(y[1]*s)>this.imageMaxHeight,o=n&&(i.extent.xmin<n.valid[0]||i.extent.xmax>n.valid[1]),u=!this.imageNormalizationSupported&&o,c=!a&&!u,h=this.imageRotationSupported?i.rotation:0;if(c){const t=r?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,y,t,i.resolution,h,s,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);u&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,h,s,e)}return this._imagePromise.then(async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then(()=>{e.remove()});for(const e of t)this.container.addChild(e),e.fadeIn()}}).catch(t=>{throw this._imagePromise=null,t})},5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,n,s,r){const a=await this.fetchSource(t,Math.floor(e*s),Math.floor(i*s),{rotation:n,pixelRatio:s,signal:r}),o=new f["a"](a,"additive");return o.x=t.xmin,o.y=t.ymax,o.resolution=t.width/e,o.rotation=n,o.pixelRatio=s,o}async _singleExport(t,e,i,n,s,r,a){S(b,i,n,e);const o=new u["a"](b[0],b[1],b[2],b[3],t.spatialReference);return[await this._export(o,e[0],e[1],s,r,a)]}_tiledExport(t,e,i,n,s){const r=h["a"].create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),a=new g["a"](r),o=a.getTileCoverage(t);if(!o)return null;const c=[];return o.forEach((r,o,d,h)=>{V.set(r,o,d,h),a.getTileBounds(b,V);const l=new u["a"](b[0],b[1],b[2],b[3],t.spatialReference);c.push(this._export(l,e,e,i,n,s))}),Promise.all(c)}};Object(n["a"])([Object(a["b"])()],z.prototype,"_imagePromise",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"bitmaps",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"container",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"fetchSource",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"hidpi",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"imageMaxWidth",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"imageMaxHeight",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"imageRotationSupported",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"imageNormalizationSupported",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"requestUpdate",void 0),Object(n["a"])([Object(a["b"])()],z.prototype,"updating",null),z=Object(n["a"])([Object(o["a"])("esri.views.2d.layers.support.ExportStrategy")],z);const x=z}}]);
//# sourceMappingURL=chunk-34e8de0f.b861e08d.js.map