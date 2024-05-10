<template>
  <div class="swiper-warp">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :autoplay="{
        delay: 2000,
      }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="slide in 4" :key="slide" class="slider-img-outer">
        <div style="height: 4.32rem; overflow: hidden">
          <img src="../assets/slider.png" class="slider-img" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
</script>

<style>
.swiper-pagination-bullet-active {
  width: 0.68rem !important;
  background-color: #b5a8e5 !important;
  border-radius: 0.1rem !important;
}
</style>
<style lang="scss" scoped>
.swiper-warp {
  width: 100%;
  .slider-img-outer {
    height: 5.2rem;
  }
  .slider-img {
    height: 4.32rem;
    max-width: 100%;
  }
}
</style>
