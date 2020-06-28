import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news'
import xiaoshuo from '@/components/xiaoshuo'
import s from '@/components/s'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: news,
      meta:{
        index : 0
      }
    },{
      path:'/xiaoshuo',
      name:'xiaoshuo',
      component:xiaoshuo,
      children:[
        {
          path:'/xiaoshuo/s',
          name:s,
          component:s
        }
      ]
    }
  ]
})
