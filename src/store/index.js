import Vue from 'vue'
import vuex from 'vuex'
import storage from './storage'
import router from '@/router'
Vue.use(vuex)
export default new vuex.Store({
  /**公共数据存放区**/
  state: {
    token: '',
    userName:'',
    nickName: '', // 可选,
    imgUrl: '',
    TimeStamp: '',
    scale: '',
    id:'',
    featureLayer:null
   
  },
  /**修改数据要通过的mutations**/
  mutations: {
    set_token(state, token) {
      state.token = token
      storage.set('token', token)
      // console.log('store、localstorage保存token成功！')
    },
    setfeatureLayer(state, featureLayer) {
      state.featureLayer = featureLayer
      storage.set('featureLayer', featureLayer)
      // console.log('store、localstorage保存featureLayer成功！')
    },
    del_token(state) {
      state.token = ''
      storage.remove('token')
    },
    setuserid(state, id) {
      state.id = id
      storage.set('id', id)
      // console.log('store、localstorage保存id成功！')
    },
    setuserName(state, userName) {
      state.userName = userName
      storage.set('userName', userName)
      // console.log('store、localstorage保存username成功！')
    },
    // 可选
    setnickName(state, nickName) {
      state.nickName = nickName
      storage.set('nickName', nickName)
      // console.log('store、localstorage保存nickName成功！')
    },
    setUserImg(state, imgUrl) {
      state.userName = imgUrl
      storage.set('imgUrl', imgUrl)
      // console.log('store、localstorage保存imgUrl成功！')
    },
    //时间戳
    set_TimeStamp(state, TimeStamp) {
      state.TimeStamp = TimeStamp
      storage.set('TimeStamp', TimeStamp)
    },
    //比例尺
    set_scale(state, scale) {
      state.scale = scale
      storage.set('scale', scale)
    }
  },
  /**获取数据可以用上的getters**/
  getters: {
    get_token(state) {
      return state.token || storage.get('token') || null
    },
    id(state) {
      return state.id || storage.get('id') || null
    },
    nickName(state) {
      return state.nickName || storage.get('nickName') || null
    },
    userName(state) {
      return state.userName || storage.get('userName') || null
    },
    imgUrl(state) {
      return state.imgUrl || storage.get('imgUrl') || null
    },
    featureLayer(state) {
      return state.featureLayer || storage.get('featureLayer') || null
    }
  },

  /**异步处理可能用上的actions**/
  actions: {
    logout() {
      this.commit('del_token', '')
      storage.removeAll()
      router.push('/')
    }
  }
})
