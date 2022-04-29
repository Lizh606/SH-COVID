import { service } from '@/utils/txYq.js'
import { dateService } from '@/utils/txYq.js'

export const txGet = (data) => {
  return service({
    url: '/list',
    params: data
  })
}
export const txDateGet = (data) => {
  return dateService({
    url: '/list',
    params: data
  })
}
