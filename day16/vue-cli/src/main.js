// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// 请求拦截器
axios.interceptors.request.use((config)=>{
  //请求时显示
  store.state.isLoading = true
  return config
})
//响应拦截器
axios.interceptors.response.use((res)=>{
  //响应式隐藏
  store.state.isLoading = false
    return res
})

Vue.prototype.$axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
