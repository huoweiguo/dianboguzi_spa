<template>
  <div style="height: 100vh;">
    <swiper :slides-per-view="1" :space-between="50" :modules="modules" direction="vertical">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Scrollbar } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';

const modules = [Mousewheel, Scrollbar]
</script>

<style lang="scss">
.swiper-wrapper {
  height: 100vh;
}
</style>