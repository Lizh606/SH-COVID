import axios from 'axios'

const service = axios.create({
  baseURL : 'https://www.fastmock.site/mock/d8a22c448e54d3639cd5f3cddb75a94c',
  timeout : 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {

    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {

    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
