<template>
    <div>
         <input type="text" v-model='txt'>
         <button @click="txtjia">加</button>
         <ul>
             <li v-for="(item,index) in arr" :key="index">
                 {{ item }}
             </li>
         </ul>
    </div>
</template>

<script>
export default {
    name:"hf",
    data() {
        return {
            arr:[],
            txt:""
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
       txtjia(){
            this.arr.push(this.txt)
       }
    }
};
</script>

<style scoped>

</style>
