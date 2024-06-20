<template>
  <div v-if="visible" class="loading-pop" :class="{ hide: hidepop }">
    <img src="@/assets/h5/loading-img.png" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const visible = ref(true);
const hidepop = ref(false);

// 点击隐藏并删除dom
// const clickHide = () => {
//   hidepop.value = true;
//   setTimeout(() => {
//     visible.value = false;
//   }, 300);
// };
onMounted(() => {
  setTimeout(() => {
    hidepop.value = true;
    setTimeout(() => {
      visible.value = false;
    }, 300);
  }, 500);
});
</script>

<style lang="scss" scoped>
.loading-pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background: linear-gradient(to right top, #b3d6fa, #f5d3f9);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;

  &.hide {
    opacity: 0;

    img {
      transform: translateY(-200%);
    }
  }

  img {
    display: block;
    width: 60%;
    transition: transform 0.3s;
  }
}
</style>
