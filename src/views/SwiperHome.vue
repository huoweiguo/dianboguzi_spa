<template>
  <div class="swiper-wrapper-content">
    <PCHeader :currentIndex="index" @changePage="changePage" :isHome="index !== 0" />
    <div class="warpper-container" id="warpper-container">
      <!--首页-->
      <div class="wrapper-slider wrapper-home">
        <img src="../images/home-bg.png" class="wrapper-content-flower" :class="move ? 'flower-move' : ''" />

        <div class="wrapper-home-content">
          <div class="wrapper-box">
            <div class="wrapper-dl-content">
              <img src="../images/logo.png" class="logo-img" />
              <img @click="toUrl('https://www.bilibili.com/read/cv35161616/?jump_opus=1')" src="../images/ios-dl.png" />
              <img @click="toUrl('https://down.ez6.com.cn/app.php/86')" src="../images/android-dl.png" />
              <div class="home-qr">
                <div class="qr-block"></div>
                <span>扫码加入内测群</span>
              </div>
            </div>
          </div>
          <img src="../images/dbgz-text1.png" class="home-title-text" :class="move ? 'text-move' : ''" />
        </div>
      </div>
      <!--概念展示-->
      <div class="wrapper-slider">
        <div class="wrapper-conpect">
          <div class="conpect-leftnav">
            <ul>
              <li v-for="item in conpectNav" :key="item.id" :class="item.id === conpectIndex ? 'active' : ''"
                @click="setConpectIndex(item.id)">
                {{ item.title }}
              </li>
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
                @click="setNewsIndex(item.id)">{{ item.title }}</li>
            </ul>
          </div>
          <div class="conpect-content">
            <div class="conpect-content-inner" id="news-content">
              <div class="news-list">
                <NewsComp :total="100" @showNewsInner="showNewsInner" />
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
            <a><img src="../images/exchange.png" alt="兑换" /></a>
          </div>
        </div>
        <a class="next-page" @click="changePage(++index)"><img src="../images/down-arrow.png" /></a>
      </div>
      <!--联系我们-->
      <div class="wrapper-slider secondStyle">
        <div class="wrapper-conpect">
          <div class="qr-content">
            <div>
              <img src="../images/kf-2.png" />
              QQ客服
            </div>
            <div>
              <img src="../images/kf-1.png" />
              微信客服
            </div>
          </div>
        </div>
        <div class="contact-text">
          <div class="contact-logo">
            <img src="../images/logo.png" />
          </div>
          <div class="context-p">
            <p>ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023053104号</a> |
              网络备案号：<a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">苏公安网备32100102010183号</a>
            </p>
            <p>增值电信业务经营许可证：苏B2-20240128号</p>
            <p>营业执照</p>
            <p>运营单位：电波谷子（扬州）科技有限公司</p>
            <p>电波谷子（扬州）科技有限公司 版权所有</p>
            <p>电子邮箱：business@dianboguzi.com</p>
          </div>

          <span></span>
        </div>
      </div>
    </div>

    <!--弹出框-->
    <DBMessage :title="popAttr.title" :text="popAttr.text" :visible="popAttr.visible" @hidePopbox="hidePopbox" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import PCHeader from '../components/PCHeader.vue';
import NewsComp from '../components/NewsComp.vue';
import DBMessage from '../components/DBMessage.vue';

import isMobile from '@/utils/isMobile';
isMobile();

// 弹出框配置
const popAttr = reactive<RulePopbox>({
  title: '', // 标题
  text: '', // 内容
  visible: false, // 显示隐藏
});

interface RulePopbox {
  title: string;
  text?: string;
  visible: boolean;
}

const index = ref<number>(0);
const isScroll = ref(true);
const move = ref(false);
const timer = ref(null);
let warpper = null;
let sliderWapper = null;
let conpectBox = null;
let newsBox = null;
const conpectIndex = ref<number>(0);
const newsIndex = ref<number>(0);
const showNews = ref<boolean>(false);
const newsNav = ref([
  { title: '最新', id: 0 },
  { title: '线上活动', id: 1 },
  { title: '线下活动', id: 2 },
  { title: '加入我们', id: 3 },
]);
const conpectNav = ref([
  { title: '柄图', id: 0 },
  { title: '电子谷子', id: 1 },
  { title: '痛柜', id: 2 },
]);

const toUrl = (url:string) => {
  window.open(url, '_blank');
};
const resetScreen = () => {
  var oHtml = document.querySelector('html');
  var clientW = document.documentElement.clientWidth;
  if (clientW > 750) {
    let screenWidth = (clientW / 750) * 100 < 200 ? (clientW / 750) * 100 : 200;
    oHtml.style.fontSize = screenWidth + 'px';
  }
};

const openPopbox = (payload: RulePopbox) => {
  popAttr.visible = payload.visible;
  popAttr.title = payload.title;
  popAttr.text = payload.text ? payload.text : '';
};

