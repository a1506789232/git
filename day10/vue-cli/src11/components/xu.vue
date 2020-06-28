<template>
    <div>
        <p>{{ num }}</p>
        <button @click="num++">加</button>
    </div>
</template>

<script>
export default {
    name:"xu1",
    data() {
        return {
           num:0
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
