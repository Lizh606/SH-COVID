import Vue from "vue";
import store from  '@/store/index.js'
import storage from '@/store/storage.js'

import Router from "vue-router";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from '../views/Register.vue'
import Welcome from "../views/Welcome.vue";
import daping from '../views/daping.vue'
import Map from "../plugins/Map.vue";
import layout from "../layout/layout.vue";
import SceneMap from "../plugins/SceneMap.vue";
import Locator from "../plugins/Locator.vue";
import Swapmap from "../plugins/Swapmap.vue";
import Weather from "../plugins/Weather.vue";
import ChangeView from "../plugins/ChangeView.vue";
import FeatureAffect from "../plugins/FeatureAffect.vue";
import TianDiTu from "@/components/tdtMap/TianDiTu.vue";
import Popup from "../plugins/Popup.vue";
import yqData from "../views/yqData.vue"

Vue.use(Router);
const routes = [
  {
    path: "/layout",
    component: layout,
    children: [
      {
        path: "",
        component: Welcome,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/Welcome",
        name: "Welcome",
        component: Welcome,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/Map",
        name: "Map",
        component: Map,
        meta: {
          title: "二维地图",
          icon: "iconfont icon-ditu",
        },
      },
      {
        path: "/SceneMap",
        name: "SceneMap",
        component: SceneMap,
        meta: {
          title: "三维地图",
        },
      },
      {
        path: "/TianDiTu",
        name: "TianDiTu",
        component: TianDiTu,
        meta: {
          title: "天地图",
        },
      },
      {
        path: "/Locator",
        name: "Locator",
        component: Locator,
        meta: {
          title: "定位",
        },
      },
      {
        path: "/Swapmap",
        name: "Swapmap",
        component: Swapmap,
        meta: {
          title: "切换地图",
        },
      },
      {
        path: "/Weather",
        name: "Weather",
        component: Weather,
        meta: {
          title: "天气可视化",
        },
      },
      {
        path: "/yqData",
        name: "yqData",
        component: resolve=>(require(["../views/yqData.vue"],resolve)),
        meta: {
          title: "疫情",
        },
      },
      {
        path: "/FeatureAffect",
        name: "FeatureAffect",
        component: FeatureAffect,
        meta: {
          title: "缓冲区",
        },
      },
      {
        path: "/Popup",
        name: "Popup",
        component: Popup,
        meta: {
          title: "弹窗",
        },
      },
    ],
  },
  {
    path: "/layout",
    component: layout,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: "注册",
    },
  },
  {
    path: "/daping",
    name: "daping",
    component: daping,
    meta: {
      title: "大屏",
    },
  },
];
const router = new VueRouter({
  routes,
});
if (storage.get("token")) {
  store.commit("set_token", storage.get("token"));
}
// router.beforeEach((to, from, next) => {
//   // 判断要去的路由有没有requiresAuth
//   // to.matched.some(r => r.meta.requireAuth) or to.meta.requiresAuth
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next(); //有token,进行request请求，后台还会验证token
//     } else {
//       next({
//         path: "/",
//         // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由，这要进一步在登陆页面判断
//         query: { redirect: to.fullPath }  
//       });
//     }
//   } else {
//     next(); //如果无需token,那么随它去吧
//   }
// });
router.beforeEach((to, from ,next) => {
 if(to.name === 'Login'){
  if (store.state.token){
    next({
      path: "/daping",
    });
  } else{
    next()
  }
   
   
 }
 next()
})

export default router;
