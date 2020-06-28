import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhouce from '@/components/zhouce'
import body from '@/components/body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'zhouce',
      component: zhouce
    },
    {
      path: '/car',
      name: 'car',
      component: car
    }
  ],
  
})
