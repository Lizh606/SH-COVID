import {YQservice} from '@/utils/YQrequest'

export const YQPathData = () => {
  return YQservice({
    //   默认 get请求
    url: '/shyq.json'
  })
}
