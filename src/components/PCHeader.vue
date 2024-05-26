<template>
  <div class="db-header">
    <div class="header-nick">
      <span>json.huo</span>
      <a>退出</a>
    </div>
    <ul>
      <li v-for="(item, index) in  menuList " :key="item.name" :class="index == props.currentIndex ? 'active' : ''"
        @click="jump(index)">{{
        item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits } from 'vue'
const props = defineProps({
  currentIndex: {
    default: 0,
    type: Number,
    required: true
  }
})


const emit = defineEmits(['changePage'])


const jump = (index: number) => {
  emit('changePage', index)
}

console.log(props.currentIndex)
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
  top: 90px;
  display: flex;
  z-index: 100;
  width: 100%;
  font-size: 28px;
  padding: 0 115px;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, 0);
  box-sizing: border-box;

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