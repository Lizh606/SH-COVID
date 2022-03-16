import axios from 'axios'

const service = axios.create({
  baseURL : 'https://www.fastmock.site/mock/d8a22c448e54d3639cd5f3cddb75a94c',
  timeout : 10000
})
const service1 = axios.create({
  // baseURL : 'https://www.fastmock.site/mock/d8a22c448e54d3639cd5f3cddb75a94c',
  timeout : 10000
})

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
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    service.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err =>{
      reject(err)
    })
  })
}
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
export  {service}
export  {service1}

