(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{EBC7:function(e,t,n){"use strict";n.r(t);var r=n("oCYn"),o=n("3Dh3"),a=n("zT9C"),s=n.n(a),a=n("XaGS"),p=n.n(a),c=n("GSdF"),i=n("FuRH"),a={props:{component:{type:Object,required:!0},defaultParams:{type:Object}},data:function(){return{componentId:null,renderProps:null}},computed:{background:function(){return-1!==this.excludeComponentsBackground.indexOf(this.component.componentType)?{}:Object(c.a)(this.component.propDatas)},subComponentList:function(){var e=this.$store.getters.components;return Object.values(e.mapSubComponent).map(function(e){return e.type})},excludeComponentsBackground:function(){return this.subComponentList.concat("Container")},mapsOnScreen:function(){return this.$store.getters.mapsOnScreen()},firstMapTarget:function(){return(this.$store.getters.mapsOnScreen()[0]||{}).value}},watch:{component:{handler:function(){var e=Object(o.d)(this.component.uri);this.componentId=r.default.component(e)?e:null},deep:!0,immediate:!0},"defaultParams.props":{handler:function(e,t){p()(e,t)||(this.renderProps=s()(this.defaultParams.props),-1===this.excludeComponentsBackground.indexOf(this.component.componentType)&&(this.renderProps.background=""),-1!==["LiquidFill","TimeRange"].indexOf(this.component.componentType)&&(this.renderProps.backgroundColor=this.renderProps.backgroundColorReplacer,delete this.renderProps.backgroundColorReplacer))},immediate:!0},mapsOnScreen:function(e,t){p()(e,t)||this.renderProps.mapTarget&&!i.a.$options.getMap(this.renderProps.mapTarget)&&(this.renderProps.mapTarget=this.firstMapTarget)}},created:function(){this.setDefaultMapTarget()},methods:{setDefaultMapTarget:function(){this.renderProps&&this.renderProps.hasOwnProperty("mapTarget")&&!this.renderProps.mapTarget&&(this.renderProps.mapTarget=this.getRelatedMapTarget())},getRelatedMapTarget:function(){var e=this.$store.getters,t=e.componentsOnScreen,n=e.gridLayout.content,e=e.activeComponentId;return Object(o.h)(t,n||[],e)}}},n=n("KHd+"),a=Object(n.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{style:e.background},[t(e.componentId,e._b({tag:"component",style:e.defaultParams.style,attrs:{componentId:e.component.componentId}},"component",e.renderProps,!1))],1)},[],!1,null,null,null);t.default=a.exports}}]);