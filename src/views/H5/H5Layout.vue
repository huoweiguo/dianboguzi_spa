<template>
  <div class="app-page">
    <!-- loading -->
    <!-- <LoadingPop /> -->

    <!-- menu_bar -->
    <MenuBar :swiper="mySwiper" @topage="slideTo" />

    <div class="content" :class="{ 'news-page': currentPage == 2 }">
      <swiper :direction="'vertical'" class="app-swiper" noSwipingClass="stop-swiping" :spaceBetween="50" @swiper="setSwiper" @slideChange="slideChange">
        <!-- 首页page -->
        <swiper-slide class="slide"><HomePage /></swiper-slide>

        <!-- 概览展示page -->
        <swiper-slide class="slide"><OverviewPage /></swiper-slide>

        <!-- 新闻page -->
        <swiper-slide class="slide"><NewsPage /></swiper-slide>

        <!-- 兑换码page -->
        <swiper-slide class="slide"><ExchangeCodePage /></swiper-slide>

        <!-- 联系我们page -->
        <swiper-slide class="slide"><ContactUsPage /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingPop from './LoadingPop.vue';
import MenuBar from './MenuBar.vue';

import HomePage from './HomePage.vue';
import OverviewPage from './OverviewPage.vue';
import NewsPage from './NewsPage.vue';
import ExchangeCodePage from './ExchangeCodePage.vue';
import ContactUsPage from './ContactUsPage.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const currentPage = ref(1);
const mySwiper = ref(null);
const setSwiper = (swiper) => {
  mySwiper.value = swiper;
};

const slideChange = () => {
  // mySwiper.value.allowTouchMove = mySwiper.value.activeIndex != 2;
  currentPage.value = mySwiper.value.activeIndex;
};

const slideTo = (index) => {
  mySwiper.value.slideTo(index - 1, 300);
};

// onMounted(() => {
//   slideTo(3);
// });
</script>

<style lang="scss" scoped>
.app-page {
  min-height: 100vh;
  background: linear-gradient(to right, #b3d6fa, #f5d3f9);
}

.app-swiper {
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  z-index: 1;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s;
  &.news-page {
    top: 70px;
    bottom: 50px;
  }
}
</style>
