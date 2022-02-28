(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"7BsA":function(t,e,n){t.exports=function(n){function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var i={};return r.m=n,r.c=i,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=2)}([function(t,e,n){n=n(4)(n(1),n(5),null,null);t.exports=n.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return 0<=t}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,r.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,r.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,r.requestAnimationFrame)(this.count)},reset:function(){(this.startTime=null,r.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t);t=(this.timestamp=t)-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=(0,r.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var t=(t+="").split("."),e=t[0],t=1<t.length?this.decimal+t[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(e);)e=e.replace(n,"$1"+this.separator+"$2");return this.prefix+e+t+this.suffix}},destroyed:function(){(0,r.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n=n(0),n=n&&n.__esModule?n:{default:n};e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,r="webkit moz ms o".split(" "),o=void 0,a=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=a=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=a=window.cancelAnimationFrame;for(var u,s=0;s<r.length&&(!o||!a);s++)u=r[s],e.requestAnimationFrame=o=o||window[u+"RequestAnimationFrame"],e.cancelAnimationFrame=a=a||window[u+"CancelAnimationFrame"]||window[u+"CancelRequestAnimationFrame"];o&&a||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),r=window.setTimeout(function(){t(e+n)},n);return i=e+n,r},e.cancelAnimationFrame=a=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=a},function(t,e){t.exports=function(t,e,n,r){var i,o,a=t=t||{},u=typeof t.default,t="function"==typeof(a="object"==u||"function"==u?(i=t).default:a)?a.options:a;return e&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns),n&&(t._scopeId=n),r&&(o=Object.create(t.computed||null),Object.keys(r).forEach(function(t){var e=r[t];o[t]=function(){return e}}),t.computed=o),{esModule:i,exports:a,options:t}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},PIwK:function(t,e,n){"use strict";n.r(e);var r=n("oTir"),i=n("phJg"),o=n("WN45"),a=n("7BsA"),a=n.n(a),u=n("qAG6"),a={name:"SmCountTo",extends:a.a,props:{fontSize:{type:[String,Number]},numBackground:{type:Object,default:function(){return{color:"rgba(0, 0, 0, 0)",image:"",padding:0}}},numSpacing:{type:Number,default:0},separatorBackground:{type:Boolean,default:!1}},computed:{calNumBackground:function(){var n=this;return function(t){if(!n.numBackground)return{};if(t&&!n.separatorBackground&&(t===n.separator||t===n.decimal))return{};var e=n.fontSize&&isNaN(n.fontSize)?n.fontSize.replace(/\d+(\.\d+)?([a-z]+)/gi,"$2"):"px",t={backgroundColor:n.numBackground.color,padding:n.numBackground.padding};return n.numBackground.image&&(t=Object.assign(t,{backgroundImage:"url(".concat(n.numBackground.image,")"),backgroundSize:"100% 100%"})),t=n.numBackground.image||!Object(u.m)(n.numBackground.color)?Object.assign(t,{textIndent:"".concat(.16*parseFloat(n.fontSize)).concat(e),letterSpacing:"".concat(.16*parseFloat(n.fontSize)).concat(e)}):Object.assign(t,{textIndent:"".concat(.06*parseFloat(n.fontSize)).concat(e),letterSpacing:"".concat(.06*parseFloat(n.fontSize)).concat(e)})}},numInterval:function(){return{marginRight:"".concat(this.numSpacing,"px")}},numStyle:function(){return{fontSize:this.fontSize}},numDataList:function(){return this.displayValue.split("").map(function(t){return t})}},watch:{separator:function(){this.start()},decimals:function(){this.start()}}},n=n("KHd+"),i={name:"SmIndicator",components:{countTo:Object(n.a)(a,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("span",n._l(n.numDataList,function(t,e){return r("div",{key:e,staticClass:"sm-component-count-to__numItem",style:[n.calNumBackground(t),n.numInterval,n.numStyle]},[r("span",[n._v(n._s(t))])])}),0)},[],!1,null,null,null).exports},mixins:[r.a,i.a],props:{title:{type:String,default:function(){return this.$t("indicator.title")}},unit:{type:String,default:function(){return this.$t("indicator.unit")}},indicatorColor:{type:String},textFontSize:{type:[String,Number]},fontSize:{type:[String,Number]},fontWeight:{type:[String,Number],default:"border"},num:{type:[Number,String],default:0},url:{type:String},proxy:{type:String},animated:{type:Boolean,default:!1},duration:{type:[Number,String],default:1e3},decimals:{type:Number,default:-1},mode:{type:String,default:"vertical",validator:function(){return["vertical","horizontal"]}},separator:{type:String,default:","},numSpacing:{type:Number,default:0},numBackground:{type:Object,default:function(){return{color:"rgba(0, 0, 0, 0)",image:"",padding:0}}},separatorBackground:{type:Boolean,default:!1},showTitleUnit:{type:Boolean,default:!0},titleField:String,numField:String,unitField:String,thresholdsStyle:Array},data:function(){return{indicatorColorData:"",titleData:this.title,unitData:this.unit,numData:0,startData:0,indicatorNum:0}},computed:{unit_titleStyle:function(){return{fontSize:this.textFontSize||.66*parseFloat(this.fontSize)+this.fontUnit,fontWeight:this.fontWeight}},fontUnit:function(){return this.fontSize&&isNaN(this.fontSize)?this.fontSize.replace(/\d+(\.\d+)?([a-z]+)/gi,"$2"):"px"},indicatorStyle:function(){var t,n=this,e=this.indicatorColorData;isNaN(this.indicatorNum)||!this.thresholdsStyle||(t=this.thresholdsStyle.find(function(t){var e;return t.min&&(e=+n.indicatorNum>=+t.min),e=t.max?(e=void 0===e||e)&&+n.indicatorNum<=+t.max:e}))&&(e=t.color);e={color:e};return"string"==typeof this.indicatorNum&&(e.fontSize=parseFloat(this.fontSize)+this.fontUnit),e},direction:function(){return{vertical:"column",horizontal:"row"}[this.mode]},filterSeparator:function(){return this.separator.replace(/\d+/,"")},calDecimals:function(){return 0<this.decimals?this.decimals:this.numData.toString().split(".")[1]?this.numData.toString().split(".")[1].length:0}},watch:{url:{handler:function(t){t?this.getData():(this.unitData=this.unit,this.changeNumData(this.num),this.titleData=this.title,this.fetchProperties=null)},immediate:!0},indicatorColor:function(t){this.indicatorColorData=t},proxy:function(){this.restService&&this.restService.setProxy(this.proxy),this.url&&this.getData()}},mounted:function(){var t=this;this.$on("theme-style-changed",function(){t.indicatorColorData=t.getColor(0)}),this.indicatorColorData=this.indicatorColor||this.getColor(0),this.partsOfPropsWatcher()},beforeDestroy:function(){this.restService&&this.restService.remove("getdatasucceeded")},methods:{partsOfPropsWatcher:function(){var t=this;["title","unit","num","titleField","unitField","numField"].forEach(function(e){t.$watch(e,function(t){switch(e){case"title":this.titleData=t;break;case"titleField":this.fetchProperties&&Object.prototype.hasOwnProperty.call(this.fetchProperties,t)?this.titleData=this.fetchProperties[this.titleField]:this.titleData=this.title;break;case"unit":this.unitData=t;break;case"unitField":this.fetchProperties&&Object.prototype.hasOwnProperty.call(this.fetchProperties,t)?this.unitData=this.fetchProperties[this.unitField]:this.unitData=this.unit;break;case"num":this.changeNumData(t);break;case"numField":this.fetchProperties&&Object.prototype.hasOwnProperty.call(this.fetchProperties,t)?this.changeNumData(this.fetchProperties[this.numField]):this.changeNumData(this.num)}})})},isNumber:function(t){return/^\d+$/.test(t)},timing:function(){this.getData()},fetchData:function(t){var t=t.features;t&&t.length&&(t=t[0].properties,this.fetchProperties=t,this.unitData=Object.prototype.hasOwnProperty.call(t,this.unitField)?t[this.unitField]:this.unit,Object.prototype.hasOwnProperty.call(t,this.numField)?this.changeNumData(t[this.numField]):this.changeNumData(this.num),this.titleData=Object.prototype.hasOwnProperty.call(t,this.titleField)?t[this.titleField]:this.title)},getData:function(){this.getRestService().getData(this.url)},changeNumData:function(t){var e=this.animated?+this.numData:+t;this.startData=isNaN(e)?0:e,this.numData=+t,this.indicatorNum=t},getRestService:function(){return this.restService||(this.restService=new o.a({proxy:this.proxy}),this.restService.on({getdatasucceeded:this.fetchData})),this.restService}}},i=Object(n.a)(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"sm-component-indicator",style:t.getBackgroundStyle},[e("div",{class:"sm-component-indicator__content sm-component-indicator__content-"+t.mode},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showTitleUnit,expression:"showTitleUnit"}],staticClass:"sm-component-indicator__title",style:[t.unit_titleStyle,t.getTextColorStyle]},[t._v(t._s(t.titleData))]),t._v(" "),e("div",[e("span",{staticClass:"sm-component-indicator__num",style:t.indicatorStyle},[t.isNumber(t.indicatorNum)?e("countTo",{attrs:{decimals:t.calDecimals,startVal:t.startData,endVal:t.numData,duration:Number(t.duration)||1e3,separator:t.filterSeparator,numBackground:t.numBackground,numSpacing:t.numSpacing,separatorBackground:t.separatorBackground,fontSize:parseFloat(t.fontSize)+t.fontUnit}}):t._e(),t._v("\n        "+t._s(t.isNumber(t.indicatorNum)?"":t.indicatorNum)+"\n      ")],1),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.showTitleUnit,expression:"showTitleUnit"}],staticClass:"sm-component-indicator__unit",style:[t.unit_titleStyle,t.getTextColorStyle]},[t._v(t._s(t.unitData))])])])])},[],!1,null,null,null);e.default=i.exports},oTir:function(t,e,n){"use strict";var o=n("oCYn"),r=n("YKMj"),u=n("yIpb"),a=n("qAG6"),s=n("5ZGa");function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=i(n);return function(t,e){{if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,r?(t=i(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p,d=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;0<=u;u--)(i=t[u])&&(a=(o<3?i(a):3<o?i(e,n,a):i(e,n))||a);return 3<o&&a&&Object.defineProperty(e,n,a),a},n=p=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(i,o["default"]);var t,e,n,r=f(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.apply(this,arguments)).backgroundData="",t.textColorsData="",t.collapseCardBackgroundData="",t.collapseCardHeaderBgData="",t.subComponentSpanBgData="",t.tablePopupBgData="",t.colorGroupsData=[],t.themeStyleName=[],t}return t=i,(e=[{key:"getBackgroundStyle",get:function(){return{background:this.backgroundData}}},{key:"collapseCardBackgroundStyle",get:function(){return{background:this.collapseCardBackgroundData}}},{key:"collapseCardBackgroundLightStyle",get:function(){return{background:Object(s.b)({colorGroup:[this.collapseCardBackgroundData]})[2]}}},{key:"collapseCardHeaderBgStyle",get:function(){return{background:this.collapseCardHeaderBgData}}},{key:"subComponentSpanBgStyle",get:function(){return{background:this.subComponentSpanBgData}}},{key:"tablePopupBgStyle",get:function(){return{background:this.tablePopupBgData}}},{key:"getTextColorStyle",get:function(){return{color:this.textColorsData}}},{key:"headingTextColorStyle",get:function(){return{color:Object(a.g)(this.textColorsData,.85)}}},{key:"secondaryTextColorStyle",get:function(){return{color:Object(a.g)(this.textColorsData,.45)}}},{key:"disabledTextColorStyle",get:function(){return{color:Object(a.g)(this.textColorsData,.25)}}},{key:"getBackground",get:function(){return this.backgroundData}},{key:"getTextColor",get:function(){return this.textColorsData}},{key:"getColorStyle",get:function(){return function(t){return{color:this.colorGroupsData[t]}}}},{key:"getColor",get:function(){return function(t){return this.colorGroupsData[t]}}},{key:"themeStyleChanged",value:function(t){return t}},{key:"created",value:function(){this.initThemeData(),this.registerPropListener()}},{key:"mounted",value:function(){u.a.$on("change-theme",this.changeThemeCallback)}},{key:"beforeDestroy",value:function(){u.a.$off("change-theme",this.changeThemeCallback)}},{key:"changeThemeCallback",value:function(t){this.setDataRelatedProps(t,!0),"background"in t&&this.setDataRelatedWithBackgound("",t),this.themeStyleChanged(),this.initNeedTheme(t)}},{key:"initThemeData",value:function(){this.setDataRelatedProps(),this.setDataRelatedWithBackgound(this.background)}},{key:"initNeedTheme",value:function(e){var n=this;this.themeStyleName.forEach(function(t){n[t]="primaryColor"===t?e.colorGroup&&e.colorGroup[0]:n.getRealColor(t,e)})}},{key:"registerPropListener",value:function(){var t=this,r=this;this.getSelfProps().forEach(function(n){t.$watch(n,function(t){var e=this.getDataNameOfProp(n);r[e]=t||this.getRealColor(n),"background"===n&&r.setDataRelatedWithBackgound(t)})})}},{key:"setDataRelatedProps",value:function(r,i){var o=this,a=r||u.a.$options.theme||{};this.getSelfProps().forEach(function(t){var e,n;t in a&&(e=o.getDataNameOfProp(t),n=i?"":o[t],o[e]=n||o.getRealColor(t,r))})}},{key:"setDataRelatedWithBackgound",value:function(t,e){this.collapseCardHeaderBgData=t||this.getRealColor("collapseCardHeaderBg",e),this.subComponentSpanBgData=t||this.getRealColor("subComponentSpanBg",e),this.collapseCardBackgroundData=t||this.getRealColor("collapseCardBackground",e),this.tablePopupBgData=t||this.getRealColor("messageBackground",e)}},{key:"getSelfProps",value:function(){return Object.keys(p.extendOptions.props)}},{key:"getRealColor",value:function(t,e){var n=e||u.a.$options.theme||{};if("colorGroup"===t||!n[t]||-1===n[t].indexOf("var"))return n[t];e=Object(s.c)(n),e=window.getComputedStyle(document.querySelector(e)),t=n[t].replace(/var\((.+)\)/g,"$1");return e.getPropertyValue(t).trim()}},{key:"getDataNameOfProp",value:function(t){switch(t){case"textColor":return"textColorsData";case"colorGroup":return"colorGroupsData";default:return"".concat(t,"Data")}}},{key:"render",value:function(t){return t("template",null)}}])&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}();d([Object(r.Prop)()],n.prototype,"background",void 0),d([Object(r.Prop)()],n.prototype,"textColor",void 0),d([Object(r.Prop)()],n.prototype,"colorGroup",void 0),d([Object(r.Emit)()],n.prototype,"themeStyleChanged",null),n=p=d([Object(r.Component)({name:"Theme"})],n),e.a=n},phJg:function(t,e,n){"use strict";var o=n("oCYn"),r=n("YKMj");function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=i(n);return function(t,e){{if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t)}(this,r?(t=i(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;0<=u;u--)(i=t[u])&&(a=(o<3?i(a):3<o?i(e,n,a):i(e,n))||a);return 3<o&&a&&Object.defineProperty(e,n,a),a},n=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(i,o["default"]);var t,e,n,r=s(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.apply(this,arguments)).timer=null,t}return t=i,(e=[{key:"onStartTimingChange",value:function(t){t?this._start():this._close()}},{key:"onFrequencyChange",value:function(){this.startTiming&&this.resetTimer()}},{key:"_start",value:function(){var t=this,e=1e3*this.frequency||3e3;this.startTimer(),this.timer=setInterval(function(){t.timing()},e)}},{key:"_close",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.closeTimer()}},{key:"startTimer",value:function(){}},{key:"timing",value:function(){}},{key:"closeTimer",value:function(){}},{key:"resetTimer",value:function(){this._close(),this._start()}},{key:"beforeDestroy",value:function(){this.startTiming&&this._close()}}])&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}();l([Object(r.Prop)({default:!1})],n.prototype,"startTiming",void 0),l([Object(r.Prop)({default:3})],n.prototype,"frequency",void 0),l([Object(r.Watch)("startTiming",{immediate:!0})],n.prototype,"onStartTimingChange",null),l([Object(r.Watch)("frequency")],n.prototype,"onFrequencyChange",null),n=l([r.Component],n),e.a=n}}]);