// 打开弹出框
openPopbox({ visible: false, title: '兑换成功！', text: '请检查兑换码是否输入错误' });

// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false;
};

const setConpectIndex = (id: number) => {
  conpectIndex.value = id;
  conpectBox.style.top = -conpectBox.clientHeight * conpectIndex.value + 'px';
};

const setNewsIndex = (id: number) => {
  newsIndex.value = id;
  newsBox.style.top = -newsBox.clientHeight * newsIndex.value + 'px';
};

const goIndex = () => {
  (warpper as HTMLElement).style.top = -index.value * 100 + 'vh';
};

// 滚动到指定的页面
const changePage = (page: number) => {
  index.value = page;
  window.removeEventListener('mousewheel', wheelScroll, false);
  window.addEventListener('mousewheel', wheelScroll, false);
  goIndex();
};

const showNewsInner = (id: number) => {
  showNews.value = true;

  window.removeEventListener('mousewheel', wheelScroll, false);
  clearTimeout(timer.value);
  console.log(id);
};

const closeNews = () => {
  showNews.value = false;
  window.addEventListener('mousewheel', wheelScroll, false);
};

const wheelScroll = (e: any) => {
  if (!isScroll.value) {
    return false;
  }

  isScroll.value = false;
  if (e.wheelDelta > 0) {
    // 判断是否在第二页
    if (index.value === 1 && conpectIndex.value > 0) {
      // 先滚动第二页数据
      setConpectIndex(--conpectIndex.value);
    } else if (index.value === 2 && newsIndex.value > 0) {
      setNewsIndex(--newsIndex.value);
    } else {
      index.value === 0 ? 0 : index.value--;
    }
  } else {
    // 判断是否在第二页
    if (index.value === 1 && conpectIndex.value < 2) {
      // 先滚动第二页数据
      setConpectIndex(++conpectIndex.value);
    } else if (index.value === 2 && newsIndex.value < 3) {
      setNewsIndex(++newsIndex.value);
    } else {
      index.value >= sliderWapper.length - 1 ? sliderWapper.length : index.value++;
    }
  }
  goIndex();
  setTimeout(() => {
    isScroll.value = true;
  }, 300);
};

onMounted(() => {
  timer.value = setTimeout(() => {
    move.value = true;
  }, 300);

  // 跟进当前路由跳转到指定页面
  const currentIndex = localStorage.getItem('currentIndex');
  localStorage.removeItem('currentIndex');
  index.value = currentIndex ? parseInt(currentIndex) : 0;

  warpper = document.getElementById('warpper-container') as HTMLElement;
  conpectBox = document.getElementById('conpect-content') as HTMLElement;
  newsBox = document.getElementById('news-content') as HTMLElement;
  sliderWapper = document.querySelectorAll('.wrapper-slider');
  window.addEventListener('mousewheel', wheelScroll, false);
  goIndex();

  // 设置html字体
  resetScreen();
  window.addEventListener('resize', resetScreen, false);
});

