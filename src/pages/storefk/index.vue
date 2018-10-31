<template>
  <div class="counter-warp">
    <search></search>
   <wxc-panel :border="false" >
    <view class="content">无边框模式1</view>
  </wxc-panel>
  <wxc-panel :border="false" >
    <view class="content">无边框模式2</view>
  </wxc-panel>
    <tabfooter></tabfooter>
    
  </div>
</template>

<script>
import search from "@/components/search/search";
import tabfooter from "@/components/tabfooter/tabfooter";

export default {
  computed: {
    count () {
      // return store.state.count
    }
  },
  components: {
    search,
    tabfooter
  },
  methods: {
  
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  /* margin-top: 100px; */
  background-color:#f8f8f9
}
.content {
    padding: 30rpx;
  }

</style>
