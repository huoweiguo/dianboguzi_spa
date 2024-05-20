<template>
  <!--PC-->
  <div class="index-container" v-if="!userInfo.nickname">
    <div class="index-header">
      <ul>
        <li
          v-for="item in menuList"
          :key="item.intro"
          @click="golinks(item.link)"
          :class="item.link === '/' ? 'active' : ''"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>

    <div class="index-left">
      <img src="../assets/logo.png" alt="电波谷子" />
      <img src="../assets/iphone-download.png" alt="苹果下载" />
      <img src="../assets/andorid-download.png" alt="安卓下载" />

      <div class="index-qrcode"></div>
    </div>

    <div class="index-texts">
      <img src="../assets/text1.png" alt="吃电子谷子" />
      <img src="../assets/text2.png" alt="享赛博人生" />
    </div>

    <div class="index-buttons">
      <span @click="router.push('/concept')">电子谷子</span>
      <span @click="router.push('/code')">兑换码</span>
    </div>
  </div>

  <div class="index-container logined-index" v-else>
    <DHeader />
    <img src="../assets/mask-home-text.png" class="mask-text" />
    <div class="fixed-left">
      <img src="../assets/logo.png" class="fixed-logo" />
      <img src="../assets/iphone-download.png" />
      <img src="../assets/andorid-download.png" />
      <div class="download-qr">
        <span></span>
        扫码下载APP
      </div>
    </div>
    <div class="mask-img">
      <img src="../assets/person.png" />
      <img src="../assets/person-mask.png" class="mask-layer" />
    </div>

    <div class="mask-text-desc">
      <span>吃电子谷子，</span>
      <span>享赛博人生。</span>
    </div>
  </div>

  <!--mobile-->
  <div class="index-m-container">
    <div class="index-m-content">
      <div class="index-m-menu">
        <MenuSlider />
      </div>

      <img src="../assets/logo2.png" class="m-logo" />

      <div class="index-m-image">
        <img src="../assets/person.png" />
        <img src="../assets/m-text.png" class="m-text" />
        <img src="../assets/layer0.png" class="m-layer" />
      </div>

      <img src="../assets/mask-text.png" class="mask-text" />

      <div class="index-m-download">
        <img src="../assets/iphone-download.png" alt="苹果下载" />
        <img src="../assets/andorid-download.png" alt="安卓下载" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import DHeader from "../components/DHeader.vue";
import MenuSlider from "../components/MenuSlider.vue";
import { useLoginStore } from "@/store/login";
import { useRouter } from "vue-router";
const useLogin = useLoginStore();
const router = useRouter();
const userInfo = computed(() => useLogin.userInfo);
const menuList = [
  { title: "首页", intro: "DIANBO GOODS", desc: "", link: "/" },
  { title: "概念展示", intro: "CONCEPTS", desc: "", link: "/concept" },
  { title: "新闻", intro: "NEWS", link: "/news" },
  { title: "联系我们", intro: "CONTACT US", link: "/contactUs" },
  { title: "注册/登录", intro: "LOGIN", link: "/login" },
];
const golinks = (link: string) => {
  router.push(link);
};
</script>

