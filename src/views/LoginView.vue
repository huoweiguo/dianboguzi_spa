<template>
  <div class="login-container">
    <div class="login-outer">
      <img src="../images/logo-image.png" class="logo-login" />
      <div class="login-inner" :class="moveLogin ? 'move-verify' : ''">
        <!--账号密码登录-->
        <div class="account-login">
          <div><label>账号</label><input type="text" /></div>
          <div><label>密码</label><input type="text" /></div>
        </div>
        <!--验证码登录-->
        <div class="verify-login">
          <div><label>手机号</label><input type="text" /></div>
          <div class="sms-code"><label>验证码</label><input type="text" /> <span>发送验证码</span></div>
        </div>
      </div>

      <div class="exchange-account">
        <a @click="moveLogin = !moveLogin">{{ moveLogin ? '账号登录' : '验证码登录' }}</a>
        <a>忘记密码?</a>
      </div>
      <div><a style="cursor: pointer;"><img src="../images/login-btn.png"></a></div>
      <div class="account-agree"><input type="checkbox" v-model="agree" />同意<a>《用户协议》</a>和<a>《隐私协议》</a></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const agree = ref<boolean>(false)
const moveLogin = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  overflow: hidden;

  .login-outer {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 973px;
    height: 656px;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 52px 0;
    box-sizing: border-box;
    overflow: hidden;

    .logo-login {
      height: 90px;
      margin-bottom: 38px;
    }

    .login-inner {
      position: relative;
      left: 50%;
      top: 0;
      display: flex;
      width: 200%;
      transition: 0.5s;

      &>div {
        width: 100%;

        &>div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 34px;

          label {
            font-size: 28px;
            width: 100px;
            display: block;
            text-align: right;
            margin-right: 16px;
          }

          input[type='text'] {
            width: 526px;
            height: 68px;
            background-color: #fff;
            border-radius: 10px;
            padding: 0 10px;
            box-sizing: border-box;
            border: 0;
            outline: none;
            font-size: 28px;
          }

          &.sms-code {
            input[type='text'] {
              width: 345px;
              margin-right: 20px;
            }

            span {
              display: block;
              width: 160px;
              height: 68px;
              text-align: center;
              line-height: 68px;
              background-color: #fff;
              border-radius: 10px;
              color: #898989;
              font-size: 18px;
              cursor: pointer;
            }
          }
        }
      }
    }

    .move-verify {
      left: -50%;
    }

    .exchange-account {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 34px;

      a {
        cursor: pointer;
        font-size: 21px;
        margin: 0 50px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .account-agree {
      display: flex;
      margin-top: 50px;
      color: #636363;
      font-size: 24px;
      align-items: center;

      input[type='checkbox'] {
        width: 28px;
        height: 28px;
        margin-right: 10px;
        border: 1px solid #3F3F3F;
      }

      a {
        cursor: pointer;
        color: #7367C3;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>