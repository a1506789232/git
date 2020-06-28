<template>
  <div class="box">
    <div class="header">
      <input type="checkbox" @click="all" v-model="allCheck" />列表1
      <span>7/{{ arrLength }}</span>
    </div>
    <input type="text" placeholder="请输入城市拼音" class="history" @keyup="sou" v-model="text" />
    <ul>
      <li v-for="(item,index) in arr1" :key="index">
        <input type="checkbox" @click="inputBtn(index)" v-model="item.inputCheck" />
        <span>{{ item.txt }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/assets/bus"; //引入bus
let set = new Set();
export default {
  data() {
    return {
      allCheck: false,
      arrLength: 0,
      inputChecked: 0,
      arrs: [],
      text: "",
      shuzu: [],
      arr1: []
    };
  },
  props: {
    arr: {
      type: Array,
      default: []
    }
  },
  created() {
    // 显示长度
    let str = new Set();
    let a = ""
    this.arr1 = this.arr;
    this.arrLength = this.arr1.length;
    bus.$on("xhf1", obj => {
      obj.arr.map((item, index) => {
                  this.arr.push(item);
      });
      str.add(a)
      console.log(str);


      console.log(obj.arr, this.arr1);
      this.arrs = obj.arrs;
    });
  },
  mounted() {},
  methods: {
    all() {
      //全选
      this.allCheck = !this.allCheck;
      this.arr1.map(item => {
        if (this.allCheck) {
          item.inputCheck = true;
        } else {
          item.inputCheck = false;
        }
      });
    },
    inputBtn(i) {
      //使用set实例
      this.arr1[i].inputCheck = !this.arr1[i].inputCheck;
      this.arr1.map((item, index) => {
        if (item.inputCheck) {
          set.add(item);
          this.arrs = [...set];
        }
      });
      //传值到center
      bus.$emit("xu", { arr1: this.arr1, arrs: this.arrs });
    },
    sou() {
      let shuju = "";
      if (this.text == "") {
        this.arrLength = this.arr1.length;
        return;
      }
      shuju = this.arr1.filter(item => {
        return item.txt.includes(this.text);
      });
      this.shuzu.push(shuju);
      this.arr1 = this.shuzu[0];
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  list-style: none;
  width: 100%;
  padding: 0;
  /* overflow:auto */
  overflow-y: scroll;
  height: 328px;
}
.box {
  width: 200px;
  height: 400px;
  border: 1px solid #ddd;
}
.header {
  width: 100%;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
}
li > span {
  float: left;
  color: blue;
}
li > input {
  float: left;
}
li {
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  margin: 10px 0;
}
.history {
  width: 80%;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin: 10px 0;
}
</style>
