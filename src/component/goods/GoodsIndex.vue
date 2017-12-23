<template>
  <div>
    <app-bread></app-bread>
    <app-top></app-top>
    <app-list></app-list>
  </div>
   
</template>

<script>
//导入首页子组件
import Breadxie from "./frame/Breadxie.vue";
import GoodsTop from "./frame/Top.vue";
import GoodsList from "./frame/List.vue";
export default {
  components:{
    AppBread:Breadxie,
    AppTop:GoodsTop,
    AppList:GoodsList
  }
};
</script>

<style scoped>

</style>