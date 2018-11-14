<template>
<div class="wxsq">
<!-- <form  @submit="testSubmit" > -->
 <view class="input-wrap">
      <wxc-input  id="NAME" @blur="NAME_bl" type="text" title="姓名" placeholder="名字"></wxc-input>
      <wxc-input  id="MOBILE" @blur="MOBILE_bl" type="number" title="联系电话" placeholder="请输入手机号"></wxc-input>
      <wxc-input  id="EMAIL" @blur="EMAIL_bl" type="text" title="联系邮箱"  placeholder="请输入邮箱地址"></wxc-input>
      <wxc-input  id="QQ" @blur="QQ_bl" type="number" title="联系QQ" mode="none" placeholder="请输入QQ"></wxc-input>
    </view>
    <!-- <i-panel title="信息完善">
    <i-input  name="NAME" type="text" title="姓名" autofocus placeholder="输入姓名" />
    <i-input  name="MOBILE" type="number" title="联系电话" placeholder="请输入手机号" />
    <i-input  name="EMAIL" type="text" title="联系邮箱" placeholder="请输入邮箱地址" />
    <i-input  name="QQ" type="number" title="联系QQ" placeholder="请输入QQ" />
</i-panel> -->


   
<!-- <i-toast id="toast" /> -->
<!-- <button id="tijiao"  formType="submit">注册</button> -->
<i-button open-type="getUserInfo"  lang="zh_CN" @getuserinfo="onGotUserInfo" type="success" shape="circle" size="large">微信登录</i-button>
<!-- </form> -->
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
     baseUserInfo:{}
    }
  },
 methods:{
   NAME_bl:function(e) {
    //  console.log(e);
     this.baseUserInfo.NAME=e.mp.detail.value
   } ,
   MOBILE_bl:function(e) {
    //  console.log(e.mp.detail.value);
     this.baseUserInfo.MOBILE=e.mp.detail.value
   } ,
   EMAIL_bl:function(e) {
    //  console.log(e.mp.detail);
     this.baseUserInfo.EMAIL=e.mp.detail.value
   } ,
   QQ_bl:function(e) {
  //  console.log(e.mp.detail.value);
     this.baseUserInfo.QQ=e.mp.detail.value
   } ,
   onGotUserInfo: function(e) {
    //  const query = wx.createSelectorQuery()
    //  query.select('#tijiao').submit()
     console.log(this.baseUserInfo)
    if(this.baseUserInfo.NAME&&this.baseUserInfo.MOBILE&&this.baseUserInfo.EMAIL&&this.baseUserInfo.QQ){
        if(!(/^1[34578]\d{9}$/.test(this.baseUserInfo.MOBILE))){
                console.log("手机号码格式错误");  
                
              wx.showToast({
                title: '手机号码格式错误',
                icon: 'none',
                duration: 1000

              });
              return false; 
        }
        if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.baseUserInfo.EMAIL)){
                console.log("邮箱格式错误"); 
                wx.showToast({
                title: '邮箱格式错误',
                icon: 'none',
                duration: 1000

              }); 
              return false; 
        }
        if(!/^[0-9]{4,12}$/.test(this.baseUserInfo.QQ)){
                console.log("QQ格式错误");  
                wx.showToast({
                title: 'QQ格式错误',
                icon: 'none',
                duration: 1000

              });
              return false; 
        }
      // 调用登录接口
      store.commit('getUserInfo',e.target.userInfo);
       var options={};
       
       options.USER_NAME=e.target.userInfo.nickName
       options=Object.assign(options,this.baseUserInfo)
      //  console.log(this)  
      this.$api.user.userInfomation(options).then((res)=>{
        console.log(res);
        if(res.code==1){
           wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 1000

        });
                //  console.log('登陆成功')
          wx.navigateBack({
               delta: 2
       })
        }else{
              wx.showToast({
          title: '手机号已注册',
          icon: 'none',
          duration: 1000

        });
        }
       
        
      }).catch((err)=>{
        console.log(err)
         wx.showToast({
          title: '网络开小差',
          icon: 'none',
          duration: 1000

        });
      });
      
      
      //  console.log('7')
      // console.log(e.target)
  }else{
     console.log('请完善信息')
      wx.showToast({
          title: '请完善信息',
          icon: 'none',
          duration: 1000

        });
     
  }
  }
  
   
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
  font-size:30rpx;
  background-color: #f8f8f9
}
 .input-wrap {
    background: #fff;
  }
</style>
