<template>
  <div class="shopping">
    <div class="head1">
      <h4>
        购物清单
        <span class="bian">编辑</span>
      </h4>
    </div>
    <ul class="ul">
      <li v-for="(item,index) in arr" :key="index">
        <input type="checkbox" @click="inputBtn" :checked="item.inputBtn" />
        <img :src="item.img" alt />
        <div class="right">
          <div class="right-left">
            <p class="miaoshu">{{ item.p }}</p>
            <p
              class="money"
              :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}"
            >￥{{ item.money }}</p>
            <p class="kucun" :style="{float:'left'}">{{ item.buyed }}</p>
          </div>

          <div class="num">
            <p @click="jia(item)">+</p>
            <p>{{ item.geshu }}</p>
            <p @click="jian(item)">-</p>
          </div>
        </div>
      </li>
    </ul>

    <footer>
      <p>
        <input type="checkbox" />全选
      </p>
      <p>
        合计：
        <span class="allmoney">￥{{ str }}</span>
      </p>
      <router-link to="/" tag="button">去结算（{{ num }}）</router-link>
    </footer>
  </div>
</template>

<script>
import bus from "@/assets/bus";
// let str = 0
export default {
  data() {
    return {
      arr: [],
      arrs: [],
      str: 0,
      num: 0,
      geshu: 0
    };
  },
  watch: {
    arr: {
      handler(newvalue) {
        // location.arr = JSON.stringify(newvalue);
        window.localStorage.setItem("arr", JSON.stringify(this.arr));
      }
    }
  },
  created() {
    let i = this.$route.query.i;
    this.arrs = this.$route.query.arr; //获取上个页面传递的id,在下面获取数据的时候先提交id
    this.arr.push(this.arrs[i]);
    console.log(this.arr, this.arrs[i]);
    let logo = window.localStorage.getItem("arr");
    if (logo) {
      this.arr.push(logo);
    }
  },
  mounted() {},
  methods: {
    inputBtn() {
      this.arr.map(item => {
        item.inputBtn = !item.inputBtn;
        if (item.inputBtn) {
          this.str += item.money;
          this.num++;
        } else {
          this.str = 0;
          this.num = 0;
        }
      });
    },
    jia(item) {
      if (!item.inputBtn) {
        this.str = 0;
      }
      item.geshu++;
      this.num++;
      this.str = item.money * item.geshu;
    },
    jian(item) {
      item.geshu--;
      this.num--;

      this.str = item.money * item.geshu;
    }
  }
};
</script>

<style scoped>
.bian {
  margin: 0;
  padding: 0;
  float: right;
  margin-right: 10px;
}
img {
  width: 100px;
  height: 100px;
}
ul {
  width: 100%;
}
ul > li {
  display: flex;
  width: 100%;
  /* justify-content: space-around; */
  align-items: center;
}
.num {
  float: right;
  margin-left: 80px;
}
.right {
  width: 60%;
  display: flex;
}
.right-left {
  display: flex;
  flex-direction: column;
}
.money {
  margin: 0;
  padding: 0;
}
.miaoshu {
  margin: 0;
  padding: 0;
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
