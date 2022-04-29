import Vue from "vue";
import store from "@/store/index.js";
import storage from "@/store/storage.js";
import { Message } from 'view-design'


import Router from "vue-router";
import VueRouter from "vue-router";

import menuRoutes from "./menuRouter.js";
import isCheckTimeout from '../utils/checkTimeout.js'
Vue.use(Router);


const routes = menuRoutes;
const router = new VueRouter({
  routes,
});


router.beforeEach((to, from, next) => {
  // 如果token过期了
  console.log(storage.get("token"));
  if (storage.get("token") === null) {
    if (to.path == '/' || to.path == '/register') {
      next()
    } else {
      next("/")
    }
  } else {
    if (to.path == '/' || to.path == '/register') {
      next('/daping')
    } else {
      next()
    }
    if (isCheckTimeout()) {
      store.dispatch("logout");

      Message.error("登录状态过期，请重新登录")
      return Promise.reject(new Error('token 失效'))
      }
   return
  }
});

export default router;
