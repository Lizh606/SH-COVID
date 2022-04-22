import {YQservice} from '@/utils/YQrequest'

export const YQPathData = () => {
  return YQservice({
    //   默认 get请求
    url: '/YQ_JSON/shyq.json'
  })
}
export const YQDatePathData = () => {
  return YQservice({
    //   默认 get请求
    url: '/YQ_JSON/上海增涨趋势.json'
  })
}