import vue from 'vue'
import vuex from 'vuex'
import createPersisitedState from 'vuex-persistedstate'

vue.use(vuex)

export default new vuex.Store({
        state:{
            shopArr:[],
            allCheck:false,
            allMoney:0,
            arr:[
                {
                    name:"猕猴桃",
                    price:15,
                    inputC:false,
                    num:1,
                    id:0,
                    img1:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2984334905,3284066003&fm=26&gp=0.jpg"
                },
                {
                    name:"草莓",
                    price:10,
                    inputC:false,
                    num:1,
                    id:1,
                    img1:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3095531234,90829183&fm=26&gp=0.jpg"
                },
                {
                    name:"葡萄",
                    price:5,
                    inputC:false,
                    num:1,
                    id:2,
                    img1:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2288558266,4253441191&fm=26&gp=0.jpg"
                },
            ]
        },
        mutations:{
            create(state,item){  //添加购物车
                let index = state.shopArr.findIndex(item1=>{
                    return item1.name == item.name
                })
                if(index != -1){
                    state.shopArr[index].num++
                }else{
                    state.shopArr.push(item)
                }
            },
            jia(state,index){      //加数量
                   state.shopArr[index].num++
            },
            jian(state,index){     //减数量
                state.shopArr[index].num--
            },
            shan(state,index){
                state.shopArr.splice(index,1)
            },
            allC1(state){
                state.allCheck = !state.allCheck
                state.shopArr.map(item=>{
                    item.inputC = state.allCheck
                })
            },
            inputX(state,i){
                 state.shopArr[i].inputC = !state.shopArr[i].inputC
                 let input =  state.shopArr.every(item=>{
                    return item.inputC
                })
                state.allCheck = input
            }
        },
        getters:{
            allC(state){
                return state.shopArr.every(item=>{
                    return item.inputC
                })
            }
        },
        plugins:[createPersisitedState()]
})