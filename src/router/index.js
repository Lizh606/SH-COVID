import Vue from "vue";
import store from "@/store/index.js";
import storage from "@/store/storage.js";
import { Message } from 'view-design'


import Router from "vue-router";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Welcome from "@/views/Welcome.vue";
import daping from "@/views/daping.vue";
import layout from "@/layout/layout.vue";
import TopicMake from "@/components/TopicMake/Topic.vue";
import TianDiTu from "@/components/tdtMap/TianDiTu.vue";
import Popup from "@/components/tdtMap/Popup.vue";
import echarts from '@/views/Echarts.vue'
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
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("token");
  // 如果token过期了
  if (!token) {
    if (to.path == '/' || to.path == '/register') return next()
    // 注意要import element的Message组件
    // this.alert.error("登录状态过期，请重新登录")
    Message.error("登录状态过期，请重新登录")
    // return next('/register')
    // 如果token没有过期，又是选择了登录页面就直接重定向到首页，不需要重新输入账户密码
  } else if (to.path == '/') {
    return next('/daping')
  }
  next()
});

export default router;
