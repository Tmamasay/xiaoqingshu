<template>
  <div class="container">
<search></search>
  <lunbo></lunbo>
<leibie :LBDatas="LBDatas"></leibie>
<tab v-if='current' :handleChange="getUserInfo" :current="current" ></tab>


  </div>
</template>

<script>
import card from "@/components/card";
import lunbo from "@/components/lunbo/lunbo";
import search from "@/components/search/search";
import leibie from "@/components/leibie/leibie";
import tab from "@/components/tab/tab";

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
      ,current: 'tab1'
    
    };
  },

  components: {
    card,
    lunbo,
    search,
    leibie,
    tab
    // tabBar
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
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
     handleChange (ev) {
          console.log('2')
          this.setData({
            current: ev.target.key
        });
    }
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
.container {
  padding: 0px;
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
