<template>
  <div class="header-container">
    <!-- <div class="logo-mobile">
      <img src="../assets/logo.png" class="电波谷子" />
      <span>登录/注册</span>
    </div> -->
    <div class="header-user">欢迎您! 小小霍</div>
    <ul>
      <li>首页</li>
      <li>概率展示</li>
      <li>新闻</li>
      <li>兑换码</li>
      <li>联系我们</li>
    </ul>
    <span></span>
  </div>
</template>

<script setup lang="ts"></script>

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
    }
  }
  ul {
    display: flex;
    li {
      width: 110px;
      font-size: 18px;
      text-align: center;
      font-weight: 300;
      margin: 0 20px;
    }
  }
}
@media screen and (max-width: 750px) {
  .header-container {
    display: none !important;
  }
}
</style>
