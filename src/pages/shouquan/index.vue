<template>
<div class="wxsq">
<i-button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo" type="success" shape="circle" size="large">微信登录</i-button>
 </div>
</template>

<script>
// import tabfooter from "@/components/tabfooter/tabfooter";
import store from '@/store/index';
export default {
  components: {
  //  tabfooter
  },

  data () {
    return {
      // avatarwx:store.state.userInfo.avatarUrl
    }
  },
 methods:{
   onGotUserInfo: function(e) {
      // 调用登录接口
      store.commit('getUserInfo',e.target.userInfo)
      wx.navigateBack({
      delta: 2
       })
      //  console.log('7')
      console.log(e.target)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  }
  //  onGotUserInfo() {
  //     // 调用登录接口

 


  //     wx.login({
  //       success: () => {
  //         console.log('111')
  //         wx.getUserInfo({
  //           success: res => {
              
  //             console.log(res)
  //             store.commit('getUserInfo',res.userInfo)
  //           },
  //           fail:(err)=>{
  //             console.log(err)
  //           }
  //         });
  //       }
  //     });
  //   }
   
  },
  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
    // this.getUserInfomation()
    
    console.log(store.state.userInfo)
  }
}
</script>

<style>
.wxsq{
  margin-top: 100rpx;
  font-size:20rpx;
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
