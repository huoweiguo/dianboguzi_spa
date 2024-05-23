<template>
  <div class="header-container">
    <div class="logo-mobile" v-if="!!_.isEmpty(userInfo)">
      <!-- <img src="../assets/logo.png" class="电波谷子" /> -->
      <span @click="router.push('/login')">登录/注册</span>
    </div>
    <div class="header-user" v-else @click="handleLogout">
      欢迎您! {{ userInfo.nickname }}
    </div>
    <ul>
      <li
        v-for="item in mobileMenu"
        :key="item.intro"
        @click="goLinks(item.link)"
        :class="menuActive(item.link) ? 'active' : ''"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import * as _ from "lodash";
import { ref, reactive, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLoginStore } from "@/store/login";
const useLogin = useLoginStore();
const userInfo = computed(() => useLogin.userInfo);
const route = useRoute();
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
const goLinks = (link: string) => {
  router.push(link);
};
const menuActive = (link: string) => {
  if (route.path === link) {
    return true;
  }

  return false;
};

const handleLogout = () => {
  localStorage.setItem("token", "");
};
</script>

<style scoped lang="scss">
.header-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 70px;
  .header-user {
    font-size: 18px;
    font-weight: 300;
    height: 78px;
    line-height: 78px;
    white-space: nowrap;
  }
  .logo-mobile {
    display: flex;
    align-items: center;
    img {
      width: 60px;
    }
    span {
      width: 110px;
      display: block;
      font-size: 18px;
      text-align: center;
      font-weight: 300;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    li {
      cursor: pointer;
      width: 110px;
      font-size: 18px;
      text-align: center;
      font-weight: 300;
      margin: 0 20px;
      span {
        position: relative;
        z-index: 10;
      }
      &.active {
        position: relative;
        &::before {
          position: absolute;
          display: block;
          content: "";
          width: 100%;
          height: 10px;
          background-color: #c3b9ea;
          border-radius: 5px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.6;
          z-index: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .header-container {
    display: none !important;
  }
}
</style>
