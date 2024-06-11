<template>
  <div class="db-header">
    <div v-if="!name" class="header-unlogin">
      <img src="../images/logo.png" class="header-logo" v-show="props.isHome" />
      <a @click="router.push('/login')">注册/登录</a>
    </div>
    <div v-else class="header-nick">
      <span>{{ name }}</span>
      <a @click="logout()">退出</a>
    </div>
    <ul>
      <li v-for="(item, index) in  menuList " :key="item.name" :class="index == props.currentIndex ? 'active' : ''"
        @click="jump(index)">{{
        item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive, defineProps, defineEmits,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from "@/store/login";
const name = ref(localStorage.getItem("userName"));
console.log(localStorage.getItem("userName"),'localStorage.getItem("userName")')
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
const logout=()=>{
  name.value = ''
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("userName");
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
  top: 0.3rem;
  display: flex;
  z-index: 100;
  width: 7.5rem;
  height: 0.3rem;
  font-size: 0.14rem;
  padding: 0 0.2rem;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, 0);
  box-sizing: border-box;

  .header-unlogin {
    display: flex;
    align-items: center;
    height: 0.6rem;

    .header-logo {
      height: 0.6rem;
      margin-right: 0.2rem;
    }

    a {
      white-space: nowrap;
      font-size: 0.14rem;
      cursor: pointer;
    }
  }

  .header-nick {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      max-width: 1.5rem;
      font-size: 0.14rem;
      white-space: nowrap;
      font-weight: 300;
      color: #379DDC;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      display: block;
      height: 0.18rem;
      width: 0.35rem;
      line-height: 0.18rem;
      font-size: 0.14rem;
      background-color: #379DDC;
      color: #fff;
      text-align: center;
      border-radius: 0.09rem;
      font-weight: 200;
      margin-left: 0.05rem;
      cursor: pointer;
    }
  }

  ul {
    display: flex;

    li {
      position: relative;
      height: 0.18rem;
      font-size: 0.15rem;
      width: 0.9rem;
      text-align: center;
      line-height: 0.18rem;
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
          height: 0.09rem;
          background-color: #C3B9EA;
          opacity: 0.6;
          border-radius: 0.05rem;
          z-index: -1;
        }
      }

    }
  }
}
</style>