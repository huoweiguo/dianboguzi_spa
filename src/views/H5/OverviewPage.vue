<template>
  <div class="tabs-bar">
    <div class="tabs-item" :class="{ active: tabIndex == 0 }" @click="slideTo(0)">柄图</div>
    <div class="tabs-item" :class="{ active: tabIndex == 1 }" @click="slideTo(1)">谷模</div>
    <div class="tabs-item" :class="{ active: tabIndex == 2 }" @click="slideTo(2)">谷美</div>
    <div class="tabs-item" :class="{ active: tabIndex == 3 }" @click="slideTo(3)">痛柜</div>
  </div>

  <swiper class="swiper" :style="style" :navigation="true" :modules="[Navigation]" @swiper="setSwiper" @slideChange="onSlideChange" :spaceBetween="10">
    <swiper-slide class="slide"><img src="@/assets/h5/img-1.png" /></swiper-slide>
    <swiper-slide class="slide"><img src="@/assets/h5/img-2.png" /></swiper-slide>
    <swiper-slide class="slide"><img src="@/assets/h5/img-3.png" /></swiper-slide>
    <swiper-slide class="slide"><img src="@/assets/h5/img-4.png" /></swiper-slide>
  </swiper>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const tabIndex = ref(0);
const mySwiper = ref(null);
const style = reactive({
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff',
  '--swiper-navigation-size': '20px',
});
const setSwiper = (swiper) => {
  mySwiper.value = swiper;
};

const onSlideChange = () => {
  tabIndex.value = mySwiper.value.activeIndex;
};

const slideTo = (index) => {
  tabIndex.value = index;
  mySwiper.value.slideTo(index, 300);
};
</script>

<style lang="scss" scoped>
.tabs-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  height: 50px;
  .tabs-item {
    position: relative;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
    transition: all 0.3s;
    &.active {
      font-size: 20px;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        top: 9px;
        left: 0;
        width: 100%;
        height: 13px;
        z-index: -1;
        border-radius: 10px;
        background-color: #c8a2fa;
      }
    }
  }
}
.swiper {
  height: 100%;
}
.slide {
  display: flex;
  justify-content: center;
  img {
    display: block;
    // max-width: 80%;
    max-height: 90%;
  }
}
</style>
