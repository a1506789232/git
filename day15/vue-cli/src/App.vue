<template>
  <div id="app">
    <router-view/>
    <footer>
        <ul>
          <li v-for="(item,index) in footerArr" :key="index" :style="{background:activeIndex == index?'blue':''}" @click="activeIndex = index">
              {{ item.name }}
          </li>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       footerArr:[
         {
           name:"首页"
         },
         {
           name:"小说"
         }
       ],
       activeIndex:0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;                          
  -webkit-font-smoothing: antialiased;                          
  -moz-osx-font-smoothing: grayscale;                         
  text-align: center;                         
  color: #2c3e50;                         
  margin-top: 60px;                         
}             
footer{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}        
footer>ul{
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin: 0;padding: 0;
    background-color: #ddd;

}    
footer>ul li{
  flex: 1;
}
</style>                          
