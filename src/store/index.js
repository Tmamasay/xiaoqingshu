// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currenttab:'homepage'
  },
  mutations: {
    //动态改变tabBar栏的值
     handleChangetab (state,payload) {
          // console.log(payload)
      state.currenttab=payload.key;
      switch (state.currenttab) {
        case 'homepage':
          wx.switchTab({
            url: '../index/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
          break;
          case 'service':
          
          break;
          case 'like':
          
          break;
          case 'mine':
          wx.switchTab({
             url: '../mine/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
          })
          break;
      
        default:
          break;
      }
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store
