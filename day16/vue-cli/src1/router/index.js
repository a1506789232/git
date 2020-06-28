import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import shoplist from '@/components/shoplist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path:"/shoplist",
      name:"shoplist",
      component:shoplist
    }
  ]
})
