import Vue from "vue";
//导入路由插件
import VueRouter from "vue-router";
import AppComponent from "./component/App.vue";
import "./css/style.css";
import axios from "./js/axios_config.js";
import api from "./js/api_config.js";
// 导入elementui
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// 导入过滤器
import filter from "./filter";

// 注入到VUE实例中
Vue.prototype.$http =axios;
Vue.prototype.$api =api;
//启用Vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(filter)
//导入路由实例
import router from "./router/index.js";
new Vue({
  el:"#app",
  render:c=>c(AppComponent),
  //es6简写语法
  router
})