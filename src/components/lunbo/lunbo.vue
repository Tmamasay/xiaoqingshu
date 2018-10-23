<template>
<div class="ga_swiper">
 <swiper indicator-dots="false" autoplay="false" interval="5000" duration="1000">
  <block v-for="item in imgUrls" :key="item">
    <swiper-item>
        <!-- <div>{{item}}</div> -->
      <image :src="item" />
    </swiper-item>
  </block>
</swiper>
</div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
    }
  }
}
</script>

<style>
.ga_swiper{
    width: 100%;
    
}
image{width: 100%}
</style>