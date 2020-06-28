import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../src/router/node_modules/@/components/HelloWorld'
import car from '../../src/router/node_modules/@/components/shoppingcar'
import body from '../../src/router/node_modules/@/components/body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: body
    },
    {
      path: '/car',
      name: 'car',
      component: car
    }
  ],
  
})
