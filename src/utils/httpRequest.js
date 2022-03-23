/*
 * @Author: raojw
 * @Date: 2018-11-23
 * @Description: 构造axios实例类
 */

import axios from "axios";
import iview from "view-design";
import router from "@/router";
// import toQueryUrl from "@/utils/base";
// axios.defaults.withCredentials = true;

/**
 * @class HttpRequest
 * @param {Object} options { BASEURL, TIMEOUT }
 * @description 基于axios二次封装类，提供给不同地址实例使用
 * 目前有三个实例（基础，dataeye，mock），共用一种拦截器
 */
export default class HttpRequest {
  constructor({ BASEURL, TIMEOUT = 60000 * 3 }) {
    this.config = {
      baseURL: BASEURL,
      timeout: TIMEOUT,
      withCredentials: true
    };
    this.instance = axios.create(this.config);
    // 安装拦截器
    this.interceptors();
    return this.instance;
  }
  // 拦截器
  interceptors(instance = this.instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        /* config.withCredentials = true; */ // 存在soe接口调用,此参数不在请求拦截器中设置
        config.crossDomain = true;
        return config;
      },
      error => {
        // 请求失败
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        // console.log(response.headers);
        const { status, config } = response;
        let { showErrorMessage } = config;
        // showErrorMessage 不传，默认展示错误信息
        if (showErrorMessage === undefined) {
          showErrorMessage = true;
        }
        if (status === 200) {
          const { data } = response;
          const { code, status, message, error } = data; // error 兼容soe
          if (!code && !error) {
            // 兼容普通的arcgis rest请求,只有status状态,不存在code和error返回码
            return Promise.resolve(response);
          }
          // 后端约定
          if (code !== 1000) {
            if (code == 2100) {
              iview.Message.warning("登录超时，请重新登录");
              router.push({
                name: "/login"
              });
            } else {
              showErrorMessage && iview.Message.error(`${status} ${message}`);
              return Promise.reject(message);
            }
          }
          if (error) {
            showErrorMessage &&
              iview.Message.error(`${error.code} ${error.message}`);
            return Promise.reject(error.message);
          }
          return Promise.resolve(data);
        } else {
          return showErrorMessage && iview.Message.error(status);
        }
      },
      error => {
        // axios捕获服务器异常
        iview.Message.error(error.message);
        return Promise.reject(error.response);
      }
    );
  }

  getInstance() {
    return this.instance;
  }

  static get(...args) {
    return axios.get(...args);
  }
}