<style lang="scss" scope>
.index-container {
  width: 100%;
  min-width: 1400px;
  height: 100vh;
  background: url("../assets/person2.png") no-repeat center center;
  overflow: hidden;
  .index-header {
    position: fixed;
    width: 100%;
    min-width: 1400px;
    top: 0.4rem;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
    ul {
      display: flex;
      li {
        position: relative;
        list-style: none;
        font-size: 18px;
        font-weight: 300;
        width: 110px;
        text-align: center;
        margin: 0 20px;
        cursor: pointer;
        &.active,
        &:hover {
          &::after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 100px;
            height: 10px;
            background-color: #c3b9ea;
            opacity: 0.6;
            z-index: -1;
            border-radius: 5px;
          }
        }
        &:last-child {
          margin-left: 2rem;
        }
      }
    }
  }
  .index-left {
    position: fixed;
    left: 40px;
    top: 40px;
    display: flex;
    flex-direction: column;
    img {
      width: 160px;
      margin-bottom: 20px;
      &:first-child {
        margin-bottom: 70px;
      }
    }
    .index-qrcode {
      width: 160px;
      height: 160px;
      background-color: #aaa;
      border-radius: 10px;
    }
  }
  .index-texts {
    position: fixed;
    right: 50px;
    top: 150px;
    img {
      display: block;
      margin: 10px 0;
      height: 40px;
      &:first-child {
        margin-left: -80px;
      }
    }
  }
  .index-buttons {
    position: fixed;
    bottom: 100px;
    left: 0;
    width: 100%;
    min-width: 1400px;
    display: flex;
    justify-content: center;
    span {
      display: block;
      color: #71758d;
      font-size: 36px;
      height: 40px;
      line-height: 40px;
      border: 4px solid rgba(70, 81, 142, 0.4);
      background-color: rgba(255, 255, 255, 0.65);
      padding: 10px 0;
      width: 200px;
      text-align: center;
      margin: 0 20px;
      cursor: pointer;
      &:first-child {
        border-radius: 20px 0 0 20px;
      }
      &:last-child {
        border-radius: 0 25px 25px 0;
      }
    }
  }
}

.logined-index {
  position: relative;
  width: 100%;
  background-image: linear-gradient(90deg, #fff, #ecf0fc, #f5e5f8);
  .mask-text {
    position: absolute;
    height: 220px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .mask-img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 340px;
    transform: translate(-50%, -50%);
    z-index: 10;
    img {
      width: 340px;
    }
    .mask-layer {
      position: absolute;
      left: 160px;
      bottom: -50px;
      width: 480px;
      transform: translate(-50%, 80px);
    }
  }
  .fixed-left {
    position: absolute;
    left: 70px;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 135px;
    img {
      width: 135px;
      display: block;
      margin-bottom: 20px;
    }
    .fixed-logo {
      width: 95px;
    }
    .download-qr {
      width: 135px;
      font-size: 12px;
      text-align: center;
      span {
        display: block;
        width: 135px;
        height: 135px;
        background-color: #aaa;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
      }
    }
  }
  .mask-text-desc {
    position: absolute;
    right: 5%;
    bottom: 10%;
    font-size: 28px;
    font-weight: 300;
    color: #3e4042;
    span {
      display: block;
      margin: 10px 0;
    }
  }
}

.index-m-container {
  display: none;
  padding-top: 0.5rem;
  height: calc(100vh - 0.5rem);
  width: 100%;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .index-m-content {
    padding: 0.2rem;
    box-sizing: border-box;
    .index-m-menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.6rem;
    }
    .mask-text {
      position: fixed;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 1;
    }
    .m-logo {
      position: absolute;
      left: 0.2rem;
      top: 2rem;
      height: 1.2rem;
    }
    .index-m-image {
      position: fixed;
      right: 5%;
      top: 50%;
      height: 45vh;
      transform: translate(0, -50%);
      z-index: 10;
      img {
        height: 100%;
      }
      .m-text {
        position: absolute;
        height: 1rem;
        left: -1.3rem;
        bottom: 1.3rem;
      }
      .m-layer {
        position: absolute;
        right: 0;
        top: 45vh;
        width: 4.8rem;
      }
    }
    .index-m-download {
      position: absolute;
      bottom: 0.3rem;
      left: 0.2rem;
      img {
        display: block;
        margin: 0.1rem 0;
        width: 1rem;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .index-container {
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    .index-header,
    .index-texts,
    .index-buttons,
    .index-left {
      display: none;
      height: 0;
      height: 0;
      overflow: hidden;
    }
  }
  .index-m-container {
    display: block;
  }
}
</style>
