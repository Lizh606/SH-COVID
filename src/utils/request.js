import axios from 'axios'
import store from  '@/store/index.js'

import HttpRequest from './httpRequest'

// export const service = new HttpRequest({
//   BASEURL 

// })
export const service = axios.create({
  baseURL : '/api',
  timeout : 10000
})
export const service1 = axios.create({
  // baseURL : 'https://www.fastmock.site/mock/d8a22c448e54d3639cd5f3cddb75a94c',
  timeout : 10000
})
service.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 请求拦截器
service1.interceptors.request.use(
  (config) => {

    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service1.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {

    console.log(error);
  }
)
/**
 * get方法
 * @param {String} url [请求的url地址]
 * @param {String} serviceName [请求服务名和服务描述(和swagger对应)]
 * @param {Object} params [请求时携带的参数] (可选)
 * @param {Boolean} showErrorMessage [是否需要错误信息提示 iview.message]
 */
 const get = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  showErrorMessage = true
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "get",
      params,
      showErrorMessage
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};
export const GET = (url, serviceName, params, showErrorMessage) => {
  return get(service, url, serviceName, params, showErrorMessage);
};

/**
 * post方法
 * @param {String} url [请求的url地址]
 * @param {String} serviceName [请求服务名和服务描述(和swagger对应)]
 * @param {Object} params [请求时携带的参数] (可选)
 * @param {Object} headers [请求时的请求头信息] （可选）
 */

 const post = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  headers = {},
  withCredentials = true,
  onUploadProgress
) => {
  // console.log(params);
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "post",
      // data: qs.stringify(params)
      data: params,
      headers: headers,
      withCredentials,
      onUploadProgress: onUploadProgress
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};

// 基础post请求
export const POST = (url, serviceName, params, headers, onUploadProgress) => {
  return post(
    service,
    url,
    serviceName,
    params,
    headers,
    true,
    onUploadProgress
  );
};
