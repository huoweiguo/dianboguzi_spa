<template>
  <div class="forget-psw">
    <div class="forget-box">
      <div style="margin-bottom: 68px;">
        <el-steps :active="active" align-center>
          <el-step title="确认账号" />
          <el-step title="重置密码" />
        </el-steps>
      </div>


      <div class="forget-outer">
        <div class="forget-inner" :class="active === 1 ? 'forget-active' : ''">
          <div class="forget-send-verify">
            <div><label>手机号</label><input type="text" placeholder="请输入手机号" /></div>
            <div><label>验证码</label><input type="text" class="sms-code" placeholder="请输入验证码" /> <a>发送验证码</a></div>
            <a class="next-btn" @click="nextStep"><img src="../images/next.png" /></a>
          </div>
          <div class="forget-modify-psw">
            <div><label>输入新密码</label><input type="password" placeholder="请输入密码" /></div>
            <div class="forget-promt">由大写字母，小写字母和特殊符号组成</div>
            <div><label>再次输入密码</label><input type="password" placeholder="请输入密码" /></div>
            <a class="next-btn" @click="updatePsw"><img src="../images/complete.png" /></a>
          </div>
        </div>
      </div>
    </div>

    <!--弹出框-->
    <DBMessage :title="popAttr.title" :text="popAttr.text" :visible="popAttr.visible" @hidePopbox="hidePopbox" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElSteps, ElStep } from 'element-plus'
import DBMessage from '../components/DBMessage.vue'
const active = ref<number>(0)

// 弹出框配置
const popAttr = reactive<RulePopbox>({
  title: '', // 标题
  text: '', // 内容
  visible: false // 显示隐藏
})

interface RulePopbox {
  title: string
  text?: string
  visible: boolean
}


const openPopbox = (payload: RulePopbox) => {
  popAttr.visible = payload.visible
  popAttr.title = payload.title
  popAttr.text = payload.text ? payload.text : ''
}


// 关闭弹出框
const hidePopbox = () => {
  popAttr.visible = false
}

const nextStep = () => {
  active.value++
}

const updatePsw = () => {
  // 打开弹出框
  openPopbox({ visible: true, title: '修改密码成功', text: '' })
}
</script>

<style lang="scss">
.forget-box {
  .el-step__icon {
    width: 60px !important;
    height: 60px !important;
    background-color: rgba(0, 158, 255, 0.25);
    border: 0;
    font-size: 30px;
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
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    top: 27px;
  }

  .el-step__title {
    color: #000;
    font-size: 20px;
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
    width: 970px;
    height: 580px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 60px 120px 0;
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
            width: 277px;
            margin: 58px auto 0;

            img {
              height: 80px;
            }
          }

          &>div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;

            label {
              font-size: 28px;
              display: block;
              width: 100px;
              font-weight: 300;
              text-align: right;
              margin-right: 17px;
            }

            input {
              width: 600px;
              height: 77px;
              border: 0;
              border-radius: 10px;
              padding: 0 30px;
              font-size: 28px;
              outline: none;
              color: #acacac;
              font-weight: 300;

              &::placeholder {
                color: #E1E1E1;
              }
            }

            .sms-code {
              width: 433px !important;
              margin-right: 20px;
            }

            a {
              display: block;
              width: 145px;
              height: 77px;
              background-color: #fff;
              border-radius: 10px;
              text-align: center;
              line-height: 77px;
              cursor: pointer;
              color: #acacac;
              font-size: 24px;
            }
          }
        }

        .forget-promt {
          display: block;
          padding-left: 200px;
          margin-top: -15px;
          color: #7A7A7A;
          font-size: 20px;
          font-size: 300;
        }

        .forget-modify-psw {
          label {
            width: 190px !important;
          }

          input {
            width: 516px !important;
          }

          .next-btn {
            margin-top: 47px;
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