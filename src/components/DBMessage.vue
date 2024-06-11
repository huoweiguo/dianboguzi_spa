<template>
  <div class="db-popbox" v-show="props.visible">
    <div class="popbox-center">
      <a class="popbox-close" @click="close"><img src="../images/close.png" /></a>
      <div class="popbox-title">{{ props.title }}</div>
      <div class="popbox-text" v-if="props.text">{{ props.text }}</div>
      <a class="popbox-complete" v-if="type" @click="close"><img src="../images/complete.png" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  title: {
    default: '',
    type: String
  },
  text: {
    default: '',
    type: String
  },
  visible: {
    default: false,
    type: Boolean
  },
  type:{
    default: false,
    type: Boolean
  }
})

const emits = defineEmits(['hidePopbox'])

const close = () => {
  emits('hidePopbox')
}

</script>

<style lang="scss" scoped>
.db-popbox {
  width: 3.15rem;
  height: 2.35rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 0.1rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .popbox-close {
    position: absolute;
    left: 0.15rem;
    top: 0.15rem;
    cursor: pointer;

    img {
      display: block;
      width: 0.09rem;
    }
  }

  .popbox-title {
    font-size: 0.18rem;
    text-align: center;
    margin: 0 0.25rem 0.1rem;
  }

  .popbox-text {
    font-size: 0.18rem;
    text-align: center;
    margin: 0 0.25rem 0.1rem;
    line-height: 0.22rem;
  }

  .popbox-complete {
    cursor: pointer;
    display: block;
    width: 1.42rem;
    margin: 0.25rem auto 0;

    img {
      height: 0.4rem;
      display: block;
    }
  }
}
</style>