import { ref } from "vue";
import { defineStore } from "pinia";
import http from "@/utils/https";

interface AccountLogin {
  mobile: string;
  password: string;
}

interface userInfo {
  [index: string]: unknown;
}

export const useLoginStore = defineStore(
  "login",
  () => {
    const token = ref<string>("");
    const userInfo = ref<userInfo>({});
    const login = (data: AccountLogin, config: any) => {
      return http.post(`/api/web/login/login`, { ...data }, config);
    };

    const getCode = () => {
      return http.get(`/captchaImage`);
    };

    const getUserInfo = () => {
      return http.get("/getInfo");
    };

    const logOut = () => {
      return http.post("/logout");
    };

    return {
      token,
      userInfo,
      login,
      logOut,
      getCode,
      getUserInfo,
    };
  },
  { persist: true }
);
