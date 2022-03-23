import Vue from 'vue';
import vuex from 'vuex';
import storage from './storage'
Vue.use(vuex);
export default new vuex.Store({
  /**公共数据存放区**/
  state: {
    token:"",
    userName:"" ,// 可选,
  },
  /**修改数据要通过的mutations**/
  mutations: {
    set_token(state,token) {
      state.token = token;
      storage.set('token', token);
      console.log('store、localstorage保存token成功！');
    },
    del_token(state) {
      state.token = "";
      storage.remove("token");
    },
    // 可选
    setUserInfo(state, userName) {
      state.userName = userName;
      storage.set('userName', userName);
      console.log('store、localstorage保存username成功！');
    }
  },
  /**获取数据可以用上的getters**/
  getters:{
    get_token(state){
      return state.token || storage.get("token") || null;
    }
  },
  
  /**异步处理可能用上的actions**/
  actions: {},
});
