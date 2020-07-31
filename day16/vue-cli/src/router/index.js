import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import shoplist from '@/components/shoplist'
import ceshi from '@/components/测试'

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
    ,
    {
      path:"/ceshi",
      name:"ceshi",
      component:ceshi
    }
  ]
})
