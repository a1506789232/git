<template>
  <div id="app">
      <zhouce></zhouce>
      <h1>1111</h1>
  </div>
</template>

<script>
import zhouce from '@/components/zhouce'
export default {
  name: "App",
  data() {
    return {
        
    };
  },
  components: {
      zhouce
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
}

</style>
