<template>
<div class="jianju">
  <wxc-avatar class="avatar" src="https://s11.mogucdn.com/p2/170413/upload_86dkh4e886991g9lji7a6g5c530ji_400x400.jpg"></wxc-avatar>
  <p>{{LBData.name}}</p>
</div>
  
</template>

<script>

export default {
  props: [//指定属性名
        'LBData'
    ],
  data() {
    return {

    }
  },
  methods: {}
  
}
</script>

<style>
  .avatar {
    display: block;
    width: 120rpx;
    height: 120rpx;
  }
  p{
    text-align: center
  }
  /* .jianju{
    margin-left:8px; 
  } */
</style>