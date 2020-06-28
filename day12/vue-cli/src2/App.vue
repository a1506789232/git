<template>
  <div id="app">
      <router-view></router-view>
      <footer>
         <ul>
            <router-link tag="li" v-for="(item,index) in footerArr" :key="index" :to="item.path">
                  <div @click="qie(index)" :style="{background:activeIndex == index?'blue':''}">
                       {{ item.name }}
                  </div>
            </router-link>
         </ul>
      </footer>
  </div>
</template>

<script>
import baidu from "@/components/baidu";
import haokan from "@/components/haokan";
export default {
  name: "App",
  data() {
    return {
      activeIndex:0,
        footerArr:[
          {name:"首页",path:"/"},
          {name:"好看视频",path:"/haokan"},
          {name:"首页",path:"/"},
          {name:"首页",path:"/"},
          {name:"首页",path:"/"}
        ]
    };
  },
  components: {
    baidu,
    haokan //内容部分
  },
  methods:{
      qie(i){
        this.activeIndex = i
        window.localStorage.setItem("active",i) 
      }
  },
  created(){
     let logo = window.localStorage.getItem('active')
     if(logo){
        this.activeIndex = logo
     }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.head1 {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
footer{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;

}
footer>ul{
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: space-around;
  line-height: 50px;
}
footer>ul>li{
  flex: 1;
  text-align: center;
}
footer>ul>li div{
  width: 100%;
  height: 100%;
}
</style>
