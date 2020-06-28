import vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

vue.use(vuex)

export default new vuex.Store({
    state: {
        count: 100,
        arrs: [],
        allNum: 0,
        allMoney: 0,
        allC: false
    },
    mutations: {
        create(state, arr) {
            let i = 0    //点击添加购物车时将数据添加到state的arrs中
            let fu = state.arrs.findIndex((item1, index) => {     //查找arrs中是否已经存在要添加的数据如果没有返回-1
                i = index
                return item1.name == arr.item.name
            })
            if (fu == -1) {          //如果没有添加进arrs
                state.arrs.push(arr.item)
            } else {         //如果有arrs中的数据的num++
                state.arrs[i].num++
            }
        },
        numJia(state, index) {        //点击加按钮进行金额和数量的计算
            state.arrs[index].num++
            state.allNum = 0
            state.allMoney = 0
            state.arrs.map(item => {
                if (item.inputC) {
                    state.allNum += item.num;
                    state.allMoney += item.num * item.price

                }
            });
        },
        numJian(state, index) {        //点击减按钮进行金额和数量的计算
            state.arrs[index].num--
            state.allNum = 0
            state.allMoney = 0
            state.arrs.map(item => {
                if (item.inputC) {
                    state.allNum += item.num;
                    state.allMoney += item.num * item.price

                }
            });
        },
        inputC(state, index) {          //改变本身的input状态
            state.arrs[index].inputC = !state.arrs[index].inputC
            state.allNum = 0
            state.allMoney = 0
            state.arrs.map(item => {              //计算总数还有金额
                if (item.inputC) {
                    state.allNum += item.num;
                    state.allMoney += item.num * item.price
                }
            });
            let str = 0
            //当checked数量等于arrs里面数据的数量就将全选按钮选中
            state.arrs.map(item => {
                if (item.inputC) {
                    str++
                }
            })
            if (str === state.arrs.length) {
                state.allC = true
            } else {
                state.allC = false
            }


        },
        allC(state) {       //全选
            state.allC = !state.allC
            if (state.allC) {
                state.arrs.map(item => {       //如果全选按钮是true那么每一个input就全部是true
                    item.inputC = true
                })

                state.allNum = 0           //全选的时候也要把数量和金额显示
                state.allMoney = 0
                state.arrs.map(item => {
                    if (item.inputC) {
                        state.allNum += item.num;
                        state.allMoney += item.num * item.price
                    }
                });
            } else {                  //否则全部是false
                state.arrs.map(item => {
                    item.inputC = false
                })
                state.allNum = 0
                state.allMoney = 0
                state.arrs.map(item => {       //全选的时候也要把数量和金额显示
                    if (item.inputC) {
                        state.allNum += item.num;
                        state.allMoney += item.num * item.price
                    }
                });
            }
        },
        del(state, i) {
            state.arrs.splice(i, 1)
            state.allNum = 0
            state.allMoney = 0
            state.arrs.map(item => {       //全选的时候也要把数量和金额显示
                if (item.inputC) {
                    state.allNum += item.num;
                    state.allMoney += item.num * item.price
                }
            });
        }
    },
    plugins: [createPersistedState()]
})