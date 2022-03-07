import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
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
        path: "/ChangeView",
        name: "ChangeView",
        component: ChangeView,
        meta: {
          title: "二维切换三维",
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
    // beforeEnter(to, from, next) {
    //   const { isLogin } = localStorage;
    //   // isLogin ? next({ name: "layout" }) : next();
    // },
  },
  {
    path: "/daping",
    name: "daping",
    component: daping,
    meta: {
      title: "大屏",
    },
    // beforeEnter(to, from, next) {
    //   const { isLogin } = localStorage;
    //   // isLogin ? next({ name: "layout" }) : next();
    // },
  },
];
const router = new VueRouter({
  routes,
});
// const VueRouterPush = Router.prototype.push
// Router.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }
// router.beforeEach((to, from ,next) => {
//   const { isLogin } = localStorage;
//   const { name } = to;
//   const isLoginOrRegister = (name === "layout");
//   (isLogin || isLoginOrRegister) ? next({ name: 'layout'}) : next();
// })
// router.afterEach((to, from) => {
//   window.document.title = to.meta.title;
//   window.document.icon = to.meta.icon;
// });
export default router;
