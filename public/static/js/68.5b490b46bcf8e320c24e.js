(window.webpackJsonp=window.webpackJsonp||[]).push([[68,31,35],{CKgU:function(e,t,r){"use strict";var s=r("FuRH"),n=r("yIpb"),i=r("K79h"),c=r("oCYn"),o=r("YKMj");function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=a(r);return function(e,t){{if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,o?(e=a(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e,t,r,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;0<=i;i--)(a=e[i])&&(n=(s<3?a(n):3<s?a(t,r,n):a(t,r))||n);return 3<s&&n&&Object.defineProperty(t,r,n),n};function f(t,r){for(var e=arguments.length,o=new Array(2<e?e-2:0),a=2;a<e;a++)o[a-2]=arguments[a];var s=t.constructor.options;s.mixins&&s.mixins.forEach(function(e){e[r]&&(e=e[r]).call.apply(e,[t].concat(o))}),s[r]&&(s=s[r]).call.apply(s,[t].concat(o))}r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,c["default"]);var e,t,r,o=h(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o.apply(this,arguments)}return e=a,(t=[{key:"mapTargetChanged",value:function(e,t){var r;e&&t&&e!==t&&(r=t||this.firstDefaultTarget,(t=s.a.$options.getMap(r))&&this.removeMap(t,r),s.a.$options.getMap(e)&&this.loadMap(e))}},{key:"mounted",value:function(){var e=this.getTargetName();this.firstDefaultTarget=e,s.a.$options.getMap(e)&&this.loadMap(e),s.a.$on("load-map",this.loadMapSucceed),n.a.$on("delete-map",this.removeMapSucceed)}},{key:"beforeDestroy",value:function(){this.removeMap(),s.a.$off("load-map",this.loadMapSucceed),n.a.$off("delete-map",this.removeMapSucceed)}},{key:"getFirstTarget",value:function(){var e,t;for(t in s.a.$options.getAllMaps())if(t){e=t;break}return e}},{key:"getTargetName",value:function(){var e=this.$parent,e=e&&e.$options.name&&-1!==["smwebmap","smncpmap"].indexOf(e.$options.name.toLowerCase())&&e.target;return this.mapTarget||e||this.getFirstTarget()}},{key:"loadMap",value:function(e){var t=this;this.firstDefaultTarget||(this.firstDefaultTarget=e),this.map=s.a.$options.getMap(e),this.webmap=s.a.$options.getWebMap(e),this.viewModel&&"function"==typeof this.viewModel.setMap&&this.viewModel.setMap({map:this.map,webmap:this.webmap,mapTarget:e}),f(this,"loaded",this.map,e),this.$nextTick(function(){t.$emit("loaded")})}},{key:"removeMap",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.map,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.getTargetName();e&&(this.viewModel&&this.viewModel.removed&&this.viewModel.removed(),f(this,"removed",e,t),this.map=null,this.webmap=null,this.firstDefaultTarget=null)}},{key:"loadMapSucceed",value:function(e,t){t===this.getTargetName()&&this.loadMap(t)}},{key:"removeMapSucceed",value:function(e){e===this.getTargetName()&&this.removeMap()}},{key:"mapNotLoadedTip",value:function(){return!this.map&&(i.a.destroy(),i.a.warning(this.$t("warning.unassociatedMap")),!0)}}])&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}();d([Object(o.Prop)()],r.prototype,"mapTarget",void 0),d([Object(o.Watch)("mapTarget")],r.prototype,"mapTargetChanged",null),r=d([o.Component],r),t.a=r},K79h:function(e,t,r){"use strict";var o=r("Iv0b");function s(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function a(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach(function(e){var t,r;t=o,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}var n="sm-component-message",i=o.default.config;i({prefixCls:n}),o.default.config=function(e){e.prefixCls&&e.prefixCls!==n&&o.default.destroy(),i(a(a({},e),{},{prefixCls:e.prefixCls||n}))},t.a=o.default},QsSW:function(e,t,r){"use strict";var o=r("gsT3"),a=r("vZOP"),s=r("ghbr"),n=r("oTir"),i=r("tmJK"),i={mixins:[n.a,i.a],inheritAttrs:!1,model:{prop:"value",event:"change.value"},computed:{extralListeners:function(){var t=this;return{"change.value":function(e){t.$emit("change.value",e)}}}}},r=r("KHd+"),i=Object(r.a)(i,void 0,void 0,!1,null,null,null).exports,s=Object.assign(Object.assign({},a.default),{size:s.a.oneOf(["small","large","default","middle"])}),s={name:"SmInput",defaultComponent:o.default,mixins:[i],props:s,computed:{extralProps:function(){return{size:"middle"===this.size?void 0:this.size}},componentClass:function(){return{"sm-component-input-affix-wrapper-md":"middle"===this.size}}},mounted:function(){var e;"middle"!==this.size||(e=this.$el.querySelector(".sm-component-input"))&&e.classList&&e.classList.add("sm-component-input-md")}},s=Object(r.a)(s,void 0,void 0,!1,null,null,null);t.a=s.exports},SqLP:function(e,t,r){"use strict";r.r(t),r.d(t,"iconTypes",function(){return c});var o=r("00x4"),a=r("oTir"),s=r("tmJK"),n=r("ghbr"),i=r("qAG6"),c={tabIndex:n.a.number,type:n.a.string.def("info"),component:n.a.any,viewBox:n.a.any,spin:n.a.bool.def(!1),rotate:n.a.number,theme:n.a.oneOf(["filled","outlined","twoTone"]).def("outlined"),twoToneColor:n.a.string,role:n.a.string,iconStyle:n.a.object,iconClass:n.a.string,autoPrefix:n.a.bool.def(!0)},s={name:"SmIcon",defaultComponent:o.default,mixins:[a.a,s.a],props:c,computed:{customIconClass:function(){return this.autoPrefix?"sm-components-icon-"+this.iconClass:this.iconClass},iconProps:function(){return Object(i.p)(this.componentProps,["iconStyle","iconClass","autoPrefix"])}},render:function(e){var t;return t=this.iconClass?e("i",{class:this.customIconClass}):e(this.getComponentInstance(),{props:this.iconProps,attrs:this.$attrs,on:this.componentListeners,scopedSlots:this.$scopedSlots},this.renderChildren()),e("div",{class:"sm-component-icon",style:this.iconStyle},[t])}},r=r("KHd+"),s=Object(r.a)(s,void 0,void 0,!1,null,null,null);t.default=s.exports},"Y/bV":function(e,t,r){"use strict";r.r(t);var o=r("oTir"),a=r("CKgU"),s=r("rn6b"),n=r("hdLw"),i=r.n(n),c=r("zT9C"),u=r.n(c),l=r("7mrb"),h=(r("xKWM"),r("hUYj")),p=r("qGvU"),d=r("kzZv"),f=r("qAG6");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function v(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach(function(e){var t,r;t=o,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}function g(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=S(r);return function(e,t){{if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,o?(e=S(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,i.a.Evented);var e,t,r,o=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this)).options=e||{},t.searchTaskId=0,t.options.cityGeoCodingConfig={addressUrl:"https://www.supermapol.com/iserver/services/localsearch/rest/searchdatas/China/poiinfos",key:e.onlineLocalSearch.key||"fvV2osxwuZWlY0wJb8FEb2i5"},t.searchtType=["layerNames","onlineLocalSearch","restMap","restData","iportalData","addressMatch"],t.markerList=[],t.popupList=[],t.errorSourceList={},t}return e=a,(t=[{key:"setMap",value:function(e){e=e.map;this.map=e}},{key:"search",value:function(e){var t=this;this.searchCount=0,this.searchResult={},this.errorSourceList={},this.keyWord=e,this.maxFeatures=100<=parseInt(this.options.maxFeatures)?100:parseInt(this.options.maxFeatures)||8,this.searchtType.forEach(function(e){t.options[e]&&("onlineLocalSearch"===e&&t.options[e].enable?t.searchCount+=1:"onlineLocalSearch"!==e&&(e=t.options[e].length,t.searchCount+=e))},this);var r=v({},this.options),o=r.layerNames,a=r.onlineLocalSearch,s=r.restMap,n=r.restData,e=r.iportalData,r=r.addressMatch;return o&&this._searchFromLayer(o),a.enable&&this._searchFromPOI(a),s&&this._searchFromRestMap(s),n&&this._searchFromRestData(n),e&&this._searchFromIportal(e),r&&this._searchFromAddressMatch(r),this.searchTaskId}},{key:"getFeatureInfo",value:function(e,t){var r=this.options.resultRender;this.keyWord=e,this._reset(),this.fire("search-selected-info"+this.searchTaskId,{data:t}),r||this._showResultToMap(t)}},{key:"_showResultToMap",value:function(e){var t=e.geometry||{};this.options.alwaysCenter||"MultiPolygon"!==t.type&&"Polygon"!==t.type?this.options.alwaysCenter||"LineString"!==t.type?this._addPoint(e):this._addLine(e):this._addPolygon(e)}},{key:"_addPoint",value:function(e){var t=e.properties||e,r=e.geometry||[e.location.x,e.location.y],o={coordinates:null,info:[]},a=t.address||e.filterAttribute.filterAttributeValue||t.name;if("MultiPolygon"===r.type||"Polygon"===r.type||"LineString"===r.type?o.coordinates=Object(f.h)(e):o.coordinates=r.coordinates||r,o.coordinates&&o.coordinates.length&&!o.coordinates.find(function(e){return isNaN(+e)})){if(this.keyWord.indexOf("：")<0)o.info.push({attribute:Object(d.b)().t("search.address"),attributeValue:a});else for(var s in t)t[s]&&o.info.push({attribute:s,attributeValue:t[s]});this.fire("set-popup-content"+this.searchTaskId,{popupData:o})}else this.fire("addfeaturefailed"+this.searchTaskId,{error:Object(d.b)().t("search.illegalFeature")})}},{key:"_addLine",value:function(){console.log("draw line here")}},{key:"_addPolygon",value:function(e){var t,r;e&&this.map&&(t=Object(l.default)(e).geometry.coordinates,r=e,(e=this.map.getSource("searchResultLayer"))?e.setData(r):this.map.addLayer({id:"searchResultLayer",type:"fill",source:{type:"geojson",data:r},layout:{},paint:{"fill-color":"rgb(255, 0, 0)","fill-opacity":.8}}),this.map.easeTo({center:t}))}},{key:"setPopupContent",value:function(e,t,r){t.style.display="block";var o=new i.a.Popup({className:"sm-mapboxgl-tabel-popup sm-component-search-result-popup",closeOnClick:!0,closeButton:!1,maxWidth:"none",anchor:"bottom"}),a=new i.a.Marker;this.popupList.push(o),this.markerList.push(a),o.setLngLat(e).setDOMContent(t).addTo(this.map),o.on("open",function(){r&&r()}),a.setLngLat(e).setPopup(o).addTo(this.map),this.map.flyTo({center:e})}},{key:"_searchFromLayer",value:function(e){var r=this;setTimeout(function(){e.forEach(function(e){var t=r.map.getSource(e);t?(t=u()(t._data.features),t=r._getFeaturesByKeyWord(r.keyWord,t).slice(0,r.maxFeatures),r._searchFeaturesSucceed(t,e)):r._searchFeaturesFailed("The ".concat(e," does not exist"),e)},r)},0)}},{key:"_searchFeaturesFailed",value:function(e,t){e&&console.log(e),this.errorSourceList[t]||(this.searchCount--,this.errorSourceList[t]=t,0===this.searchCount&&this.fire("searchfailed"+this.searchTaskId,{error:e,sourceName:t})&&(this.searchTaskId+=1))}},{key:"_searchFeaturesSucceed",value:function(e,t){this.errorSourceList[t]&&delete this.errorSourceList[t],0<e.length&&(this.searchResult[t]={source:t,result:e});var r,o=[];for(r in this.searchResult)o.push(this.searchResult[r]);this.fire("searchsucceeded"+this.searchTaskId,{result:o})&&(this.searchTaskId+=1)}},{key:"_searchFromPOI",value:function(e){var t=this,r="Online 本地搜索";this.geoCodeParam={pageSize:this.options.pageSize||10,pageNum:this.options.pageNum||1,city:e.city},this.geoCodeParam.keyWords=this.keyWord;e=this._getSearchUrl(this.geoCodeParam);SuperMap.FetchRequest.get(e).then(function(e){return e.json()}).then(function(e){e.error?t._searchFeaturesFailed(e.error,r):e.poiInfos&&0===e.poiInfos.length?t._searchFeaturesSucceed([],r):e.poiInfos&&(e=t._dataToGeoJson(e.poiInfos,t.geoCodeParam),t._searchFeaturesSucceed(e.slice(0,t.maxFeatures),r))}).catch(function(e){t._searchFeaturesFailed(e,r)})}},{key:"_searchFromRestMap",value:function(e){var r=this,o="Rest Map Search";e.forEach(function(t){var e={};t.proxy&&(e.proxy=t.proxy),t.epsgCode&&(e.epsgCode=t.epsgCode);e=new p.a(t.url,e);e.on({getdatafailed:function(){r._searchFeaturesFailed("",t.name||o)},featureisempty:function(){r._searchFeaturesSucceed([],t.name||o)},getdatasucceeded:function(e){e.features&&(e=r._getFeaturesByKeyWord(r.keyWord,e.features),r._searchFeaturesSucceed(e,t.name||o))}}),e.getMapFeatures({dataUrl:t.url,mapName:t.layerName},{maxFeatures:r.maxFeatures,keyWord:r.keyWord})},this)}},{key:"_searchFromRestData",value:function(e){var a=this,s="Rest Data Search";e.forEach(function(t){var e={};t.proxy&&(e.proxy=t.proxy),t.epsgCode&&(e.epsgCode=t.epsgCode);var r=new p.a(t.url,e);r.on({getdatafailed:function(){a._searchFeaturesFailed("",t.name||s)},featureisempty:function(){a._searchFeaturesSucceed([],t.name||s)},getdatasucceeded:function(e){e.features&&0<e.features.length&&(e=a._getFeaturesByKeyWord(a.keyWord,e.features),a._searchFeaturesSucceed(e,t.name||s))}});var o=t.dataName[0].split(":")[0],e=t.dataName[0].split(":")[1];r.getDataFeatures({datasetName:e,dataSourceName:o,dataUrl:t.url},{maxFeatures:a.maxFeatures,keyWord:a.keyWord})},this)}},{key:"_searchFromIportal",value:function(e){var r=this,o="Iportal Search";e.forEach(function(t){var e=new h.a(t.url,t.withCredentials||!1,{epsgCode:t.epsgCode});e.on({getdatafailed:function(){r._searchFeaturesFailed("",t.name||o)},featureisempty:function(){r._searchFeaturesSucceed([],t.name||o)},getdatasucceeded:function(e){e.features&&(e=r._getFeaturesByKeyWord(r.keyWord,e.features),r._searchFeaturesSucceed(e,t.name||o))}}),e.getData({keyWord:r.keyWord})},this)}},{key:"_searchFromAddressMatch",value:function(e){var r=this,o="Address Match Search";e.forEach(function(t){var e={};t.proxy&&(e.proxy=t.proxy),r.addressMatchService=new i.a.supermap.AddressMatchService(t.url,e);e={address:r.keyWord,fromIndex:0,toIndex:r.maxFeatures,maxReturn:r.maxFeatures,prjCoordSys:"{epsgcode:4326}"},e=new SuperMap.GeoCodingParameter(e);r.addressMatchService.code(e,function(e){e.result?r._searchFeaturesSucceed(e.result,t.name||o):r._searchFeaturesFailed("",t.name||o)})},this)}},{key:"_dataToGeoJson",value:function(e,t){for(var r=[],o=0;o<e.length;o++){var a={type:"Feature",geometry:{type:"Point",coordinates:[e[o].location.x,e[o].location.y]},properties:{name:e[o].name||t.keyWords,address:e[o].formatedAddress||e[o].address},filterAttribute:{filterAttributeName:e[o].name||t.keyWords,filterAttributeValue:e[o].formatedAddress||e[o].address||Object(d.b)().t("search.null")},filterVal:"".concat(e[o].name||t.keyWords,"：").concat(e[o].formatedAddress||e[o].address||Object(d.b)().t("search.null"))};r.push(a)}return r}},{key:"_getSearchUrl",value:function(e){return this.options.cityGeoCodingConfig.addressUrl+".json?keywords=".concat(e.keyWords,"&city=").concat(e.city||"北京市","&pageSize=").concat(e.pageSize,"&pageNum=").concat(e.pageNum,"&key=").concat(this.options.cityGeoCodingConfig.key)}},{key:"_getFeaturesByKeyWord",value:function(e,t){var a=this,s=[],n=new RegExp(e.toLowerCase()),i=this._getAttributeNames(t);return t.forEach(function(r){if(!r.properties)return null;var o=r.properties;i.forEach(function(e){var t;o[e]&&n.test(o[e].toString().toLowerCase())&&(e=o[t=e]||Object(d.b)().t("search.null"),r.filterAttribute||(r.filterAttribute={filterAttributeName:t,filterAttributeValue:e},r.filterVal="".concat(t,"：").concat(e),s.push(r)))},a)}),s}},{key:"_getAttributeNames",value:function(e){var t=[],e=e[0].properties;return e&&Object.keys(e).forEach(function(e){t.push(e)},this),t}},{key:"_clearMarkers",value:function(){this.markerList.length&&(this.markerList.forEach(function(e){e&&e.remove()}),this.markerList=[])}},{key:"_clearPopups",value:function(){this.popupList.length&&(this.popupList.forEach(function(e){e&&e.remove()}),this.popupList=[])}},{key:"_clearSearchResultLayer",value:function(){this.map&&this.map.getLayer("searchResultLayer")&&(this.map.removeLayer("searchResultLayer"),this.map.removeSource("searchResultLayer"))}},{key:"_resetSearchSourceData",value:function(){this.map&&this.map.getSource("searchResultLayer")&&this.map.getSource("searchResultLayer").setData({type:"FeatureCollection",features:[]})}},{key:"_reset",value:function(){this._resetSearchSourceData(),this._clearMarkers(),this._clearPopups()}},{key:"removed",value:function(){this.searchTaskId=0,this.searchResult={},this.errorSourceList={},this.options.resultRender||(this._clearSearchResultLayer(),this._clearMarkers(),this._clearPopups())}}])&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(),O=r("SqLP"),_=r("QsSW"),C=r("K79h"),n=r("oUIn"),c=r("XaGS"),T=r.n(c);function x(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function P(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach(function(e){var t,r;t=o,e=a[r=e],r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}o={name:"SmSearch",components:{SmIcon:O.default,SmInput:_.a,TablePopup:n.a},mixins:[s.a,a.a,o.a],props:{maxFeatures:{type:[Number,String],default:8},layerNames:{type:Array},onlineLocalSearch:{type:Object,default:function(){return{enable:!0,city:"北京市"}}},restMap:{type:Array},restData:{type:Array},iportalData:{type:Array},addressMatch:{type:Array},mode:{type:String,default:"control",validator:function(e){return-1!==["control","toolBar"].indexOf(e)}},openSearchSuggestion:{type:Boolean,default:!1},alwaysCenter:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0},showResult:{type:Boolean,default:!0},resultRender:{type:Function},collapsed:{type:Boolean,default:!1},splitLine:{type:Boolean,default:!0}},data:function(){return{searchKey:null,searchResult:[],prefixType:"search",isActive:!1,tablePopupProps:{},showSearch:!0,showIcon:!1,isInputing:!1,isSuggestion:!1,keyupHoverInfo:{groupIndex:void 0,hoverIndex:void 0}}},computed:{resultSuggestions:function(){return!(!this.isSuggestion&&!this.showResult)&&0<this.searchResult.length}},watch:{iportalData:function(e,t){this.searchKey&&!T()(e,t)&&this.search()},restData:function(e,t){this.searchKey&&!T()(e,t)&&this.search()},restMap:function(e,t){this.searchKey&&!T()(e,t)&&this.search()},addressMatch:function(e,t){this.searchKey&&!T()(e,t)&&this.search()}},created:function(){this.showSearch=!this.collapsed,this.showIcon=this.collapsed,this.viewModel=new k(this.$props)},removed:function(){this.clearResult(!0)},beforeDestroy:function(){C.a.destroy()},methods:{clearResult:function(e){C.a.destroy(),e&&(this.searchKey=null),e&&this.resetLastEvent(),this.searchResult=[],this.prefixType="search",this.keyupHoverInfo={groupIndex:void 0,hoverIndex:void 0},this.viewModel&&this.viewModel.removed()},searchInput:function(){this.openSearchSuggestion&&!this.isInputing&&(this.searchKey?(this.isSuggestion=!0,this.search()):this.inputValueCleared(!1))},searchButtonClicked:function(){this.isSuggestion=!1,this.search()},search:function(){var e,t,r,o,a,s;this.clearResult(),this.mapNotLoadedTip()||(e=(s=this.$props).layerNames,t=s.onlineLocalSearch,r=s.restMap,o=s.restData,a=s.iportalData,s=s.addressMatch,e&&0<e.length||t.enable||r&&0<r.length||o&&0<o.length||a&&0<a.length||s&&0<s.length?this.searchKey?(this.searchTaskId=this.viewModel.search(this.searchKey),this.regiterEvents(),this.prefixType="loading"):C.a.warning(this.$t("search.noKey")):C.a.warning(this.$t("search.setSearchSource")))},inputValueCleared:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.clearResult(!0),this.viewModel&&this.viewModel.removed(),e&&this.$emit("clear-search-result")},searchResultListClicked:function(e,t){t=t.target.innerHTML;this.isSuggestion=!1,this.viewModel.getFeatureInfo(t,e)},resetLastEvent:function(){/\d/.test(this.searchTaskId)&&(this.viewModel.off("searchsucceeded"+this.searchTaskId),this.viewModel.off("searchfailed"+this.searchTaskId),this.viewModel.off("set-popup-content"+this.searchTaskId),this.viewModel.off("addfeaturefailed"+this.illegalFeatureTip),this.viewModel.off("search-selected-info"+this.searchTaskId),this.searchTaskId=void 0)},registerSuccessEvent:function(e){this.viewModel.on("searchsucceeded"+e,this.searchSucceeded)},registerFailedEvent:function(e){this.viewModel.on("searchfailed"+e,this.searchFailed)},regiterEvents:function(){this.isNumber(this.searchTaskId)&&(this.viewModel.off("searchsucceeded"+(this.searchTaskId-1),this.searchSucceeded),this.viewModel.off("searchsucceeded"+(this.searchTaskId-1),this.searchFailed),this.viewModel.off("set-popup-content"+(this.searchTaskId-1),this.setPopupContent),this.viewModel.off("addfeaturefailed"+(this.searchTaskId-1),this.illegalFeatureTip),this.viewModel.off("search-selected-info"+(this.searchTaskId-1),this.searchSelectedInfo));var e=this.searchTaskId||0;this.registerSuccessEvent(e),this.registerFailedEvent(e),this.viewModel.on("set-popup-content"+e,this.setPopupContent),this.viewModel.on("addfeaturefailed"+e,this.illegalFeatureTip),this.viewModel.on("search-selected-info"+e,this.searchSelectedInfo)},searchSucceeded:function(e){e=e.result;C.a.destroy(),this.searchResult=e,this.$emit("search-succeeded",{searchResult:this.searchResult}),this.prefixType="search",this.isNumber(this.searchTaskId)&&(this.searchTaskId+=1,this.regiterEvents())},searchFailed:function(e){this.clearResult(),this.prefixType="search",this.$emit("search-failed",e),this.isNumber(this.searchTaskId)&&(this.searchTaskId+=1,this.regiterEvents())},setPopupContent:function(e){var t=this,r=e.popupData;r&&r.info.length&&(e={columns:[{title:this.$t("search.attribute"),dataIndex:"attribute",width:80},{title:this.$t("search.attributeValue"),dataIndex:"attributeValue",width:150}],data:r.info},this.tablePopupProps=P({},e)),this.$nextTick(function(){t.viewModel.setPopupContent(r.coordinates,t.$refs.searchTablePopup.$el,function(){return Object(f.s)(t.tablePopupBgData)})})},illegalFeatureTip:function(e){e=e.error;C.a.destroy(),C.a.error(e)},searchSelectedInfo:function(e){e=e.data;this.prefixType="search",this.resultRender&&this.resultRender(e),this.$emit("search-selected-info",e)},isNumber:function(e){return/\d/.test(e)},downChoose:function(){var e=this.searchResult.filter(function(e){return e.result.length}).length,t=this.keyupHoverInfo,r=t.groupIndex,o=void 0===r?0:r,r=t.hoverIndex,t=(o?this.searchResult[o]:this.searchResult[0]).result.length,o=o<e-1&&t-1<=r?Math.min(e-1,o+1):o===e-1&&r===t-1?0:o;this.isNumber(r)&&r<t-1?this.keyupHoverInfo.hoverIndex=r+1:(this.keyupHoverInfo.groupIndex=o,this.keyupHoverInfo.hoverIndex=0);o=this.searchResult[o].result[this.keyupHoverInfo.hoverIndex];this.searchKey=(o.filterVal||o.name||o.address).split("：")[0]},upChoose:function(){var e=this.searchResult.filter(function(e){return e.result.length}).length,t=this.keyupHoverInfo,r=t.groupIndex,r=void 0===r?0:r,t=t.hoverIndex,r=0<r&&!t?Math.max(0,r-1):r||t?r:e-1;this.isNumber(t)&&0<t?this.keyupHoverInfo.hoverIndex=t-1:(this.keyupHoverInfo.groupIndex=r,this.keyupHoverInfo.hoverIndex=Math.max(this.searchResult[r].result.length-1,0));r=this.searchResult[r].result[this.keyupHoverInfo.hoverIndex];this.searchKey=(r.filterVal||r.name||r.address).split("：")[0]},changeResultHover:function(e){e=e.keyCode;38===e?this.upChoose():40===e&&this.downChoose()}}},r=r("KHd+"),o=Object(r.a)(o,function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"sm-component-search",style:o.headingTextColorStyle,attrs:{id:"sm-component-search"}},[o.showIcon&&"control"===o.mode?a("div",{staticClass:"sm-component-search__toggle-icon",style:o.collapseCardHeaderBgStyle,on:{click:function(e){o.showSearch=!o.showSearch,o.showIcon=!o.showIcon}}},[a("i",{staticClass:"sm-components-icon-search"})]):o._e(),o._v(" "),a("transition",{attrs:{name:"sm-component-zoom-in"},on:{"after-leave":function(e){o.showIcon=!o.showIcon}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:o.showSearch||"toolBar"===o.mode,expression:"showSearch || mode === 'toolBar'"}],staticClass:"sm-component-search__content",style:[{"transform-origin":o.position.includes("left")?"top left":"top right"},o.collapseCardHeaderBgStyle]},[a("div",{class:{"sm-component-search__input":!0,"with-split-line":o.splitLine},style:o.collapseCardHeaderBgStyle,attrs:{"aria-orientation":o.position.includes("left")?"left":"right"}},["control"===o.mode?a("div",{staticClass:"sm-component-search__arrow-icon",on:{click:function(e){o.showSearch=!o.showSearch}}},[a("i",{class:o.position.includes("left")?"sm-components-icon-double-left":"sm-components-icon-double-right"})]):o._e(),o._v(" "),a("div",{staticClass:"sm-component-search__search-icon",on:{click:o.searchButtonClicked}},[a("sm-icon",{attrs:{type:o.prefixType}})],1),o._v(" "),a("sm-input",{class:["sm-component-search__a-input",{"toolBar-input":"toolBar"===o.mode}],attrs:{placeholder:o.$t("search.inputPlaceHolder"),allowClear:""},on:{input:o.searchInput,compositionstart:function(e){o.isInputing=!0},compositionend:function(e){o.isInputing=!1},pressEnter:o.searchButtonClicked,focus:function(e){o.isActive=!o.isActive},blur:function(e){o.isActive=!o.isActive},keyup:o.changeResultHover,change:function(e){return!e.target.value&&o.inputValueCleared()}},model:{value:o.searchKey,callback:function(e){o.searchKey=e},expression:"searchKey"}})],1),o._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:o.resultSuggestions,expression:"resultSuggestions"}],staticClass:"sm-component-search__result",style:o.collapseCardBackgroundStyle},o._l(o.searchResult,function(e,r){return a("div",{key:r,staticClass:"sm-component-search__panel"},[e.source&&o.showTitle&&e.result.length?a("div",{staticClass:"sm-component-search__panel-header-wrapper"},[a("div",{staticClass:"sm-component-search__panel-header"},[a("i",{staticClass:"sm-components-icon-list"}),o._v(" "),a("span",{staticClass:"add-ellipsis"},[o._v(o._s(e.source))])])]):o._e(),o._v(" "),e.result?a("div",{staticClass:"sm-component-search__panel-body",style:o.getTextColorStyle},[a("ul",{class:{noMarginBottom:!o.showTitle}},o._l(e.result,function(t,e){return a("li",{key:e,class:{active:o.keyupHoverInfo.groupIndex===r&&o.keyupHoverInfo.hoverIndex===e,"add-ellipsis":!0},attrs:{title:t.filterVal||t.name||t.address},on:{click:function(e){return o.searchResultListClicked(t,e)}}},[o._v(o._s(t.filterVal||t.name||t.address))])}),0)]):o._e()])}),0)])]),o._v(" "),a("TablePopup",o._b({directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"searchTablePopup",attrs:{"split-line":o.splitLine,"text-color":o.textColor,background:o.background}},"TablePopup",o.tablePopupProps,!1))],1)},[],!1,null,null,null);t.default=o.exports},dDBl:function(e,t,r){"use strict";var o=r("TuIa"),a=r("FhCG"),s=r("oTir"),n=r("tmJK"),a=Object.assign({},a.TableProps),a={name:"SmTable",defaultComponent:o.default,mixins:[s.a,n.a],inheritAttrs:!1,props:a},r=r("KHd+"),a=Object(r.a)(a,void 0,void 0,!1,null,null,null);t.a=a.exports},oUIn:function(e,t,r){"use strict";var o=r("oTir"),a=r("dDBl"),s=r("qAG6"),o={name:"SmTablePopup",components:{SmTable:a.a},mixins:[o.a],props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},splitLine:{type:Boolean,default:!0}},watch:{"collapseCardHeaderBgStyle.background":function(e){this.setTheadStyle("background",e)},"tablePopupBgStyle.background":function(e){Object(s.s)(e)},"headingTextColorStyle.color":function(e){this.setTheadStyle("color",e)}},mounted:function(){this.setTheadStyle("color",this.headingTextColorStyle.color),this.setTheadStyle("background",this.collapseCardHeaderBgStyle.background)},methods:{setTheadStyle:function(t,r){var e;!this.$el||(e=this.$el.querySelectorAll("tr > th"))&&e.forEach(function(e){e.style[t]=r})}}},r=r("KHd+"),o=Object(r.a)(o,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{class:{"sm-component-table-popup":!0,"with-split-line":e.splitLine},style:[e.tablePopupBgStyle,e.getTextColorStyle]},[t("sm-table",{staticClass:"sm-component-table-popup__table",attrs:{"data-source":e.data,columns:e.columns,rowKey:function(e,t){return t},pagination:!1}})],1)},[],!1,null,null,null);t.a=o.exports},rn6b:function(e,t,r){"use strict";var s=r("oCYn"),o=r("YKMj"),n=r("FuRH");function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=a(r);return function(e,t){{if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,o?(e=a(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,t,r,o){var a,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;0<=i;i--)(a=e[i])&&(n=(s<3?a(n):3<s?a(t,r,n):a(t,r))||n);return 3<s&&n&&Object.defineProperty(t,r,n),n},r=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,s["default"]);var e,t,r,o=u(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.apply(this,arguments)).isShow=!0,e}return e=a,(t=[{key:"positionChanged",value:function(){this.$el&&this.parentIsWebMapOrMap&&(this.remove(),this.addTo())}},{key:"created",value:function(){var e=this.$parent.$options.name;this.parentIsWebMapOrMap=e&&-1!==["smwebmap","smncpmap"].indexOf(this.$parent.$options.name.toLowerCase())}},{key:"mounted",value:function(){var e;this.filterDelayLoad=!(-1!==["smwebmap","smminimap","smncpmap"].indexOf(this.$options.name&&this.$options.name.toLowerCase())),this.$el&&this.parentIsWebMapOrMap&&(this.filterDelayLoad&&(this.isShow=!1,(e=this.$el).style&&(e.style.display="none")),e=this.getControlMapName(),n.a.$options.getMap(e)&&this.mapLoaded(n.a.$options.getMap(e)),n.a.$on("load-map",this.controlLoadMapSucceed))}},{key:"beforeDestroy",value:function(){this.remove(),n.a.$off("load-map",this.controlLoadMapSucceed)}},{key:"initControl",value:function(){var e=this;return{onAdd:function(){return e.$el},onRemove:function(){return e.map}}}},{key:"addTo",value:function(){this.control=this.initControl(),this.map.addControl(this.control,this.position),this.$el&&this.$el.classList&&this.$el.classList.add("mapboxgl-ctrl")}},{key:"remove",value:function(){this.control&&this.map&&this.map.removeControl(this.control)}},{key:"getControlMapName",value:function(){var e=this.$parent,e=e&&e.$options.name&&"smwebmap"===e.$options.name.toLowerCase()&&e.target;return this.mapTarget||e||Object.keys(n.a.$options.getAllMaps())[0]}},{key:"controlLoadMapSucceed",value:function(e,t){t===this.getControlMapName()&&this.mapLoaded(e)}},{key:"mapLoaded",value:function(e){this.map=e,this.addTo(),this.filterDelayLoad&&(this.isShow=!0,(e=this.$el)&&e.style&&(e.style.display="block"))}}])&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}();h([Object(o.Prop)()],r.prototype,"mapTarget",void 0),h([Object(o.Prop)({default:"top-left",validator:function(e){return-1!==["top-left","top-right","bottom-left","bottom-right"].indexOf(e)}})],r.prototype,"position",void 0),h([Object(o.Watch)("position")],r.prototype,"positionChanged",null),r=h([o.Component],r),t.a=r}}]);