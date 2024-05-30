<template>
  <div class="page">
    <img class="img" src="@/assets/h5/text.png" alt="" />
    <div class="btn-link">
      <a href="##" target="_blank"><img src="@/assets/h5/btn-i.png" alt="" /></a>
      <a href="##" target="_blank"><img src="@/assets/h5/btn-a.png" alt="" /></a>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang="scss" scoped>
.page {
  background: url('@/assets/h5/img9.png') no-repeat right 100px;
  height: 100%;
  background-size: 70% auto;
}

.btn-link {
  position: absolute;
  bottom: 20px;
  left: 20px;
  img {
    display: block;
    height: 60px;
    margin: 20px;
  }
}

.img {
  height: 60px;
  margin: 70% 0 0 10%;
}
</style>
