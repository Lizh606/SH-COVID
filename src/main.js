import Vue from 'vue'
import App from './App.vue'
import { Message } from 'view-design'

import router from './router/index'
import store from './store/index'
import less from 'less'
import axios from 'axios'
import * as echarts from 'echarts';

// 全局组件、指令、原型等统一注册
import "./register/index";

//arcgis api
import '@arcgis/core/assets/esri/themes/light/main.css'

//style
import './styles/scss/global.scss'
import '../src/styles/index.less'

import 'default-passive-events'


Vue.config.productionTip = false
Vue.use(less)
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app')
