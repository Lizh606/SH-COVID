import {service1} from '@/utils/request'

export const YQPathData = () => {
  return service1({
    //   默认 get请求
    url: '/data.json'
  })
}
