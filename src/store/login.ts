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

interface userInfo {
  [index: string]: unknown;
}

export const useLoginStore = defineStore(
  "login",
  () => {
    const token = ref<string>("");
    let userInfo = reactive<userInfo>({});
    const login = (data: AccountLogin, config: any) => {
      return http.post(`/api/web/login/login`, { ...data }, config);
    };

    const smsLogin = (data: SMSLogin, config: any) => {
      return http.post(`/api/web/login/yzmlogin`, { ...data }, config);
    };

    const sendSMSCode = (data: SendSMS, config: any) => {
      return http.post(`/api/web/login/loginyzm`, { ...data }, config);
    };

    const getUserInfo = () => {
      return http.post(`/api/web/login/getUserInfo`);
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
    };
  },
  { persist: true }
);
