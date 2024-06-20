<template>
  <div class="page">
    <div class="title">忘记密码</div>
    <div class="code-form stop-swiping">
      <p class="code-form-title">
        <img src="@/assets/h5/logo-mini.png" alt="" />
      </p>
      <div class="verify-login" v-if="status">
        <div class="form-ipt">
          <label>输入新密码</label
          ><input
            type="password"
            :maxlength="20"
            class="textIn"
            v-model="params.password"
          />
        </div>
        <div class="form-ipt">
          <label>再次输入</label
          ><input
            type="password"
            :maxlength="20"
            class="passIn"
            v-model="params.newPassWord"
          />
        </div>
      </div>
      <div class="verify-login" v-else>
        <div class="form-ipt">
          <label>手机号</label> <input type="text" v-model="params.mobile" />
        </div>
        <div class="form-ipt">
          <label>验证码</label>
          <div class="form-code">
            <input
              type="text"
              class="verify-ipt"
              v-model="params.verification"
              :maxlength="6"
            />
            <button :disabled="countdown > 0" @click="handleSms">
              {{ countdown > 0 ? `${countdown}秒后重新获取` : "发送验证码" }}
            </button>
          </div>
        </div>
      </div>
      <div class="form-btn" @click="nextStep" v-if="!status">
        <span>下一步 确认密码</span>
      </div>
      <div class="form-btn" @click="changePassword" v-else>
        <span>确认</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { useLoginStore } from "@/store/login";
import { checkMobile, divisionTrim, validatePassword } from "@/utils/common";
import Toast from "@/utils/Toast";
const props = defineProps({ showLogin: Function });
const useLogin = useLoginStore();
const countdown = ref<number>(0);
const status = ref<boolean>(false);

interface RuleLogin {
  mobile: string;
  password: string;
  verification: string;
  newPassWord: string;
}
const params = reactive<RuleLogin>({
  mobile: "",
  password: "",
  verification: "",
  newPassWord: "",
});

let timer: any = null;

// 修改密码成功
const changePassword = () => {
  if (!validatePassword(params.password)) {
    Toast(
      "请输⼊正确的密码组合形式，由⼤写字⺟，⼩写字⺟和特殊符号，最低6位数密码组成"
    );
    return false;
  }
  if (params.newPassWord.length === 0) {
    Toast("再次输入密码不能为空");
    return false;
  }
  if (params.password !== params.newPassWord) {
    Toast("两次输入密码不一致");
    return false;
  }
  let obj = {
    mobile: params.mobile,
    password: params.password,
    verification: params.verification,
  };
  useLogin
    .findpass(obj, {})
    .then((res) => {
      if (res.data.code == "200") {
        // 打开弹出框
        Toast("修改密码成功，即将跳转到首页");
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          props.showLogin && props.showLogin(0, false);
        }, 2000);
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
    .sendPWCode(params, {})
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
// 下一步，密码设置
const nextStep = () => {
  if (!checkMobile(params.mobile)) {
    Toast("请输入正确的手机号");
    return false;
  }

  if (divisionTrim(params.verification) === "") {
    Toast("请输入验证码");
    return false;
  }
  status.value = !status.value;
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
  .title {
    margin-top: 38%;
    font-size: 20px;
    color: #414141;
    text-align: center;
  }
}
.code-form {
  margin: 40px 20px;
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
      width: 90px;
      margin-right: 10px;
      flex: 0 0 90px;
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
</style>
