<template>
  <div class="slider-menu">
    <div class="index-m-menu">
      <img
        src="../assets/menu-silder.png"
        class="menu-silder"
        @click="hideSlider(true)"
      />
      <div class="login-m">
        <span v-if="!!_.isEmpty(userInfo)" @click="router.push('/login')"
          >登录 | 注册
        </span>
        <template v-else>
          <span class="logined">欢迎您，{{ userInfo.nickname }} </span>
          <span @click="logout">退出登录</span>
        </template>
      </div>
    </div>

    <!--menu mask-->
    <div class="menu-mask" :class="showSlider ? 'slider-action' : ''">
      <div class="menu-close">
        <img src="../assets/close.png" @click="hideSlider(false)" />
      </div>
      <ul class="menu-list">
        <li v-for="item in mobileMenu" :key="item.intro" @click="goLink(item)">
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

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import * as _ from "lodash";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store/login";
const useLogin = useLoginStore();
const userInfo = computed(() => useLogin.userInfo);
const showSlider = ref<boolean>(false);
const router = useRouter();
const mobileMenu = reactive([
  { title: "首页", intro: "DIANBO GOODS", desc: "", link: "/" },
  {
    title: "概念展示",
    intro: "CONCEPTS",
    desc: "谷子、谷模与谷美",
    link: "/concept",
  },
  { title: "新闻", intro: "NEWS", desc: "线上与线下的最新活动", link: "/news" },
  {
    title: "兑换码",
    intro: "TOKENS",
    desc: "来兑换你最新获得的谷子吧",
    link: "/code",
  },
  {
    title: "联系我们",
    intro: "CUSTOMER SERVICE",
    desc: "让我们听到您的声音",
    link: "/contactUs",
  },
]);
const hideSlider = (flag: boolean) => {
  showSlider.value = flag;
};
const goLink = (obj: any) => {
  router.push(obj.link);
};

const logout = () => {
  useLogin.removeAccount();
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
};
</script>

<style lang="scss" scoped>
.slider-menu {
  width: 100%;
}
.index-m-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  .login-m {
    display: flex;
    span {
      font-size: 0.24rem;
      background-color: rgba(255, 255, 255, 0.3);
      width: 1.2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.3rem;
      color: #39404a;
      text-align: center;
    }

    .logined {
      width: 2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #707587;
      background-color: rgba(255, 255, 255, 0.34);
      margin-right: 0.2rem;
    }
  }
}
.menu-silder {
  display: block;
  height: 0.28rem;
}
.menu-mask {
  position: fixed;
  width: 50%;
  top: 0;
  left: -50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  padding: 0.2rem;
  box-sizing: border-box;
  transition: 0.5s;
  .menu-list {
    li {
      margin: 0.2rem 0;
      i {
        display: inline-block;
        color: #384e6f;
        font-size: 0.3rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #fff;
        padding: 0.06rem 0.15rem;
        border-radius: 0.06rem;
      }
      span {
        display: block;
        font-size: 0.28rem;
        color: #fff;
        font-family: PingFang SC;
        margin: 0.15rem 0;
      }
      div {
        font-size: 0.22rem;
        color: #fff;
      }
    }
  }
  .mask-platfrom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    background-color: #000;
    padding: 0.15rem;
    justify-content: space-around;
    box-sizing: border-box;
    img {
      height: 0.4rem;
    }
  }
}
.slider-action {
  left: 0;
}
</style>
