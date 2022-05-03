import { service } from '@/utils/tdt.js'
export const tdtAdministrative = (data) => {
  return service({
    url: '/administrative',
    params: data
  })
}
export const publicTransportPlanning = (data) => {
    return service({
      url: '/transit',
      params: data
    })
  }
  export const getCoordinate = (data) => {
    return service({
      url: '/geocoder',
      params: data
    })
  }
  export const getSearch = (data) => {
    return service({
      url: '/search',
      params: data
    })
  }
  //周边搜索
  // http://api.tianditu.gov.cn/v2/search?postStr={"keyWord":"公园","level":12,"queryRadius":5000,"pointLonlat":"116.48016,39.93136","queryType":3,"start":0,"count":10}&type=query&tk=您的密钥
  export const queryExtent = (data) => {
    return service({
      url: '/v2/search',
      params: data
    })
  }