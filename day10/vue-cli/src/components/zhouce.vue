<template>
    <div>
       <header>
           张三的商品
       </header>
       <div>
           <ul>
               <li v-for="(item,index) in arr" :key='index'>
                   <img :src="item.img" alt="">
                   
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           arr:[
               {name:"TCL彩电",img:"static/a.jpg",num:1},
               {name:"机顶盒",img:"static/b.jpg",num:1},
               {name:"海尔冰箱",img:"static/c.jpg",num:1},
               {name:"小米手机",img:"static/d.jpg",num:1},
               {name:"PPTV电视",img:"static/e.jpg",num:1}
           ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
