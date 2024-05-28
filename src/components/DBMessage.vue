<template>
  <div class="db-popbox" v-show="props.visible">
    <div class="popbox-center">
      <a class="popbox-close" @click="close"><img src="../images/close.png" /></a>
      <div class="popbox-title">{{ props.title }}</div>
      <div class="popbox-text" v-if="props.text">{{ props.text }}</div>
      <a class="popbox-complete" @click="close"><img src="../images/complete.png" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted } from 'vue'
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
  }
})

const emits = defineEmits('hidePopbox')

const close = () => {
  emits('hidePopbox')
}

onMounted(() => {
  console.log(props)
})

</script>

<style lang="scss" scoped>
.db-popbox {
  width: 630px;
  height: 470px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .popbox-close {
    position: absolute;
    left: 30px;
    top: 30px;
    cursor: pointer;

    img {
      width: 17px;
    }
  }

  .popbox-title {
    font-size: 36px;
    text-align: center;
    margin: 0 50px 20px;
  }

  .popbox-text {
    font-size: 36px;
    text-align: center;
    margin: 0 50px 20px;
    line-height: 43px
  }

  .popbox-complete {
    cursor: pointer;
    display: block;
    width: 285px;
    margin: 50px auto 0;

    img {
      height: 80x;
    }
  }
}
</style>