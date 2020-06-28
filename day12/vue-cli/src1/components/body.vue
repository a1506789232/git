<template>
  <div class="head">
    <div class="head1">
      <h4>商品列表</h4>
    </div>
    <nav>
      <ul class="ul">
        <li
          v-for="(item,index) in navArr"
          :key="index"
          @click="navBtn(item,index)"
          :style="{ 'background': navNum==index ? 'blue' : 'purple' }"
        >{{ item }}</li>
      </ul>
      <ul class="ul1">
        <li>综合排序</li>
        <li>销量优先</li>
        <li>价格&Dagger;</li>
      </ul>
    </nav>
    <!-- 商品 -->
    <div class="shopping" v-show="show==0">
      <ul>
        <li v-for="(item,index) in shoppingArr" :key="index">
          <img :src="item.img" alt />
          <div>
            <p>{{ item.p }}</p>
            <p :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}">￥{{ item.money }}</p>
            <p :style="{float:'left'}">
              <span>{{ item.buyed }}</span>
              <router-link :style="{float:'right'}" class="jia" :to="{path:'/car',query:{arr:shoppingArr,i:index}}" tag="button" @click="chuan(index)">+</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="shopping" v-show="show==1">
      <ul>
        <li v-for="(item,index) in shoppingArr" :key="index">
          <img :src="item.img" alt />
          <div>
            <p>{{ item.p }}</p>
            <p :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}">1￥{{ item.money }}</p>
            <p :style="{float:'left'}">
              <span>{{ item.buyed }}</span>
              <router-link :style="{float:'right'}" class="jia" :to="{path:'/car',query:{arr:shoppingArr,i:index}}" tag="button" @click="chuan(index)">+</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="shopping" v-show="show==2">
      <ul>
        <li v-for="(item,index) in shoppingArr" :key="index">
          <img :src="item.img" alt />
          <div>
            <p>{{ item.p }}</p>
            <p :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}">2￥{{ item.money }}</p>
            <p :style="{float:'left'}">
              <span>{{ item.buyed }}</span>
              <router-link :style="{float:'right'}" class="jia" :to="{path:'/car',query:{arr:shoppingArr,i:index}}" tag="button"  @click="chuan(index)">+</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="shopping" v-show="show==3">
      <ul>
        <li v-for="(item,index) in shoppingArr" :key="index">
          <img :src="item.img" alt />
          <div>
            <p>{{ item.p }}</p>
            <p :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}">3￥{{ item.money }}</p>
            <p :style="{float:'left'}">
              <span>{{ item.buyed }}</span>
              <router-link :style="{float:'right'}" class="jia" :to="{path:'/car',query:{arr:shoppingArr,i:index}}" tag="button"  @click="chuan(index)">+</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="shopping" v-show="show==4">
      <ul>
        <li v-for="(item,index) in shoppingArr" :key="index">
          <img :src="item.img" alt />
          <div>
            <p>{{ item.p }}</p>
            <p :style="{height:'25px',marginTop:'10px',float:'left',color:'red'}">4￥{{ item.money }}</p>
            <p :style="{float:'left'}">
              <span>{{ item.buyed }}</span>
              <router-link :style="{float:'right'}" class="jia" :to="{path:'/car',query:{arr:shoppingArr,i:index}}" tag="button" @click="chuan(index)">+</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import shoppingcar from "@/components/shoppingcar";
import bus from "@/assets/bus";

export default {
  //   props: ["navArr"],
  name: "home",
  data() {
    return {
      navNum: 0,
      show: 0,
      navArr: ["推荐", "母婴", "鞋包饰品", "食品", "数码家居"], //头部导航
      shoppingArr: [
        {
          img: "../static/u=1537759298,776517787&fm=26&gp=0.jpg",
          p: "Beats EP头戴耳机",
          money: 558,
          buyed: "1872人付款",
          inputBtn:false,
          geshu:1,
          allmoney:0
        },
        {
          img: "../static/u=1551382034,1742823099&fm=26&gp=0.jpg",
          p: "雀巢(Nestle)高钙成人奶粉",
          money: 60,
          buyed: "2374人付款",
          inputBtn:false,
          geshu:1,
          allmoney:0
        },
        {
          img: "../static/u=2146166929,923258771&fm=26&gp=0.jpg",
          p: "变形金刚.....",
          money: 216,
          buyed: "351人付款",
          inputBtn:false,
          geshu:1,
          allmoney:0
        },
        {
          img: "../static/u=3137050089,1976794217&fm=26&gp=0.jpg",
          p: "乐高.....",
          money: 99,
          buyed: "9人付款",
          inputBtn:false,
          geshu:1,
          allmoney:0
        }
      ],
      arrs:[]
    };
  },
  created() {},
  mounted() {},
  methods: {
    navBtn(item, i) { //点击导航切换内容  选项卡
      this.navNum = i;
      this.show = i;
    }
  }
};
</script>

<style scoped>
.head {
  width: 100%;
}
nav {
  width: 100%;
  line-height: 50px;
}
nav > .ul {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: purple;
  color: white;
  text-align: center;
}
nav > .ul > li {
  width: 20%;
}
.ul1 {
  display: flex;
  justify-content: space-around;
  list-style: none;
  height: 50px;
  align-items: center;
}
.shopping {
  width: 100%;
}
.shopping > ul li {
  display: flex;
  height: 100px;
  display: flex;
  margin-top: 10px;
}
.shopping > ul > li div {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 60%;
}
p {
  margin: 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
}
img {
  width: 100px;
  height: 100px;
}
.jia {
  width: 40px;
  height: 20px;
  background-color: palevioletred;
  border: 1px solid palevioletred;
  border-radius: 5px;
  color: white;
}
</style>
