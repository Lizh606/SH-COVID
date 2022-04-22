import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Welcome from "@/views/Welcome.vue";
import animation from "@/views/animation.vue";

import daping from "@/views/daping.vue";
import layout from "@/layout/layout.vue";
import TopicMake from "@/components/TopicMake/Topic.vue";
import TianDiTu from "@/components/tdtMap/TianDiTu.vue";
import Popup from "@/components/tdtMap/Popup.vue";
import echarts from '@/views/Echarts.vue'
import text from '@/views/text'
const menuRoutes =  [
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
        path: "/animation",
        name: "animation",
        component: animation,
        meta: {
          title: "照片墙",
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
        path: "/yqData",
        name: "yqData",
        component: (resolve) => require(["@/views/yqData.vue"], resolve),
        meta: {
          title: "疫情",
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
      {
        path: "/Echarts",
        name: "Echarts",
        component: echarts,
        meta: {
          title: "Echarts",
        },
      },
      {
        path: "/text",
        name: "text",
        component: text,
        meta: {
          title: "text",
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
  {
    path: "/TopicMake",
    name: "TopicMake",
    component: TopicMake,
    meta: {
      title: "专题制图",
    },
  },
];
export default menuRoutes;
