(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{KTZg:function(t,n,e){"use strict";e.r(n);var s=e("zT9C"),o=e.n(s),i=e("3Dh3"),s={props:{component:{type:Object,required:!0},defaultParams:{type:Object}},data:function(){return{componentId:null,listens:{}}},watch:{component:{handler:function(){this.componentId=Object(i.d)(this.component.uri)},deep:!0,immediate:!0}},created:function(){this.listens={"viewer-position-changed":this.positionChanged,"scan-position-changed":this.scanPositionChanged}},methods:{positionChanged:function(t){this.changeWebScenePosition("position",t)},scanPositionChanged:function(t){this.changeWebScenePosition("centerPostion",t)},changeWebScenePosition:function(t,n){var e=o()(this.component.propDatas);e&&this.$store.getters.activeComponentId&&("position"===t?(e.options[t]={},this.$set(e.options,t,JSON.parse(JSON.stringify(n)))):(e.options.scanEffect[t]={},this.$set(e.options.scanEffect,t,JSON.parse(JSON.stringify(n)))),this.$store.dispatch("CHANGE_COMPONENT_PROPS_SETTING",{componentId:this.$store.getters.activeComponentId,propDatas:e}))}}},e=e("KHd+"),s=Object(e.a)(s,function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[n("div",{staticClass:"webscene-mask"}),t._v(" "),n(t.componentId,t._g(t._b({tag:"component",style:t.defaultParams.style,attrs:{cesiumPath:"./libs/Cesium/Cesium.js"}},"component",t.defaultParams.props,!1),t.listens))],1)},[],!1,null,null,null);n.default=s.exports}}]);