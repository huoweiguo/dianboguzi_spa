<template>
  <div class="menu_box" :class="{ active: isShow }">
    <div class="menu_btn" @click="isShow = true">
      <img src="@/assets/h5/icon-menu.png" />
    </div>
    <div class="menu_bar_pop" @click="isShow = false"></div>
    <div class="menu_bar">
      <div class="menu_close" @click="isShow = false">
        <img src="@/assets/h5/icon-x.png" />
      </div>
      <div class="menu_list">
        <div class="menu_item" v-for="(item, index) in menuList" :key="index" @click="emits('topage', item.title)">
          <div class="title">{{ item.title }}</div>
          <div class="intro">{{ item.intro }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
      <div class="menu_footer">
        <a href="##" target="_blank"><img src="@/assets/h5/icon-bilibili.png" /></a>
        <a href="##" target="_blank"><img src="@/assets/h5/icon-bilibili.png" /></a>
        <a href="##" target="_blank"><img src="@/assets/h5/icon-bilibili.png" /></a>
        <a href="##" target="_blank"><img src="@/assets/h5/icon-bilibili.png" /></a>
      </div>
    </div>
  </div>

  <!-- next_page_btn -->

  <!-- login_box -->
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';
const props = defineProps(['currentPage']);
const emits = defineEmits(['topage']);

const isShow = ref(false);

const menuList = reactive([
  { title: '首页', intro: 'DIANBO GOODS', desc: '' },
  { title: '概念展示', intro: 'CONCEPTS', desc: '谷子、谷模与谷美' },
  { title: '新闻', intro: 'NEWS', desc: '线上与线下的最新活动' },
  { title: '兑换码', intro: 'TOKENS', desc: '来兑换你最新获得的谷子吧' },
  { title: '联系我们', intro: 'CUSTOMER SERVICE', desc: '让我们听到您的声音' },
]);
</script>

<style lang="scss" scoped>
.menu_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    transition: all 0.3s;
    transform: translate(-100%, 0);
    .menu_close {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 20px;
      height: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .menu_list {
      margin-top: 80px;
      flex: 1;
      .menu_item {
        padding: 1em;
        color: #fff;
        line-height: 1.3;
        .title {
          font-size: 20px;
          font-weight: 600;
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
        padding: 1em;
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
</style>
