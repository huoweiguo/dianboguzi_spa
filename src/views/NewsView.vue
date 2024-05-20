<template>
  <div class="news-contanier">
    <div class="news-outer">
      <div class="concept-bg"></div>
      <DHeader></DHeader>
      <div class="news">
        <div class="news-left">
          <ul>
            <li
              @click="setType(1)"
              class="left-item"
              :class="{ active: type === 1 }"
            >
              最新
            </li>
            <li
              @click="setType(2)"
              class="left-item"
              :class="{ active: type === 2 }"
            >
              线上活动
            </li>
            <li
              @click="setType(3)"
              class="left-item"
              :class="{ active: type === 3 }"
            >
              线下活动
            </li>
            <li
              @click="setType(4)"
              class="left-item"
              :class="{ active: type === 4 }"
            >
              加入我们
            </li>
          </ul>
        </div>
        <div class="news-right">
          <div v-show="type === 1" class="news-right-latest">
            <div v-show="!show" class="latest-home">
              <img class="latest-img" src="../assets/news.png" alt="" />
              <ul>
                <li
                  @click="pushUrl()"
                  v-for="(item, index) in 3"
                  :key="index"
                  class="latest-item"
                >
                  <span>cp30参展决定！活动详情展示。</span>
                  <span class="latest-item-date">2024/01/05</span>
                </li>
              </ul>
              <p @click="setShow(true)" class="latest-more">更多...</p>
            </div>
            <div v-show="show" class="latest-list">
              <ul>
                <li
                  @click="pushUrl()"
                  v-for="(item, index) in 10"
                  :key="index"
                  class="latest-item"
                >
                  <span>cp30参展决定！活动详情展示。</span>
                  <span class="latest-item-date">2024/01/05</span>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="type === 4" class="join-list">
            <ul>
              <li
                @click="pushUrl()"
                v-for="(item, index) in 10"
                :key="index"
                class="join-item"
              >
                <div>
                  <div class="join-item-title">
                    二次元运营（线下）
                    <p class="join-item-icon">急招</p>
                    <!-- <p class="join-item-icon2">长期</p> -->
                  </div>
                  <p class="join-item-text">扬州丨运营类丨全职/兼职</p>
                </div>
                <div class="join-item-date">2024/01/05</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="news-m-outer">
      <div class="menu-slider-login">
        <MenuSlider />
      </div>

      <div class="slider-outer">
        <SwiperComp />
      </div>

      <div class="news-list">
        <div class="news-list-nav">
          <span
            v-for="item in newsType"
            :key="item.type"
            :class="currentType === item.type ? 'active' : ''"
            @click="setNewsType(item.type)"
            >{{ item.title }}</span
          >
        </div>
        <div
          class="news-content"
          :class="currentType === 'NEW' ? 'showNews' : ''"
        >
          <div v-for="item in newList" :key="item.id" @click="golinks(item)">
            <span>[{{ getNewsTitle(item.id) }}] {{ item.title }}</span>
            <i>{{ item.showDate }}</i>
          </div>

          <div class="loading-more">更多...</div>
        </div>

        <div
          class="news-content"
          :class="currentType === 'OUTLINE' ? 'showNews' : ''"
        >
          <div
            v-for="item in outlineList"
            :key="item.id"
            @click="golinks(item)"
          >
            <span>[{{ getNewsTitle(item.id) }}] {{ item.title }}</span>
            <i>{{ item.date }}</i>
          </div>

          <div class="loading-more">更多...</div>
        </div>

        <div
          class="news-content"
          :class="currentType === 'ONLINE' ? 'showNews' : ''"
        >
          <div v-for="item in onlineList" :key="item.id" @click="golinks(item)">
            <span>[{{ getNewsTitle(item.id) }}] {{ item.title }}</span>
            <i>{{ item.date }}</i>
          </div>

          <div class="loading-more">更多...</div>
        </div>

        <div
          class="news-content"
          :class="currentType === 'CONTACT' ? 'showNews' : ''"
        >
          <div
            class="zp"
            v-for="item in contactList"
            :key="item.id"
            @click="golinks(item)"
          >
            <span>
              {{ item.title }}
              <label class="jz">急招</label>
              <!-- <label class="cq">长期</label> -->
            </span>
            <div class="flex-box">
              <b>{{ item.summary }}</b>
              <i>{{ item.showDate }}发布</i>
            </div>
          </div>

          <div class="loading-more">更多...</div>
        </div>
      </div>
      <!-- <div class="arrow-down"><img src="../../public/arrow.png" /></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuSlider from "../components/MenuSlider.vue";
import DHeader from "../components/DHeader.vue";
import SwiperComp from "../components/SwiperComp.vue";
import { useNewsStore } from "@/store/news";
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const show = ref<boolean>(false);
const type = ref<number>(Number(route.query.type) || 1);
const currentType = ref<string>("NEW");
const useNews = useNewsStore();
const params = reactive({
  id: 1, // 1: 最新 2: 线上 3: 线下 4: 加入我们
  pageNum: 1,
  pageSize: 10,
});

const onLineParams = reactive({
  id: 2, // 1: 最新 2: 线上 3: 线下 4: 加入我们
  pageNum: 1,
  pageSize: 10,
});

const outLineParams = reactive({
  id: 3, // 1: 最新 2: 线上 3: 线下 4: 加入我们
  pageNum: 1,
  pageSize: 10,
});

const contactParams = reactive({
  id: 4, // 1: 最新 2: 线上 3: 线下 4: 加入我们
  pageNum: 1,
  pageSize: 10,
});
const newsType = reactive([
  { type: "NEW", title: "最新", id: 1 },
  { type: "OUTLINE", title: "线下活动", id: 2 },
  { type: "ONLINE", title: "线上活动", id: 3 },
  { type: "CONTACT", title: "联系我们", id: 4 },
]);
const newList = ref([]);
const outlineList = ref([]);
const onlineList = ref([]);
const contactList = ref([]);

