<template>
  <div class="page">
    <div class="top-btn" v-if="isNone">
      <div class="btn" @click="hasNone">
        收起<img class="icon-down" src="@/assets/h5/icon-jt.svg" />
      </div>
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
        <swiper-slide class="slide" v-for="item in slideList" :key="item.id"
          ><a v-if="item.jumpId" @click="openNewsDetail(item.jumpId)"
            ><img :src="item.pic" width="80%" /></a
          ><img v-else :src="item.pic" width="80%"
        /></swiper-slide>
        <!-- <swiper-slide class="slide"
          ><img src="@/assets/h5/banner-1.png" width="80%"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/h5/banner-2.png" width="80%"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/h5/banner-1.png" width="80%"
        /></swiper-slide>
        <swiper-slide class="slide"
          ><img src="@/assets/h5/banner-2.png" width="80%"
        /></swiper-slide> -->
      </swiper>
    </div>
    <div class="tabs-bar">
      <div
        class="tabs-item"
        :class="{ active: tabIndex == 0 }"
        @click="slideTo(0)"
      >
        最新
      </div>
      <div
        class="tabs-item"
        :class="{ active: tabIndex == 1 }"
        @click="slideTo(1)"
      >
        线下活动
      </div>
      <div
        class="tabs-item"
        :class="{ active: tabIndex == 2 }"
        @click="slideTo(2)"
      >
        线上活动
      </div>
      <div
        class="tabs-item"
        :class="{ active: tabIndex == 3 }"
        @click="slideTo(3)"
      >
        加入我们
      </div>
    </div>
    <div class="news-list">
      <swiper
        class="swiper"
        :style="style"
        :navigation="true"
        :modules="[Navigation]"
        @swiper="setSwiper"
        @slideChange="onSlideChange"
      >
        <!-- 最新 -->
        <swiper-slide
          class="slide stop-swiping"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- <swiper-slide class="slide stop-swiping"> -->
          <ul class="list">
            <li
              class="list-item"
              v-for="i in recentList"
              :key="i.id"
              @click="showDetail(i.id)"
            >
              <div class="title">{{ i.title }}</div>
              <div class="time">{{ i.showDate }}</div>
            </li>
          </ul>
        </swiper-slide>
        <!-- 线下 -->
        <swiper-slide
          class="slide stop-swiping"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- <swiper-slide class="slide stop-swiping"> -->
          <ul class="list">
            <li
              class="list-item"
              v-for="i in offlineList"
              :key="i.id"
              @click="showDetail(i.id)"
            >
              <div class="title">{{ i.title }}</div>
              <div class="time">{{ i.showDate }}</div>
            </li>
          </ul>
        </swiper-slide>
        <!-- 线上文章 -->
        <swiper-slide
          class="slide stop-swiping"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- <swiper-slide class="slide stop-swiping"> -->
          <ul class="list">
            <li
              class="list-item"
              v-for="i in onlineList"
              :key="i.id"
              @click="showDetail(i.id)"
            >
              <div class="title">{{ i.title }}</div>
              <div class="time">{{ i.showDate }}</div>
            </li>
          </ul>
        </swiper-slide>
        <!-- 招聘 -->
        <swiper-slide
          class="slide stop-swiping"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- <swiper-slide class="slide stop-swiping"> -->
          <ul class="list">
            <li
              class="list-item"
              v-for="i in zhaopinList"
              :key="i.id"
              @click="showDetail(i.id)"
            >
              <div class="title">
                {{ i.title }}
              </div>
              <div class="time">
                <span>{{ i.createTime }}</span
                ><label class="jz" v-if="i.tag">{{ i.tag }}</label
                ><span class="sub">{{ i.subTitle }}</span>
              </div>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
    <div class="footer-btn">
      <div class="btn" @click="hasMore">
        更多<img src="@/assets/h5/icon-jt.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  defineEmits,
  onMounted,
  nextTick,
  onBeforeMount,
} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";
import { useNewsStore } from "@/store/news";
import Toast from "@/utils/Toast";
const useNews = useNewsStore();

