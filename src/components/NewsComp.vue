<template>
  <div class="news-height">
    <SwiperNews />
    <!-- <ul class="news-ul">
      <li><span>线下活动是什么能吃吗？线下活动是什么能吃吗？</span><i>2024/01/15</i></li>
      <li><span>cp30参展决定！活动详情展示。</span><i>2024/01/15</i></li>
      <li><span>cp30参展决定！活动详情展示。</span><i>2024/01/15</i></li>
    </ul> -->

    <ul class="news-ul-zp">
      <li @click="showNewsPage('1254')">
        <div class="news-zp-title">
          <div>
            <b class="tag-title"> 二次元运营（线下）</b>
            <span class="tag-jz">急招</span>
          </div>
          <span>扬州丨运营类丨全职/兼职</span>
        </div>
        <span>2024/04/25 发布</span>
      </li>
      <li>
        <div class="news-zp-title">
          <div>
            <b class="tag-title"> 二次元运营（线下）</b>
            <span class="tag-cq">长期</span>
          </div>
          <span>扬州丨运营类丨全职/兼职</span>
        </div>
        <span>2024/04/25 发布</span>
      </li>
      <li>
        <div class="news-zp-title">
          <div>
            <b class="tag-title"> 二次元运营（线下）</b>
            <span class="tag-jz">急招</span>
          </div>
          <span>扬州丨运营类丨全职/兼职</span>
        </div>
        <span>2024/04/25 发布</span>
      </li>
    </ul>
    <div class="pagination-box"><el-pagination layout="prev, pager, next" :page-size="3" :total="total" /></div>
  </div>
</template>

<script lang="ts" setup>
import SwiperNews from './SwiperNews.vue'
import { ElPagination } from 'element-plus'
import { defineProps, computed, defineEmits } from 'vue'
const props = defineProps({
  total: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['showNewsInner'])
const total = computed(() => props.total)

const showNewsPage = (id: number) => {
  emits('showNewsInner', id)
}

</script>
<style lang="scss">
.pagination-box {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
  bottom: 0.6rem;

  .el-pager {
    background-color: #fff;
    padding: 0.05rem;
    border-radius: 0.13rem;
  }

  .btn-prev,
  .btn-next {
    width: 0.26rem;
    height: 0.26rem;
    background-color: transparent !important;

    .el-icon {
      font-size: 0.13rem;
    }
  }

  .el-pager li {
    border-radius: 50%;
    font-size: 0.13rem;
    font-weight: 100;
    margin: 0 0.03rem;
  }

  .el-pager li:hover,
  .el-pager li.is-active {
    background-color: #D2CDF1;
    color: #000;
    font-size: 0.13rem;
    font-weight: 100;
  }
}
</style>
<style lang="scss" scoped>
.news-height {
  position: relative;
  height: 100%;
}

.news-ul-zp {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6rem;
    border: 1px solid #837BAD;
    font-size: 0.15rem;
    color: #484751;
    line-height: 0.6rem;
    margin-bottom: 0.1rem;
    padding: 0 0.15rem;
    box-sizing: border-box;
    cursor: pointer;

    .news-zp-title {
      flex: 1;
      height: 0.6rem;
      padding: 0.1rem 0;
      box-sizing: border-box;
      line-height: 0.15rem;
      overflow: hidden;

      &>div {
        display: flex;
        align-items: center;
        height: auto;
        line-height: 0.15rem;
        font-size: 0.15rem;
        margin-bottom: 0.05rem;

        b {
          display: block;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          font-size: 0.1rem;
          white-space: nowrap;

          &.tag-jz,
          &.tag-cq {
            background-color: #C3BBEB;
            color: #fff;
            width: 0.27rem;
            height: 0.16rem;
            padding: 0 0.03rem;
            text-align: center;
            line-height: 0.16rem;
            border-radius: 0.03rem;
          }

          &.tag-cq {
            background-color: #86AEEA;
          }
        }


      }

      span {
        margin-left: 0;
      }
    }

    span {
      font-size: 0.11rem;
      color: #484751;
      margin-left: 0.1rem;
    }
  }
}
</style>