<template>
  <div class="code-contanier">
    <DHeader></DHeader>
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
      <div @click="subForm()" class="form-btn">
        <span>兑换</span>
      </div>
    </div>

    <div class="m-code-text">
      <p>谷子编号是指喷码在实体谷子背面的编号。</p>
      <p>兑换码是指打印在谷子背卡上的兑换码。</p>
    </div>

    <div class="m-code-header">
      <MenuSlider />
    </div>

    <div class="m-code-logo">
      <img src="../assets/logo3.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuSlider from "../components/MenuSlider.vue";
import DHeader from "../components/DHeader.vue";
import { useLoginStore } from "@/store/login";
import { checkMobile, divisionTrim } from "@/utils/common";
import { ref, reactive, computed } from "vue";

const useLogin = useLoginStore();
const userInfo = computed(() => useLogin.userInfo);
const params = reactive({
  code: "",
  password: "",
});
const subForm = () => {
  console.log(params, "form");
  console.log(userInfo, "form");
  if (!userInfo.value.id) {
    alert("请先登录账号！");
    return false;
  }
  if (divisionTrim(params.code) === "") {
    alert("请输入兑换码");
    return false;
  }

  if (divisionTrim(params.password) === "") {
    alert("请输入兑换密码");
    return false;
  }

  useLogin.offlinecode(params).then((res) => {
    if (res.data.code == "200") {
      alert("兑换成功，请打开APP查看！");
    } else {
      alert(res.data.msg);
    }
  });
};
</script>

<style lang="scss" scoped>
.code-contanier {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .code-form {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 0.4rem;
    .code-form-title {
      text-align: center;
      font-size: 0.3rem;
      margin-bottom: 0.4rem;
    }
    .verify-login {
      width: 500px;
    }
    .form-ipt {
      font-size: 14px;
      font-weight: 300;
      text-align: left;
      width: 380px;
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
        width: 300px;
        height: 34px;
        border: 0;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        font-size: 14px;
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
    margin-top: 40px;
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
}
.m-code-header {
  display: none;
}
.m-code-logo {
  display: none;
}
.m-code-text {
  display: none;
}
@media screen and (max-width: 750px) {
  .code-contanier {
    .code-form {
      height: auto;
      position: fixed;
      left: 50%;
      top: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(100% - 1rem);
      transform: translate(-50%, -50%);
      background-color: rgba(255, 255, 255, 0.5);
      box-sizing: border-box;
      padding: 0.5rem;
      border-radius: 0.2rem;
      overflow: hidden;
      .code-form-title {
        font-weight: bold;
      }
      .verify-login {
        width: 5rem;
        font-size: 0.24rem;
        .form-ipt {
          width: 100%;
          font-size: 14px;
          font-weight: 300;
          text-align: left;
          margin: 0 auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          label {
            text-align: right;
            width: 1.2rem;
            margin-right: 0.1rem;
            font-size: 0.26rem;
          }
          input {
            height: 0.68rem;
            background-color: #fff;
            outline: none;
            border: none;
            flex: 1;
            margin: 0.2rem 0 0.2rem 0rem;
            border-radius: 0.08rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
          }
          span {
            display: flex;
            flex: 2;
            height: 0.68rem;
            line-height: 0.68rem;
            background-color: #fff;
            border-radius: 0.1rem;
            border: 1px solid #fff;
            color: #c1c1c1;
            margin-left: 0.2rem;
            box-sizing: border-box;
            width: 2.14rem;
            justify-content: center;
          }
        }
      }
    }
    .form-btn {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      height: 40px;
      cursor: pointer;
      span {
        display: block;
        width: 150px;
        height: 43px;
        background-image: linear-gradient(90deg, #bebae7 12%, #a8a3e1);
        font-size: 16px;
        line-height: 40px;
        color: #fff;
        font-weight: 300;
        border-radius: 5px;
      }
    }
  }
  .m-code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 0.5rem;
    span {
      display: inline-block;
      padding: 0 0.2rem;
      font-size: 0.24rem;
      font-weight: 300;
      background-color: rgba(255, 255, 255, 0.5);
      height: 0.56rem;
      line-height: 0.56rem;
      border-radius: 0.28rem;
    }
    .m-code-header-user {
      display: flex;
      align-items: center;
    }
    .m-code-header-name {
      color: #707587;
      margin-right: 5px;
    }
  }
  .m-code-logo {
    display: block;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
    width: 154px;
    height: 58px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .m-code-text {
    width: 4.8rem;
    display: block;
    position: fixed;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    font-size: 0.24rem;
    color: #727272;
    line-height: 1.5;
    text-align: center;
    font-weight: 300;
  }
}
</style>
