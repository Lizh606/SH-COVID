(window.webpackJsonp=window.webpackJsonp||[]).push([[71,31],{"9/5/":function(n,t,e){!function(t){function g(){return o.Date.now()}var i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,e="object"==typeof t&&t&&t.Object===Object&&t,t="object"==typeof self&&self&&self.Object===Object&&self,o=e||t||Function("return this")(),p=Object.prototype.toString,b=Math.max,_=Math.min;function w(t){var e=typeof t;return t&&("object"==e||"function"==e)}function O(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||!!(o=e)&&"object"==typeof o&&p.call(e)==r)return i;var e,o;if("string"!=typeof(t=w(t)?w(n="function"==typeof t.valueOf?t.valueOf():t)?n+"":n:t))return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?i:+t}n.exports=function(n,o,t){var i,r,a,s,c,u,l=0,p=!1,f=!1,e=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function d(t){var e=i,o=r;return i=r=void 0,l=t,s=n.apply(o,e)}function h(t){var e=t-u;return void 0===u||o<=e||e<0||f&&a<=t-l}function m(){var t,e=g();if(h(e))return y(e);c=setTimeout(m,(e=o-((t=e)-u),f?_(e,a-(t-l)):e))}function y(t){return c=void 0,e&&i?d(t):(i=r=void 0,s)}function v(){var t=g(),e=h(t);if(i=arguments,r=this,u=t,e){if(void 0===c)return l=e=u,c=setTimeout(m,o),p?d(e):s;if(f)return c=setTimeout(m,o),d(u)}return void 0===c&&(c=setTimeout(m,o)),s}return o=O(o)||0,w(t)&&(p=!!t.leading,f="maxWait"in t,a=f?b(O(t.maxWait)||0,o):a,e="trailing"in t?!!t.trailing:e),v.cancel=function(){void 0!==c&&clearTimeout(c),i=u=r=c=void(l=0)},v.flush=function(){return void 0===c?s:y(g())},v}}.call(this,e("yLpj"))},CKgU:function(t,e,o){"use strict";var r=o("FuRH"),a=o("yIpb"),s=o("K79h"),c=o("oCYn"),n=o("YKMj");function u(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=i(o);return function(t,e){{if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,n?(t=i(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var d=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;0<=s;s--)(i=t[s])&&(a=(r<3?i(a):3<r?i(e,o,a):i(e,o))||a);return 3<r&&a&&Object.defineProperty(e,o,a),a};function h(e,o){for(var t=arguments.length,n=new Array(2<t?t-2:0),i=2;i<t;i++)n[i-2]=arguments[i];var r=e.constructor.options;r.mixins&&r.mixins.forEach(function(t){t[o]&&(t=t[o]).call.apply(t,[e].concat(n))}),r[o]&&(r=r[o]).call.apply(r,[e].concat(n))}o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(i,c["default"]);var t,e,o,n=p(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n.apply(this,arguments)}return t=i,(e=[{key:"mapTargetChanged",value:function(t,e){var o;t&&e&&t!==e&&(o=e||this.firstDefaultTarget,(e=r.a.$options.getMap(o))&&this.removeMap(e,o),r.a.$options.getMap(t)&&this.loadMap(t))}},{key:"mounted",value:function(){var t=this.getTargetName();this.firstDefaultTarget=t,r.a.$options.getMap(t)&&this.loadMap(t),r.a.$on("load-map",this.loadMapSucceed),a.a.$on("delete-map",this.removeMapSucceed)}},{key:"beforeDestroy",value:function(){this.removeMap(),r.a.$off("load-map",this.loadMapSucceed),a.a.$off("delete-map",this.removeMapSucceed)}},{key:"getFirstTarget",value:function(){var t,e;for(e in r.a.$options.getAllMaps())if(e){t=e;break}return t}},{key:"getTargetName",value:function(){var t=this.$parent,t=t&&t.$options.name&&-1!==["smwebmap","smncpmap"].indexOf(t.$options.name.toLowerCase())&&t.target;return this.mapTarget||t||this.getFirstTarget()}},{key:"loadMap",value:function(t){var e=this;this.firstDefaultTarget||(this.firstDefaultTarget=t),this.map=r.a.$options.getMap(t),this.webmap=r.a.$options.getWebMap(t),this.viewModel&&"function"==typeof this.viewModel.setMap&&this.viewModel.setMap({map:this.map,webmap:this.webmap,mapTarget:t}),h(this,"loaded",this.map,t),this.$nextTick(function(){e.$emit("loaded")})}},{key:"removeMap",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.map,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.getTargetName();t&&(this.viewModel&&this.viewModel.removed&&this.viewModel.removed(),h(this,"removed",t,e),this.map=null,this.webmap=null,this.firstDefaultTarget=null)}},{key:"loadMapSucceed",value:function(t,e){e===this.getTargetName()&&this.loadMap(e)}},{key:"removeMapSucceed",value:function(t){t===this.getTargetName()&&this.removeMap()}},{key:"mapNotLoadedTip",value:function(){return!this.map&&(s.a.destroy(),s.a.warning(this.$t("warning.unassociatedMap")),!0)}}])&&u(t.prototype,e),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}();d([Object(n.Prop)()],o.prototype,"mapTarget",void 0),d([Object(n.Watch)("mapTarget")],o.prototype,"mapTargetChanged",null),o=d([n.Component],o),e.a=o},K79h:function(t,e,o){"use strict";var n=o("Iv0b");function r(e,t){var o,n=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)),n}function i(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach(function(t){var e,o;e=n,t=i[o=t],o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})}return n}var a="sm-component-message",s=n.default.config;s({prefixCls:a}),n.default.config=function(t){t.prefixCls&&t.prefixCls!==a&&n.default.destroy(),s(i(i({},t),{},{prefixCls:t.prefixCls||a}))},e.a=n.default},Kwrx:function(t,e,o){"use strict";var r=o("oCYn"),n=o("YKMj"),i={name:"SmCollapseCard",mixins:[o("oTir").a],props:{iconPosition:{type:String,default:"top-left"},iconClass:{type:String},autoRotate:{type:Boolean,default:!1},headerName:{type:String},collapsed:{type:Boolean,default:!1},splitLine:{type:Boolean,default:!0}},data:function(){return{isShow:!0,transform:null}},computed:{getCardStyle:function(){return this.iconClass||this.headerName?this.collapseCardBackgroundStyle:{background:"transparent"}},iconStyle:function(){return{transform:this.transform}},position:function(){return this.iconPosition},rotateDeg:function(){return{"top-right":["rotate(-45deg)","rotate(135deg)"],"top-left":["rotate(-135deg)","rotate(45deg)"],"bottom-left":["rotate(135deg)","rotate(-45deg)"],"bottom-right":["rotate(45deg)","rotate(-135deg)"]}},hasHeaderRotateDeg:function(){return{"top-right":["rotate(-45deg)","rotate(135deg)"],"top-left":["rotate(-135deg)","rotate(45deg)"],"bottom-left":["rotate(-135deg)","rotate(45deg)"],"bottom-right":["rotate(-45deg)","rotate(135deg)"]}}},watch:{iconClass:function(t,e){t&&!e?(this.isShow=!this.collapsed,this.toggleTransition(this.collapsed?"leave":"enter")):t||(this.isShow=!0)},iconPosition:function(){this.resetIconTransform()}},created:function(){this.iconClass&&(this.isShow=!this.collapsed),this.resetIconTransform()},mounted:function(){this.toggleTransition(this.collapsed?"leave":"enter")},methods:{iconClicked:function(){this.isShow=!this.isShow,this.resetIconTransform(),this.$emit("content-show-state",this.isShow)},toggleTransition:function(e){var o=this;this.$nextTick(function(){var t=o.$el.querySelector(".sm-component-collapse-card__icon");t&&(t.style.position="leave"===e?"relative":"absolute")})},resetIconTransform:function(){var t=this.headerName?this.hasHeaderRotateDeg:this.rotateDeg;this.autoRotate&&(this.transform=t[this.position][this.isShow?1:0])}}},a=o("KHd+"),o=Object(a.a)(i,function(){var t,e=this,o=e.$createElement,o=e._self._c||o;return o("div",{staticClass:"sm-component-collapse-card",style:e.getTextColorStyle},[e.iconClass?o("div",{class:((t={})["sm-component-collapse-card__icon"]=!0,t["is-"+e.position]=!0,t["is-click-"+(e.isShow?"out":"in")]=!0,t["is-not-header"]=!e.headerName,t["icon-box-shadow"]=!e.isShow,t),style:[e.collapseCardHeaderBgStyle,e.headingTextColorStyle],on:{click:e.iconClicked}},[o("i",{class:((t={})[e.iconClass]=!0,t["is-auto-rotate"]=e.autoRotate,t),style:e.iconStyle})]):e._e(),e._v(" "),o("transition",{attrs:{name:"sm-component-zoom-in"},on:{"after-leave":function(t){return e.toggleTransition("leave")},enter:function(t){return e.toggleTransition("enter")}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],class:((t={})["sm-component-collapse-card__content"]=!0,t["is-not-header"]=!e.headerName,t["is-"+e.position]=!0,t["is-icon"]=e.iconClass,t),style:e.getCardStyle},[e.headerName?o("div",{class:((t={"sm-component-collapse-card__header":!0,"with-split-line":e.splitLine})["is-"+e.position]=!0,t),style:[e.collapseCardHeaderBgStyle,e.headingTextColorStyle]},[o("span",{staticClass:"sm-component-collapse-card__header-name"},[e._v(e._s(e.headerName))])]):e._e(),e._v(" "),o("div",{staticClass:"sm-component-collapse-card__body",style:e.getCardStyle},[e._t("default")],2)])])],1)},[],!1,null,null,null).exports;function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=l(o);return function(t,e){{if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,n?(t=l(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;0<=s;s--)(i=t[s])&&(a=(r<3?i(a):3<r?i(e,o,a):i(e,o))||a);return 3<r&&a&&Object.defineProperty(e,o,a),a},i=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(i,r["default"]);var t,e,o,n=u(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n.apply(this,arguments)}return t=i,e&&s(t.prototype,e),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}();a([Object(n.Prop)({default:"top-left",validator:function(t){return-1!==["top-left","top-right","bottom-left","bottom-right"].indexOf(t)}})],i.prototype,"position",void 0),a([Object(n.Prop)()],i.prototype,"headerName",void 0),a([Object(n.Prop)()],i.prototype,"iconClass",void 0),a([Object(n.Prop)({default:!1})],i.prototype,"autoRotate",void 0),a([Object(n.Prop)({default:!0})],i.prototype,"collapsed",void 0),a([Object(n.Prop)({default:!0})],i.prototype,"splitLine",void 0);i=a([Object(n.Component)({components:{SmCollapseCard:o}})],i),e.a=i},Qai7:function(t,e,o){"use strict";var n=o("LMt6"),i=o("oTir"),r=o("tmJK"),a=Object.assign({},Object(n.SpinProps)()),a={name:"SmSpin",defaultComponent:n.default,mixins:[i.a,r.a],inheritAttrs:!1,props:a},o=o("KHd+"),a=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.a=a.exports},ZjQ4:function(t,e,o){"use strict";o.r(e);var n=o("oTir"),i=o("hdLw"),r=o.n(i),a=o("zT9C"),s=o.n(a),c=o("9/5/"),u=o.n(c);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=h(o);return function(t,e){{if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,n?(t=h(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(i,r.a.Evented);var t,e,o,n=d(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this)).options={id:"mapboxgl-minimap",zoomAdjust:null,bounds:"parent",lineColor:"#08F",lineWidth:1,lineOpacity:1,fillColor:"#F80",fillOpacity:.25,dragPan:!1,scrollZoom:!1,boxZoom:!1,dragRotate:!1,keyboard:!1,doubleClickZoom:!1,touchZoomRotate:!1},t._ticking=!1,t._lastMouseMoveEvent=null,t._isDragging=!1,t._isCursorOverFeature=!1,t._previousPoint=[0,0],t._currentPoint=[0,0],t._trackingRectCoordinates=[[[],[],[],[],[]]],t}return t=i,(e=[{key:"setMap",value:function(t){t=t.map;this._parentMap=t}},{key:"setContainer",value:function(t){this._container=t,this._updateFn=this._update.bind(this),this._setStyleFn=u()(this._setStyle,200,{trailing:!0}).bind(this),this._mouseMoveFn=this._mouseMove.bind(this),this._mouseDownFn=this._mouseDown.bind(this),this._mouseUpFn=this._mouseUp.bind(this),this.initializeMiniMap()}},{key:"initializeMiniMap",value:function(){var t=this;this._miniMap=new r.a.Map({attributionControl:!1,container:this._container,style:s()(this._parentMap.getStyle()),zoom:1,crs:this._parentMap.getCRS(),center:[0,0],renderWorldCopies:!1,localIdeographFontFamily:this._parentMap._localIdeographFontFamily}),this._miniMap.on("load",function(){t.fire("minimaploaded",{miniMap:t._miniMap}),t._miniMap.resize(),t.loadMiniMap()})}},{key:"loadMiniMap",value:function(){var e=this.options,t=this._parentMap,o=this._miniMap;["dragPan","scrollZoom","boxZoom","dragRotate","keyboard","doubleClickZoom","touchZoomRotate"].forEach(function(t){!0!==e[t]&&o[t].disable()}),"function"==typeof e.zoomAdjust?this.options.zoomAdjust=e.zoomAdjust.bind(this):null===e.zoomAdjust&&(this.options.zoomAdjust=this._zoomAdjust.bind(this)),"parent"===e.bounds&&(e.bounds=t.getBounds()),"object"===l(e.bounds)&&o.fitBounds(e.bounds,{duration:50});var n=o.getBounds();this._convertBoundsToPoints(n),this._addRectLayers(),this._update(),t.on("move",this._updateFn),t.on("styledata",this._setStyleFn),o.on("mousemove",this._mouseMoveFn),o.on("mousedown",this._mouseDownFn),o.on("mouseup",this._mouseUpFn),this._miniMapCanvas=o.getCanvasContainer(),this._miniMapCanvas.addEventListener("wheel",this._preventDefault),this._miniMapCanvas.addEventListener("mousewheel",this._preventDefault)}},{key:"resize",value:function(){this._miniMap&&this._miniMap.resize()}},{key:"_mouseDown",value:function(t){this._isCursorOverFeature&&(this._isDragging=!0,this._previousPoint=this._currentPoint,this._currentPoint=[t.lngLat.lng,t.lngLat.lat]),this.fire("minimapmousedown",{result:t})}},{key:"_mouseMove",value:function(t){this._ticking=!1;var e=this._miniMap.queryRenderedFeatures(t.point,{layers:["trackingRectFill"]});this._isCursorOverFeature&&0<e.length||(this._isCursorOverFeature=0<e.length,this._miniMapCanvas.style.cursor=this._isCursorOverFeature?"move":""),this._isDragging&&(this._previousPoint=this._currentPoint,this._currentPoint=[t.lngLat.lng,t.lngLat.lat],e=[this._previousPoint[0]-this._currentPoint[0],this._previousPoint[1]-this._currentPoint[1]],e=this._moveTrackingRect(e),this._parentMap.fitBounds(e,{duration:80,noMoveStart:!0})),this.fire("minimapmousemoved",{result:t})}},{key:"_mouseUp",value:function(t){this._isDragging=!1,this._ticking=!1,this.fire("minimapmouseup",{result:t})}},{key:"_moveTrackingRect",value:function(t){var e=this._trackingRect,o=e._data,n=o.properties.bounds;if(n)return n._ne.lat-=t[1],n._ne.lng-=t[0],n._sw.lat-=t[1],n._sw.lng-=t[0],this._convertBoundsToPoints(n),e.setData(o),n}},{key:"_setTrackingRectBounds",value:function(t){var e=this._trackingRect,o=e._data;o.properties.bounds=t,this._convertBoundsToPoints(t),e.setData(o)}},{key:"_convertBoundsToPoints",value:function(t){var e=t._ne,o=t._sw,t=this._trackingRectCoordinates,e=this._handleBounds(e),o=this._handleBounds(o);t[0][0][0]=e.lng,t[0][0][1]=e.lat,t[0][1][0]=o.lng,t[0][1][1]=e.lat,t[0][2][0]=o.lng,t[0][2][1]=o.lat,t[0][3][0]=e.lng,t[0][3][1]=o.lat,t[0][4][0]=e.lng,t[0][4][1]=e.lat}},{key:"_update",value:function(t){var e;this._isDragging||(e=this._parentMap.getBounds(),this._setTrackingRectBounds(e),"function"==typeof this.options.zoomAdjust&&this.options.zoomAdjust(),this.fire("minimapupdated",{result:t}))}},{key:"_zoomAdjust",value:function(){var t=this._miniMap,e=this._parentMap,o=parseFloat(e.getZoom());t.setCenter(e.getCenter()),t.setZoom(0<o-5?o-5:1)}},{key:"_preventDefault",value:function(t){t.preventDefault()}},{key:"_handleBounds",value:function(t){return 180<t.lng?t.lng=180:t.lng<-180&&(t.lng=-180),90<t.lat?t.lat=90:t.lat<-90&&(t.lat=-90),t}},{key:"_setStyle",value:function(){this._miniMap.setStyle(this._parentMap.getStyle(),{localIdeographFontFamily:this._parentMap._localIdeographFontFamily}),this._addRectLayers(),this._update()}},{key:"_addRectLayers",value:function(){var t=this.options;this._miniMap.addSource("trackingRect",{type:"geojson",data:{type:"Feature",properties:{name:"trackingRect"},geometry:{type:"Polygon",coordinates:this._trackingRectCoordinates}}}),this._miniMap.addLayer({id:"trackingRectOutline",type:"line",source:"trackingRect",layout:{},paint:{"line-color":t.lineColor,"line-width":t.lineWidth,"line-opacity":t.lineOpacity}}),this._miniMap.addLayer({id:"trackingRectFill",type:"fill",source:"trackingRect",layout:{},paint:{"fill-color":t.fillColor,"fill-opacity":t.fillOpacity}}),this._trackingRect=this._miniMap.getSource("trackingRect")}},{key:"removed",value:function(){var t=this._parentMap,e=this._miniMap;t&&t.off("move",this._updateFn),t&&t.off("styledata",this._setStyleFn),e&&e.off("mousemove",this._mouseMoveFn),e&&e.off("mousedown",this._mouseDownFn),e&&e.off("mouseup",this._mouseUpFn),e&&e.remove()}}])&&p(t.prototype,e),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(),i=o("rn6b"),a=o("CKgU"),c=o("Kwrx"),n={name:"SmMiniMap",components:{SmSpin:o("Qai7").a},mixins:[a.a,i.a,c.a,n.a],props:{iconClass:{type:String,default:"sm-components-icon-arrow-left"},autoRotate:{type:Boolean,default:!0}},data:function(){return{spinning:!0}},created:function(){this.miniMap&&this.miniMap.remove(),this.viewModel=new m,this.viewModel.on("minimaploaded",this.minimapLoadedFn)},beforeDestory:function(){this.viewModel.off("minimaploaded",this.minimapLoadedFn)},loaded:function(){this.viewModel&&this.viewModel.setContainer(this.$el.querySelector("#miniMap")||this.$el)},methods:{handleMinimapResize:function(t){var e=this;this.$nextTick(function(){t&&e.resize()})},resize:function(){this.viewModel&&this.viewModel.resize&&this.viewModel.resize()},minimapLoadedFn:function(t){this.miniMap=t.miniMap,this.spinning=!1}}},o=o("KHd+"),n=Object(o.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("sm-collapse-card",{staticClass:"sm-component-minimap",attrs:{"icon-class":t.iconClass,"icon-position":t.position,"header-name":t.headerName,"auto-rotate":t.autoRotate,collapsed:t.collapsed,background:t.background,textColor:t.textColor,"split-line":t.splitLine},on:{"content-show-state":t.handleMinimapResize}},[e("div",{staticClass:"miniMap",attrs:{id:"miniMap"}},[t.spinning?e("sm-spin",{attrs:{size:"small",tip:t.$t("info.loading"),spinning:t.spinning}}):t._e()],1)])},[],!1,null,null,null);e.default=n.exports},rn6b:function(t,e,o){"use strict";var r=o("oCYn"),n=o("YKMj"),a=o("FuRH");function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=i(o);return function(t,e){{if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,n?(t=i(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;0<=s;s--)(i=t[s])&&(a=(r<3?i(a):3<r?i(e,o,a):i(e,o))||a);return 3<r&&a&&Object.defineProperty(e,o,a),a},o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(i,r["default"]);var t,e,o,n=u(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.apply(this,arguments)).isShow=!0,t}return t=i,(e=[{key:"positionChanged",value:function(){this.$el&&this.parentIsWebMapOrMap&&(this.remove(),this.addTo())}},{key:"created",value:function(){var t=this.$parent.$options.name;this.parentIsWebMapOrMap=t&&-1!==["smwebmap","smncpmap"].indexOf(this.$parent.$options.name.toLowerCase())}},{key:"mounted",value:function(){var t;this.filterDelayLoad=!(-1!==["smwebmap","smminimap","smncpmap"].indexOf(this.$options.name&&this.$options.name.toLowerCase())),this.$el&&this.parentIsWebMapOrMap&&(this.filterDelayLoad&&(this.isShow=!1,(t=this.$el).style&&(t.style.display="none")),t=this.getControlMapName(),a.a.$options.getMap(t)&&this.mapLoaded(a.a.$options.getMap(t)),a.a.$on("load-map",this.controlLoadMapSucceed))}},{key:"beforeDestroy",value:function(){this.remove(),a.a.$off("load-map",this.controlLoadMapSucceed)}},{key:"initControl",value:function(){var t=this;return{onAdd:function(){return t.$el},onRemove:function(){return t.map}}}},{key:"addTo",value:function(){this.control=this.initControl(),this.map.addControl(this.control,this.position),this.$el&&this.$el.classList&&this.$el.classList.add("mapboxgl-ctrl")}},{key:"remove",value:function(){this.control&&this.map&&this.map.removeControl(this.control)}},{key:"getControlMapName",value:function(){var t=this.$parent,t=t&&t.$options.name&&"smwebmap"===t.$options.name.toLowerCase()&&t.target;return this.mapTarget||t||Object.keys(a.a.$options.getAllMaps())[0]}},{key:"controlLoadMapSucceed",value:function(t,e){e===this.getControlMapName()&&this.mapLoaded(t)}},{key:"mapLoaded",value:function(t){this.map=t,this.addTo(),this.filterDelayLoad&&(this.isShow=!0,(t=this.$el)&&t.style&&(t.style.display="block"))}}])&&s(t.prototype,e),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}();p([Object(n.Prop)()],o.prototype,"mapTarget",void 0),p([Object(n.Prop)({default:"top-left",validator:function(t){return-1!==["top-left","top-right","bottom-left","bottom-right"].indexOf(t)}})],o.prototype,"position",void 0),p([Object(n.Watch)("position")],o.prototype,"positionChanged",null),o=p([n.Component],o),e.a=o}}]);