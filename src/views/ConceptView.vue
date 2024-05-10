<template>
  <!--PC-->
  <div class="concept-contanier">
    <div class="concept-bg"></div>
    <DHeader></DHeader>
    <div class="concept">
      <div class="concept-left">
        <ul>
          <li
            @click="setType(1)"
            class="left-item"
            :class="{ active: type === 1 }"
          >
            柄图
          </li>
          <li
            @click="setType(2)"
            class="left-item"
            :class="{ active: type === 2 }"
          >
            电子谷子
          </li>
          <li
            @click="setType(3)"
            class="left-item"
            :class="{ active: type === 3 }"
          >
            痛柜
          </li>
        </ul>
      </div>
      <div class="concept-right">
        <div v-show="type === 2" class="concept-right-dzgz">
          <img
            class="right-dzgz-img1"
            src="../assets/concept_dzgz1.png"
            alt=""
          />
          <div class="right-dzgz-box">
            <img
              class="right-dzgz-img2"
              src="../assets/concept_dzgz2.png"
              alt=""
            />
            <div class="right-dzgz-text">
              在平台抽卡可以获得谷美通过和已合成的电子谷子结合，装饰自己的电子谷子。
            </div>
          </div>
        </div>
        <div v-show="type === 3" class="concept-right-tg">
          <div class="right-tg-text">
            平台给每位居民准备了痛柜进行展示可以根据自己的喜好装扮属于自己独一无二的痛柜。
          </div>
          <img class="right-tg-img" src="../assets/concept_tg.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!--移动端-->
  <div class="concept-m-container">
    <div class="concept-m-content">
      <MenuSlider />
    </div>
    <div class="concept-m-bg">
      <img src="../assets/concept_bg.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuSlider from "../components/MenuSlider.vue";
import DHeader from "../components/DHeader.vue";
import { ref, reactive } from "vue";
const type = ref<number>(2);
const showSlider = ref<boolean>(false);

const mobileMenu = reactive([
  { title: "首页", intro: "DIANBO GOODS", desc: "" },
  { title: "概念展示", intro: "CONCEPTS", desc: "谷子、谷模与谷美" },
  { title: "新闻", intro: "NEWS", desc: "线上与线下的最新活动" },
  { title: "兑换码", intro: "TOKENS", desc: "来兑换你最新获得的谷子吧" },
  { title: "联系我们", intro: "CUSTOMER SERVICE", desc: "让我们听到您的声音" },
]);
const hideSlider = (status: boolean) => {
  showSlider.value = status;
};
const setType = (num: number) => {
  type.value = num;
};
</script>

<style lang="scss" scoped>
.concept-contanier {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, #b2d6fa, #f8d3f8);
  position: relative;
  .concept-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100%;
    background: url("../assets/concept.png") no-repeat 100% 100%;
    background-size: 100% 100%;
  }
  .concept {
    display: flex;
    position: relative;
    box-sizing: border-box;
  }
  .concept-left {
    width: 22%;
    box-sizing: border-box;
    padding-top: 60px;
    .left-item {
      text-align: center;
      font-size: 0.36rem;
      margin-bottom: 1rem;
      cursor: pointer;
      &:hover {
        color: #6960a7;
      }
    }
    .active {
      color: #6960a7;
    }
  }
  .concept-right {
    position: relative;
    width: 78%;
    box-sizing: border-box;
  }
  .concept-right-dzgz {
    width: 100%;
    display: flex;
  }
  .right-dzgz-img1 {
    width: 4rem;
    max-width: 40%;
  }
  .right-dzgz-box {
    width: 60%;
    margin-left: 0.1rem;
    margin-bottom: 0.3rem;
  }
  .right-dzgz-img2 {
    width: 6.5rem;
    max-width: 95%;
  }
  .right-dzgz-text {
    width: 6.3rem;
    max-width: 95%;
    height: 1.72rem;
    border: 0.01rem solid #333;
    margin-top: -0.6rem;
    background: #fff;
    font-size: 0.3rem;
    padding: 0.4rem 0.4rem;
    box-sizing: border-box;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .concept-right-tg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-tg-text {
    width: 8.9rem;
    height: 1.72rem;
    border: 0.01rem solid #333;
    background: #fff;
    max-width: 90%;
    min-height: 1.72rem;
    font-size: 0.3rem;
    padding: 0.4rem 0.4rem;
    box-sizing: border-box;
    line-height: 1.5;
  }
  .right-tg-img {
    width: 2.85rem;
    height: 5.88rem;
    margin-top: 0.5rem;
  }
}

.concept-m-container {
  display: none;
  padding-top: 0.5rem;
  width: 100%;
  min-height: calc(100vh - 0.5rem);
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .concept-m-content {
    padding: 0.2rem;
    box-sizing: border-box;
    .menu-silder {
      display: block;
      height: 0.28rem;
    }
  }
  .concept-m-bg {
    width: 100%;
    height: 100%;
    padding: 5%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 750px) {
  .concept-contanier {
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    .concept-bg,
    .concept-left,
    .concept-right {
      display: none;
    }
  }
  .concept-m-container {
    display: block;
  }
}
</style>
