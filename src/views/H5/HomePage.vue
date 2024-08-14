<template>
  <div class="page">
    <img class="img" src="@/assets/h5/text2.png" alt="" />
    <div class="btn-link">
      <a href="https://apps.apple.com/cn/app/%E7%94%B5%E6%B3%A2%E8%B0%B7%E5%AD%90/id6499262084" target="_blank"
        ><img src="@/assets/h5/btn-i.png" alt=""
      /></a>
      <a href="https://down.ez6.com.cn/app.php/86" target="_blank"
        ><img src="@/assets/h5/btn-a.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.page {
  background: url("@/assets/h5/img9.png") no-repeat right 200px;
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
  position: absolute;
  height: 60px;
  left: 10%;
  top: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
}
</style>
