<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index" @click="jump('/xiaoshuo',item)">
                 {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[{name:"黑色星期四!美股指创三个月最大跌幅，道指盘中跌逾1900点"},{name:"东京警报将被解除专家：战胜疫情扔要两年"}]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
          jump(path,item){
              this.$router.push({
                  path,
                  query:item
              })
          }
    }
};
</script>

<style scoped>

</style>
