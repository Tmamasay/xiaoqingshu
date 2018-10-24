<template>
<div>
<div class="remen" :key="index1" v-for="(comment,index1) in comments" >
  <wxc-flex class="wrap wrapRemen" dir="left">
    <view class="item">
      <!-- <wxc-avatar class="avatar avatar_1" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg"></wxc-avatar> -->
      <wxc-avatar class="avatar avatar_1" :src="comment.userImage"></wxc-avatar>
    </view>
    <view class="item Tname">
      <!-- <p class="name">飞向远方</p>
      <p class="xinqu">我是一批来自远方的狼</p> -->
      <p class="name">{{comment.userName}}</p>
      <p class="xinqu">{{comment.userQM}}</p>
    </view>
    </wxc-flex>
    <wxc-elip line="2" class="textRM">{{comment.textRM}}</wxc-elip>
    <wxc-flex class="wrap" main="around">
    <view class="item tuP" :key="item" v-for="item in comment.userImg" >
     <img mode="aspectFill" :src="item" alt="">
    </view>
    <!-- <view class="item tuP">
    <img mode="aspectFill" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
    </view>
     <view class="item tuP">
    <img mode="aspectFill" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg" alt="">
    </view> -->
    </wxc-flex>
    <div class="bp_footer">
    <wxc-label class="label" :key="item" v-for="item in comment.userBQ" type="fill" type-color="#2d8cf0">#{{item}}#</wxc-label>
    <div class="footer"></div>
    <!-- <wxc-label class="label" type="fill" type-color="#19be6b">#流行#</wxc-label>
    <wxc-label class="label" type="fill" type-color="#ff9900">#直播中#</wxc-label> -->
    </div>
</div>
</div>
</template>

<script>
export default {
  props: [//指定属性名
'comments'
    ],
  data() {
   
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
  }
};
</script>

<style>
.remen{
width: 100%;
/* font-size:17rpx; */
}
.tuP{
  width: 245rpx;
  height:300rpx;
  margin-top: 15rpx;
}

.tuP img{
  width: 100%;
  height: 100%;
  /* height: 0px; */
}
 .wrapRemen {
    display: block;
    padding: 25rpx 30rpx; 
  }
  
   .avatar_1 {
    width: 80rpx;
    height: 80rpx;
  }
  .Tname{
    margin-left: 18rpx;
  }
  .name{
    font-size: 17px; 
    text-align: left;
  }
  .xinqu{
    font-size: 12px;
    text-align: left;
    color: darkgray;
    margin-top: 10rpx;
  }
  .textRM{
    display: block;
    padding: 0px 30rpx; 
    font-size: 15px; 
  }
  .bp_footer{
    width: 92%;
    display: block;
    padding: 10rpx 30rpx; 
    /* margin-left:10rpx; */
  }
  .label {
    margin-right: 20rpx;
  }
  .footer{
    width: 100%;
    height: 3px;
    border-bottom: 1px solid #dddee1;
    margin-top: 5rpx;
  }
  
</style>
