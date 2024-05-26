<template>
  <div class="swiper-wrapper-content">
    <PCHeader :currentIndex="index" @changePage="changePage" />
    <div class="warpper-container" id="warpper-container">

      <!--首页-->
      <div class="wrapper-slider wrapper-home">
        <div class="wrapper-home-content">
          <div class="wrapper-box">
            <div class="wrapper-dl-content">
              <img src="../images/logo.png" class="logo-img" />
              <img src="../images/ios-dl.png" />
              <img src="../images/android-dl.png" />
              <div class="home-qr">
                <div class="qr-block"></div>
                <span>扫码下载APP</span>
              </div>
            </div>
          </div>

          <img src="../images/home-bg.png" class="wrapper-content-flower" :class="move ? 'flower-move' : ''" />
          <img src="../images/dbgz-text1.png" class="home-title-text" :class="move ? 'text-move' : ''" />
        </div>
      </div>
      <!--概念展示-->
      <div class="wrapper-slider">
        <div class="wrapper-conpect">
          <div class="conpect-leftnav">
            <ul>
              <li v-for="item in conpectNav" :key="item.id" :class="item.id === conpectIndex ? 'active' : ''"
                @click="setConpectIndex(item.id)">{{
      item.title }}</li>
            </ul>
          </div>
          <div class="conpect-content">
            <div class="conpect-content-inner" id="conpect-content">
              <div><img src="../images/bingtu.png" class="conpect-img" /></div>
              <div><img src="../images/dzgz.png" class="conpect-img" /></div>
              <div><img src="../images/tonggui.png" class="conpect-img" /></div>
            </div>
          </div>
        </div>
        <a class="next-page" @click="changePage(++index)"><img src="../images/down-arrow.png" /></a>
      </div>
      <!--新闻-->
      <div class="wrapper-slider">
        <div class="wrapper-conpect">
          <div class="conpect-leftnav">
            <ul>
              <li v-for="item in newsNav" :key="item.id" :class="item.id === newsIndex ? 'active' : ''"
                @click="setNewsIndex(item.id)">{{
      item.title }}</li>
            </ul>
          </div>
          <div class="conpect-content">
            <div class="conpect-content-inner" id="news-content">
              <div class="news-list">
                <NewsComp :total=100 />
              </div>
              <div class="news-list">
                <NewsComp />
              </div>
              <div class="news-list">
                <NewsComp />
              </div>
              <div class="news-list">
                <NewsComp />
              </div>
            </div>
          </div>
        </div>
        <a class="next-page" @click="changePage(++index)"><img src="../images/down-arrow.png" /></a>
      </div>
      <div class="wrapper-slider">兑换码</div>
      <div class="wrapper-slider">联系我们</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PCHeader from '../components/PCHeader.vue'
import NewsComp from '../components/NewsComp.vue'

const index = ref<number>(2)
const isScroll = ref(true)
const move = ref(false)
const timer = ref(null)
let warpper = null
let sliderWapper = null
let conpectBox = null
let newsBox = null
const conpectIndex = ref<number>(0)
const newsIndex = ref<number>(0)
const newsNav = ref([
  { title: '最新', id: 0 },
  { title: '线上活动', id: 1 },
  { title: '线下活动', id: 2 },
  { title: '联系我们', id: 3 }
])
const conpectNav = ref([
  { title: '柄图', id: 0 },
  { title: '电子谷子', id: 1 },
  { title: '痛柜', id: 2 }
])

const setConpectIndex = (id: number) => {
  conpectIndex.value = id
  conpectBox.style.top = -conpectBox.clientHeight * conpectIndex.value + 'px'
}

const setNewsIndex = (id: number) => {
  newsIndex.value = id
  newsBox.style.top = -newsBox.clientHeight * newsIndex.value + 'px'
}

const goIndex = () => {
  (warpper as HTMLElement).style.top = -index.value * 100 + 'vh'
}

const changePage = (page: number) => {
  index.value = page
  goIndex()
}