const golinks = (obj: any) => {
  router.push(`/news/${obj.id}?type=${currentType.value}`);
};
const getNewsTitle = (id: number) => {
  const arr = newsType.filter((item) => item.id == id);
  return arr.length ? arr[0].title : "";
};

const setNewsType = (type: string) => {
  currentType.value = type;
};
const setShow = (bol: boolean) => {
  show.value = bol;
};
const setType = (num: number) => {
  show.value = false;
  type.value = num;
};
const pushUrl = () => {
  router.push(`/news/1?type=${type.value}`);
};
const getNewsItem = (params, arr) => {
  useNews.getNewsList(params).then((res) => {
    if (res.data.code == "200") {
      arr.value = res.data.rows;
    }
  });
};
onMounted(() => {
  // 最新
  getNewsItem(params, newList);
  // 线上
  getNewsItem(onLineParams, onlineList);
  // 线下
  getNewsItem(outLineParams, outlineList);
  // 联系我们
  getNewsItem(contactParams, contactList);
});
</script>

<style lang="scss" scoped>
.news-contanier {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #b2d6fa, #f8d3f8);
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
  .news {
    display: flex;
    position: relative;
    box-sizing: border-box;
  }
  .news-left {
    width: 22%;
    box-sizing: border-box;
    padding-top: 70px;
    .left-item {
      text-align: center;
      font-size: 0.22rem;
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
  .news-right {
    position: relative;
    width: 78%;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .latest-img {
    width: 11rem;
    height: 2rem;
    max-width: 90%;
  }
  .latest-item {
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.21rem;
    background: #fff;
    width: 11rem;
    max-width: 90%;
    height: 1.21rem;
    line-height: 1.5;
    padding: 0 0.6rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    color: #484751;
    .latest-item-date {
      font-size: 0.22rem;
    }
  }
  .latest-more {
    width: 11rem;
    max-width: 90%;
    cursor: pointer;
    text-align: center;
    font-size: 0.2rem;
  }
  .latest-list {
    width: 100%;
    height: 78vh;
    overflow-y: auto;
    ul {
      width: 100%;
    }
  }
  .join-list {
    width: 100%;
    height: 78vh;
    overflow-y: auto;
    ul {
      width: 90%;
    }
  }
  .join-item {
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    font-size: 0.31rem;
    background: #fff;
    width: 11rem;
    max-width: 100%;
    height: 1.21rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    align-items: center;
    color: #484751;
    .join-item-date {
      font-size: 0.22rem;
    }
    .join-item-text {
      font-size: 0.2rem;
      line-height: 2;
    }
    .join-item-title {
      display: flex;
    }
    .join-item-icon {
      font-size: 0.2rem;
      color: #fff;
      width: 0.54rem;
      height: 0.31rem;
      text-align: center;
      line-height: 0.31rem;
      background: #c3bbeb;
      border-radius: 0.1rem;
    }
    .join-item-icon2 {
      font-size: 0.2rem;
      color: #fff;
      width: 0.54rem;
      height: 0.31rem;
      text-align: center;
      line-height: 0.31rem;
      border-radius: 0.1rem;
      background: #86aeea;
    }
  }
  .news-m-outer {
    display: none;
  }
}
@media screen and (max-width: 750px) {
  .news-outer {
    display: none;
  }
  .news-m-outer {
    display: block !important;
    padding: 0.9rem 0.4rem;
    .menu-slider-login {
      margin-bottom: 0.8rem;
    }
    .slider-outer {
      margin: 0 0 0.2rem;
    }

    .news-list {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0.1rem;
      box-sizing: border-box;
      padding-bottom: 0.4rem;
      .news-list-nav {
        height: 0.8rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #fff;
        span {
          display: block;
          width: 15%;
          font-family: PingFang SC;
          height: 0.8rem;
          line-height: 0.8rem;
          font-weight: 300;
          color: #414141;
          text-align: center;
          font-size: 0.24rem;
          &.active {
            position: relative;
            &::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 2px;
              background-color: #fff;
            }
          }
        }
      }
      .news-content {
        display: none;
        margin: 0 0.2rem;
        & > div {
          border-bottom: 1px dashed #fff;
          line-height: 0.24rem;
          padding: 0.2rem 0;
          span {
            display: block;
            color: #fff;
            font-size: 0.24rem;
            white-space: nowrap;
            margin-bottom: 0.2rem;
          }
          i {
            display: block;
            font-size: 0.2rem;
            font-style: normal;
            color: #646468;
          }
        }
        .zp {
          span {
            label {
              display: inline-block;
              color: #fff;
              font-size: 0.2rem;
              height: 0.3rem;
              line-height: 0.3rem;
              width: 0.7rem;
              text-align: center;
              vertical-align: middle;
              border-radius: 0.15rem;
              &.jz {
                background-color: #948ce0;
              }
              &.cq {
                background-color: #5dacf5;
              }
            }
          }
          .flex-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            b,
            i {
              font-weight: 300;
              color: #484751;
              font-size: 0.2rem;
            }
          }
        }
      }
      .showNews {
        display: block;
      }
      .loading-more {
        text-align: center;
        font-size: 0.24rem;
        color: #fff;
        padding: 0.3rem 0 0;
        border-bottom: 0 !important;
      }
    }
    .arrow-down {
      position: fixed;
      left: 50%;
      bottom: 0.3rem;
      transform: translate(-50%, 0);
      img {
        height: 0.6rem;
        opacity: 1;
      }
    }
  }
}
</style>
