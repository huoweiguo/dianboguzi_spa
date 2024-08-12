<template>
  <div v-if="list.length !== 0" class="swiper-warp">
    <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :autoplay="{
      delay: 3000,
    }" :pagination="{ clickable: true }">
      <SwiperSlide v-for="(item, index) in list" @click="toUrl(item)" :key="index" class="slider-img-outer">
        <img :src="item.pic" class="slider-img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref ,defineProps} from 'vue'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
const silderList = ref([
  require('../images/slider-1.png'),
  require('../images/slider-2.png'),
  require('../images/slider-3.png')
])
const props = defineProps({
  list:{
    type: Array,
    default: () => []
  },
})

const toUrl = (item:any)=>{
  if(item.jumpId&&item.jumpId.length){
    window.location.href = item.jumpId;
  }
}
</script>

<style lang="scss">
.swiper-pagination-bullet-active {
  width: 0.17rem !important;
  background-color: #b5a8e5 !important;
  border-radius: 0.03rem !important;
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
    right: 0.14rem;
  }
}
</style>

<style lang="scss" scoped>
.swiper-warp {
  height: 1.12rem !important;
  margin-bottom: 0.1rem;

  .slider-img-outer {


    .slider-img {
      height: 1.12rem;
    }
  }
}
</style>