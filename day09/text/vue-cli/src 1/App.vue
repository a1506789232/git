<template>
  <div id="app">
     <he class="header" :obj="obj"></he>
     <ma class="main" :arrs="arrs"></ma>
     <foot class="footer" :arr="arr"></foot>
  </div>
</template>

<script>
import he from '@/components/Header'
import ma from '@/components/main'
import foot from '@/components/footer'
export default {
  name: 'App',
  components:{
     he,ma,foot 
  },
  data(){
      return {
         obj:{
           base:"返回",
           title:"许愿灯",
           fenxiang:"分享"
         },
         arr:[
           "首页",
           "视频",
           "许愿",
           "我的"
         ],
         arrs:[
            "../static/u=2169533086,3449808030&fm=26&gp=0.jpg",
            "../static/u=3198820874,3059998923&fm=26&gp=0.jpg",
            "../static/u=3465628960,3276505448&fm=26&gp=0.jpg",
            "../static/timg.gif"
         ]
      }
  }
  ,
      methods:{
         cLi(){
            alert('1')
         }
      }
}
</script>

<style>
body,html{
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main{
  flex: 1;
  position: relative;
  width: 100%;
}

</style>
