import axios from "axios";

export const YQservice = axios.create({
  timeout: 10000,
});
// 请求拦截器
YQservice.interceptors.request.use(
  (config) => {
    return config; // 必须返回配置
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
YQservice.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
