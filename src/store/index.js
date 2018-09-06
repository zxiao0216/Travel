// 这个文件下边放的都是和vuex相关的东西
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import changeCity from './mutations'
// vue中使用插件都是要使用  Vue.use(插件)的方式
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // 可以直接通过commit 来调用 mutations,直接省略actions这一步。查看vuex的功能图理解过程
    // actions:{
    //     changeCity(ctx,city){
    //         ctx.commit('changeCity',city)
    //     }
    // },
    mutations:changeCity,
    // getters 类似于vue中的computed，使用旧数据计算新数据
    // getters:{
    //     doubleCity(state){
    //         return state.city + '' + state.city
    //     }
    // }
})