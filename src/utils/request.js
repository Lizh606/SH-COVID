import axios from "axios";
import store from "@/store/index.js";
import isCheckTimeout from "./checkTimeout";
export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});


// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 判断是否存在token,如果存在将每个页面header添加token
    if (window.localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${store.getters.get_token}`

      if (isCheckTimeout()) {
        store.dispatch("logout");
      }
    }

    return config; // 必须返回配置
  },
  (error) => {
    return Promise.reject(error);
  }
);

