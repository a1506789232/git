<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img src="@/assets/logo.png" :data-src="item">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
          list :[]
        };
    },
    created() {
 
    },
    mounted() {
        this.qingqiu()
    },
    methods: {
         qingqiu(){
             this.$axios('https://api.it120.cc/small4/shop/goods/list').then(res=>{
                  console.log(res.data.data.pic)
             })
         }
    }
};
</script>

<style scoped>

</style>
