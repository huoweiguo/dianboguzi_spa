<template>
  <div>
    <SwiperNews />
    <ul class="news-ul">
      <li><span>线下活动是什么能吃吗？线下活动是什么能吃吗？</span><i>2024/01/15</i></li>
      <li><span>cp30参展决定！活动详情展示。</span><i>2024/01/15</i></li>
      <li><span>cp30参展决定！活动详情展示。</span><i>2024/01/15</i></li>
    </ul>
    <div class="pagination-box"><el-pagination layout="prev, pager, next" :page-size="3" :total="total" /></div>
  </div>
</template>

<script lang="ts" setup>
import SwiperNews from './SwiperNews.vue'
import { ElPagination } from 'element-plus'
import { defineProps, computed } from 'vue'
const props = defineProps({
  total: {
    type: Number,
    default: 1
  }
})
const total = computed(() => props.total)
console.log(total.value, 'aaaa')
</script>
<style lang="scss">
.pagination-box {
  display: flex;
  justify-content: center;

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
<style lang="scss" scoped></style>