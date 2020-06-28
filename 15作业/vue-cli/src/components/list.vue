<template>
    <div>
        <h1 style="text-align:center">商品列表</h1>
        <table border="1px solid #ddd" style="width:500px;margin:100px auto;text-align:center;">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in arr" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td><button @click="jia(item,index)">添加到购物车</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {
                    id:0,
                    name:'苹果',
                    price:15,
                    num:1,
                    inputC:false
                },
                {
                    id:1,
                    name:'西瓜',
                    price:10,
                    num:1,
                    inputC:false
                },
                {
                    id:2,
                    name:'香蕉',
                    price:5,
                    num:1,
                    inputC:false
                },
                {
                    id:3,
                    name:'草莓',
                    price:20,
                    num:1,
                    inputC:false
                },
                {
                    id:4,
                    name:'樱桃',
                    price:20,
                    num:1,
                    inputC:false
                },
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
       jia(item,i){
            this.$store.commit('create',{item,i})
            this.$router.push({
                path:'/shop'
            })
       }
    }
};
</script>

<style scoped>

</style>