interface PageType {
  pageNum: number;
  pageSize: number;
}

const touchPosition = reactive({
  startTime: 0,
  startX: 0,
  startY: 0,
  endTime: 0,
  endX: 0,
  endY: 0,
});

const handleTouchStart = (e: any) => {
  touchPosition.startTime = e.timeStamp;
  touchPosition.startX = e.touches[0].clientX;
  touchPosition.startY = e.touches[0].clientY;
};
const handleTouchEnd = (e: any) => {
  touchPosition.endTime = e.timeStamp;
  touchPosition.endX = e.changedTouches[0].clientX;
  touchPosition.endY = e.changedTouches[0].clientY;

  const deltaX = touchPosition.endX - touchPosition.startX;
  const deltaY = touchPosition.endY - touchPosition.startY;

  // 判断滑动时间是否超过300ms
  if (touchPosition.endTime - touchPosition.startTime > 300) return;
  // 判断滑动方向
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      // console.log('向右滑动');
    } else {
      // console.log('向左滑动');
    }
  } else {
    if (deltaY > 0 && !isNone.value) {
      // console.log('向下滑动');
      emits("topage", 2);
    } else if (deltaY < 0 && !isNone.value) {
      // console.log('向上滑动');
      emits("topage", 4);
    }
  }
};

const recentPage = reactive<PageType>({
  pageNum: 1,
  pageSize: 6,
});
const recentList = ref<any>([]);
const offlinePage = reactive<PageType>({
  pageNum: 1,
  pageSize: 6,
});
const offlineList = ref<any>([]);
const onlinePage = reactive<PageType>({
  pageNum: 1,
  pageSize: 6,
});
const onlineList = ref<any>([]);
const zhaopinPage = reactive<PageType>({
  pageNum: 1,
  pageSize: 6,
});
const zhaopinList = ref<any>([]);
const emits = defineEmits(["showDetail", "topage"]);
const pageNum = ref(6);
const isNone = ref(false);
const tabIndex = ref(0);
const mySwiper = ref(null);
const style = reactive({
  "--swiper-navigation-color": "#fff",
  "--swiper-pagination-color": "#fff",
  "--swiper-navigation-size": "20px",
});
const active = ref<number>(0);
const setSwiper = (swiper: null) => {
  mySwiper.value = swiper;
};

const onSlideChange = () => {
  tabIndex.value = mySwiper.value.activeIndex;
};

