<template>
  <div class="page" :class="{ show: props.visible }">
    <div class="menu_back">
      <span @click="close">返回</span>
    </div>
    <div class="container">
      <div class="title">{{ newsDetail.title }}</div>
      <div class="time">发布时间：{{ newsDetail.showDate }}</div>
      <div class="content">
        <img src="@/assets/h5/banner-1.png" alt="" />
        <p>{{ newsDetail.content }}</p>
        <!-- <p>你好</p>
        <p>
          电波谷子即将进入删档内测阶段，在此期间，各位居民的充值将会在公测阶段按照如下方式返利：
        </p>
        <p>
          1.向钱包内充值，无论是否已经消费，将会在公测后按照1：1返还至钱包余额。
        </p>
        <p>
          3.购买电波谷子会员（米米猫粮配送协议）的，每购买一次，在公测后赠送30天电波谷子会员配送协议，并在开服时一次性赠送7*冻干与7*罐头。若您在内测时购买了多次电波谷子会员配送协议，则会多次获得赠送7*冻干与7*罐头的一次性赠礼。
        </p>
        <p>
          4.内测期间，钱包内金额暂不可提现，在公测开始后可立即提现。为您造成的不便，在此深表歉意，请您谅解。
        </p>
        <p></p>
        <p>电波谷子运营团队</p>
        <p>2024年5月24日</p>
        <p></p>
        <p>
          1.向钱包内充值，无论是否已经消费，将会在公测后按照1：1返还至钱包余额。
        </p>
        <p>
          3.购买电波谷子会员（米米猫粮配送协议）的，每购买一次，在公测后赠送30天电波谷子会员配送协议，并在开服时一次性赠送7*冻干与7*罐头。若您在内测时购买了多次电波谷子会员配送协议，则会多次获得赠送7*冻干与7*罐头的一次性赠礼。
        </p>
        <p>
          4.内测期间，钱包内金额暂不可提现，在公测开始后可立即提现。为您造成的不便，在此深表歉意，请您谅解。1.向钱包内充值，无论是否已经消费，将会在公测后按照1：1返还至钱包余额。
        </p>
        <p>
          3.购买电波谷子会员（米米猫粮配送协议）的，每购买一次，在公测后赠送30天电波谷子会员配送协议，并在开服时一次性赠送7*冻干与7*罐头。若您在内测时购买了多次电波谷子会员配送协议，则会多次获得赠送7*冻干与7*罐头的一次性赠礼。
        </p>
        <p>
          4.内测期间，钱包内金额暂不可提现，在公测开始后可立即提现。为您造成的不便，在此深表歉意，请您谅解。
        </p> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  defineProps,
  defineEmits,
  onUpdated,
  watch,
  computed,
} from "vue";
const props = defineProps(["visible", "id"]);
const emits = defineEmits(["update:visible"]);
interface NewsType {
  title: string;
  showDate: string;
  summary: string;
  content: string;
}

import { useNewsStore } from "@/store/news";
const useNews = useNewsStore();
const newsDetail = ref<NewsType>({
  title: "",
  showDate: "",
  summary: "",
  content: "",
});
const once = ref<boolean>(false);
onUpdated(() => {
  if (props.visible === false) {
    once.value = false;
  }
  if (props.visible === true && once.value === false) {
    once.value = true;
    useNews.getNewsInfo({ id: props.id }, {}).then((res) => {
      if (res.data.code == "200") {
        // 文章详情
        newsDetail.value = res.data?.data || {
          title: "",
          showDate: "",
          summary: "",
          content: "",
        };
      } else {
        alert(res.data.msg);
      }
    });
  }
});
// 关闭
const close = () => {
  emits("update:visible", false);
};
</script>

<style lang="scss" scoped>
.page {
  position: fixed;
  left: auto;
  top: 0;
  right: -100vw;
  bottom: 0;
  width: 100vw;
  z-index: 1000;
  background: linear-gradient(to bottom, #b3d6fa, #f5d3f9);
  overflow: auto;
  transition: right 0.3s;

  &.show {
    right: 0;
  }

  .menu_back {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 1;
    span {
      display: inline-block;
      width: 61px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: rgba(255, 255, 255, 0.34);
      border-radius: 13px 13px 13px 13px;
      font-size: 12px;
    }
  }
}

.container {
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 80px 10px 10px;
  border-radius: 10px;

  .title {
    font-weight: 400;
    font-size: 20px;
    color: #021236;
    line-height: 23px;
    text-align: center;
    margin: 10px 30px;
  }
  .time {
    font-weight: 400;
    font-size: 12px;
    color: #c1c1c1;
    line-height: 14px;
    text-align: center;
  }

  .content {
    font-weight: 400;
    font-size: 14px;
    color: #707070;
    line-height: 16px;
    img {
      display: block;
      max-width: 100%;
      margin: 1em auto;
    }
    p {
      margin: 0.5em 0;
      white-space: pre-line;
      // white-space: pre-wrap;
    }
  }
}
</style>
