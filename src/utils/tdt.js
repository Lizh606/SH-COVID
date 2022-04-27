import axios from 'axios'

export const service = axios.create({
  baseURL: 'http://api.tianditu.gov.cn',
  timeout: 10000
})

