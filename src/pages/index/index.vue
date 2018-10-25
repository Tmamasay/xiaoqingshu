<template>
  <div class="container">
<search></search>
  <lunbo></lunbo>
<leibie :LBDatas="LBDatas"></leibie>
<tab v-if='current' :handleChange="handleChange" :current="current" ></tab>
<remen v-if='comments' :comments="comments"></remen>
<!-- <tabfooter  v-if='currenttab' :handleChangetab="handleChangetab" :currenttab="currenttab" ></tabfooter> -->
<tabfooter></tabfooter>
<div class="footer">
<wxc-loadmore :is-end="true" text="到底了～"></wxc-loadmore>

</div>


  </div>
</template>

<script>
import card from "@/components/card";
import lunbo from "@/components/lunbo/lunbo";
import search from "@/components/search/search";
import leibie from "@/components/leibie/leibie";
import tab from "@/components/tab/tab";
import remen from "@/components/remen/remen";
import tabfooter from "@/components/tabfooter/tabfooter";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      LBDatas: [
        {
          //数据在哪个组件，更新数据的行为(方法),就应该在哪个页面
          name: "外套",
          img: "新的开始"
        },
        {
          name: "鞋子",
          img: "新的开始"
        },
        {
          name: "GUCCi",
          img: "新的开始"
        },
        {
          name: "村三",
          img: "新的开始"
        },
        {
          name: "NB",
          img: "新的开始"
        }
      ]
      ,current: 'tab1',
      comments:[{
        userImage:'https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg',
        userName:'飞向远方',
        userQM:'我是一批来自远方的狼',
        textRM:'#这是一段行截断的文字#这是一段#行截断的文字,这是一段行截断的文字。这是一段行截断的文字。这是一段行截断的文字。这是一段行截断的文字',
        userImg:['https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg','https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg','https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg'],
        userBQ:['学生','流行','直播中']
      },
      {
        userImage:'https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg',
        userName:'飞向远方',
        userQM:'我是一批来自远方的狼',
        textRM:'#这是一段行截断的文字#这是一段#行截断的文字,这是一段行截断的文字。这是一段行截断的文字。这是一段行截断的文字。这是一段行截断的文字',
        userImg:['https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg','https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg','https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg'],
        userBQ:['学生','流行','直播中']
      }]
    
    };
  },

  components: {
    card,
    lunbo,
    search,
    leibie,
    tab,
    remen,
    tabfooter
  },

  methods: {
    
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    //动态改变tab栏的值
     handleChange (ev) {
          // console.log(ev)
      this.current=ev.key
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    // wx.hideTabBar();
  },
  onShow(){
    // 关闭原声的tabbar
    wx.hideTabBar();
  }
};
</script>

<style scoped>
.container {
  padding: 0px;
}
.footer{
  height: 100px;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
