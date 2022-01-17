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
      },
      {
        path: "SceneMap",
        name: "SceneMap",
        component: SceneMap,
      },
      {
        path: "TianDiTu",
        name: "TianDiTu",
        component: TianDiTu,
      },
      {
        path: "Locator",
        name: "Locator",
        component: Locator,
      },
      {
        path: "Swapmap",
        name: "Swapmap",
        component: Swapmap,
      },
      {
        path: "Weather",
        name: "Weather",
        component: Weather,
      },
      {
        path: "ChangeView",
        name: "ChangeView",
        component: ChangeView,
      },
      {
        path: "FeatureAffect",
        name: "FeatureAffect",
        component: FeatureAffect,
      },
      {
        path: "",
        component: Map,
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

export default router;
