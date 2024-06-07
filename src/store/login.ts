import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import http from "@/utils/https";

interface AccountLogin {
  mobile: string;
  password: string;
}

interface SMSLogin {
  mobile: string;
  verification: string;
}

interface SendSMS {
  mobile: string;
}

interface PassWord {
  passWord: string;
}

interface SendPassWord {
  passWord: string;
  mobile: string;
  verification: string;
}

interface userInfo {
  [index: string]: unknown;
}

export const useLoginStore = defineStore(
  "login",
  () => {
    const token = ref<string>("");
    let userInfo = reactive<userInfo>({});
    const login = (data: AccountLogin, config: any) => { //账号密码登录
      return http.post(`/api/web/login/login`, { ...data }, config);
    };

    const smsLogin = (data: SMSLogin, config: any) => { //验证码登录
      return http.post(`/api/web/login/yzmlogin`, { ...data }, config);
    };

    const sendSMSCode = (data: SendSMS, config: any) => { //发送登录验证码
      return http.post(`/api/web/login/loginyzm`, { ...data }, config);
    };

    const getUserInfo = () => { //获取用户信息
      return http.post(`/api/web/login/getUserInfo`);
    };

    const offlinecode = (data: SendSMS, config: any) => { //线下兑换码
      return http.post(`/api/web/offlinecode/offlinecode`, { ...data }, config);
    };

    const setpsw= (data: PassWord, config: any) => { //设置密码
      return http.post(`/api/web/login/setpsw`, { ...data }, config);
    };

    const findpass= (data: SendPassWord, config: any) => { //找回密码
      return http.post(`/api/web/login/findpass`, { ...data }, config);
    };

    const sendPWCode= (data: SMSLogin, config: any) => { //找回密码验证码
      return http.post(`/api/web/login/findyzm`, { ...data }, config);
    };

    const removeAccount = () => {
      token.value = "";
      userInfo = {};
    };

    return {
      token,
      userInfo,
      login,
      smsLogin,
      sendSMSCode,
      getUserInfo,
      removeAccount,
      offlinecode,
      setpsw,
      findpass,
      sendPWCode
    };
  },
  { persist: true }
);
