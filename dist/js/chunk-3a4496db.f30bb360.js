(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a4496db"],{"25f0":function(e,t,r){"use strict";var n=r("e330"),a=r("5e77").PROPER,i=r("6eeb"),o=r("825a"),c=r("3a9b"),s=r("577e"),u=r("d039"),l=r("ad6d"),d="toString",f=RegExp.prototype,p=f[d],g=n(l),m=u((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=a&&p.name!=d;(m||h)&&i(RegExp.prototype,d,(function(){var e=o(this),t=s(e.source),r=e.flags,n=s(void 0===r&&c(f,e)&&!("flags"in f)?g(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"2c3e":function(e,t,r){var n=r("da84"),a=r("83ab"),i=r("9f7f").MISSED_STICKY,o=r("c6b6"),c=r("9bf2").f,s=r("69f3").get,u=RegExp.prototype,l=n.TypeError;a&&i&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"466d":function(e,t,r){"use strict";var n=r("c65b"),a=r("d784"),i=r("825a"),o=r("50c4"),c=r("577e"),s=r("1d80"),u=r("dc4a"),l=r("8aa5"),d=r("14c3");a("match",(function(e,t,r){return[function(t){var r=s(this),a=void 0==t?void 0:u(t,e);return a?n(a,t,r):new RegExp(t)[e](c(r))},function(e){var n=i(this),a=c(e),s=r(t,n,a);if(s.done)return s.value;if(!n.global)return d(n,a);var u=n.unicode;n.lastIndex=0;var f,p=[],g=0;while(null!==(f=d(n,a))){var m=c(f[0]);p[g]=m,""===m&&(n.lastIndex=l(a,o(n.lastIndex),u)),g++}return 0===g?null:p}]}))},"498a":function(e,t,r){"use strict";var n=r("23e7"),a=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},"4d63":function(e,t,r){var n=r("83ab"),a=r("da84"),i=r("e330"),o=r("94ca"),c=r("7156"),s=r("9112"),u=r("9bf2").f,l=r("241c").f,d=r("3a9b"),f=r("44e7"),p=r("577e"),g=r("ad6d"),m=r("9f7f"),h=r("6eeb"),b=r("d039"),v=r("1a2d"),w=r("69f3").enforce,x=r("2626"),k=r("b622"),y=r("fce3"),E=r("107c"),R=k("match"),C=a.RegExp,I=C.prototype,V=a.SyntaxError,O=i(g),S=i(I.exec),_=i("".charAt),P=i("".replace),j=i("".indexOf),q=i("".slice),$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,A=/a/g,D=new C(T)!==T,F=m.MISSED_STICKY,U=m.UNSUPPORTED_Y,L=n&&(!D||F||y||E||b((function(){return A[R]=!1,C(T)!=T||C(A)==A||"/a/i"!=C(T,"i")}))),M=function(e){for(var t,r=e.length,n=0,a="",i=!1;n<=r;n++)t=_(e,n),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),a+=t):a+="[\\s\\S]":a+=t+_(e,++n);return a},Y=function(e){for(var t,r=e.length,n=0,a="",i=[],o={},c=!1,s=!1,u=0,l="";n<=r;n++){if(t=_(e,n),"\\"===t)t+=_(e,++n);else if("]"===t)c=!1;else if(!c)switch(!0){case"["===t:c=!0;break;case"("===t:S($,q(e,n+1))&&(n+=2,s=!0),a+=t,u++;continue;case">"===t&&s:if(""===l||v(o,l))throw new V("Invalid capture group name");o[l]=!0,i[i.length]=[l,u],s=!1,l="";continue}s?l+=t:a+=t}return[a,i]};if(o("RegExp",L)){for(var B=function(e,t){var r,n,a,i,o,u,l=d(I,this),g=f(e),m=void 0===t,h=[],b=e;if(!l&&g&&m&&e.constructor===B)return e;if((g||d(I,e))&&(e=e.source,m&&(t="flags"in b?b.flags:O(b))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),b=e,y&&"dotAll"in T&&(n=!!t&&j(t,"s")>-1,n&&(t=P(t,/s/g,""))),r=t,F&&"sticky"in T&&(a=!!t&&j(t,"y")>-1,a&&U&&(t=P(t,/y/g,""))),E&&(i=Y(e),e=i[0],h=i[1]),o=c(C(e,t),l?this:I,B),(n||a||h.length)&&(u=w(o),n&&(u.dotAll=!0,u.raw=B(M(e),r)),a&&(u.sticky=!0),h.length&&(u.groups=h)),e!==b)try{s(o,"source",""===b?"(?:)":b)}catch(v){}return o},J=function(e){e in B||u(B,e,{configurable:!0,get:function(){return C[e]},set:function(t){C[e]=t}})},K=l(C),N=0;K.length>N;)J(K[N++]);I.constructor=B,B.prototype=I,h(a,"RegExp",B)}x("RegExp")},"73cf":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-In"},[r("div",{staticClass:"sign-content"},[r("div",{staticClass:"signIn-left"}),r("div",{staticClass:"signIn-right"},[r("div",{staticClass:"sign-qr-code"}),e._m(0),r("div",{staticClass:"sign-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("Form",{ref:"formValidate",attrs:{id:"form",model:e.formValidate,rules:e.ruleValidate}},[r("FormItem",{attrs:{label:"用户名",prop:"user"}},[r("i-input",{attrs:{id:"user",type:"text",placeholder:"请输入用户名"},model:{value:e.formValidate.user,callback:function(t){e.$set(e.formValidate,"user",t)},expression:"formValidate.user"}})],1),r("FormItem",{attrs:{label:"密码",prop:"password"}},[r("i-input",{attrs:{id:"password",type:"password",placeholder:"请输入密码"},model:{value:e.formValidate.password,callback:function(t){e.$set(e.formValidate,"password",t)},expression:"formValidate.password"}})],1),r("FormItem",{attrs:{label:"昵称",prop:"realname"}},[r("i-input",{attrs:{id:"realname",placeholder:"请输入昵称"},model:{value:e.formValidate.realname,callback:function(t){e.$set(e.formValidate,"realname",t)},expression:"formValidate.realname"}})],1),r("FormItem",[r("Button",{staticClass:"form-buttom",attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("注册")])],1)],1),r("div",{staticClass:"login",attrs:{type:"‘button’"},on:{click:e.ToLogin}},[e._v("立即登录")])],1)])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-title"},[e._v(" 上海市新冠疫情COVID-19"),r("br"),e._v("动态分布可视化系统 ")])}],i=r("1da1"),o=(r("96cf"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("498a"),r("7ded")),c={name:"Login",data:function(){return{loading:!1,formValidate:{user:"",password:"",realname:""},ruleValidate:{user:[{required:!0,message:"用户名不能为空",trigger:"blur"},{trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{type:"string",min:6,message:"密码不能少于6位",trigger:"blur"}],realname:[{required:!0,message:"昵称不能为空",trigger:"blur"},{trigger:"blur"}]}}},mounted:function(){},methods:{setCookie:function(e,t,r){var n=new Date;n.setDate(n.getDate()+r),document.cookie=e+"="+t+";expires="+n},getCookie:function(e){var t=RegExp(e+"=([^;]+)"),r=document.cookie.match(t);return r?r[1]:""},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.loading=!0,n=t.formValidate.user.trim(),a=t.formValidate.password,c=t.formValidate.realname.trim(),t.$refs[e].validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.prev=1,e.next=4,Object(o["d"])({username:n,password:a,retypedPassword:a,nickName:c,email:a+"@qq.com",imgUrl:"https://5fou.com/i/2022/04/29/x6feaf.jpeg"});case 4:i=e.sent,t.loading=!1,i.username?(t.$store.commit("set_token",i.token),t.setCookie("user",n,7),t.setCookie("password",a,7),t.$router.push("/animation")):alert("用户名已存在"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),alert("请求失败");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return r.stop()}}),r)})))()},ToLogin:function(){this.$router.push("/")}}},s=c,u=(r("b1c2"),r("2877")),l=Object(u["a"])(s,n,a,!1,null,"9cdf87b8",null);t["default"]=l.exports},7707:function(e,t,r){},"7ded":function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return s}));var n=r("a27e"),a=r("b775");function i(e){return Object(n["b"])("/user/login","登录",e)}function o(e){return Object(n["b"])("/user-profile","注册",e)}function c(){return Object(n["a"])("/user/profile","获取用户信息")}function s(e,t){return Object(a["a"])({url:"/user-profile/".concat(e),method:"PATCH",data:t})}},a27e:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));r("d3b7"),r("d9e2");var n=r("b775"),a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"未知服务",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return new Promise((function(i,o){e({url:t,method:"get",params:n,showErrorMessage:a}).then((function(e){i(e.data)})).catch((function(e){throw o(e),new Error("请求---".concat(r,"---接口失败"))}))}))},i=function(e,t,r,i){return a(n["a"],e,t,r,i)},o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"未知服务",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=arguments.length>6?arguments[6]:void 0;return new Promise((function(c,s){e({url:t,method:"post",data:n,headers:a,withCredentials:i,onUploadProgress:o}).then((function(e){c(e.data)})).catch((function(e){throw s(e),new Error("请求---".concat(r,"---接口失败"))}))}))},c=function(e,t,r,a,i){return o(n["a"],e,t,r,a,!0,i)}},b1c2:function(e,t,r){"use strict";r("7707")},b775:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("d3b7");var n=r("bc3a"),a=r.n(n),i=r("4360"),o=r("65fb");console.log("/prod-api");var c=a.a.create({baseURL:"/prod-api",timeout:1e4});c.interceptors.request.use((function(e){return window.localStorage.getItem("token")&&(e.headers.Authorization="Bearer ".concat(i["a"].getters.get_token),Object(o["a"])()&&i["a"].dispatch("logout")),e}),(function(e){return Promise.reject(e)}))},c607:function(e,t,r){var n=r("da84"),a=r("83ab"),i=r("fce3"),o=r("c6b6"),c=r("9bf2").f,s=r("69f3").get,u=RegExp.prototype,l=n.TypeError;a&&i&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},c8d2:function(e,t,r){var n=r("5e77").PROPER,a=r("d039"),i=r("5899"),o="​᠎";e.exports=function(e){return a((function(){return!!i[e]()||o[e]()!==o||n&&i[e].name!==e}))}}}]);