import axios from "axios";
import store from "@/store/index.js";
import isCheckTimeout from "./checkTimeout";

export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }
    return config; // 必须返回配置
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 判断是否存在token,如果存在将每个页面header添加token
    if (window.localStorage.getItem("token")) {
      config.headers.common["Access-Token"] =
        window.localStorage.getItem("token");
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

