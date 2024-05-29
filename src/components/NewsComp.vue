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
  bottom: 90px;

  .el-pager {
    background-color: #fff;
    padding: 10px;
    border-radius: 26px;
  }

  .btn-prev,
  .btn-next {
    width: 52px;
    height: 52px;
    background-color: transparent !important;

    .el-icon {
      font-size: 25px;
    }
  }

  .el-pager li {
    border-radius: 50%;
    font-size: 25px;
    font-weight: 100;
    margin: 0 5px;
  }

  .el-pager li:hover,
  .el-pager li.is-active {
    background-color: #D2CDF1;
    color: #000;
    font-size: 25px;
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
    height: 120px;
    border: 1px solid #837BAD;
    font-size: 30px;
    color: #484751;
    line-height: 120px;
    margin-bottom: 20px;
    padding: 0 30px;
    box-sizing: border-box;
    cursor: pointer;

    .news-zp-title {
      flex: 1;
      height: 120px;
      padding: 20px 0;
      box-sizing: border-box;
      line-height: 30px;
      overflow: hidden;

      &>div {
        display: flex;
        align-items: center;
        height: auto;
        line-height: 30px;
        font-size: 30px;
        margin-bottom: 10px;

        b {
          display: block;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          font-size: 20px;
          white-space: nowrap;

          &.tag-jz,
          &.tag-cq {
            background-color: #C3BBEB;
            color: #fff;
            width: 54px;
            height: 31px;
            padding: 0 5px;
            text-align: center;
            line-height: 31px;
            border-radius: 5px;
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
      font-size: 22px;
      color: #484751;
      margin-left: 20px;
    }
  }
}
</style>