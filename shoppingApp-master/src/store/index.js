import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import * as actions from './actions'



const state ={
    username: '', // 用户
    isLogin: false,
    address:[
      {
        name: '王小明',
        phone: 13568978546,
        city: '广州',
        detailAdd: '天河区花城大道111号'
      },
      {
        name: '李小丽',
        phone: 13568911546,
        city: '北京',
        detailAdd: '朝阳区朝阳北路111号'
      },
    ],
    cardid:0,
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    GoodsCurrentSelKind: 0, // 表示显示全部分类商品
    dialogVisible:false, //控制首页弹窗false隐藏
    muces:'actions'
 
}
export const store = new Vuex.Store({
state,
getters,
mutations,
actions
})
