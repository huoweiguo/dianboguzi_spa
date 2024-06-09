<template>
  <div class="menu_box" :class="{ active: isShow }">
    <!-- back -->
    <div class="menu_back" v-if="showLogin" @click="showLogin = false">
      <span>返回</span>
    </div>

    <!-- menu -->
    <div class="menu_btn" v-else @click="isShow = true">
      <img src="@/assets/h5/icon-menu.png" />
    </div>

    <div class="menu_bar_pop" @click="isShow = false"></div>
    <div class="menu_bar">
      <div class="menu_close">
        <img src="@/assets/h5/icon-x.png" @click="isShow = false" />
      </div>
      <div class="menu_list">
        <div
          class="menu_item"
          v-for="(item, index) in menuList"
          :key="index"
          @click="slideTo(index)"
          :class="{ active: index == props.swiper?.activeIndex }"
        >
          <div class="title">{{ item.title }}</div>
          <div class="intro">{{ item.intro }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
      <div class="menu_footer">
        <a href="https://space.bilibili.com/3546565146839763" target="_blank"
          ><img src="@/assets/h5/icon-bilibili.png"
        /></a>
        <a href="https://weibo.com/u/7878529698" target="_blank"
          ><img src="@/assets/h5/icon-wb.png"
        /></a>
        <a
          href="https://www.xiaohongshu.com/user/profile/607283d9000000000100ad8b?m_source=baofeng"
          target="_blank"
          ><img src="@/assets/h5/icon-xhs.png" style="width: 35px"
        /></a>
        <a
          href="https://work.weixin.qq.com/kfid/kfc85565933a9cf0071"
          target="_blank"
          ><img src="@/assets/h5/icon-wx.png"
        /></a>
        <a
          href="https://www.douyin.com/user/MS4wLjABAAAANv-Xl5ptPJsSvu4nFfqheXAGRFMpiL3EwUULuxzgtcE"
          target="_blank"
          ><img src="@/assets/h5/icon-dy.png"
        /></a>
      </div>
    </div>
  </div>

  <!-- next_page_btn -->
  <div class="next_page_btn" v-if="!isLastPage" @click="nextPage">
    <img src="@/assets/h5/icon-next.png" />
  </div>

  <template v-if="!showLogin">
    <!-- logout_box -->
    <div class="logout_box" v-if="islogin">
      <div class="info">欢迎您，JSON.huo</div>
      <div class="btn" @click="logout">退出登录</div>
    </div>

    <!-- login_box -->
    <div class="login_box" v-else>
      <div class="btn" @click="goLogin">登录</div>
      <i></i>
      <div class="btn" @click="showLogin = true">注册</div>
    </div>
  </template>
  <template v-else>
    <!-- 登录页 -->
    <LoginPage :show-login="changeLogin" />
  </template>

  <!-- logo -->
  <div
    class="logo"
    :class="{
      mini: props.swiper?.activeIndex == 1,
      hide: props.swiper?.activeIndex == 2 || props.swiper?.activeIndex == 4,
      center: props.swiper?.activeIndex == 3,
      login: showLogin,
    }"
  >
    <div
      class="imglogo"
      :class="{ black: props.swiper?.activeIndex == 3 || showLogin }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import LoginPage from "./LoginPage.vue";
import { ref, reactive, computed, defineProps, defineEmits } from "vue";
const props = defineProps(["swiper"]);
const emits = defineEmits(["topage"]);

const isShow = ref(false);
const islogin = ref(false);
const showLogin = ref(false);

const menuList = reactive([
  { key: 1, title: "首页", intro: "DIANBO GOODS", desc: "" },
  { key: 2, title: "概念展示", intro: "CONCEPTS", desc: "谷子、谷模与谷美" },
  { key: 3, title: "新闻", intro: "NEWS", desc: "线上与线下的最新活动" },
  {
    key: 4,
    title: "兑换码",
    intro: "TOKENS",
    desc: "来兑换你最新获得的谷子吧",
  },
  {
    key: 5,
    title: "联系我们",
    intro: "CUSTOMER SERVICE",
    desc: "让我们听到您的声音",
  },
]);

