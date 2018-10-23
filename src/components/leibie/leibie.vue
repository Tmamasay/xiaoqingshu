<template>
<view class="content">
  <wxc-panel :border="false" >
      <wxc-flex class="wrap" main="around">
     <itemLB v-for="(LBData,index) in LBDatas" :key="index" :LBData="LBData"  :index="index"></itemLB>
      </wxc-flex>
  </wxc-panel>
   </view>
</template>

<script>
import itemLB from "@/components/itemLB/itemLB";
export default {
  props: [//指定属性名
        'LBDatas'
    ],
  data() {
    return {};
  },
  /** note: 在 wxp 文件或者页面文件中请去掉 methods 包装 */
  methods: {
    onClick(event) {
      console.log(event);
    }
  },
  components: {
    itemLB
  }
};
</script>

<style>
.content {
  padding: 5rpx;
  width: 100%;
}

</style>