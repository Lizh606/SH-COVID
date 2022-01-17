import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
export default new vuex.Store({
  /**公共数据存放区**/
  state: {
    baseMap: ['vecLayer', 'cvaLayer'],
  },
  /**修改数据要通过的mutations**/
  mutations: {
    changeBaseMap(state, layernames) {
      state.baseMap = layernames;
    },
    
  },
  /**获取数据可以用上的getters**/
  getters:{
    getBaseMap(state) {
      return state.baseMap;
    },
  },
  
  /**异步处理可能用上的actions**/
  actions: {},
});
