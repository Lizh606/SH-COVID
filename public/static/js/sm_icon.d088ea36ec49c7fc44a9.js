(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{SqLP:function(o,n,t){"use strict";t.r(n),t.d(n,"iconTypes",function(){return r});var s=t("00x4"),e=t("oTir"),i=t("tmJK"),a=t("ghbr"),c=t("qAG6"),r={tabIndex:a.a.number,type:a.a.string.def("info"),component:a.a.any,viewBox:a.a.any,spin:a.a.bool.def(!1),rotate:a.a.number,theme:a.a.oneOf(["filled","outlined","twoTone"]).def("outlined"),twoToneColor:a.a.string,role:a.a.string,iconStyle:a.a.object,iconClass:a.a.string,autoPrefix:a.a.bool.def(!0)},i={name:"SmIcon",defaultComponent:s.default,mixins:[e.a,i.a],props:r,computed:{customIconClass:function(){return this.autoPrefix?"sm-components-icon-"+this.iconClass:this.iconClass},iconProps:function(){return Object(c.p)(this.componentProps,["iconStyle","iconClass","autoPrefix"])}},render:function(o){var n;return n=this.iconClass?o("i",{class:this.customIconClass}):o(this.getComponentInstance(),{props:this.iconProps,attrs:this.$attrs,on:this.componentListeners,scopedSlots:this.$scopedSlots},this.renderChildren()),o("div",{class:"sm-component-icon",style:this.iconStyle},[n])}},t=t("KHd+"),i=Object(t.a)(i,void 0,void 0,!1,null,null,null);n.default=i.exports}}]);