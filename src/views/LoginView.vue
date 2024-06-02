<template>
  <div class="login-container">
    <PCHeader :currentIndex="index" @changePage="changePage" />
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
        <a @click="router.push('/forget')">忘记密码?</a>
      </div>
      <div class="login-account"><a><img src="../images/login-btn.png"></a>
      </div>
      <div class="account-agree"><input type="checkbox" v-model="agree" />同意<a>《用户协议》</a>和<a>《隐私协议》</a></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'
import PCHeader from '../components/PCHeader.vue'
import { useRouter } from 'vue-router'
const agree = ref<boolean>(false)
const moveLogin = ref<boolean>(false)
const index = ref<number>(-1)
const router = useRouter()

const changePage = (index: number) => {
  localStorage.setItem('currentIndex', JSON.stringify(index))
  router.push('/')
}

const resetScreen = () => {
  var oHtml = document.querySelector('html')
  var clientW = document.documentElement.clientWidth
  if (clientW > 750) {
    let screenWidth = (clientW / 750) * 100 < 200 ? (clientW / 750) * 100 : 200;
    oHtml.style.fontSize = screenWidth + 'px'
  }
}

onMounted(() => {
  // 设置html字体
  resetScreen()
  window.addEventListener('resize', resetScreen, false)
})


onUnmounted(() => {
  window.removeEventListener('resize', resetScreen, false)
})
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
    width: 4.85rem;
    height: 3.25rem;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, calc(-50% + 0.15rem));
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.1rem;
    padding: 0.26rem 0;
    box-sizing: border-box;
    overflow: hidden;

    .logo-login {
      height: 0.45rem;
      margin-bottom: 0.19rem;
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
          margin-bottom: 0.17rem;

          label {
            font-size: 0.14rem;
            width: 0.5rem;
            display: block;
            text-align: right;
            margin-right: 0.08rem;
          }

          input[type='text'] {
            width: 2.6rem;
            height: 0.34rem;
            background-color: #fff;
            border-radius: 0.05rem;
            padding: 0 0.05rem;
            box-sizing: border-box;
            border: 0;
            outline: none;
            font-size: 0.14rem;
          }

          &.sms-code {
            input[type='text'] {
              width: 1.7rem;
              margin-right: 0.1rem;
            }

            span {
              display: block;
              width: 0.8rem;
              height: 0.34rem;
              text-align: center;
              line-height: 0.34rem;
              background-color: #fff;
              border-radius: 0.05rem;
              color: #898989;
              font-size: 0.09rem;
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
      margin-bottom: 0.17rem;

      a {
        cursor: pointer;
        font-size: 0.11rem;
        margin: 0 0.25rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .login-account {
      a {
        height: 0.4rem;
        display: block;
        cursor: pointer;

        img {
          height: 0.4rem;
          display: block;
        }
      }
    }

    .account-agree {
      display: flex;
      margin-top: 0.14rem;
      color: #636363;
      font-size: 0.12rem;
      align-items: center;

      input[type='checkbox'] {
        width: 0.14rem;
        height: 0.14rem;
        margin-right: 0.05rem;
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