<template>
  <div class="login-container">
    <PCHeader :currentIndex="index" @changePage="changePage" />
    <div class="login-outer">
      <img src="../images/logo-image.png" class="logo-login" />
      <div class="login-inner" :class="moveLogin ? 'move-verify' : ''">
        <!--账号密码登录-->
        <div class="account-login">
          <div><label>账号</label><input :maxlength="20" type="text" v-model="params.mobile"/></div>
          <div><label>密码</label><input :maxlength="20" type="password" v-model="params.passWord"/></div>
        </div>
        <!--验证码登录-->
        <div class="verify-login">
          <div><label>手机号</label><input type="text" v-model="params.mobile"/></div>
          <div class="sms-code">
            <label>验证码</label>
            <input type="text" v-model="params.verification"/> 
            <button :disabled="countdown > 0" @click="handleSms">
              {{ countdown > 0 ? `${countdown}秒后重新获取` : "发送验证码" }}
            </button>
          </div>
        </div>
      </div>

      <div class="exchange-account">
        <a @click="moveLogin = !moveLogin">{{ moveLogin ? '账号登录' : '验证码登录' }}</a>
        <a @click="router.push('/forget')">忘记密码?</a>
      </div>
      <div class="login-account" @click="handleLoginM">
        <a><img src="../images/login-btn.png"></a>
      </div>
      <div class="account-agree"><input type="checkbox" v-model="agree" />同意<a>《用户协议》</a>和<a>《隐私协议》</a></div>
    </div>
    <!--弹出框-->
    <DBMessage :title="popAttr.title" :text="popAttr.text" :visible="popAttr.visible" @hidePopbox="hidePopbox" />
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted,reactive } from 'vue'
import PCHeader from '../components/PCHeader.vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from "@/store/login";
import DBMessage from '../components/DBMessage.vue';
import { checkMobile, divisionTrim } from "@/utils/common";
const agree = ref<boolean>(false)
const moveLogin = ref<boolean>(false)
const index = ref<number>(-1)
const router = useRouter()
const useLogin = useLoginStore();

interface RuleLogin {
  mobile: string;
  passWord: string;
  verification: string;
}
const params = reactive<RuleLogin>({
  mobile: "",
  passWord: "",
  verification: "",
});

// 弹出框配置
const popAttr = reactive<RulePopbox>({
  title: '', // 标题
  text: '', // 内容
  visible: false, // 显示隐藏
});

interface RulePopbox {
  title: string;
  text?: string;
  visible: boolean;
}

const openPopbox = (payload: RulePopbox) => {
  popAttr.visible = payload.visible;
  popAttr.title = payload.title;
  popAttr.text = payload.text ? payload.text : '';
};

// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false;
};

const changePage = (index: number) => {
  localStorage.setItem('currentIndex', JSON.stringify(index))
  router.push('/')
}

const resetScreen = () => {
  var oHtml = document.querySelector('html') as any
  var clientW = document.documentElement.clientWidth
  if (clientW > 750) {
    let screenWidth = (clientW / 750) * 100 < 200 ? (clientW / 750) * 100 : 200;
    oHtml.style.fontSize = screenWidth + 'px'
  }
}

const handleLoginM = () => {
  if (!moveLogin.value) {
    handleAccountLogin();
  } else {
    handleYzmLogin();
  }
};

const handleAccountLogin = () => {
  if (!agree.value) {
    openPopbox({
      visible: true, title: '请勾选协议'
    })
    return false;
  }
  if (!checkMobile(params.mobile)) {
    openPopbox({
      visible: true, title: '请输入正确的手机号'
    })
    return false;
  }

  if (divisionTrim(params.passWord) === "") {
    openPopbox({
      visible: true, title: '请输入密码'
    })
    return false;
  }
  useLogin.login(params).then((res) => {
    if (res.data.code == "200") {
      useLogin.token = res.data.data.token;
      localStorage.setItem("token", useLogin.token);
      useLogin.getUserInfo().then((res)=>{
        if(res.data.code === 200){
          localStorage.setItem("userId", res.data.data.id);
          localStorage.setItem("userName", res.data.data.nickname);
          router.push("/");
        }
      });
    } else {
      alert(res.data.msg);
    }
  });
};

const handleYzmLogin = () => {
  if (!agree.value) {
    openPopbox({
      visible: true, title: '请勾选协议'
    })
    return false;
  }
  if (!checkMobile(params.mobile)) {
    openPopbox({
      visible: true, title: '请输入正确的手机号'
    })
    return false;
  }

  if (divisionTrim(params.verification) === "") {
    openPopbox({
      visible: true, title: '请输入验证码'
    })
    return false;
  }
  useLogin.smsLogin(params).then((res) => {
    if (res.data.code == "200") {
      useLogin.token = res.data.data.token;
      localStorage.setItem("token", useLogin.token);
      useLogin.getUserInfo().then((res)=>{
        if(res.data.code === 200){
          localStorage.setItem("userId", res.data.data.id);
          localStorage.setItem("userName", res.data.data.nickname);
          router.push("/");
        }
      });
    } else {
      alert(res.data.msg);
    }
  });

};

const handleSms = () => {
  if (!checkMobile(params.mobile)) {
    openPopbox({
      visible: true, title: '请输入正确的手机号'
    })
    return false;
  }
  useLogin.sendSMSCode(params).then((res) => {
    if (res.data.code == "200") {
      startCountdown();
    } else {
      alert(res.data.msg);
    }
  });
};

const countdown = ref(0);

const startCountdown = () => {
  countdown.value = 60; // 假设倒计时60秒
  const intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
};

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

          input[type='password'] {
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

            button {
              display: block;
              background-color: #fff;
              height: 0.34rem;
              line-height: 34px;
              border-radius: 5px;
              text-align: center;
              width: 0.8rem;
              font-size: 0.112rem;
              cursor: pointer;
              border: none;
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