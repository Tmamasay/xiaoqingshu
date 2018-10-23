<template>
<div class="tabStyle">
<i-tabs current="tab1" @click="handleChange">
    <i-tab key="tab1" title="发现" count="3"></i-tab>
    <i-tab key="tab2" title="关注"></i-tab>
    <i-tab key="tab3" title="热门" dot></i-tab>
</i-tabs>
</div>
</template>

<script>
export default {
  props: [//指定属性名
        'tabDatas'
    ],
  data() {
    
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
      handleChange ({ detail }) {
        this.setData({
            current: detail.key
        });
    }
  }
};
</script>

<style>
.tabStyle{
width: 100%;
font-size:16rpx;
}
</style>
