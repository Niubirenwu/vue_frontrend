import VueRouter from "vue-router";
//导入子路由
import GoodsIndexComponent from "../component/goods/GoodsIndex.vue";
import GoodsDetailComponent from "../component/goods/detail/GoodsDetail.vue";
import GoodsMoreComponent from "../component/goods/more/GoodsMore.vue";

//路由配置对象
const routerConfig=[
  // 默认访问商品首页,重定向
  {path:'/',redirect:'/goods'},


  {name:'g',path:'/goods',component:GoodsIndexComponent},
  {name:'gd',path:'/goods/detail/:id',component:GoodsDetailComponent},
  {name:'gm',path:'/goods/more',component:GoodsMoreComponent}
]


//导出路由实例对象
export default  new VueRouter({
    routes:routerConfig
})