// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currenttab:'homepage',
    userInfo:'',
    listMine: [{
      title: '打卡领红包',
      desc: '您有1个10元红包可领取',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171226_2kall2je2079dh6ddkgc31d27cce2_38x38.png'
    }, {
      title: '优惠券',
      desc: '满100减20',
      slot: true,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_7ida8bdc21j18b91aa2ii3lk38b9i_38x38.png'
    }, {
      title: '钱和红包',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/171011_0acg74g776ig2459c1c6gkge07hch_40x40.png'
    }, {
      title: '我的消息',
      desc: '和卖家沟通在这里',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_0ea73id6h6926k281cdhia0dg5gdg_38x38.png'
    }, {
      title: '我的收藏',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_6h37fg4074i3a2l2gb92dbbc15k84_38x38.png'
    }, {
      title: '足迹',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_00di1ei7f095j8b996icg79kl91kc_38x38.png'
    }, {
      title: '我的拼团',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/170603_55gkg003el4k2jbg2d2ieh030fjcf_38x38.png'
    }, {
      title: '充值中心',
      desc: '',
      slot: false,
      src: 'https://s10.mogucdn.com/mlcdn/c45406/180109_26hggaiha8k7blig5k4ihk5k967ii_38x38.png'
    }]
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
          wx.switchTab({
            url: '../storefk/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
          break;
          case 'like':
            wx.switchTab({
            url: '../likes/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
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
    getUserInfo(state,payload) {
      // 调用登录接口
      state.userInfo = payload;
      
    }
  }
})

export default store
