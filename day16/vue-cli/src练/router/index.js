import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import shoplist from '@/components/shoplist'
import loading from '@/components/loading'

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
    },
    {
      path:"/loading",
      name:"loading",
      component:loading
    }
  ]
})
