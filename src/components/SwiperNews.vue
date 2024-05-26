<template>
  <div class="swiper-warp">
    <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :autoplay="{
      delay: 3000,
    }" :pagination="{ clickable: true }">
      <SwiperSlide v-for="(item, index) in silderList" :key="index" class="slider-img-outer">
        <img :src="item" class="slider-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
const silderList = ref([
  require('../images/slider-1.png'),
  require('../images/slider-2.png'),
  require('../images/slider-3.png')
])
</script>

<style lang="scss">
.swiper-pagination-bullet-active {
  width: 34px !important;
  background-color: #b5a8e5 !important;
  border-radius: 5px !important;
}

.swiper-warp {
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1 !important;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal>.swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: auto;
    left: auto;
    right: 28px;
  }
}
</style>

<style lang="scss" scoped>
.swiper-warp {
  height: 223px !important;
  margin-bottom: 20px;

  .slider-img-outer {


    .slider-img {
      height: 223px;
    }
  }
}
</style>