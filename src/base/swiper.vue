<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide class="swiper-item" v-for="(item,index) in swiperList" :key="index">
      <img :style="{width:'100%',height:'220px'}" class="swiper-img" :src="item.imgsrc" alt="去哪儿门票" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  props: ["swiperList"],
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: true,
        //滑动速度
        speed: 1000
        // delay:1000
      }
    };
  }
};
</script>
<style scoped>
</style>