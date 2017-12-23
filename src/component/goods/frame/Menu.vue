<template>
  <p>
      <a v-for="item in menu" :key="item.id">
        {{item.title}}
        <!-- 这里判断item是否还有子级数据, 如果有那么递归调用自己进行数据的渲染, 如果没有递归结束 -->
        <app-menu v-if="item.subcates && item.subcates.length !=0" :menu="item.subcates"></app-menu>
      </a>
  </p>
</template>

<script>
  export default {
     // 定义组件的名称, 这样在组件这里可以使用自己
     name:'app-menu',
    props:['menu']
  }
</script>

<style scoped>

</style>