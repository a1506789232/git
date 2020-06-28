<template>
  <div id="app">
    <router-view/>
    <loading v-if="$store.state.isLoading"></loading>
  </div>
</template>

<script>
import loading from './components/loading'
// import axios from 'axios'
export default {
  name: 'App',
  components:{
    loading
  },
  methods:{
    
  },
  mounted(){
    this.$axios.get('https://www.vue-js.com/api/v1/topics')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
