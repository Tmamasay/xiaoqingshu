<template>
  <view class="search-wrap">
    <wxc-search class="search" mode="static" align="center" bg-color="#fff"></wxc-search>
    <!-- <p>wwwwwwwwwwwwwwwwwwwww</p> -->
  </view>

</template>

<script>
export default {
 data(){

 }
}
</script>

<style>
  .search-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    height: 90rpx;
    color: #fff;
    background: #f6f6f6;
  }
  .search {
    flex: 1;
    margin: 0 24rpx;
  }
</style>