onUnmounted(() => {
  window.removeEventListener('mousewheel', wheelScroll, false);
  clearTimeout(timer.value);
  window.removeEventListener('resize', resetScreen, false);
});
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
        width: 5.5rem;

        .news-ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.2rem;
            border: 1px solid #837bad;
            font-size: 0.3rem;
            color: #484751;
            line-height: 1.2rem;
            margin-bottom: 0.2rem;
            padding: 0 0.3rem;
            box-sizing: border-box;
            cursor: pointer;

            span {
              white-space: nowrap;
              flex: 1;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            i {
              font-size: 0.22rem;
              color: #484751;
              width: 2rem;
              margin-left: 0.2rem;
            }
          }
        }
      }

      .next-page {
        position: absolute;
        left: 50%;
        bottom: 0.1rem;
        width: 0.18rem;
        height: 0.18rem;
        transform: translate(-50%, 0);
        cursor: pointer;

        img {
          width: 0.18rem;
          display: block;
        }
      }
    }

    .wrapper-box {
      position: relative;
      max-width: 7.5rem;
      margin: 0.9rem auto 0;
      padding: 0 0.2rem;
      box-sizing: border-box;
      z-index: 10;
    }
  }

  .wrapper-home {
    position: relative;
    width: 100%;
    height: 100vh;

    .wrapper-home-content {
      position: relative;
      max-width: 7.5rem;
      margin: 0 auto;
    }

    .wrapper-dl-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 0.8rem;
      cursor: pointer;

      .home-qr {
        text-align: center;

        .qr-block {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 0.05rem;
          margin-bottom: 0.05rem;
          background: url("../assets/WeChat.jpg") no-repeat 100% 100%;
          background-size: 100% 100%;
        }

        span {
          color: #3d3d3d;
          font-size: 0.08rem;
          display: block;
          font-weight: 300;
        }
      }

      img {
        display: block;
        width: 0.8rem;
        margin-bottom: 0.1rem;
      }

      .logo-img {
        width: 0.7rem;
      }
    }

    .wrapper-content-flower {
      position: absolute;
      right: 0;
      top: 100vh;
      height: 100%;
      transition: 0.5s;
    }

    .flower-move {
      top: 0;
    }

    .home-title-text {
      position: absolute;
      left: 2.06rem;
      top: -3rem;
      height: 0.8rem;
      transition: 0.5s;
    }

    .text-move {
      top: 0.92rem;
    }
  }

  .wrapper-conpect {
    position: relative;
    max-width: 7.5rem;
    margin: 0 auto;
    height: calc(100vh - 0.63rem);
    padding: 0.9rem 0.2rem 0;
    overflow: hidden;

    .news-context {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 200;
      display: none;
      justify-content: flex-end;
      width: 100%;
      height: calc(100vh - 0.63rem);
      box-sizing: border-box;
      background-image: linear-gradient(90deg, #fff, rgb(235, 239, 253), rgb(244, 230, 249));

      .news-back {
        position: absolute;
        left: 0.2rem;
        top: 0.1rem;
        z-index: 201;
        cursor: pointer;
        display: block;

        img {
          display: block;
          width: 0.42rem;
        }
      }

      .news-context-box {
        position: relative;
        width: 6.5rem;
        padding: 0 0.1rem 0.5rem 0.05rem;
        box-sizing: border-box;
        overflow-y: scroll;

        b.news-title {
          display: block;
          font-size: 0.25rem;
          text-align: center;
          color: #484751;
          margin-bottom: 0.08rem;
          font-weight: 300;
        }

        .news-small-text {
          display: block;
          color: #484751;
          font-size: 0.12rem;
          margin-bottom: 0.08rem;
          text-align: center;
          font-weight: 200;
        }

        .news-inner-context {
          font-size: 0.12rem;
          line-height: 0.16rem;

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
      width: 0.77rem;
      margin-top: 0.4rem;

      ul {
        flex: 1;

        li {
          font-size: 0.17rem;
          font-weight: 300;
          text-align: center;
          margin-bottom: 0.3rem;
          cursor: pointer;

          &.active {
            color: #7465ad;
          }
        }
      }
    }

    .conpect-content {
      position: relative;
      float: right;
      height: 100%;
      max-width: 5.5rem;
      width: 100%;
      overflow: hidden;

      .conpect-content-inner {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        max-width: 5.5rem;
        transition: 0.5s;

        &>div {
          height: 100%;

          .conpect-img {
            max-width: 5.5rem;
            max-height: calc(100vh - 1.23rem);
          }
        }
      }
    }

    .wrapper-change-code {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 4.11rem;
      height: 2.65rem;
      background-color: rgba(255, 255, 255, 0.5);
      transform: translate(-50%, -50%);
      border-radius: 0.15rem;
      padding: 0.26rem 0.33rem;
      box-sizing: border-box;

      .change-code-title {
        display: block;
        font-size: 0.2rem;
        color: #424243;
        text-align: center;
        margin-bottom: 0.28rem;
      }

      .change-code-ipt {
        display: flex;
        margin-bottom: 0.17rem;
        align-items: center;

        label {
          display: block;
          width: 0.62rem;
          font-size: 0.12rem;
        }

        input[type='text'] {
          width: 2.48rem;
          height: 0.34rem;
          background-color: #fff;
          border: 0;
          border-radius: 0.05rem;
          font-size: 0.12rem;
          padding: 0 0.05rem;
          box-sizing: border-box;
          outline: none;
        }
      }

      a {
        display: block;
        width: 1.2rem;
        margin: 0.28rem auto 0;
        cursor: pointer;

        img {
          display: block;
          width: 1.2rem;
        }
      }
    }

    .qr-content {
      display: flex;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, calc(-50% - 0.5rem));

      &>div {
        margin: 0 0.52rem;
        width: 1.5rem;
        text-align: center;
        font-size: 0.14rem;
        color: #3d3d3d;
        font-weight: 300;

        img {
          width: 1.5rem;
          display: block;
          margin-bottom: 0.09rem;
        }
      }
    }
  }

  .contact-text {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.23rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.21rem 0.55rem;
    box-sizing: border-box;
    border-top: 1px solid #000;

    .contact-logo {
      img {
        height: 0.6rem;
      }
    }

    .context-p {
      p {
        font-size: 0.11rem;
        margin: 0.03rem 0;
        font-weight: 500;
        line-height: 0.12rem;

        a {
          color: #000;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.secondStyle {
  background-image: linear-gradient(90deg, rgb(208, 230, 250) 20%, rgb(190, 218, 250) 30%, rgb(223, 217, 249));
}
</style>
