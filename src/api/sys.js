import {YQservice} from '@/utils/YQrequest'

export const YQPathData = () => {
  return YQservice({
    //   默认 get请求
    url: '/shyq.json'
  })
}
export const YQDatePathData = () => {
  return YQservice({
    //   默认 get请求
    url: '/上海增涨趋势.json'
  })
}