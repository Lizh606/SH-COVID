import { POST } from '@/utils/axios.js'
import { GET } from '@/utils/axios.js'

import { service } from '@/utils/request.js'

export function login(param) {
  return POST(`/user/login`, '登录', param)
}
export function logintext() {
  return GET(`/user/login-test`, '测试')
}
//注册
export function register(param) {
  return POST(`/user-profile`, '注册', param)
}
//获取用户信息
export function getUserInfo() {
  return GET(`/user/profile`, '获取用户信息')
}
//修改用户信息
export function changeUserinfo(id, data) {
  return service({
    url: `/user-profile/${id}`,
    method: 'PATCH',
    data
  })
}
