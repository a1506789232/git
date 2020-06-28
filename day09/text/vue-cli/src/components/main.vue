<template>
  <div>
    <div  v-show="Findex == 0">
      <input type="text" v-model="txt" />
      <ul>
        <li v-for="(item,index) in arrs" :key="index" @click="cLi(index)">
          <img :src="item" alt />
        </li>
      </ul>
      <button @click="create()">添加许愿灯</button>

      <div class="box">
        <ul>
          <li>
            <img :src="biao" alt />
          </li>
        </ul>
      </div>

      <div
        v-for="(item,index) in jia"
        :key="index"
        :style="{background:`url(${item.biao})`,backgroundSize:'50px',left:`${item.left+'px'}`,top:`${item.top+'px'}`}"
        class="xuan"
        v-tuo="{index,jia}"
        @mouseup="qi(index)"
      >{{ item.txt }}</div>
    </div>
    <div  v-show="Findex == 1" class="main1"><h1>视频</h1></div>
    <div  v-show="Findex == 2" class="main1"><h1>许愿</h1></div>
    <div  v-show="Findex == 3" class="main1"><h1>我的</h1></div>
  </div>
</template>

<script>
import bus from '@/assets/bus'

export default {
  props: {
    arrs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      biao: "",
      txt: "",
      jia: [],
      left: "",
      top: "",
      Findex:0
    };
  },
  mounted() {},
  methods: {
    cLi(i) {
      this.biao = this.arrs[i];
    },
    create() {
      let num = Math.random() * 800;
      let num1 = Math.random() * 600;
      this.top = num1;
      this.left = num;
      this.jia.push({
        biao: this.biao,
        txt: this.txt,
        left: this.left,
        top: this.top
      });
      this.txt = "";
      this.biao = "";
      this.top = "";
      this.left = "";
    },
    qi(i) {}
  },
  directives: {
    tuo(el, binding) {
      el.onmousedown = e => {
        //鼠标按下
        e = e || window.e;
        el.setCapture && el.setCapture();
        //鼠标位置减去鼠标到div位置等于div到浏览器位置
        let dx = e.clientX - el.offsetLeft;
        let dY = e.clientY - el.offsetTop;

        document.onmousemove = e => {
          e = e || window.e;
          //鼠标位置减去div到浏览器位置等于鼠标相对于
          let left = e.clientX - dx;
          let right = e.clientY - dY;

          el.style.left = left + "px";
          el.style.top = right + "px";

          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmousedown = null;
            el.setCapture && el.setCapture();
            binding.value.jia[binding.value.index].left = left;
            binding.value.jia[binding.value.index].top = right;
          };
        };
      };
    }
  },

  watch: {
    jia: {
      handler(newValue) {
        localStorage.jia = JSON.stringify(newValue);
      },
      deep: true
    }
  },
  created() {
    //vue的生命周期函数
    let todo = localStorage.jia;
    //如果存储在localStorage里面的存在的话就赋给todoList
    todo && (this.jia = JSON.parse(todo));
    bus.$on('btnF',(i)=>{
        this.Findex = i
       console.log(i,bus)

     })
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  width: 300px;
  justify-content: space-around;
  margin: 20px auto;
  list-style: none;
}
.xuan {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 12px;
  position: absolute;
}
.main1{
  height: 100%;
}
</style>
