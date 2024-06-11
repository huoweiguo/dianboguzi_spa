<template>
  <div class="page">
    <div class="code-form stop-swiping">
      <p class="code-form-title">
        <img src="@/assets/h5/logo-mini.png" alt="" />
      </p>
      <div class="verify-login" v-if="!status">
        <div class="form-ipt">
          <label>手机号</label><input type="text" v-model="params.mobile" />
        </div>
        <div class="form-ipt">
          <label>密码</label><input type="text" v-model="params.passWord" />
        </div>
      </div>
      <div class="verify-login" v-else>
        <div class="form-ipt">
          <label>手机号</label> <input type="text" v-model="params.mobile" />
        </div>
        <div class="form-ipt">
          <label>验证码</label>
          <input type="text" class="verify-ipt" v-model="params.verification" />
          <button :disabled="countdown > 0" @click="handleSms">
            {{ countdown > 0 ? `${countdown}秒后重新获取` : "发送验证码" }}
          </button>
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
          同意 <a href="##">《电波谷子用户服务协议》</a>
          <a href="##">《电波谷子居民使用手册》</a>
          <a href="##">《电波谷子隐私权政策》协议</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 弹窗 -->
  <DBMessage
    :title="popAttr.title"
    :text="popAttr.text"
    :visible="popAttr.visible"
    @hidePopbox="hidePopbox"
  />
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { useLoginStore } from "@/store/login";
import { checkMobile, divisionTrim } from "@/utils/common";
import DBMessage from "@/components/DBMessage.vue";
const props = defineProps({ showLogin: Function });
const useLogin = useLoginStore();
const countdown = ref<number>(0);
const status = ref<boolean>(false);

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
// 弹出框配置
const popAttr = reactive({
  title: "", // 标题
  text: "", // 内容
  visible: false, // 显示隐藏
  type: false,
});
// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false;
};
// 登录/注册
const handleLoginM = () => {
  if (!agreeProtocol.value) {
    popAttr.title = "请勾选协议";
    popAttr.visible = true;
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
    popAttr.title = "请输入正确的手机号";
    popAttr.visible = true;
    return false;
  }

  if (divisionTrim(params.passWord) === "") {
    popAttr.title = "请输入密码";
    popAttr.visible = true;
    return false;
  }

  useLogin.login(params, {}).then((res) => {
    if (res.data.code == "200") {
      useLogin.token = res.data.data.token;
      localStorage.setItem("token", useLogin.token);
      useLogin.getUserInfo().then((res) => {
        if (res.data.code == "200") {
          useLogin.userInfo = { ...res.data.data };
          localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        }
      });
      props.showLogin && props.showLogin();
    } else {
      popAttr.title = res.data.msg;
      popAttr.visible = true;
    }
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
    popAttr.title = "请输入正确的手机号";
    popAttr.visible = true;
    return false;
  }
  useLogin.sendSMSCode(params, {}).then((res) => {
    if (res.data.code == "200") {
      startCountdown();
    } else {
      popAttr.title = res.data.msg;
      popAttr.visible = true;
    }
  });
};
// 验证码登录
const handleYzmLogin = () => {
  if (!checkMobile(params.mobile)) {
    popAttr.title = "请输入正确的手机号";
    popAttr.visible = true;
    return false;
  }

  if (divisionTrim(params.verification) === "") {
    popAttr.title = "请输入验证码";
    popAttr.visible = true;
    return false;
  }

  useLogin.smsLogin(params, {}).then((res) => {
    if (res.data.code == "200") {
      useLogin.token = res.data.data.token;
      localStorage.setItem("token", useLogin.token);
      props.showLogin && props.showLogin();
    } else {
      popAttr.title = res.data.msg;
      popAttr.visible = true;
    }
  });
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
      width: 130px;
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
      width: 100px;
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
