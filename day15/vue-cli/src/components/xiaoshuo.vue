<template>
    <div>
         <ul>
            <li v-for="(item,index) in arr" :key="index" @click="dian(item)">
                 {{ item.name }}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
          arr:[]
        };
    },
    created() {
         this.arr.push(this.$route.query)
    },
    mounted() {

    },
    methods: {
       dian(item){
           this.$router.push({
               path:'/xiaoshuo/s'
           })
       }
    } 
};
</script>

<style scoped>

</style>
