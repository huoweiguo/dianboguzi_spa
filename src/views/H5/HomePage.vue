<template>
  <div class="page">
    <!-- loading -->
    <!-- <LoadingPop /> -->

    <!-- menu_bar -->
    <MenuBar :currentPage="currentPage" @topage="(page) => (currentPage = page)" />

    <!-- 首页page -->

    <!-- 概览展示page -->

    <!-- 新闻page -->

    <!-- 兑换码page -->

    <!-- 联系我们page -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingPop from './LoadingPop.vue';
import MenuBar from './MenuBar.vue';

const currentPage = ref('home');
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(to right, #b3d6fa, #f5d3f9);
}
</style>
