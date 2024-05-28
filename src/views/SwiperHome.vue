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
                <NewsComp :total=100 @showNewsInner="showNewsInner" />
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

          <!--新闻内容页面-->
          <div class="news-context" :class="showNews ? 'show-news' : ''">
            <a class="news-back" @click="closeNews"><img src="../images/back.png" /></a>
            <div class="news-context-box">
              <b class="news-title">cp30参展决定！</b>
              <span class="news-small-text">2024/01/15</span>

              <div class="news-inner-context">
                <img src="../images/inner-text.png" />

                <p>尊敬的电波谷子居民：</p>
                <p>你好</p>
                这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。
                这里要能跳转链接：哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
              </div>
            </div>
          </div>
        </div>
        <a class="next-page" @click="changePage(++index)"><img src="../images/down-arrow.png" /></a>
      </div>
      <!--兑换码-->
      <div class="wrapper-slider secondStyle">
        <div class="wrapper-conpect">
          <div class="wrapper-change-code">
            <b class="change-code-title">线下兑换码</b>
            <div class="change-code-ipt"><label>谷子编号</label><input type="text" /></div>
            <div class="change-code-ipt"><label>兑换码</label><input type="text" /></div>
            <div style="text-align: center;"><a><img src="../images/exchange.png" alt="兑换" /></a></div>
          </div>
        </div>
        <a class="next-page" @click="changePage(++index)"><img src="../images/down-arrow.png" /></a>
      </div>
      <!--联系我们-->
      <div class="wrapper-slider secondStyle">
        <div class="wrapper-conpect">
          <div class="qr-content">
            <div>
              <img src="../images/qr-code.png" />
              QQ客服
            </div>
            <div>
              <img src="../images/qr-code.png" />
              微信客服
            </div>
          </div>

          <div class="contact-text">
            <div class="contact-logo">
              <img src="../images/logo.png" />
            </div>
            <div class="context-p">
              <p>ICP备案号：苏ICP备2023053104号|网络备案号：苏公安网备32100102010183号 </p>
              <p>增值电信业务经营许可证：苏B2-20240128号</p>
              <p>营业执照</p>
              <p>运营单位：电波谷子（扬州）科技有限公司 </p>
              <p>电波谷子（扬州）科技有限公司 版权所有</p>
              <p>电子邮箱：business@dianboguzi.com</p>
            </div>

            <span></span>
          </div>
        </div>
      </div>
    </div>


    <!--弹出框-->
    <DBMessage :title="popAttr.title" :text="popAttr.text" :visible="popAttr.visible" @hidePopbox="hidePopbox" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import PCHeader from '../components/PCHeader.vue'
import NewsComp from '../components/NewsComp.vue'
import DBMessage from '../components/DBMessage.vue'

// 弹出框配置
const popAttr = reactive<RulePopbox>({
  title: '', // 标题
  text: '', // 内容
  visible: false // 显示隐藏
})

interface RulePopbox {
  title: string
  text?: string
  visible: boolean
}

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
const showNews = ref<boolean>(false)
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


const openPopbox = (payload: RulePopbox) => {
  popAttr.visible = payload.visible
  popAttr.title = payload.title
  popAttr.text = payload.text ? payload.text : ''
}

// 打开弹出框
openPopbox({ visible: true, title: '兑换成功！', text: '请检查兑换码是否输入错误' })


// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false
}

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


// 滚动到指定的页面
const changePage = (page: number) => {
  index.value = page
  window.removeEventListener('mousewheel', wheelScroll, false)
  window.addEventListener('mousewheel', wheelScroll, false)
  goIndex()
}

const showNewsInner = (id: number) => {
  showNews.value = true

  window.removeEventListener('mousewheel', wheelScroll, false)
  clearTimeout(timer.value)
  console.log(id)
}

const closeNews = () => {
  showNews.value = false
  window.addEventListener('mousewheel', wheelScroll, false)
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
/* 为所有的滚动条设置样式 */
::-webkit-scrollbar {
  width: 6px;
  border-radius: 50%;
  /* 设置滚动条的宽度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: transparent;
  /* 设置轨道的背景颜色 */
}

/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background: rgba(168, 168, 168);
  /* 设置滑块的背景颜色 */
}

/* 当滑块悬停或活动时的样式 */
::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 168, 168);
  /* 设置悬停或活动状态下的滑块颜色 */
}

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
    position: relative;
    padding: 160px 115px 0 115px;
    min-width: 1300px;
    height: calc(100vh - 126px);
    overflow: hidden;

    .news-context {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 200;
      display: none;
      justify-content: flex-end;
      width: 100%;
      padding-right: 110px;
      height: calc(100vh - 126px);
      box-sizing: border-box;
      background-image: linear-gradient(90deg, #fff, rgb(235, 239, 253), rgb(244, 230, 249));

      .news-back {
        position: absolute;
        left: 120px;
        top: 95px;
        z-index: 201;
        cursor: pointer;

        img {
          width: 84px;
        }
      }

      .news-context-box {
        position: relative;
        width: 1300px;
        padding: 0 20px 50px 10px;
        box-sizing: border-box;
        overflow-y: scroll;

        b.news-title {
          display: block;
          font-size: 50px;
          text-align: center;
          color: #484751;
          margin-bottom: 16px;
          font-weight: 300;
        }

        .news-small-text {
          display: block;
          color: #484751;
          font-size: 24px;
          margin-bottom: 16px;
          text-align: center;
          font-weight: 200;
        }

        .news-inner-context {
          font-size: 24px;
          line-height: 32px;

          img {
            max-width: 100%;
          }
        }


      }

    }

    .show-news {
      display: flex;
    }

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

    .wrapper-change-code {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 823px;
      height: 530px;
      background-color: rgba(255, 255, 255, 0.5);
      transform: translate(-50%, -50%);
      border-radius: 30px;
      padding: 52px 66px;
      box-sizing: border-box;

      .change-code-title {
        display: block;
        font-size: 40px;
        color: #424243;
        text-align: center;
        margin-bottom: 56px;
      }

      .change-code-ipt {
        display: flex;
        margin-bottom: 34px;
        align-items: center;

        label {
          display: block;
          width: 125px;
          font-size: 24px;
        }

        input[type='text'] {
          width: 495px;
          height: 68px;
          background-color: #fff;
          border: 0;
          border-radius: 10px;
          font-size: 24px;
          padding: 0 10px;
          box-sizing: border-box;
          outline: none;
        }
      }

      a {
        cursor: pointer;
      }
    }

    .contact-text {
      position: absolute;
      left: 0;
      bottom: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 246px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 42px 111px;
      box-sizing: border-box;
      border-top: 1px solid #000;

      .contact-logo {
        img {
          height: 120px;
        }
      }

      .context-p {
        p {
          font-size: 22px;
          margin: 5px 0;
          font-weight: 500;
        }
      }
    }

    .qr-content {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      &>div {
        margin: 0 104px;
        width: 350px;
        text-align: center;
        font-size: 32px;
        color: #3D3D3D;
        font-weight: 300;

        img {
          width: 350px;
          display: block;
          margin-bottom: 17px;
        }
      }
    }
  }
}

.secondStyle {
  background-image: linear-gradient(90deg, rgb(208, 230, 250) 20%, rgb(190, 218, 250) 30%, rgb(223, 217, 249));
}
</style>