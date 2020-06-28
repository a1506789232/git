<template>
  <div class="box">
    <div class="header">
      <input type="checkbox" @click="all"/>列表2
      <span>0/0</span>
    </div>
    <input type="text" placeholder="请输入城市拼音" class="history"  @keyup="sou" v-model="text"/>
    <ul>
      <li v-for="(item,index) in arrs" :key="index">
        <input type="checkbox"  @click="inputBtn(index)" v-model="item.inputCheck" />
        <span>{{ item.txt }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/assets/bus"; //引入bus
let set = new Set()
export default {
  data() {
    return {
      allCheck: false,
      arrLength: 0,
      inputChecked: 0,
      arrs: [],
      text:"",
      shuzu:[],
      arr1:[]
    };
  },
  created() {
    // 显示长度
    this.arrLength = this.arrs.length;
    bus.$on("xhf", obj => {
      this.arrs = obj.arrs;
      this.arr1 = obj.arr
    });
  },
  mounted() {},
  methods: {
      all() {
      //全选
      this.allCheck = !this.allCheck;
      this.arrs.map(item => {
        if (this.allCheck) {
          item.inputCheck = true;
        } else {
          item.inputCheck = false;
        }
      });
    },
    inputBtn(i) {
      //使用set实例
      this.arrs[i].inputCheck = !this.arrs[i].inputCheck;
      this.arrs.map((item, index) => {
        if (item.inputCheck) {
          set.add(item);
          this.arr1 = [...set];
        }
      });
      //传值到center
      bus.$emit("xu", { arr1: this.arr1, arrs: this.arrs });
    },
    sou() {
      let shuju = "";
      if (this.text == "") {

        this.arrLength = this.arrs.length;
        return;
      }
      shuju = this.arrs.filter(item => {
        return item.txt.includes(this.text);
      });
      this.shuzu.push(shuju);
      this.arrs = this.shuzu[0];
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
  overflow: auto;
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
}
.history {
  width: 80%;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin: 10px 0;
}
</style>
