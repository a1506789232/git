<template>
  <div id="app">
    <!-- <keep-alive exclude=""> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import shangBody from "@/components/body";
import shoppingcar from "@/components/shoppingcar";
export default {
  name: "App",
  data() {
    return {
      headShow: true //header显示隐藏
    };
  },
  components: {
    shangBody,
    shoppingcar //内容部分
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
</style>
