<template>
  <div class="forget-psw">

    <PCHeader :currentIndex="index" @changePage="changePage" />

    <div class="forget-box">
      <div style="margin-bottom: 0.34rem;">
        <el-steps :active="active" align-center>
          <el-step title="确认账号" />
          <el-step title="重置密码" />
        </el-steps>
      </div>


      <div class="forget-outer">
        <form>
          <div class="forget-inner" :class="active === 1 ? 'forget-active' : ''">
            <div class="forget-send-verify">
              <div><label>手机号</label><input type="text" name="mobile" autocomplete="off" placeholder="请输入手机号" /></div>
              <div><label>验证码</label><input type="text" name="verifycode" autocomplete="off" class="sms-code"
                  placeholder="请输入验证码" />
                <a>发送验证码</a>
              </div>
              <a class="next-btn" @click="nextStep"><img src="../images/next.png" /></a>
            </div>
            <div class="forget-modify-psw">
              <div><label>输入新密码</label><input type="password" name="newpsw" autocomplete="off" placeholder="请输入密码" />
              </div>
              <div class="forget-promt">由大写字母，小写字母和特殊符号组成</div>
              <div><label>再次输入密码</label><input type="password" name="again" autocomplete="off" placeholder="请输入密码" />
              </div>
              <a class="next-btn" @click="updatePsw"><img src="../images/complete.png" /></a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!--弹出框-->
    <DBMessage :title="popAttr.title" :text="popAttr.text" :visible="popAttr.visible" @hidePopbox="hidePopbox" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElSteps, ElStep } from 'element-plus'
import DBMessage from '../components/DBMessage.vue'
import PCHeader from '../components/PCHeader.vue'
const active = ref<number>(0)
const index = ref<number>(-1)
const router = useRouter()
let timer = null
interface RulePopbox {
  title: string
  text?: string
  visible: boolean
}
// 弹出框配置
const popAttr = reactive<RulePopbox>({
  title: '', // 标题
  text: '', // 内容
  visible: false // 显示隐藏
})

const openPopbox = (payload: RulePopbox) => {
  popAttr.visible = payload.visible
  popAttr.title = payload.title
  popAttr.text = payload.text ? payload.text : ''
}

const changePage = (index: number) => {
  localStorage.setItem('currentIndex', JSON.stringify(index))
  router.push('/')
}

// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false
}

const nextStep = () => {
  active.value++
}

const resetScreen = () => {
  var oHtml = document.querySelector('html')
  var clientW = document.documentElement.clientWidth
  if (clientW > 750) {
    let screenWidth = (clientW / 750) * 100 < 200 ? (clientW / 750) * 100 : 200;
    oHtml.style.fontSize = screenWidth + 'px'
  }
}


const updatePsw = () => {
  localStorage.setItem('currentIndex', 1)
  // 打开弹出框
  openPopbox({
    visible: true, title: '修改密码成功', text: '即将跳转到首页'
  })

  // timer && clearTimeout(timer)

  // timer = setTimeout(() => {
  //   hidePopbox()
  //   router.push('/')
  // }, 2000)
}



onMounted(() => {
  // 设置html字体
  resetScreen()
  window.addEventListener('resize', resetScreen, false)
})


onUnmounted(() => {
  window.removeEventListener('resize', resetScreen, false)
})

</script>

<style lang="scss">
.forget-box {
  .el-step__icon {
    width: 0.3rem !important;
    height: 0.3rem !important;
    background-color: rgba(0, 158, 255, 0.25);
    border: 0;
    font-size: 0.15rem;
    display: flex;
    margin: 0 auto;
  }

  .is-wait {
    .el-step__icon {
      background-color: rgba(36, 10, 64, 0.25);
    }
  }

  .el-step__icon-inner {
    font-weight: 500;
  }

  .el-step__head.is-wait {
    color: #000;
  }

  .el-step.is-center .el-step__line {
    left: 70%;
    right: -30%;
  }

  .el-step.is-horizontal .el-step__line {
    height: 0.03rem;
    background-color: #fff;
    border-radius: 0.02rem;
    top: 0.14rem;
  }

  .el-step__title {
    color: #000;
    font-size: 0.1rem;
  }

  .el-step__title.is-wait {
    color: #000;
    font-weight: normal;
  }

  .el-step__title.is-process {
    font-weight: normal;
  }
}
</style>

<style lang="scss" scoped>
.forget-psw {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  overflow: hidden;

  .forget-box {
    position: absolute;
    width: 4.75rem;
    height: 2.9rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.1rem;
    padding: 0.1rem 0.6rem 0;
    box-sizing: border-box;

    .forget-outer {
      position: relative;
      width: 100%;
      overflow: hidden;

      .forget-inner {
        width: 200%;
        overflow: hidden;
        margin-left: 0;
        transition: 0.5s;

        &>div {
          float: left;
          width: 50%;

          .next-btn {
            cursor: pointer;
            display: block;
            width: 1.38rem;
            margin: 0.29rem auto 0;

            img {
              height: 0.4rem;
              display: block;
            }
          }

          &>div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.12rem;

            label {
              font-size: 0.14rem;
              display: block;
              width: 0.5rem;
              font-weight: 300;
              text-align: right;
              margin-right: 0.09rem;
            }

            input {
              width: 3rem;
              height: 0.39rem;
              border: 0;
              border-radius: 0.05rem;
              padding: 0 0.15rem;
              font-size: 0.14rem;
              outline: none;
              color: #acacac;
              font-weight: 300;

              &::placeholder {
                color: #E1E1E1;
              }
            }

            .sms-code {
              width: 2.1rem !important;
              margin-right: 0.1rem;
            }

            a {
              display: block;
              width: 0.8rem;
              height: 0.39rem;
              background-color: #fff;
              border-radius: 0.05rem;
              text-align: center;
              line-height: 0.39rem;
              cursor: pointer;
              color: #acacac;
              font-size: 0.112rem;
            }
          }
        }

        .forget-promt {
          display: block;
          padding-left: 1rem;
          margin-top: -0.08rem;
          color: #7A7A7A;
          font-size: 0.1rem;
          font-size: 300;
        }

        .forget-modify-psw {
          label {
            width: 0.95rem !important;
          }

          input {
            width: 2.58rem !important;
          }

          .next-btn {
            margin-top: 0.24rem;
          }
        }
      }

      .forget-active {
        margin-left: -100%;
      }
    }
  }
}
</style>