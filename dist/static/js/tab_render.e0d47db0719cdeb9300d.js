(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"9Mfk":function(t,e,n){},"9X7j":function(t,e,n){"use strict";n.r(e);var i=n("3Dh3"),a={name:"TabSubContainer",mixins:[n("9PB5").a],props:{targetName:{type:String,default:""},activeComponents:{type:Array,default:function(){return[]}},noSwipingClass:{type:String,default:""}},data:function(){return{asyncLoaded:!0}},render:function(t){return this.createElement(t,this.gridLayout,this.targetName,!0)}},o=n("KHd+"),r=Object(o.a)(a,void 0,void 0,!1,null,null,null).exports,s=(n("36R9"),n("chKg")),c=n("QG5D"),a=n("zT9C"),p=n.n(a),a=n("9/5/"),d=n.n(a),a=n("XaGS"),u=n.n(a),h=n("DwEk");function l(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function f(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach(function(t){var e,n;e=i,t=a[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(a,t))})}return i}s={components:{TabSubContainer:r,swiper:s.swiper,swiperSlide:s.swiperSlide},props:{openAllDrag:{type:Boolean,default:!0},gridLayout:{type:Array,default:function(){return[]}},targetName:{type:String},component:{type:Object,required:!0},defaultParams:{type:Object},autoResize:{type:Boolean,default:!0}},data:function(){return{componentName:null,activeTabIndex:"0"}},computed:{swiperOptions:function(){return{initialSlide:0,cssMode:!0,noSwiping:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,noSwipingClass:this.noSwipingClass,direction:this.direction,navigation:{nextEl:"#".concat(this.componentId,"-next"),prevEl:"#".concat(this.componentId,"-prev")}}},tabHeaderId:function(){return(this.tabHeaderLayouts[0]||{}).componentId},tabHeaderCom:function(){return this.$store.getters.getComponentsByID(this.tabHeaderId)||{}},tabHeaderProps:function(){return this.tabHeaderCom.propDatas||{}},dataConfig:function(){return this.defaultParams.props.dataConfig||[]},tabs:function(){return Object.keys(this.dataConfig)},subLayout:function(){return this.tabPageLayouts.concat(this.tabHeaderLayouts)},tabContentLayouts:function(){return this.getTabContentLayoutsByTabs(this.tabs)},tabHeaderLayouts:function(){var t;return this.findGridLayout(this.gridLayout,"TabHeader",t=[]),t},tabPageLayouts:function(){var t;return this.findGridLayout(this.gridLayout,"TabPage",t=[]),t},tabPageTargetName:function(){return this.tabPageLayouts[0].name},componentId:function(){return this.component.componentId},activeIndex:function(){return this.swiper&&this.swiper.activeIndex||0},showSwiperButton:function(){return this.defaultParams.props.showSwiperButton},noSwiping:function(){return this.defaultParams.props.noSwiping},direction:function(){return this.defaultParams.props.direction||"horizontal"},swiperBtnStyle:function(){return this.defaultParams.props.swiperBtnStyle},noSwipingClass:function(){return"stop-swiping-".concat(this.componentId)},swiperSetting:function(){return{noSwiping:this.noSwiping,showSwiperButton:this.showSwiperButton,swiperBtnStyle:f({color:"#e3e3e3",fontSize:"18px",height:"50px",width:"50px"},this.swiperBtnStyle)}},tabSubContainerVisible:function(){var e=this;return function(t){return"".concat(e.component.componentId,"_").concat(e.activeTabIndex)===t?"visible":e.openAllDrag?"hidden":"not-visible"}},activeComponentId:function(){return this.$store.getters.activeComponentId}},watch:{component:{handler:function(){this.componentName=Object(i.d)(this.component.uri)},deep:!0,immediate:!0},direction:function(){this.changeDirection(this.direction)},autoResize:function(){this.autoResizeHandler()},tabs:function(t,e){var n,i,a,o,r=this,s=p()(this.tabHeaderProps);s&&(n=s.tabs.map(function(t){return t.key}),i=s.tabs.map(function(t){return t.title}),a=Object.values(this.dataConfig).map(function(t){return t.title}),u()(i,a)&&(u()(t,e)||u()(t,n))||(u()(t[this.activeIndex],e&&e[this.activeIndex])||(this.activeTabIndex=this.tabs&&this.tabs[this.activeIndex]||"0"),o=[],t.forEach(function(t){o.push({key:t,title:r.dataConfig[t].title})}),s.tabs=o,this.$store.dispatch("CHANGE_COMPONENT_PROPS_SETTING",{componentId:this.tabHeaderId,propDatas:s})))},dataConfig:function(t,e){var n=Object.keys(t||[]),t=Object.keys(e||[]);this.delLayout(n,t,e)},swiperSetting:function(t,e){u()(t,e)||u()(t,this.tabHeaderProps.swiperSetting)||this.setTabHeaderSwiperSetting(t)},"tabHeaderProps.tabs":{handler:function(t,e){var n,i;u()(t,e)||(e=Object.values(this.dataConfig).map(function(t){return{key:t.key,title:t.title}}),u()(t,e)||(n=p()(this.defaultParams.props),i={},t.forEach(function(t){i[t.key]=f(f({componentIds:[]},n.dataConfig[t.key]),t)}),n.dataConfig=i,this.$store.dispatch("CHANGE_COMPONENT_PROPS_SETTING",{componentId:this.componentId,propDatas:n})))},deep:!0},"tabHeaderProps.swiperSetting":{handler:function(t,e){var n,i;this.tabHeaderProps.swiperSetting&&(i=p()(this.tabHeaderProps.swiperSetting),u()(f({noSwiping:void 0},i),this.swiperSetting)||(n=f(f({},n=n||p()(this.defaultParams.props)),i),this.$store.dispatch("CHANGE_COMPONENT_PROPS_SETTING",{componentId:this.componentId,propDatas:n})))},deep:!0}},created:function(){this.tabHeaderProps&&!this.tabHeaderProps.swiperSetting&&this.setTabHeaderSwiperSetting(this.swiperSetting)},mounted:function(){this.autoResizeHandler(),h.a.$on("".concat(this.tabHeaderId,"-active"),function(e){var t=this.tabs.findIndex(function(t){return t===e});-1<t&&t!==this.activeIndex&&(this.swiper&&this.swiper.slideTo(t,1e3,!1),this.activeTabIndex=e)}.bind(this))},beforeDestroy:function(){this.__resizeHandler&&Object(c.b)(this.$el,this.__resizeHandler),h.a.$off("".concat(this.tabHeaderId,"-active"))},methods:{initSwiper:function(){this.swiper=this.$refs.mySwiper&&this.$refs.mySwiper.swiper},slideChange:function(){this.activeTabIndex=this.tabs&&this.tabs[this.activeIndex]||"0",h.a.$emit("".concat(this.tabHeaderId,"-slide"),this.activeTabIndex)},changeDirection:function(t){this.swiper&&this.swiper.changeDirection(t)},autoResizeHandler:function(){var t=this;this.autoResize&&(this.__resizeHandler=d()(function(){t.resize()},100,{leading:!0}),Object(c.a)(this.$el,this.__resizeHandler))},resize:function(){var t=this;setTimeout(function(){t.swiper&&t.swiper.update(!0)},0)},toggleTransitionChange:function(t){this.openAllDrag&&(this.$refs.mySwiper.$el.style.overflow=t?"hidden":"visible")},delLayout:function(i,t,a){var o=this;t.forEach(function(e){var t,n=!0;i.forEach(function(t){e===t&&(n=!1)}),n&&((t=o.getTabContentLayoutsByTabs([e],a))&&t["".concat(o.componentId,"_").concat(e)]||[]).forEach(function(t,e){o.$store.dispatch("DELETE_GRID_LAYOUT",{name:t.name,componentId:o.activeComponentId})})})},getTabContentLayoutsByTabs:function(t){var e=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.dataConfig,i={};return t.forEach(function(t){i["".concat(e.componentId,"_").concat(t)]=[],e.findGridLayout(e.gridLayout,t,i["".concat(e.componentId,"_").concat(t)],n)}),i},findGridLayout:function(t,e){for(var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:this.dataConfig,a=i[e]&&i[e].componentIds,o=0;o<t.length;o++){var r=t[o].componentId;(-1!==e.indexOf("TabHeader")&&-1!==r.indexOf("TabHeader")||-1!==e.indexOf("TabPage")&&-1!==r.indexOf("TabPage")||-1===r.indexOf("TabHeader")&&a&&-1!==a.indexOf(r))&&n.push(t[o])}},setTabHeaderSwiperSetting:function(t){var e=p()(this.tabHeaderProps);e.swiperSetting=f(f({},e.swiperSetting),p()(t)),this.$store.dispatch("CHANGE_COMPONENT_PROPS_SETTING",{componentId:this.tabHeaderId,propDatas:e})}}},n("FWjQ"),s=Object(o.a)(s,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{class:{"sm-tabRender":!0,"sm-tabRender-editor":n.openAllDrag}},[i(n.componentName,n._b({tag:"component",style:n.defaultParams.style,attrs:{componentId:n.componentId,activeTabIndex:n.activeTabIndex}},"component",n.defaultParams.props,!1),[i("tab-sub-container",{attrs:{gridLayout:n.subLayout,targetName:n.targetName,openAllDrag:n.openAllDrag}},[i("template",{slot:"tabPage"},[i("swiper",{ref:"mySwiper",attrs:{options:n.swiperOptions},on:{slideChange:n.slideChange,resize:n.resize,transitionStart:function(t){return n.toggleTransitionChange(!0)},transitionEnd:n.toggleTransitionChange,"hook:mounted":n.initSwiper}},n._l(n.tabContentLayouts,function(t,e){return i("swiper-slide",{key:e,class:[(n.openAllDrag||n.noSwiping)&&n.noSwipingClass]},[i("tab-sub-container",{key:e,class:["sm-component-tab",""+n.activeTabIndex,n.componentId,n.tabSubContainerVisible(e)],attrs:{gridLayout:t,targetName:n.tabPageTargetName,openAllDrag:n.openAllDrag,noSwipingClass:n.noSwipingClass}})],1)}),1)],1)],2),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.noSwiping&&n.showSwiperButton,expression:"!noSwiping && showSwiperButton"}],class:["swiper-button-prev"],style:n.swiperBtnStyle,attrs:{id:n.componentId+"-prev"}},[i("sm-icon",{attrs:{type:"left"}})],1),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.noSwiping&&n.showSwiperButton,expression:"!noSwiping && showSwiperButton"}],class:["swiper-button-next"],style:n.swiperBtnStyle,attrs:{id:n.componentId+"-next"}},[i("sm-icon",{attrs:{type:"right"}})],1)],1)],1)},[],!1,null,null,null);e.default=s.exports},FWjQ:function(t,e,n){"use strict";n("9Mfk")}}]);