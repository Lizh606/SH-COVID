import request from '@/utils/request'

export const typhoonPathData = () => {
  return request({
    //   默认 get请求
    url: '/data.json'
  })
}
