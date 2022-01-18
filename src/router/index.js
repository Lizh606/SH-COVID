import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
import Map from "../components/Map.vue";
import layout from "../layout/layout.vue";
import SceneMap from "../components/SceneMap.vue";
import Locator from "../plugins/Locator.vue";
import Swapmap from "../plugins/Swapmap.vue";
import Weather from "../plugins/Weather.vue";
import ChangeView from "../plugins/ChangeView.vue";
import FeatureAffect from "../plugins/FeatureAffect.vue";
import TianDiTu from "../components/TianDiTu.vue";
import Welcome from "../layout/Welcome.vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    component: layout,

    children: [
      {
        path: "Map",
        name: "Map",
        component: Map,
        meta: {
          title: "二维地图",
          icon: "iconfont icon-ditu",
        },
      },
      {
        path: "SceneMap",
        name: "SceneMap",
        component: SceneMap,
        meta: {
          title: "三维地图",
        },
      },
      {
        path: "TianDiTu",
        name: "TianDiTu",
        component: TianDiTu,
        meta: {
          title: "天地图",
        },
      },
      {
        path: "Locator",
        name: "Locator",
        component: Locator,
        meta: {
          title: "定位",
        },
      },
      {
        path: "Swapmap",
        name: "Swapmap",
        component: Swapmap,
        meta: {
          title: "切换地图",
        },
      },
      {
        path: "Weather",
        name: "Weather",
        component: Weather,
        meta: {
          title: "切换天气",
        },
      },
      {
        path: "ChangeView",
        name: "ChangeView",
        component: ChangeView,
        meta: {
          title: "二维切换三维",
        },
      },
      {
        path: "FeatureAffect",
        name: "FeatureAffect",
        component: FeatureAffect,
        meta: {
          title: "特征影响",
        },
      },
      {
        path: "Welcome",
        name: "Welcome",
        component: Welcome,
        meta: {
          title: "首页",
        },
      },
      {
        path: "",
        component: Welcome,
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/layout",
    component: layout,
  },
];
const router = new VueRouter({
  routes,
});
router.afterEach((to, from) => {
  window.document.title = to.meta.title;
  window.document.icon = to.meta.icon;
});
export default router;
