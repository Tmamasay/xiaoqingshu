<template>
<div class="tabbarStyle">
<i-tab-bar :current="currentTB" @change="handleTB">
    <i-tab-bar-item  key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
    <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
    <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
    <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
</i-tab-bar>
</div>
</template>

<script>
export default {
  props: [//指定属性名
      'currentTB','handleChangeTB'
    ],
  data() {
   
    
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
      handleTB (detail) {
          console.log(detail.target);
          this.handleChangeTB(detail.target)
    }
  }
};
</script>

<style>
.tabbarStyle{
width: 100%;
}
</style>