const wheelScroll = (e: any) => {
  if (!isScroll.value) {
    return false
  }

  isScroll.value = false
  if (e.wheelDelta > 0) {

    // 判断是否在第二页
    if (index.value === 1 && conpectIndex.value > 0) {
      // 先滚动第二页数据
      setConpectIndex(--conpectIndex.value)
    } else if (index.value === 2 && newsIndex.value > 0) {
      setNewsIndex(--newsIndex.value)
    } else {
      index.value === 0 ? 0 : index.value--
    }
  } else {
    // 判断是否在第二页
    if (index.value === 1 && conpectIndex.value < 2) {
      // 先滚动第二页数据
      setConpectIndex(++conpectIndex.value)
    } else if (index.value === 2 && newsIndex.value < 3) {
      setNewsIndex(++newsIndex.value)
    } else {
      index.value >= sliderWapper.length - 1 ? sliderWapper.length : index.value++
    }
  }
  goIndex()
  setTimeout(() => {
    isScroll.value = true
  }, 300)
}

onMounted(() => {
  timer.value = setTimeout(() => {
    move.value = true
  }, 300)


  warpper = document.getElementById('warpper-container') as HTMLElement
  conpectBox = document.getElementById('conpect-content') as HTMLElement
  newsBox = document.getElementById('news-content') as HTMLElement
  sliderWapper = document.querySelectorAll('.wrapper-slider')
  window.addEventListener('mousewheel', wheelScroll, false)
  goIndex()
})

onUnmounted(() => {
  window.removeEventListener('mousewheel', wheelScroll, false)
  clearTimeout(timer.value)
})

</script>

<style lang="scss">
.swiper-wrapper-content {
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(90deg, #fff, rgb(235, 239, 253), rgb(244, 230, 249));
  overflow: hidden;

  .warpper-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 500vh;
    transition: 0.3s;

    .wrapper-slider {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;

      .news-list {
        width: 1100px;

        .news-ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 120px;
            border: 1px solid #837BAD;
            font-size: 30px;
            color: #484751;
            line-height: 120px;
            margin-bottom: 20px;
            padding: 0 30px;
            box-sizing: border-box;
            cursor: pointer;

            span {
              white-space: nowrap;
              flex: 1;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            i {
              font-size: 22px;
              color: #484751;
              width: 200px;
              margin-left: 20px;
            }
          }
        }
      }

      .next-page {
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 40px;
        height: 38px;
        transform: translate(-50%, 0);
        cursor: pointer;

        img {
          width: 40px;
          display: block;
        }
      }
    }

    .wrapper-box {
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding: 160px 280px 0 115px;
      box-sizing: border-box;
      z-index: 10;
    }
  }

  .wrapper-home {
    position: relative;
    width: 100%;
    height: 100vh;

    .wrapper-dl-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 190px;

      .home-qr {
        text-align: center;

        .qr-block {
          width: 190px;
          height: 190px;
          background-color: #AAAAAA;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        span {
          color: #3D3D3D;
          font-size: 16px;
          display: block;
          font-weight: 300;
        }
      }

      img {
        display: block;
        width: 190px;
        margin-bottom: 20px;
      }

      .logo-img {
        width: 160px;
      }
    }

    .wrapper-content-flower {
      position: absolute;
      right: 0;
      top: 100vh;
      height: 100vh;
      transition: 0.5s;
    }

    .flower-move {
      top: 0;
    }

    .home-title-text {
      position: absolute;
      right: 35%;
      top: -50vh;
      height: 160px;
      transform: translate(-50%, -50%);
      transition: 0.5s;
    }

    .text-move {
      top: 50vh;
    }
  }

  .wrapper-conpect {
    padding: 160px 115px 0 115px;
    min-width: 1300px;
    height: calc(100vh - 126px);
    overflow: hidden;

    .conpect-leftnav {
      float: left;
      width: 145px;
      margin-top: 80px;

      ul {
        flex: 1;

        li {
          font-size: 35px;
          font-weight: 300;
          text-align: center;
          margin-bottom: 60px;
          cursor: pointer;

          &.active {
            color: #7465AD;
          }
        }
      }
    }

    .conpect-content {
      position: relative;
      float: right;
      height: 100%;
      width: 1100px;
      overflow: hidden;

      .conpect-content-inner {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1100px;
        transition: 0.5s;

        &>div {
          height: 100%;

          .conpect-img {
            max-width: 1100px;
            max-height: calc(100vh - 126px);
          }
        }

      }
    }
  }
}
</style>