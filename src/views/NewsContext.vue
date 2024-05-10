<template>
  <div class="news-detail-contanier">
    <div class="news-outer">
      <div class="concept-bg"></div>
      <DHeader></DHeader>
      <div class="news-detail">
        <div class="news-detail-left">
          <ul>
            <li
              @click="setType(1)"
              class="left-item"
              :class="{ active: type === 1 }"
            >
              最新
            </li>
            <li
              @click="setType(2)"
              class="left-item"
              :class="{ active: type === 2 }"
            >
              线上活动
            </li>
            <li
              @click="setType(3)"
              class="left-item"
              :class="{ active: type === 3 }"
            >
              线下活动
            </li>
            <li
              @click="setType(4)"
              class="left-item"
              :class="{ active: type === 4 }"
            >
              加入我们
            </li>
          </ul>
        </div>
        <div class="news-detail-right">
          <div v-if="type === 1" class="news-content">
            <h3>cp30参展决定！</h3>
            <p class="news-content-date">2024/01/15</p>
            <div class="news-content-text">
              尊敬的电波谷子居民：<br />
              你好<br />
              这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。
              这里要能跳转链接：哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
            </div>
          </div>
          <div v-if="type === 4" class="news-content2">
            <h3>二次元运营（线下）</h3>
            <p class="news-content-date">
              扬州丨运营类丨全职/兼职 2024/04/25 发布
            </p>
            <h4>职位描述</h4>
            <div class="news-content-text">
              尊敬的电波谷子居民：<br />
              你好<br />
              这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新
              请投递至邮箱：
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="news-m-outer">
      <div class="menu-slider-login">
        <MenuSlider />
      </div>
      <div
        class="news-context"
        :class="route.query.type === 'CONTACT' ? 'contact-context' : ''"
      >
        <h2>
          [谷美]电波谷子平台“眼若星辰”系列谷美贩售途径一览
          <!-- <span class="jz">急招</span> -->
          <span class="cq">长期</span>
        </h2>
        <div class="news-time">发布时间：2024-6-1</div>
        <div class="context-inner">
          <img src="../assets/news-img.png" />
          尊敬的电波谷子居民： 你好
          这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。
          这里要能跳转链接：哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuSlider from "../components/MenuSlider.vue";
import DHeader from "../components/DHeader.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const type = ref<number>(Number(route.query.type) || 1);
const setType = (num: number) => {
  router.push(`/news?type=${num}`);
};
</script>

<style lang="scss" scoped>
.news-detail-contanier {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, #b2d6fa, #f8d3f8);
  position: relative;
  .concept-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100%;
    background: url("../assets/concept.png") no-repeat 100% 100%;
    background-size: 100% 100%;
  }
  .news-detail {
    display: flex;
    position: relative;
    box-sizing: border-box;
  }
  .news-detail-left {
    width: 22%;
    box-sizing: border-box;
    padding-top: 70px;
    .left-item {
      text-align: center;
      font-size: 0.36rem;
      margin-bottom: 1rem;
      cursor: pointer;
      &:hover {
        color: #6960a7;
      }
    }
    .active {
      color: #6960a7;
    }
  }
  .news-detail-right {
    position: relative;
    width: 78%;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .news-content {
    width: 11rem;
    max-width: 90%;
    height: 7.72rem;
    border: 1px solid #ccc;
    background: #fff;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0.4rem;
    h3 {
      text-align: center;
      font-size: 0.4rem;
    }
    .news-content-date {
      text-align: center;
      font-size: 0.22rem;
      line-height: 3;
    }
    .news-content-text {
      font-size: 0.24rem;
      line-height: 1.5;
    }
  }
  .news-content2 {
    width: 11rem;
    height: 7.72rem;
    max-width: 90%;
    border: 1px solid #ccc;
    background: #fff;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0.4rem;
    h3 {
      font-size: 0.48rem;
      color: #564f84;
    }
    .news-content-date {
      font-size: 0.24rem;
      line-height: 3;
    }
    h4 {
      font-size: 0.4rem;
      color: #484751;
      margin: 0.6rem 0 0.2rem 0;
    }
    .news-content-text {
      font-size: 0.24rem;
      line-height: 1.5;
    }
  }
}
.news-m-outer {
  display: none;
}
@media screen and (max-width: 750px) {
  .news-outer {
    display: none;
  }
  .news-m-outer {
    display: block !important;
    padding: 0.9rem 0.4rem;
    .menu-slider-login {
      margin-bottom: 0.8rem;
    }
    .news-context {
      padding: 0.4rem;
      background-color: #fff;
      border-radius: 0.4rem;
      h2 {
        font-family: PingFang SC;
        font-size: 0.4rem;
        color: #565151;
        text-align: center;
        font-weight: 300;
        line-height: 0.6rem;
        margin-bottom: 0.3rem;
      }
      .news-time {
        text-align: center;
        font-family: PingFang SC;
        font-size: 0.24rem;
        color: #c1c1c1;
        margin-bottom: 0.3rem;
      }
      .context-inner {
        color: #707070;
        font-size: 0.28rem;
        line-height: 0.48rem;
        font-family: PingFang SC;
        img {
          max-width: 100%;
        }
      }
    }
    .contact-context {
      h2 {
        font-size: 0.5rem;
        color: #565151;
        font-family: PingFang SC;
        line-height: 0.72rem;
        text-align: left;
        span {
          font-size: 0.3rem;
          display: inline-block;
          vertical-align: middle;
          padding: 0 0.2rem;
          border-radius: 0.3rem;
          height: 0.48rem;
          line-height: 0.48rem;
          color: #fff;
          &.jz {
            background-color: #948ce0;
          }
          &.cq {
            background-color: #5dacf5;
          }
        }
      }
      .news-time {
        font-size: 0.28rem;
        color: #868686;
        text-align: left;
      }
    }
  }
}
</style>
