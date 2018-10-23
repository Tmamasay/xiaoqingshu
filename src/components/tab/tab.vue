<template>
<div class="tabStyle">
<i-tabs :current="current" >
    <i-tab key="tab1" title="发现" count="3"></i-tab>
    <i-tab key="tab2" title="关注"></i-tab>
    <i-tab key="tab3" title="热门" dot></i-tab>
</i-tabs>
</div>
</template>

<script>
export default {
  props: [//指定属性名
      'current','handleChange'
    ],
  data() {
    //   return{
    //       current: 'tab1'
    //   }
    
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    //   handleChan (detail) {
    //       console.log(detail.target);
    //     //   console.log(this.setData());
    //     var that=this;
    //       handleChange(that,detail.target)
    //     // this.setData({
    //     //     current: detail.target.key
    //     // });
    // }
  }
};
</script>

<style>
.tabStyle{
width: 100%;
font-size:16rpx;
}
</style>
