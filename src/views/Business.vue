<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div class="business-contanier">
    <div class="business-box">
      <!-- <h2>营业执照</h2> -->
      <img src="../assets/buss.jpg" alt="">
    </div>  
   </div>
</template>

<style lang="scss" scoped>
.business-contanier{
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  padding: 5% 10% 20px;
  box-sizing: border-box;
  .business-box{
    h2{
      font-size: 30px;
      font-family: "宋体",'宋体-简',"常规体";
      text-align: center;
      font-weight: bold;
      margin-bottom: 50px;
    }
    img{
      width: 100%;
    }
  }
}
</style>