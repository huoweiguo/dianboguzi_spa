<template>
  <div class="page-content">
    <div class="header-container">
      <div class="logo-mobile">
        <img src="../assets/logo.png" class="电波谷子" />
        <span>登录/注册</span>
      </div>
      <ul>
        <li>首页</li>
        <li>概率展示</li>
        <li>新闻</li>
        <li>兑换码</li>
        <li>联系我们</li>
      </ul>
      <span></span>
    </div>

    <div class="login-form">
      <img src="../assets/logo-image.png" class="logo-image" />
      <div class="login-inner" :class="verifyLogin ? '' : 'login-active'">
        <div class="verify-login">
          <div class="form-ipt">手机号 <input type="text" /></div>
          <div class="form-ipt">
            验证码 <input type="password" class="verify-ipt" />
            <span>发送验证码</span>
          </div>
          <div class="form-text">
            <span @click="setActive(false)">账号密码登录</span>
            <span>忘记密码?</span>
          </div>
        </div>
        <div class="account-login">
          <div class="form-ipt">账号 <input type="text" /></div>
          <div class="form-ipt">密码 <input type="password" /></div>
          <div class="form-text">
            <span @click="setActive(true)">验证码登录</span>
            <span>忘记密码?</span>
          </div>
        </div>
      </div>
      <div class="form-btn">
        <span>登录/注册</span>
      </div>
      <div class="protocol-text">
        <label
          ><input type="checkbox" v-model="protocol" />同意《xxx》协议</label
        >
      </div>
    </div>

    <div class="m-login-header">
      <span @click="goHome">返回首页</span>
      <img src="../assets/logo3.png" />
    </div>

    <div class="m-login-outer">
      <div><img src="../assets/logo-image.png" class="logo-image" /></div>
      <div style="overflow: hidden">
        <div class="verify-outer" :class="status ? 'moveActive' : ''">
          <div class="verify-login">
            <div class="form-ipt">
              账号 <input type="text" v-model="params.mobile" />
            </div>
            <div class="form-ipt">
              密码
              <input
                type="password"
                class="verify-ipt"
                v-model="params.password"
              />
            </div>
          </div>
          <div class="verify-login">
            <div class="form-ipt">手机号 <input type="text" /></div>
            <div class="form-ipt">
              验证码 <input type="password" class="verify-ipt" />
              <span>发送验证码</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-btn" @click="handleLogin">
        <span>登录/注册</span>
      </div>
      <div class="form-text">
        <span @click="setMove">
          {{ status ? "账号密码登录" : "验证码登录" }}
        </span>
      </div>
      <div class="agree-prot">
        <input type="checkbox" v-model="protocol" />
        <span>
          同意<a>《电波谷子用户服务协议》</a>
          <a>《电波谷子居民使用手册》</a>
          <a>《电波谷子隐私权政策》</a>协议
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/utils/login";
import { checkMobile, divisionTrim } from "@/utils/common";
const router = useRouter();
const protocol = ref<boolean>(true);
const verifyLogin = ref<boolean>(true);
const status = ref<boolean>(false);
const useLogin = useLoginStore();
interface RuleLogin {
  mobile: string;
  password: string;
}
const params = reactive<RuleLogin>({
  mobile: "",
  password: "",
});
const setMove = () => {
  status.value = !status.value;
};
const setActive = (flag: boolean) => {
  verifyLogin.value = flag;
};
const goHome = () => {
  router.push("/");
};
const handleLogin = () => {
  if (!protocol.value) {
    alert("请勾选协议");
    return false;
  }
  if (!checkMobile(params.mobile)) {
    alert("请输入正确的手机号");
    return false;
  }

  if (divisionTrim(params.password) === "") {
    alert("请输入密码");
    return false;
  }

  useLogin.login(params).then((res) => {
    if (res.data.code === "200") {
      console.log(res);
    } else {
      alert(res.data.msg);
    }
  });
};
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 70px;
    .logo-mobile {
      display: flex;
      align-items: center;
      img {
        width: 60px;
      }
      span {
        width: 110px;
        display: block;
        font-size: 18px;
        text-align: center;
        font-weight: 300;
      }
    }
    ul {
      display: flex;
      li {
        width: 110px;
        font-size: 18px;
        text-align: center;
        font-weight: 300;
      }
    }
  }

  .login-form {
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
    .logo-image {
      width: 80px;
    }
    .login-inner {
      width: 1000px;
      height: 140px;
      margin-left: 0;
      transition: 0.5s;
      .account-login {
        width: 500px;
        float: left;
      }
      .verify-login {
        width: 500px;
        float: left;
      }
    }
    .login-active {
      margin-left: -500px;
    }
    .form-ipt {
      font-size: 14px;
      font-weight: 300;
      text-align: left;
      width: 320px;
      margin: 0 auto 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 250px;
        height: 34px;
        border: 0;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
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
    .form-text {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      span {
        margin: 0 10px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .form-btn {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      height: 40px;
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
    .protocol-text {
      font-size: 12px;
      label {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        color: #666;
      }
    }
  }
}
.m-login-header {
  display: none;
}
.m-login-outer {
  display: none;
}

@media screen and (max-width: 750px) {
  .header-container {
    display: none !important;
  }
  .login-form {
    display: none;
  }
  .m-login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0.5rem;
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
    img {
      height: 0.82rem;
    }
  }
  .m-login-outer {
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
    .verify-outer {
      position: relative;
      margin-bottom: 0.2rem;
      width: 200%;
      left: 0;
      top: 0;
      transition: 0.5s;
    }
    .moveActive {
      left: -100%;
    }
    .logo-image {
      height: 0.8rem;
    }
    .verify-login {
      float: left;
      font-size: 0.24rem;
      width: 50%;
      .form-ipt {
        display: flex;
        font-size: 0.24rem;
        align-items: center;
        input {
          height: 0.68rem;
          background-color: #fff;
          outline: none;
          border: none;
          flex: 1;
          margin: 0.2rem 0 0.2rem 0.2rem;
          border-radius: 0.08rem;
          font-size: 0.24rem;
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
    .form-text {
      color: #91a5ec;
      font-size: 0.24rem;
      margin-bottom: 0.3rem;
    }
    .agree-prot {
      font-size: 0.22rem;
      color: #636363;
      display: flex;
      align-items: flex-start;
      span {
        display: block;
        line-height: 1.4;
        margin-left: 0.1rem;
        a {
          color: #6aa1f4;
        }
      }
    }
    .form-btn {
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
      height: 0.8rem;
      span {
        display: block;
        width: 2.8rem;
        height: 0.8rem;
        background-image: linear-gradient(90deg, #bebae7 12%, #a8a3e1);
        font-size: 0.32rem;
        line-height: 0.8rem;
        color: #fff;
        font-weight: 300;
        border-radius: 0.1rem;
        text-align: center;
      }
    }
  }
}
</style>