const isLastPage = computed(() => {
  return props.swiper?.activeIndex == props.swiper?.slides.length - 1;
});

const nextPage = () => {
  props.swiper.slideNext();
};

const prevPage = () => {
  props.swiper.slidePrev();
};

const slideTo = (index: any) => {
  props.swiper.slideTo(index, 300);
  isShow.value = false;
};
const goLogin = () => {
  // islogin.value = true;
  showLogin.value = !showLogin.value;
};
const logout = () => {
  islogin.value = false;
  localStorage.removeItem("token");
};
const changeLogin = () => {
  islogin.value = true;
  showLogin.value = !showLogin.value;
};
</script>

<style lang="scss" scoped>
.menu_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .menu_back {
    position: absolute;
    top: 30px;
    left: 30px;
    span {
      display: inline-block;
      width: 61px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: rgba(255, 255, 255, 0.34);
      border-radius: 13px 13px 13px 13px;
      font-size: 12px;
    }
  }
  .menu_btn {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .menu_bar_pop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  .menu_bar {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translate(0, 0);
    width: 75%;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    transition: all 0.3s;
    transform: translate(-100%, 0);
    .menu_close {
      display: flex;
      align-items: center;
      height: 15%;

      img {
        display: inline-block;
        margin-left: 20px;
        width: 20px;
        height: 20px;
      }
    }
    .menu_list {
      flex: 1;
      .menu_item {
        padding: 1em;
        color: #fff;
        line-height: 1.3;
        &.active {
          .title {
            background: #9ab5d4;
          }
          .intro,
          .desc {
            color: #9ab5d4;
          }
        }
        .title {
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          color: #4f5d70;
          background: #fff;
          padding: 2px 10px;
          border-radius: 5px;
        }
        .intro {
          font-size: 14px;
          font-weight: 400;
        }
        .desc {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    .menu_footer {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: #000;
      a {
        padding: 1.5em 1em;
        img {
          width: 20px;
        }
      }
    }
  }

  &.active {
    .menu_btn {
      opacity: 0;
    }
    .menu_bar_pop {
      display: block;
    }
    .menu_bar {
      transform: translate(0, 0);
    }
  }
}

.next_page_btn {
  position: fixed;
  z-index: 10;
  bottom: 10px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  img {
    width: 25px;
    height: 25px;
  }
}

.login_box {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 998;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3eefd;
  border-radius: 15px;
  font-size: 12px;
  .btn {
    color: #39404a;
    padding: 10px;
  }
  i {
    width: 1px;
    height: 16px;
    background: #39404a;
  }
}

.logout_box {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 998;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  .info,
  .btn {
    background: #f3eefd;
    border-radius: 15px;
    padding: 10px;
    color: #39404a;
  }

  .info {
    margin-right: 10px;
    color: #707587;
  }
}

.logo {
  position: fixed;
  top: 100px;
  left: 20px;
  z-index: 998;
  transition: all 0.3s;
  .imglogo {
    display: inline-block;
    height: 70px;
    width: calc(70px * 2.714);
    background: url("@/assets/h5/logo.png") no-repeat center center;
    background-size: contain;
    transition: all 0.3s;

    &.black {
      background-image: url("@/assets/h5/logo-b.png");
    }
  }

  &.mini {
    top: 50px;
    left: 10px;
    .imglogo {
      height: 50px;
    }
  }

  &.hide {
    // opacity: 0;
    display: none;
  }

  &.center {
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
  }

  &.login {
    display: block !important;
    top: 30px;
    left: auto;
    right: 30px;
    .imglogo {
      height: 40px;
      width: calc(40px * 2.714);
    }
  }
}
</style>
