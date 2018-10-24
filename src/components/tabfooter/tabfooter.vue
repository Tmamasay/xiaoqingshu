<template>
<div class="tabbarStyle">
<i-tab-bar :current="currenttab" @change="handletab">
    <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"></i-tab-bar-item>
    <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
    <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
    <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
</i-tab-bar>

</div>
</template>
<script>
export default {
  props: ['currenttab','handleChangetab'],
  data() {   
    // return{
    //   current:'homepage'
    // }
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
      handletab (detail) {
          console.log(detail.target);
          this.handleChangetab(detail.target)
    }
  }
};
</script>
<style>
.tabbarStyle{
width: 100%;
position:fixed;
bottom: 0px;
}
</style>
