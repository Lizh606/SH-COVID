(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8f9b"],{"56bf":function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return p}));var r=n("8549"),a=n("89da"),i=n("8016"),c=n("18df"),s=n("f4cc"),u=n("3760"),l=n("bb51");function o(e){return e instanceof u["a"]}function f(e,t,n,f,p){return p(e,t,(function(e,t,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=Object(a["k"])(p))[0]&&null===p[1])return Object(s["u"])(!1);if(Object(a["K"])(p[0]))return p[1]instanceof u["a"]?Object(s["u"])(new i["a"]({parentfeatureset:p[0],relation:n,relationGeom:p[1]})):null===p[1]?Object(s["u"])(new c["a"]({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){let e=null;switch(n){case"esriSpatialRelEnvelopeIntersects":e=Object(l["q"])(Object(r["d"])(p[0]),Object(r["d"])(p[1]));break;case"esriSpatialRelIntersects":e=Object(l["q"])(p[0],p[1]);break;case"esriSpatialRelContains":e=Object(l["c"])(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=Object(l["t"])(p[0],p[1]);break;case"esriSpatialRelWithin":e=Object(l["C"])(p[0],p[1]);break;case"esriSpatialRelTouches":e=Object(l["A"])(p[0],p[1]);break;case"esriSpatialRelCrosses":e=Object(l["d"])(p[0],p[1])}return null!==e?e:Object(s["t"])(new Error("Unrecognised Relationship"))}return Object(a["K"])(p[1])?Object(s["u"])(new i["a"]({parentfeatureset:p[1],relation:n,relationGeom:p[0]})):null===p[1]?Object(s["u"])(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):Object(a["K"])(p[1])?Object(s["u"])(new c["a"]({parentfeatureset:p[1]})):p[1]instanceof u["a"]||null===p[1]?Object(s["u"])(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return f(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return f(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return f(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return f(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return f(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return f(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return f(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(a["k"])(n),Object(a["L"])(n,3,3),o(n[0])&&o(n[1]))return Object(l["w"])(n[0],n[1],Object(a["z"])(n[2]));if(n[0]instanceof u["a"]&&null===n[1])return!1;if(n[1]instanceof u["a"]&&null===n[0])return!1;if(Object(a["K"])(n[0])&&null===n[1])return new c["a"]({parentfeatureset:n[0]});if(Object(a["K"])(n[1])&&null===n[0])return new c["a"]({parentfeatureset:n[1]});if(Object(a["K"])(n[0])&&n[1]instanceof u["a"])return n[0].relate(n[1],Object(a["z"])(n[2]));if(Object(a["K"])(n[1])&&n[0]instanceof u["a"])return n[1].relate(n[0],Object(a["z"])(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}}]);
//# sourceMappingURL=chunk-2d0c8f9b.10d2d443.js.map