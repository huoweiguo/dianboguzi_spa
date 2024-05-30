<template>
  <div class="page">
    <div class="top-btn" v-if="ismore">
      <div class="btn" @click="ismore = false">收起<img class="icon-down" src="@/assets/h5/icon-jt.svg" /></div>
    </div>
    <div class="banner" v-else>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="[EffectCoverflow, Pagination]"
      >
        <swiper-slide class="slide"><img src="@/assets/h5/banner-1.png" width="80%" /></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/h5/banner-2.png" width="80%" /></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/h5/banner-1.png" width="80%" /></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/h5/banner-2.png" width="80%" /></swiper-slide>
      </swiper>
    </div>
    <div class="tabs-bar">
      <div class="tabs-item" :class="{ active: tabIndex == 0 }" @click="slideTo(0)">最新</div>
      <div class="tabs-item" :class="{ active: tabIndex == 1 }" @click="slideTo(1)">线下活动</div>
      <div class="tabs-item" :class="{ active: tabIndex == 2 }" @click="slideTo(2)">线上活动</div>
      <div class="tabs-item" :class="{ active: tabIndex == 3 }" @click="slideTo(3)">加入我们</div>
    </div>
    <div class="news-list">
      <swiper class="swiper" :style="style" :navigation="true" :modules="[Navigation]" @swiper="setSwiper" @slideChange="onSlideChange">
        <swiper-slide class="slide stop-swiping">
          <ul class="list">
            <li class="list-item" v-for="i in 10" :key="i">
              <div class="title">1[柄图]电波谷子平台“眼若星辰”系列柄图贩售途径一览</div>
              <div class="time">2024-11-12</div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="slide stop-swiping">
          <ul class="list">
            <li class="list-item" v-for="i in 10" :key="i">
              <div class="title">2[谷模]电波谷子平台“眼若星辰”系列谷模贩售途径一览</div>
              <div class="time">2024-11-12</div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="slide stop-swiping">
          <ul class="list">
            <li class="list-item" v-for="i in 10" :key="i">
              <div class="title">3[谷美]电波谷子平台“眼若星辰”系列谷美贩售途径一览</div>
              <div class="time">2024-11-12</div>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="slide stop-swiping">
          <ul class="list">
            <li class="list-item" v-for="i in 10" :key="i">
              <div class="title">4[谷美]电波谷子平台“眼若星辰”系列谷美贩售途径一览</div>
              <div class="time">2024-11-12</div>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
    <div class="footer-btn" v-if="!ismore">
      <div class="btn" @click="ismore = true">更多<img src="@/assets/h5/icon-jt.svg" /></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css';

const ismore = ref(false);
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
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.banner {
  .slide {
    text-align: center;
  }
}

.tabs-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  .tabs-item {
    font-size: 12px;
    color: #424242;
    transition: all 0.3s;
    margin: 0 10px;
    padding: 3px 0;
    &.active {
      padding: 3px 15px;
      background: #fff;
      border-radius: 10px;
      color: #736bcd;
    }
  }
}

.news-list {
  flex: 1;
  height: 0;
  .slide {
    height: 100%;
    overflow: auto;
  }
}

.swiper {
  height: 100%;
  .list {
    margin: 0 25px;
    font-size: 12px;

    .list-item {
      background: rgba(255, 255, 255, 0.5);
      padding: 15px;
      border-radius: 15px;
      margin-bottom: 10px;
    }
    .title {
      color: #021236;
      margin-bottom: 5px;
      height: 16px;
      line-height: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .time {
      color: #898989;
    }
  }
}

.footer-btn,
.top-btn {
  margin-top: 9px;
  .btn {
    margin: auto;
    width: 80px;
    height: 20px;
    line-height: 20px;
    background: #ffffff;
    border-radius: 10px 10px 10px 10px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
}
.top-btn {
  margin-top: 0;
  .icon-down {
    transform: rotate(180deg);
  }
}
</style>
