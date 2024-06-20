<template>
  <div class="page">
    <div class="code-form stop-swiping">
      <p class="code-form-title">
        <img src="@/assets/h5/logo-mini.png" alt="" />
      </p>
      <div class="verify-login" v-if="!status">
        <div class="form-ipt">
          <label>手机号</label
          ><input
            type="text"
            class="textIn"
            :maxlength="11"
            v-model="params.mobile"
          />
        </div>
        <div class="form-ipt">
          <label>密码</label
          ><input
            type="password"
            :maxlength="20"
            class="passIn"
            v-model="params.passWord"
          /><i class="forget" @click="forgetPassword">忘记密码？</i>
        </div>
      </div>
      <div class="verify-login" v-else>
        <div class="form-ipt">
          <label>手机号</label>
          <input type="text" :maxlength="11" v-model="params.mobile" />
        </div>
        <div class="form-ipt">
          <label>验证码</label>
          <div class="form-code">
            <input
              type="text"
              class="verify-ipt"
              :maxlength="6"
              v-model="params.verification"
            />
            <button :disabled="countdown > 0" @click="handleSms">
              {{ countdown > 0 ? `${countdown}秒后重新获取` : "发送验证码" }}
            </button>
          </div>
        </div>
      </div>
      <div class="form-btn" @click="handleLoginM">
        <span>登录/注册</span>
      </div>

      <div class="links" @click="status = !status">
        <a href="##">{{ status ? "账号密码登录" : "验证码登录" }}</a>
      </div>

      <div class="footer">
        <input type="checkbox" v-model="agreeProtocol" />
        <div>
          同意 <a @click="toHref(1)">《用户协议》</a>
          <a @click="toHref(2)">《隐私协议》</a>
        </div>
      </div>
    </div>
  </div>
  <div class="showProtocol" v-if="showProtocol != 0">
    <!-- <img class="back" @click="goBack" src="@/assets/h5/prev.png" /> -->
    <span class="back" @click="goBack">返回</span>
    <Agreement v-if="showProtocol == 1" />
    <Privacy v-else-if="showProtocol == 2" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store/login";
import { checkMobile, divisionTrim } from "@/utils/common";
import Toast from "@/utils/Toast";
import Agreement from "../Agreement.vue";
import Privacy from "../Privacy.vue";
const props = defineProps({ showLogin: Function });
const useLogin = useLoginStore();
const router = useRouter();
const countdown = ref<number>(0);
const status = ref<boolean>(false);
const showProtocol = ref<number>(0);
const agreeProtocol = ref<boolean>(false);
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
// 协议跳转
const toHref = (type: number) => {
  showProtocol.value = type;
};
const goBack = () => {
  showProtocol.value = 0;
};
// 登录/注册
const handleLoginM = () => {
  if (!agreeProtocol.value) {
    Toast("请勾选协议");
  } else {
    if (status.value) {
      handleYzmLogin();
    } else {
      handleAccountLogin();
    }
  }
};
// 账号密码登录
const handleAccountLogin = () => {
  if (!checkMobile(params.mobile)) {
    Toast("请输入正确的手机号");
    return false;
  }

  if (divisionTrim(params.passWord) === "") {
    Toast("请输入密码");
    return false;
  }

  useLogin
    .login(params, {})
    .then((res) => {
      if (res.data.code == "200") {
        useLogin.token = res.data.data.token;
        localStorage.setItem("token", useLogin.token);
        useLogin.getUserInfo().then((res) => {
          if (res.data.code == "200") {
            useLogin.userInfo = { ...res.data.data };
            localStorage.setItem("userInfo", JSON.stringify(res.data.data));
          }
        });
        props.showLogin && props.showLogin(0, true);
      } else {
        Toast(res.data.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// 倒数
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
// 获取验证码
const handleSms = () => {
  if (!checkMobile(params.mobile)) {
    Toast("请输入正确的手机号");
    return false;
  }
  useLogin
    .sendSMSCode(params, {})
    .then((res) => {
      if (res.data.code == "200") {
        startCountdown();
      } else {
        Toast(res.data.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// 验证码登录
const handleYzmLogin = () => {
  if (!checkMobile(params.mobile)) {
    Toast("请输入正确的手机号");
    return false;
  }

  if (divisionTrim(params.verification) === "") {
    Toast("请输入验证码");
    return false;
  }

  useLogin
    .smsLogin(params, {})
    .then((res) => {
      if (res.data.code == "200") {
        useLogin.token = res.data.data.token;
        localStorage.setItem("token", useLogin.token);
        props.showLogin && props.showLogin(0, true);
      } else {
        Toast(res.data.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const forgetPassword = () => {
  props.showLogin && props.showLogin(2, false);
};
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
      flex: 0 0 70px;
    }
    .form-code {
      display: flex;
      flex: 1;
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
      width: 60px;
      margin-right: 5px;
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
    button {
      display: block;
      background-color: #fff;
      height: 34px;
      line-height: 34px;
      border-radius: 5px;
      text-align: center;
      width: 120px;
      font-size: 12px;
      cursor: pointer;
      border: none;
      margin-right: 20px;
    }
    .textIn {
      width: 150px;
      margin-right: 80px;
    }
    .passIn {
      width: 150px;
      margin-right: 5px;
    }
    .forget {
      width: 50px;
      flex: 0 0 55px;
      font-size: 10px;
      color: 646464;
      margin-right: 20px;
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
.showProtocol {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: auto;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  padding-top: 40px;
  box-sizing: border-box;
  .back {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-block;
    width: 50px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: rgba(255, 255, 255, 0.34);
    border-radius: 13px 13px 13px 13px;
    font-size: 12px;
  }
}
</style>
