<template>
    <div>
         <h4 style="text-align:center">商品列表</h4>
         <table>
             <thead>
                 <tr>
                     <th>图片</th>
                     <th>商品名称</th>
                     <th>价格</th>
                     <th>操作</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="item in arr" :key="item.id">
                     <td><img width="100" :src="item.img1" alt=""></td>
                     <td>{{ item.name }}</td>
                     <td>￥{{ item.price }}</td>
                     <td><button @click="create(item)">加入购物车</button></td>
                 </tr>
             </tbody>
         </table>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            
        };
    },
    created() {

    },
    mounted() {
       
    },
    methods: {
       ...mapMutations([]),
       create(item){
           this.$router.push('/shoplist')
           this.$store.commit('create',item)
       }
    },
    computed:{
        ...mapState(["arr"])
    }
};
</script>

<style scoped>
table{
    width: 800px;
    text-align: center;
}

</style>
