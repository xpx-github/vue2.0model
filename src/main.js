// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  引入element-ui
import ElementUI from 'element-ui'
//  引入 element-ui 样式文件
import 'element-ui/lib/theme-chalk/index.css'
//  引入font-awsome
import './assets/font-awesome/css/font-awesome.css'
//放入公共的样式，例如对element-ui组件的全局修改
import './assets/index.css';

//  引入vuex
import store from './store/store'
//  引入axios
import axios from 'axios'
// 引入Echarsts
import echarts from 'echarts'
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://192.168.1.98:8881/'
//  挂载axios到vue原型上
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
