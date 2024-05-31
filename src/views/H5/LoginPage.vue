<template>
  <div class="page">
    <div class="code-form stop-swiping">
      <p class="code-form-title">
        <img src="@/assets/h5/logo-mini.png" alt="" />
      </p>
      <div class="verify-login">
        <div class="form-ipt"><label>手机号</label><input type="text" /></div>
        <div class="form-ipt"><label>密码</label><input type="text" /></div>
      </div>
      <div class="form-btn">
        <span>登录/注册</span>
      </div>

      <div class="links">
        <a href="##">验证码登录</a>
      </div>

      <div class="footer">
        <input type="checkbox" />
        <div>同意 <a href="##">《电波谷子用户服务协议》</a> <a href="##">《电波谷子居民使用手册》</a> <a href="##">《电波谷子隐私权政策》协议</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang="scss" scoped>
.page {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #b3d6fa, #f5d3f9);
  z-index: 100;
  overflow: hidden;
}
.code-form {
  margin: 50% 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 30px;
  .code-form-title {
    text-align: center;
    padding: 20px 0;
    img {
      height: 45px;
    }
  }
  .form-ipt {
    font-size: 14px;
    text-align: left;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      text-align: right;
      width: 70px;
      margin-right: 10px;
    }
    input {
      flex: 1;
      height: 34px;
      border: 0;
      outline: none;
      padding: 0 10px;
      border-radius: 5px;
      font-size: 14px;
      margin-right: 20px;
    }
    .verify-ipt {
      width: 140px;
    }
    span {
      display: block;
      background-color: #fff;
      height: 34px;
      line-height: 34px;
      border-radius: 5px;
      text-align: center;
      width: 100px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
.form-btn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 40px;
  cursor: pointer;
  span {
    display: block;
    width: 140px;
    height: 40px;
    background-image: linear-gradient(90deg, #bebae7 12%, #a8a3e1);
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    font-weight: 300;
    border-radius: 10px;
  }
}
a {
  text-decoration: none;
  color: #91a5ec;
}
.links {
  margin: 20px 0;
  font-size: 12px;
}
.footer {
  font-size: 12px;
  margin: 10px 20px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  line-height: 1.5;
}
</style>
