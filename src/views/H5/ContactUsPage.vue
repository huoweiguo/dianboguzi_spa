<template>
  <div class="page">
    <div class="t-center">
      <img src="@/assets/h5/loading-img.png" width="40%" style="max-width: 200px" />
    </div>
    <div class="btn-box">
      <div class="btn">关注B站</div>
      <div class="btn">关注微博</div>
    </div>
    <div class="t-center">
      <img src="@/assets/h5/line-kf.png" alt="" />
    </div>
    <div class="ewm-box">
      <div>
        <img src="@/assets/h5/kf-1.png" class="stop-swiping" />
        <div>微信客服</div>
      </div>
      <div><img src="@/assets/h5/kf-2.png" class="stop-swiping" />QQ客服</div>
    </div>
    <div class="text-box stop-swiping">
      <div>电子邮箱：business@dianboguzi..com</div>
      <div>网络备案号：苏公安网备32100102010183号</div>
      <div>ICP备案号：<a href="##" target="_blank">苏ICP备2023053104号</a></div>
      <div>增值电信业务经营许可证：苏B2-20240128号</div>
      <div>运营单位：电波谷子（扬州）科技有限公司</div>
      <div><a href="##" target="_blank">营业执照</a></div>
      <div>电波谷子（扬州）科技有限公司版权所有</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  overflow: auto;
}
.t-center {
  text-align: center;
}
.btn-box {
  display: flex;
  justify-content: center;
  margin: 20px 0 60px;
  .btn {
    padding: 0 10px;
    background-image: linear-gradient(90deg, #bebae7 12%, #a8a3e1);
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    border-radius: 100px;
    margin: 0 10px;
  }
}

.ewm-box {
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  div {
    text-align: center;
    line-height: 2;
  }
  img {
    display: block;
    width: 100px;
    height: 100px;
  }
}

.text-box {
  margin: 30px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  line-height: 1.5;

  a {
    color: #0f79f5;
  }
}
</style>
