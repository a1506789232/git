<template>
    <div>
       <ul>
           <li v-for="(item,index) in arr" :key="index" @click="btn(index)">
                {{ item }}
           </li>
       </ul>
    </div>
</template>

<script>
import bus from '@/assets/bus.js'
export default {
    props:{
       arr:{
           type:Array,
           default:[]
       }
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        btn(i){
            bus.$emit('btnF',i)
            // console.log(bus,i)
        }
    }
};
</script>

<style scoped>
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-around;
        list-style: none;
        font-size: 12px;
        line-height: 30px;
    }

    div{
        height: 30px;
        background-color: #ddd;
        line-height: 30x;
    }
</style>
