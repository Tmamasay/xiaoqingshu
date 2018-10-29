<template>
<div class="tabbarStyle">
<i-tab-bar :current="count" @change="handletab">
    <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="主页"></i-tab-bar-item>
    <i-tab-bar-item key="service" icon="service" current-icon="service_fill" title="商城"></i-tab-bar-item>
    <i-tab-bar-item key="like" icon="like" current-icon="like_fill" count="3" title="喜欢"></i-tab-bar-item>
    <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>
</i-tab-bar>

</div>
</template>
<script>
// Use Vuex
import store from '@/store/index'
export default {
   computed: {
    count () {
      return store.state.currenttab
    }
  }
  ,

  data() {   
    // return{
    //   current:'homepage'
    // }
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
      handletab (detail) {
          console.log(detail.target);
          store.commit('handleChangetab',detail.target)
    }
  }
};
</script>
<style>
.tabbarStyle{
width: 100%;
position:fixed;
bottom: 0px;
font-size: 18px
}
</style>
