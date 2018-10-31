<template>
  <div class="counter-warp">
    <search></search>
    <!-- <a href="/pages/index/main" class="home">去往首页</a> -->
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
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
