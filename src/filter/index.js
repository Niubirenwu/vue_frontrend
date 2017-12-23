// 这里注册所有的全局自定义过滤器, 使用vue插件的方式来写
// Vue插件编写非常简单, 只需要一个函数即可, 这个函数在Vue.use(函数)的时候, 会接收到Vue对象


export default function(Vue){
  Vue.filter('date',function(tplDate){
      let date =new Date(tplDate);
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  })
}