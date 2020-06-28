<template>
  <div id="app">
    <left1 :arr="arr"></left1>
    <center1></center1>
    <right1></right1>
  </div>
</template>

<script>
import bus from "@/assets/bus";
import left1 from "@/components/left";
import center1 from "@/components/center";
import right1 from "@/components/right";
export default {
  name: "App",
  components: {
    left1,
    center1,
    right1
  },
  data() {
    return {
      arr: [
        {txt:"上海",inputCheck:false},
        {txt:"北京",inputCheck:false},
        {txt:"广州",inputCheck:false},
        {txt:"深圳",inputCheck:false},
        {txt:"南京",inputCheck:false},
        {txt:"西安",inputCheck:false},
        {txt:"成都",inputCheck:false},
        {txt:"福建",inputCheck:false},
        {txt:"武汉",inputCheck:false},
        {txt:"廊坊",inputCheck:false},
        {txt:"沈阳",inputCheck:false},
        {txt:"广西",inputCheck:false},
        {txt:"广东",inputCheck:false},
        {txt:"内蒙古",inputCheck:false}
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
