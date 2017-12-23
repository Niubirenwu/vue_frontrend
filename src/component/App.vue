<template>
  <div>
    <app-head></app-head>
    <router-view></router-view>
    <app-foot></app-foot>
  </div>
</template>

<script>
import HeaderComponent from "./frame/header.vue";
import FooterComponent from "./frame/footer.vue"
export default {
    components:{
      'app-head':HeaderComponent,
      'app-foot':FooterComponent
    }
};
</script>

<style scoped>

</style>