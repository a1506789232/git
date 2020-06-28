<template>
    <div>
        <button @click="base">返回</button>
         <h4 style="text-align:center">购物车页面</h4>
         <table>
             <tbody>
                 <tr v-for="(item,index) in shopArr" :key="index">
                     <td><input type="checkbox" v-model="item.inputC" @click="inputX(index)"></td>
                     <td><img width="100" :src="item.img1" alt=""></td>
                     <td>{{ item.name }}</td>
                     <td>￥{{ item.price }}</td>
                     <td><button @click="jia(index)">+</button><input type="text" style="width:50px" v-model="item.num"><button @click="jian(index)">-</button></td>
                     <td><button @click="shan(index)">删除</button> </td>
                 </tr>
                 <tr>
                     <td></td>
                     <td>全选: <input type="checkbox" @click="allC1" v-model="allCheck" ></td>
                     <td>总价:{{ allMoney }}</td>
                     <td></td>
                     <td></td>
                     <td><button>去结算</button></td>
                 </tr>
             </tbody>
         </table>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
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
        ...mapMutations(['jian','jia','shan','inputX','allC1']),
       base(){
           this.$router.back()
       }
    },
    computed:{
       ...mapState(['shopArr','allCheck','allMoney']),
    //    ...mapGetters(['allC'])
      
    }
};
</script>

<style scoped>
table{
    width: 800px;
    text-align: center;
}

</style>