const slideTo = (index: number) => {
  tabIndex.value = index;
  mySwiper.value.slideTo(index, 300);
  active.value = index;
  // getList(index);
};
const getList = (index: number) => {
  switch (index) {
    case 0:
      useNews
        .getRecentNewsList(recentPage)
        .then((res) => {
          if (res.data.code == "200") {
            // 最新文章
            recentList.value = res.data.rows;
            // recentList.value.push(
            //   ...res.data.rows,
            //   ...res.data.rows,
            //   ...res.data.rows,
            //   ...res.data.rows,
            //   ...res.data.rows
            // );
            // if (recentList.value.length >= 1000) {
            // if (recentList.value.length >= res.data.total) {
            //   ismore.value = false;
            // } else {
            //   ismore.value = true;
            // }
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case 1:
      useNews
        .getOfflineNewsList(offlinePage)
        .then((res) => {
          if (res.data.code == "200") {
            // 线下文章
            offlineList.value = res.data.rows;
            // offlineList.value.push(...res.data.rows);
            // if (offlineList.value.length >= res.data.total) {
            //   ismore.value = false;
            // } else {
            //   ismore.value = true;
            // }
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case 2:
      useNews
        .getOnlineNewsList(onlinePage)
        .then((res) => {
          if (res.data.code == "200") {
            // 线上文章
            onlineList.value = res.data.rows;
            // onlineList.value.push(...res.data.rows);
            // if (onlineList.value.length >= res.data.total) {
            //   ismore.value = false;
            // } else {
            //   ismore.value = true;
            // }
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case 3:
      useNews
        .getZhaoPinList(zhaopinPage)
        .then((res) => {
          if (res.data.code == "200") {
            // 招聘文章
            zhaopinList.value = res.data.rows;
            // // zhaopinList.value.push(...res.data.rows);
            // if (zhaopinList.value.length >= res.data.total) {
            //   ismore.value = false;
            // } else {
            //   ismore.value = true;
            // }
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      break;
  }
};

const getNowList = (pageNum: number) => {
  // switch (active.value) {
  //   case 0:
  //     recentPage.pageSize = pageNum;
  //     break;
  //   case 1:
  //     offlinePage.pageSize = pageNum;
  //     break;
  //   case 2:
  //     onlinePage.pageSize = pageNum;
  //     break;
  //   case 3:
  //     zhaopinPage.pageSize = pageNum;
  //     break;

  //   default:
  //     break;
  // }
  recentPage.pageSize = pageNum;
  offlinePage.pageSize = pageNum;
  onlinePage.pageSize = pageNum;
  zhaopinPage.pageSize = pageNum;
};
const hasMore = () => {
  isNone.value = true;
  getNowList(1000);
  getList(0);
  getList(1);
  getList(2);
  getList(3);
};
const hasNone = () => {
  isNone.value = false;
  nextTick(() => {
    // const pageNum = Math.floor(mySwiper.value?.height / 73) || 6;
    getNowList(pageNum.value);
    getList(0);
    getList(1);
    getList(2);
    getList(3);
  });
};
const showDetail = (id) => {
  emits("showDetail", id, active.value);
};
const slideList = ref([]);
const openNewsDetail = (url: string) => {
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const id = urlParams.get("newsId");
  if (id) {
    emits("showDetail", id);
  } else {
    window.open(url);
  }
};
// onBeforeMount(() => {
onMounted(() => {
  useNews
    .getSlideListMobile()
    .then((res) => {
      if (res.data.code == "200") {
        slideList.value = res.data.data;
      } else {
        Toast(res.data.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setTimeout(() => {
        pageNum.value =
          Math.floor(
            document.getElementsByClassName("news-list")[0].clientHeight / 73
          ) || 6;
        getNowList(pageNum.value);
        getList(0);
        getList(1);
        getList(2);
        getList(3);
      }, 1500);
    });
  // });
  // onMounted(() => {
  // nextTick(() => {
  // setTimeout(() => {
  //   pageNum.value =
  //     Math.floor(
  //       document.getElementsByClassName("news-list")[0].clientHeight / 73
  //     ) || 6;
  //   getNowList(pageNum.value);
  //   getList(0);
  //   getList(1);
  //   getList(2);
  //   getList(3);
  // }, 3500);
  // });

  // nextTick(() => {
  //   console.log(
  //     mySwiper.value?.height,
  //     swiperHeight.value.clientHeight,
  //     document.getElementById("swiperHeight")?.clientHeight,
  //     888899999
  //   );
  // });
});
</script>
<style lang="scss">
.news-list .swiper-button-disabled {
  display: none;
}
</style>
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
      height: 16px;
      line-height: 16px;
      span {
        // display: inline-block;
      }
      label {
        // display: inline-block;
        color: #fff;
        font-size: 12px;
        // height: 16px;
        // line-height: 16px;
        // min-width: 30px;
        text-align: center;
        vertical-align: middle;
        border-radius: 3px;
        margin: 0 4px;
        padding: 0 2px;

        &.jz {
          background-color: #948ce0;
          display: inline-block;
          min-width: 30px;
          max-width: 120px;
          height: 16px;
          overflow: hidden;
        }

        &.cq {
          background-color: #5dacf5;
        }
      }
      .sub {
        color: #424242;
      }
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
