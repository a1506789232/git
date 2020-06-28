<template>
  <div>
    <router-link to="/" tag="button" style="float:left">返回商品页面</router-link>
    <h4 style="text-align:center">购物车页面</h4>

    <table style="width:500px;margin:100px auto;text-align:center;">
      <thead>
        <tr>
          <th></th>
          <th>序号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in $store.state.arrs" :key="index">
          <td>
            <input type="checkbox" @click="inputC(item,index)" v-model="item.inputC"/>
          </td>
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="jia(item,index)">+</button>
            <input type="text" :value="item.num" style="width:30px"/>
            <button @click="jian(item,index)">-</button>
          </td>
          <td @click="del(index)">删除</td>
        </tr>
        <tr>
          <td>
            全选
            <input type="checkbox" @click="allC" :checked="$store.state.allC"/>
          </td>
          <td>数量:{{ $store.state.allNum }}</td>
          <td></td>
          <td>总价:{{ $store.state.allMoney }}</td>
          <td>
            <button>结算</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {
    jia(item, index) {
      this.$store.commit("numJia", index);
    },
    jian(item, index) {
      this.$store.commit("numJian", index);
    },
    inputC(item, index) {
      this.$store.commit("inputC", index);
    },
    allC(){
       this.$store.commit('allC')
    },
    del(i){
      this.$store.commit('del',i)
    }
  }
};
</script>

<style scoped>
</style>
