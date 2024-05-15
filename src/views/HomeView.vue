<template>
  <!--PC-->
  <div class="index-container" style="display: none">
    <div class="index-header">
      <ul>
        <li class="active">首页</li>
        <li>新闻</li>
        <li>联系我们</li>
        <li>登录/注册</li>
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
      <span>电子谷子</span>
      <span>兑换码</span>
    </div>
  </div>

  <div class="index-container logined-index">
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
import { ref, reactive } from "vue";
import DHeader from "../components/DHeader.vue";
import MenuSlider from "../components/MenuSlider.vue";
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
        font-size: 0.28rem;
        font-weight: 300;
        width: 1.95rem;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        cursor: pointer;
        &.active,
        &:hover {
          &::after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 90%;
            height: 0.18rem;
            background-color: #c3b9ea;
            opacity: 0.6;
            z-index: -1;
            border-radius: 0.09rem;
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
    left: 0.8rem;
    top: 0.4rem;
    display: flex;
    flex-direction: column;
    img {
      width: 1.6rem;
      margin-bottom: 0.2rem;
      &:first-child {
        margin-bottom: 0.7rem;
      }
    }
    .index-qrcode {
      width: 1.6rem;
      height: 1.6rem;
      background-color: #aaa;
      border-radius: 0.1rem;
    }
  }
  .index-texts {
    position: fixed;
    right: 0.5rem;
    top: 2rem;
    img {
      display: block;
      margin: 0.1rem 0;
      height: 0.5rem;
      &:first-child {
        margin-left: -0.8rem;
      }
    }
  }
  .index-buttons {
    position: fixed;
    bottom: 1rem;
    left: 0;
    width: 100%;
    min-width: 1400px;
    display: flex;
    justify-content: center;
    span {
      display: block;
      color: #71758d;
      font-size: 0.36rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border: 0.04rem solid rgba(70, 81, 142, 0.4);
      background-color: rgba(255, 255, 255, 0.65);
      padding: 0.1rem 0;
      width: 2rem;
      text-align: center;
      margin: 0 0.2rem;
      cursor: pointer;
      &:first-child {
        border-radius: 0.2rem 0 0 0.2rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
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
    height: 190px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .mask-img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 270px;
    transform: translate(-50%, -50%);
    z-index: 10;
    img {
      width: 270px;
    }
    .mask-layer {
      position: absolute;
      left: 90px;
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
