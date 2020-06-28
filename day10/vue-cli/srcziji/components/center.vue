<template>
  <div class="box">
    <button class="left" @click="jian">{{ zuo }}</button>
    <button class="right" @click="jia">></button>
  </div>
</template>

<script>
import bus from "@/assets/bus"; //引入bus
export default {
  data() {
    return {
      zuo: "<",
      arr: [],
      arrs: []
    };
  },
  created() {
    bus.$on("xu", obj => {
      this.arr = obj.arr1;
      this.arrs = obj.arrs;
    });
  },
  mounted() {},
  methods: {
    jia() {
    //反方向循环可以实现数组批量删除
      for (let i = this.arr.length - 1; i >= 0; i--) {
        if (this.arr[i].inputCheck) {
          this.arr.splice(i, 1);
        }
      }
      //给right传值
      this.arrs.map(item=>{
          item.inputCheck = false
      })
      bus.$emit('xhf',{arrs:this.arrs,arr:this.arr})
    },
    jian(){
        //反方向循环可以实现数组批量删除
      for (let i = this.arrs.length - 1; i >= 0; i--) {
        if (this.arrs[i].inputCheck) {
          this.arrs.splice(i, 1);
        }
      }
      //给left传值
      this.arr.map(item=>{
          item.inputCheck = false
      })
      console.log(this.arr)
      bus.$emit('xhf1',{arrs:this.arrs,arr:this.arr})
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  width: 150px;
  justify-content: space-between;
}
.left {
  width: 70px;
  height: 50px;
  /* line-height: 50px; */
  background-color: cornflowerblue;
  color: white;
  border-radius: 10px;
  border: 1px solid #ffffff;
  outline: none;
}
.right {
  width: 70px;
  height: 50px;
  /* line-height: 50px;/ */
  background-color: cornflowerblue;
  color: white;
  border-radius: 10px;
  border: 1px solid #ffffff;
  outline: none;
}
</style>
