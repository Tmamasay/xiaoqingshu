<template>
<div class="mineBG">
 <wxc-flex class="wrap" main="center" >
    <!-- <wxc-avatar class="avatar" :src="avatarwx"></wxc-avatar> -->
    <view class="item"></view>
  </wxc-flex>
 <tabfooter></tabfooter>
 </div>
</template>

<script>
import tabfooter from "@/components/tabfooter/tabfooter";
import store from '@/store/index';
export default {
  components: {
   tabfooter
  },

  data () {
    return {
      // avatarwx:store.state.userInfo.avatarUrl
    }
  },
 methods:{
   getUserInfomation() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              store.commit('getUserInfo',res.userInfo)
            }
          });
        }
      });
    }
   
  },
  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
    this.getUserInfomation()
    console.log('xxxxxxxxxx111')
    console.log(store.state.userInfo)
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
.mineBG{
background-image: url('http://www.dseacode.com/mine.png');
background-size: 100% 100%;
 width: 100%;
 height: 1334rpx;
}
  /* .wrap {
    display: block;
    padding: 10rpx;
  } */
.item{
  width: 250px;
  height: 100px;
  border-radius: 3%;
  background-color: #fff;
  box-shadow:0 3px 4px rgba(0, 0, 0, 0.3);
  margin-top: 70rpx
}
</style>
