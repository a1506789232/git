<template>
  <div id="app" class="app">
       <keep-alive exclude="">
             <xu v-if="num == 0"></xu>
             <hf  v-if="num == 1"></hf>
       </keep-alive>
       <button @click="num = 0">xu</button>
       <button @click="num = 1">hf</button>
  </div>
</template>

<script>

import xu from "@/components/xu";
import hf from "@/components/hf";
export default {
  
  name: 'App',
  data() {
    return {
       num:0
    }
  },
  computed:{
    
  },
  methods:{
    },
    
  components:{
     xu,hf
  }
}
</script>

<style>
</style> 