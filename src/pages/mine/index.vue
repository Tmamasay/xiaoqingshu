<template>
 <!-- <tabfooter  v-if='currenttab' :handleChangetab="handleChangetab" :currenttab="currenttab" ></tabfooter> -->
 <tabfooter></tabfooter>
</template>

<script>
import tabfooter from "@/components/tabfooter/tabfooter";

export default {
  components: {
   tabfooter
  },

  data () {
    return {
      // currenttab:'mine',
    }
  },
 methods:{
   
  },
  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
