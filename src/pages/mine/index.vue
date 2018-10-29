<template>
<div class="mineBG">
 <wxc-flex class="wrap" main="center" >
    <wxc-avatar class="avatar" :src="avatarwx"></wxc-avatar>
    <view class="itemTX"></view>
    <div class="userNa">{{userName}}</div>
  </wxc-flex>
   <view class="list-wrap">
    <view class="list-item">
      <wxc-list v-for="item in list" :key="item" class="item" :title="item.title" :desc="item.slot? '' : item.desc" :mode="index == list.length-1 ? 'none': ''" :src="item.src">
        <view v-if="item.slot && item.desc" class="desc-highlight">{{item.desc}}</view>
      </wxc-list>
    </view>

    <view class="list-item">
      <wxc-list
              class="item"
              icon="help"
              icon-color="#69A0DD"
              title="客服与帮助"></wxc-list>
      <wxc-list
              class="item"
              icon="feedback"
              icon-color="#69A0DD"
              mode="none"
              title="意见反馈"></wxc-list>
    </view>
  </view>
 <tabfooter></tabfooter>
 <div class="footer">
<wxc-loadmore :is-end="true" text="我是有底线的～"></wxc-loadmore>

</div>
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
      avatarwx:'',
      userName:'',
      list:store.state.listMine
    }
  },
 methods:{
   getUserInfomation() {
     if(!store.state.userInfo){
      //  console.log('gg')
        wx.navigateTo({
        url: '/pages/shouquan/main'
      })
     }else{
      // console.log('yy')
    } 
    }
  },
  created () {
    this.getUserInfomation();
    console.log('1')
  },
  onShow(){
    if(!store.state.userInfo){
        wx.navigateTo({
        url: '/pages/shouquan/main'
      })
     }else{
   this.avatarwx=store.state.userInfo.avatarUrl;
   this.userName=store.state.userInfo.nickName;
  
   }
  }
  // ,
  // onLoad(){
  //   console.log('233')
   
  // }
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

}
.wrap {
    position: relative
  }
.itemTX{
  width: 300px;
  height: 100px;
  border-radius: 3%;
  background-color: #fff;
  box-shadow:0 3px 4px rgba(0, 0, 0, 0.3);
  margin-top: 70rpx;
   margin-bottom: 20px;
}
.avatar{
  width: 150rpx;
  height: 150rpx;
  position: absolute;

}
.userNa{
  display: inline-block;
  position: absolute;
  top:90px
}
.list-wrap {
    width: 100%;
    background: #efefef;
    /* padding-bottom: 30rpx; */
    /* padding-top: 30rpx; */
  }
  .list-item {
    background: #fff;
    margin-bottom: 30rpx;
  }
  .list-item:last-child {
    margin: 0;
  }
  .item {
    flex: 1;
  }
  .desc-highlight {
    font-size: 24rpx;
    height: 38rpx;
    padding: 0 22rpx;
    border: 1px solid #f5342f;
    border-radius: 20rpx;
    color: #f5342f;
    line-height: 38rpx;
  }
  .footer{
  height: 100px;
}
</style>
