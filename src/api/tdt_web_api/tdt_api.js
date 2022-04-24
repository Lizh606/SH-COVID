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
  