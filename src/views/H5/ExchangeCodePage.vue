<template>
  <div class="page">
    <div class="code-form">
      <p class="code-form-title">线下兑换码</p>
      <div class="verify-login">
        <div class="form-ipt">
          <label>谷子编号</label><input type="text" v-model="params.code" />
        </div>
        <div class="form-ipt">
          <label>兑换码</label><input type="text" v-model="params.password" />
        </div>
      </div>
      <div class="form-btn" @click="handleClick">
        <span>兑换</span>
      </div>
    </div>

    <div class="m-code-text">
      <p>谷子编号是指喷码在实体谷子背面的编号。</p>
      <p>兑换码是指打印在谷子背卡上的兑换码。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useLoginStore } from "@/store/login";
import { divisionTrim } from "@/utils/common";
import Toast from "@/utils/Toast";
const useLogin = useLoginStore();
interface RuleType {
  code: string;
  password: string;
}
const params = reactive<RuleType>({
  code: "",
  password: "",
});
const userInfo = computed(() => useLogin.userInfo);
const handleClick = () => {
  if (!userInfo.value.account) {
    Toast("请先登录账号！");
    return false;
  }
  if (divisionTrim(params.code) === "") {
    Toast("请输入谷子编号");
    return false;
  }
  if (divisionTrim(params.password) === "") {
    Toast("请输入兑换码");
    return false;
  }
  useLogin
    .offlinecode(params, {})
    .then((res) => {
      if (res.data.code == "200") {
        params.code = "";
        params.password = "";
        Toast("兑换成功，请打开APP查看！");
      } else {
        Toast(res.data.msg);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style lang="scss" scoped>
.code-form {
  margin: 45% 20px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 30px;
  .code-form-title {
    text-align: center;
    line-height: 4;
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
    border-radius: 5px;
  }
}
.m-code-text {
  display: block;
  color: #727272;
  line-height: 1.5;
  text-align: center;
}
</style>
