import { service } from "./request";
// import axios from 'axios'

// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,
//   timeout: 10000,
// });
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
        showErrorMessage,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
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
    return new Promise((resolve, reject) => {
      axiosInstance({
        url,
        method: "post",
        // data: qs.stringify(params)
        data: params,
        headers: headers,
        withCredentials,
        onUploadProgress: onUploadProgress,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
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
  