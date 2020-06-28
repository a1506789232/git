import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import baidu from '@/components/baidu'
import haokan from '@/components/haokan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baidu',
      component: baidu
    },
    {
      path: '/haokan',
      name: 'haokan',
      component: haokan
    }
  ],
  
})
