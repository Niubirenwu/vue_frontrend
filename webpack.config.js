//配置文件
const path =require("path");
//html-webpack-plugin
const htmlWP=require("html-webpack-plugin");
//暴露
module.exports={
  //入口，要打包的文件
  entry:path.resolve(__dirname,'./src/main.js'),
  //配置输出
  output:{
    //输出 的路径，文件夹和文件名
   path: path.resolve(__dirname,'./dist'),
   //输出的文件名
   filename:'bundle.js'
    },
    plugins:[
      new htmlWP({
        //源文件位置
        template:"./src/index.html",
        // 处理后文件名字
        filename:"index.html",
        inject:"body",  //JS脚本插入的位置
        minify:{ // 压缩优化HTML页面
          collapseWhitespace:true,      // 合并空白字符
          removeComments:true,         // 移除注释
          removeAttributeQuotes:true // 移除属性上的引号
      }
      })
    ],
    module:{
      rules:[
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        },
        {
          test:/\.less$/,
          use:['style-loader','css-loader','less-loader']
        },
        {
          test:/\.(png|gif|jpg|jepg|bmp|svg|woff|ttf)$/,
          use:[
            {
              loader:"url-loader",
              options:{limit:10240,name: '[name]_[hash:8].[ext]'}
            }
          ]
        },
        {
          test:/\.js$/,
          use:['babel-loader'],
          exclude:/node_modules/
        },
        {
          test:/\.vue$/,
          use:['vue-loader']
        }
      ]
    },
    devServer: {
      open: true,         // 服务启动后自动打开浏览器
      port: 8888,         // 服务端口
      contentBase: 'dist' // 开启服务的目录
  }
}