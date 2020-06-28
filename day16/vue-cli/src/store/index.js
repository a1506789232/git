import vue from 'vue'
import vuex from 'vuex'
import createPersisitedState from 'vuex-persistedstate'
import axios from 'axios'

vue.use(vuex)

export default new vuex.Store({
    state: {
        shopArr: [],
        allCheck: false,
        allMoney: 0,
        isLoading: false,
        arr: [

        ]
    },
    mutations: {
        create(state, item) {  //添加购物车
            let index = state.shopArr.findIndex(item1 => {
                return item1.name == item.name
            })
            if (index != -1) {
                state.shopArr[index].num++
            } else {
                state.shopArr.push(item)
            }
        },
        jia(state, index) {      //加数量
            state.shopArr[index].num++
        },
        jian(state, index) {     //减数量
            state.shopArr[index].num--
        },
        shan(state, index) {
            state.shopArr.splice(index, 1)
        },
        allC1(state) {
            state.allCheck = !state.allCheck
            state.shopArr.map(item => {
                item.inputC = state.allCheck
            })
        },
        inputX(state, i) {
            state.shopArr[i].inputC = !state.shopArr[i].inputC
            let input = state.shopArr.every(item => {
                return item.inputC
            })
            state.allCheck = input
        },
        xu(state, data) {
            state.arr = data
        }
    },
    getters: {
        allC(state) {
            return state.shopArr.every(item => {
                return item.inputC
            })
        }
    },
    plugins: [createPersisitedState()],
    actions: {
        xhf(context) {
            // setTimeout(() => {
                axios.get('static/list.json').then((res) => {
                    context.commit('xu', res.data)
                })
            // }, 2000)
        }
    }
})