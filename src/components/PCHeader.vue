<template>
  <div class="db-header">
    <div class="header-unlogin">
      <img src="../images/logo.png" class="header-logo" v-show="props.isHome" />
      <a @click="router.push('/login')">注册/登录</a>
    </div>
    <!-- <div class="header-nick">
      <span>json.huo</span>
      <a>退出</a>
    </div> -->
    <ul>
      <li v-for="(item, index) in  menuList " :key="item.name" :class="index == props.currentIndex ? 'active' : ''"
        @click="jump(index)">{{
        item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  currentIndex: {
    default: 0,
    type: Number,
    required: true
  },
  isHome: {
    default: false,
    type: Boolean
  }
})


const emit = defineEmits(['changePage'])
const router = useRouter()

const jump = (index: number) => {
  emit('changePage', index)
}

const menuList = reactive([
  { title: '首页', name: 'home' },
  { title: '概览展示', name: 'home' },
  { title: '新闻', name: 'home' },
  { title: '兑换码', name: 'home' },
  { title: '联系我们', name: 'home' }
])
</script>

<style lang="scss" scoped>
.db-header {
  position: fixed;
  left: 50%;
  top: 60px;
  display: flex;
  z-index: 100;
  width: 100%;
  height: 120px;
  font-size: 28px;
  padding: 0 115px;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, 0);
  box-sizing: border-box;

  .header-unlogin {
    display: flex;
    align-items: center;
    height: 120px;

    .header-logo {
      height: 120px;
      margin-right: 50px;
    }

    a {
      white-space: nowrap;
      font-size: 28px;
      cursor: pointer;
    }
  }

  .header-nick {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      max-width: 300px;
      font-size: 28px;
      white-space: nowrap;
      font-weight: 300;
      color: #379DDC;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      display: block;
      height: 36px;
      width: 70px;
      line-height: 36px;
      font-size: 28px;
      background-color: #379DDC;
      color: #fff;
      text-align: center;
      border-radius: 18px;
      font-weight: 200;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  ul {
    display: flex;

    li {
      position: relative;
      height: 36px;
      font-size: 30px;
      width: 195px;
      text-align: center;
      line-height: 36px;
      cursor: pointer;

      &.active {
        &::after {
          position: absolute;
          left: 0;
          top: 50%;
          content: '';
          display: block;
          transform: translate(0, -50%);
          width: 100%;
          height: 18px;
          background-color: #C3B9EA;
          opacity: 0.6;
          border-radius: 9px;
          z-index: -1;
        }
      }

    }
  }
}
</style>