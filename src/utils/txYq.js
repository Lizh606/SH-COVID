import axios from 'axios'

export const service = axios.create({
  baseURL: 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules',
  timeout: 10000
})
export const dateService = axios.create({
    baseURL: 'https://api.inews.qq.com/newsqa/v1/query/pubished/daily',
    timeout: 10000
  })