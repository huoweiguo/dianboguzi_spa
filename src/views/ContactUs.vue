<template>
  <!--PC-->
  <div class="contactUs-contanier">
    <div class="concept-bg"></div>
    <DHeader></DHeader>
    <div class="contactUs-box">
      <div class="service">
        <div class="index-qrcode"></div>
        <p class="service-title">QQ客服</p>
      </div>
      <div class="service">
        <div class="index-qrcode"></div>
        <p class="service-title">微信客服</p>
      </div>
    </div>
    <div class="contactUs-email">电子邮箱：business@dianboguzi.com</div>
  </div>
  <!--移动端-->
  <div class="contactUs-m-container">
    <div class="contactUs-m-content">
      <MenuSlider />
      <div class="contactUs-m-img">
        <img src="../assets/contactUs_img.png" alt="" />
      </div>
      <div class="contactUs-m-img2">
        <img src="../assets/contactUs_img2.png" alt="" />
      </div>
      <div class="contactUs-m-btn">
        <div class="contactUs-m-btnText">关注B站</div>
        <div class="contactUs-m-btnText">关注微博</div>
      </div>
      <div class="contactUs-m-service">客服请联系</div>
      <div class="contactUs-m-box">
        <div class="contactUs-m-service2">
          <div class="contactUs-m-qrcode"></div>
          <p class="contactUs-m-title">微信客服</p>
        </div>
        <div class="contactUs-m-service2">
          <div class="contactUs-m-qrcode"></div>
          <p class="contactUs-m-title">QQ客服</p>
        </div>
      </div>
      <div class="contactUs-m-email">电子邮箱：business@dianboguzi.com</div>
      <div class="contactUs-m-email">备注信息：</div>
    </div>
    <!--menu mask-->
    <div class="menu-mask" :class="showSlider ? 'slider-action' : ''">
      <div class="menu-close">
        <img src="../assets/close.png" @click="hideSlider(false)" />
      </div>
      <ul class="menu-list">
        <li v-for="item in mobileMenu" :key="item.intro">
          <i>{{ item.title }}</i>
          <span>{{ item.intro }}</span>
          <div>{{ item.desc }}</div>
        </li>
      </ul>
      <div class="mask-platfrom">
        <img src="../assets/vector.png" alt="bilibili" />
        <img src="../assets/xinlang.png" alt="新浪微博" />
        <img src="../assets/xiaohongshu.png" alt="小红书" />
        <img src="../assets/wechat.png" alt="微信" />
        <img src="../assets/douyin.png" alt="抖音" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuSlider from "../components/MenuSlider.vue";
import DHeader from "../components/DHeader.vue";
import { ref, reactive } from "vue";
const showSlider = ref<boolean>(false);

const mobileMenu = reactive([
  { title: "首页", intro: "DIANBO GOODS", desc: "" },
  { title: "概念展示", intro: "CONCEPTS", desc: "谷子、谷模与谷美" },
  { title: "新闻", intro: "NEWS", desc: "线上与线下的最新活动" },
  { title: "兑换码", intro: "TOKENS", desc: "来兑换你最新获得的谷子吧" },
  { title: "联系我们", intro: "CUSTOMER SERVICE", desc: "让我们听到您的声音" },
]);
const hideSlider = (status: boolean) => {
  showSlider.value = status;
};
</script>

<style lang="scss" scoped>
.contactUs-contanier {
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
  .contactUs-box {
    width: 100vw;
    justify-content: center;
    position: relative;
    display: flex;
    .service {
      width: 2.5rem;
      margin: 0 0.7rem;
      margin-top: 0.7rem;
    }
    .index-qrcode {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #aaa;
      border-radius: 0.1rem;
    }
    .service-title {
      font-size: 0.2rem;
      text-align: center;
      line-height: 2;
    }
  }
  .contactUs-email {
    width: 100vw;
    text-align: center;
    font-size: 0.2rem;
    position: relative;
    margin-top: 0.6rem;
  }
}
.contactUs-m-container {
  display: none;
  padding-top: 0.5rem;
  width: 100%;
  min-height: calc(100vh - 0.5rem);
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .contactUs-m-content {
    padding: 0.2rem;
    box-sizing: border-box;
    .menu-silder {
      display: block;
      height: 0.28rem;
    }
    .contactUs-m-img {
      width: 100%;
      box-sizing: border-box;
      height: 3.7rem;
      margin-top: 0.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contactUs-m-img2 {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      margin-top: 0.4rem;
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    .contactUs-m-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 0.4rem;
      .contactUs-m-btnText {
        width: 1.4rem;
        height: 0.8rem;
        background: #b3abe5;
        // background-image: linear-gradient(70deg, rgba(225,225,225,0.001) 0.01%, #B3ABE5 99%);
        font-size: 0.26rem;
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
        border-radius: 20px;
        margin: 0 15px;
      }
    }
    .contactUs-m-service {
      position: relative;
      width: 100%;
      margin-top: 0.4rem;
      text-align: center;
      font-size: 0.24rem;
      color: #fff;
      z-index: 1;
      &::after {
        content: ""; /* 必须要有内容 */
        position: absolute; /* 绝对定位 */
        bottom: 50%; /* 设置在父元素中间位置 */
        left: 50%; /* 从左侧开始 */
        width: 70%; /* 横向铺满 */
        height: 0; /* 高度为0 */
        border-bottom: 1px dotted white; /* 添加虚线 */
        transform: translate(-50%, 0);
      }
    }
    .contactUs-m-box {
      width: 100%;
      justify-content: center;
      display: flex;
      margin-top: 0.4rem;
      .contactUs-m-service2 {
        width: 1.5rem;
        margin: 0 0.4rem;
        margin-top: 0.2rem;
      }
      .contactUs-m-qrcode {
        width: 1.5rem;
        height: 1.5rem;
        background-color: #000;
        border-radius: 0.1rem;
      }
      .contactUs-m-title {
        font-size: 0.2rem;
        text-align: center;
        line-height: 2;
      }
    }
    .contactUs-m-email {
      width: 100%;
      text-align: center;
      font-size: 0.2rem;
      position: relative;
      margin-top: 0.6rem;
    }
  }
}
@media screen and (max-width: 750px) {
  .contactUs-contanier {
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    .concept-bg,
    .contactUs-box,
    .contactUs-email {
      display: none;
    }
  }
  .contactUs-m-container {
    display: block;
  }
}
</style>
