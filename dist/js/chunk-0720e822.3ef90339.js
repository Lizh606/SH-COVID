(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0720e822"],{1875:function(e,t,r){"use strict";r("4833")},"25f0":function(e,t,r){"use strict";var n=r("e330"),o=r("5e77").PROPER,i=r("6eeb"),a=r("825a"),s=r("3a9b"),c=r("577e"),u=r("d039"),d=r("ad6d"),l="toString",f=RegExp.prototype,m=f[l],g=n(d),p=u((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),h=o&&m.name!=l;(p||h)&&i(RegExp.prototype,l,(function(){var e=a(this),t=c(e.source),r=e.flags,n=c(void 0===r&&s(f,e)&&!("flags"in f)?g(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"2c3e":function(e,t,r){var n=r("da84"),o=r("83ab"),i=r("9f7f").MISSED_STICKY,a=r("c6b6"),s=r("9bf2").f,c=r("69f3").get,u=RegExp.prototype,d=n.TypeError;o&&i&&s(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!c(this).sticky;throw d("Incompatible receiver, RegExp required")}}})},"466d":function(e,t,r){"use strict";var n=r("c65b"),o=r("d784"),i=r("825a"),a=r("50c4"),s=r("577e"),c=r("1d80"),u=r("dc4a"),d=r("8aa5"),l=r("14c3");o("match",(function(e,t,r){return[function(t){var r=c(this),o=void 0==t?void 0:u(t,e);return o?n(o,t,r):new RegExp(t)[e](s(r))},function(e){var n=i(this),o=s(e),c=r(t,n,o);if(c.done)return c.value;if(!n.global)return l(n,o);var u=n.unicode;n.lastIndex=0;var f,m=[],g=0;while(null!==(f=l(n,o))){var p=s(f[0]);m[g]=p,""===p&&(n.lastIndex=d(o,a(n.lastIndex),u)),g++}return 0===g?null:m}]}))},4833:function(e,t,r){},"498a":function(e,t,r){"use strict";var n=r("23e7"),o=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},"4d63":function(e,t,r){var n=r("83ab"),o=r("da84"),i=r("e330"),a=r("94ca"),s=r("7156"),c=r("9112"),u=r("9bf2").f,d=r("241c").f,l=r("3a9b"),f=r("44e7"),m=r("577e"),g=r("ad6d"),p=r("9f7f"),h=r("6eeb"),v=r("d039"),b=r("1a2d"),w=r("69f3").enforce,k=r("2626"),x=r("b622"),C=r("fce3"),y=r("107c"),E=x("match"),R=o.RegExp,V=R.prototype,P=o.SyntaxError,I=i(g),O=i(V.exec),S=i("".charAt),_=i("".replace),$=i("".indexOf),j=i("".slice),T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,A=/a/g,q=new R(D)!==D,U=p.MISSED_STICKY,F=p.UNSUPPORTED_Y,N=n&&(!q||U||C||y||v((function(){return A[E]=!1,R(D)!=D||R(A)==A||"/a/i"!=R(D,"i")}))),M=function(e){for(var t,r=e.length,n=0,o="",i=!1;n<=r;n++)t=S(e,n),"\\"!==t?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+S(e,++n);return o},Y=function(e){for(var t,r=e.length,n=0,o="",i=[],a={},s=!1,c=!1,u=0,d="";n<=r;n++){if(t=S(e,n),"\\"===t)t+=S(e,++n);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:O(T,j(e,n+1))&&(n+=2,c=!0),o+=t,u++;continue;case">"===t&&c:if(""===d||b(a,d))throw new P("Invalid capture group name");a[d]=!0,i[i.length]=[d,u],c=!1,d="";continue}c?d+=t:o+=t}return[o,i]};if(a("RegExp",N)){for(var B=function(e,t){var r,n,o,i,a,u,d=l(V,this),g=f(e),p=void 0===t,h=[],v=e;if(!d&&g&&p&&e.constructor===B)return e;if((g||l(V,e))&&(e=e.source,p&&(t="flags"in v?v.flags:I(v))),e=void 0===e?"":m(e),t=void 0===t?"":m(t),v=e,C&&"dotAll"in D&&(n=!!t&&$(t,"s")>-1,n&&(t=_(t,/s/g,""))),r=t,U&&"sticky"in D&&(o=!!t&&$(t,"y")>-1,o&&F&&(t=_(t,/y/g,""))),y&&(i=Y(e),e=i[0],h=i[1]),a=s(R(e,t),d?this:V,B),(n||o||h.length)&&(u=w(a),n&&(u.dotAll=!0,u.raw=B(M(e),r)),o&&(u.sticky=!0),h.length&&(u.groups=h)),e!==v)try{c(a,"source",""===v?"(?:)":v)}catch(b){}return a},J=function(e){e in B||u(B,e,{configurable:!0,get:function(){return R[e]},set:function(t){R[e]=t}})},K=d(R),L=0;K.length>L;)J(K[L++]);V.constructor=B,B.prototype=V,h(o,"RegExp",B)}k("RegExp")},"7ded":function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c}));var n=r("a27e"),o=r("b775");function i(e){return Object(n["b"])("/user/login","登录",e)}function a(e){return Object(n["b"])("/user-profile","注册",e)}function s(){return Object(n["a"])("/user/profile","获取用户信息")}function c(e,t){return Object(o["a"])({url:"/user-profile/".concat(e),method:"PATCH",data:t})}},a27e:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));r("d3b7"),r("d9e2");var n=r("b775"),o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"未知服务",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return new Promise((function(i,a){e({url:t,method:"get",params:n,showErrorMessage:o}).then((function(e){i(e.data)})).catch((function(e){throw a(e),new Error("请求---".concat(r,"---接口失败"))}))}))},i=function(e,t,r,i){return o(n["a"],e,t,r,i)},a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"未知服务",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=arguments.length>6?arguments[6]:void 0;return new Promise((function(s,c){e({url:t,method:"post",data:n,headers:o,withCredentials:i,onUploadProgress:a}).then((function(e){s(e.data)})).catch((function(e){throw c(e),new Error("请求---".concat(r,"---接口失败"))}))}))},s=function(e,t,r,o,i){return a(n["a"],e,t,r,o,!0,i)}},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-In"},[r("div",{staticClass:"sign-content"},[r("div",{staticClass:"signIn-left"}),r("div",{staticClass:"signIn-right"},[r("div",{staticClass:"sign-qr-code"}),e._m(0),r("div",{staticClass:"sign-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("Form",{ref:"formValidate",attrs:{id:"form",model:e.formValidate,rules:e.ruleValidate}},[r("FormItem",{attrs:{label:"用户名",prop:"user"}},[r("i-input",{attrs:{id:"user",type:"text",placeholder:"请输入用户名"},model:{value:e.formValidate.user,callback:function(t){e.$set(e.formValidate,"user",t)},expression:"formValidate.user"}})],1),r("FormItem",{attrs:{label:"密码",prop:"password"}},[r("i-input",{attrs:{id:"password",type:"password",placeholder:"请输入密码"},model:{value:e.formValidate.password,callback:function(t){e.$set(e.formValidate,"password",t)},expression:"formValidate.password"}})],1),r("FormItem",[r("CheckboxGroup",[r("Checkbox",{attrs:{label:"记住密码",id:"remeberPwd"},nativeOn:{click:function(t){return e.change()}},model:{value:e.formValidate.savePwd,callback:function(t){e.$set(e.formValidate,"savePwd",t)},expression:"formValidate.savePwd"}})],1)],1),r("FormItem",[r("Button",{staticClass:"form-buttom",attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("登录")])],1)],1),r("div",{staticClass:"register",attrs:{type:"‘button’"},on:{click:e.ToRegister}},[e._v(" 立即注册 ")])],1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-title"},[e._v(" 上海市新冠疫情COVID-19"),r("br"),e._v("动态分布可视化系统 ")])}],i=r("1da1"),a=(r("96cf"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("498a"),r("7ded")),s={name:"Login",data:function(){return{loading:!1,formValidate:{user:"",savePwd:!1,password:""},ruleValidate:{user:[{required:!0,message:"用户名不能为空",trigger:"blur"},{trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{type:"string",min:6,message:"密码不能少于6位",trigger:"blur"}]}}},created:function(){},mounted:function(){this.getCookie("user")&&this.getCookie("password")&&(this.formValidate.user=this.getCookie("user"),this.formValidate.password=this.getCookie("password"),this.formValidate.savePwd)},methods:{change:function(){console.log(this.formValidate.savePwd),!0===this.formValidate.savePwd?this.formValidate.savePwd:(this.formValidate.savePwd,this.delCookie("user"),this.delCookie("password"))},setCookie:function(e,t,r){var n=new Date;n.setDate(n.getDate()+r),document.cookie=e+"="+t+";expires="+n},getCookie:function(e){var t=RegExp(e+"=([^;]+)"),r=document.cookie.match(t);return r?r[1]:""},delCookie:function(e){this.setCookie(e,null,-1)},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.loading=!0,n=t.formValidate.user.trim(),o=t.formValidate.password,!0===t.formValidate.savePwd?(t.setCookie("user",n,7),t.setCookie("password",o,7)):(t.delCookie("user"),t.delCookie("password")),t.$refs[e].validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=27;break}return e.prev=1,e.next=4,Object(a["c"])({username:n,password:o});case 4:if(i=e.sent,t.loading=!1,!i.token){e.next=21;break}return s=Date.now(),t.$store.commit("set_TimeStamp",s),t.$store.commit("set_token",i.token),e.next=12,Object(a["b"])();case 12:c=e.sent,t.$store.commit("setuserid",c.id),t.$store.commit("setuserName",c.username),t.$store.commit("setnickName",c.nickName),t.$store.commit("setUserImg",c.imgUrl),t.setCookie("realname",c.nickName,7),t.$router.push("/animation"),e.next=22;break;case 21:alert("登陆失败");case 22:e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](1),alert("请求失败");case 27:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return r.stop()}}),r)})))()},ToRegister:function(){this.$router.push("/register")}}},c=s,u=(r("1875"),r("2877")),d=Object(u["a"])(c,n,o,!1,null,"392bd104",null);t["default"]=d.exports},b775:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("d3b7");var n=r("bc3a"),o=r.n(n),i=r("4360"),a=r("65fb");console.log("/prod-api");var s=o.a.create({baseURL:"/prod-api",timeout:1e4});s.interceptors.request.use((function(e){return window.localStorage.getItem("token")&&(e.headers.Authorization="Bearer ".concat(i["a"].getters.get_token),Object(a["a"])()&&i["a"].dispatch("logout")),e}),(function(e){return Promise.reject(e)}))},c607:function(e,t,r){var n=r("da84"),o=r("83ab"),i=r("fce3"),a=r("c6b6"),s=r("9bf2").f,c=r("69f3").get,u=RegExp.prototype,d=n.TypeError;o&&i&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!c(this).dotAll;throw d("Incompatible receiver, RegExp required")}}})},c8d2:function(e,t,r){var n=r("5e77").PROPER,o=r("d039"),i=r("5899"),a="​᠎";e.exports=function(e){return o((function(){return!!i[e]()||a[e]()!==a||n&&i[e].name!==e}))}}}]);