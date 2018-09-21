https://www.webpackjs.com/guides/build-performance/
基于 element-ul
#常用架构
## 描述
使用场景：pc端
组件语法： vue, js, css
## webpack v0.0.1
管理资源 
    ---  加载CSS   style-loader / css-loader'
    ---  加载图片  file-loader
    ---  加载字体  file-loader  woff|woff2|eot|ttf|otf
    ---  加载数据  xml-loader /  csv-loader

管理输出
    ---  预先准备
    ---  设定 HtmlWebpackPlugin
    ---  清理 /dist 文件夹

20180921 加入 vue之后报错
# 安装webpack 
npm i vue --save
npm i webpack webpack-dev-server --save-dev

webpack.config.js
resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
## 引入scss和css
npm i node-sass css-loader vue-style-loader sass-loader --save-dev
解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
// css-loader使得我们可以用模块化的写法引入css,
// vue-style-loader会将引入的css插入到html页面里的style标签里
{
    test: /\.css$/,
    use: [
        'vue-style-loader',
        'css-loader'
    ],
}

引入scss也是同理的配置写法:
{
    test: /\.scss$/,
    use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
    ],
}
## 使用babel转码
bable可以把ES6转码成ES5语法
npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev
1、babelrc文件
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}
2、webpack.config.js
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
}
## 单文件相关插件
   npm i vue-loader vue-template-compiler --save-dev

## source-map
  devtool: 'inline-source-map'  // 用于调试


===== vue文件报错
import 与 require 的区别。

开发
    ---  使用 source map
    ---  选择一个开发工具  webpack-dev-server
    ---  几种模式的区别

======== 分支 webpack4.0.0.1 合并到主线


模块热替换
new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
new webpack.HotModuleReplacementPlugin(),   //hot module replacement 启动模块热替换的插件

tree shaking  / 摇晃树
??测试存在问题

?? 测试 前端测试

?? 生产环境构建
   ---  线上环境    uglifyjs-webpack-plugin(压缩)
   线上与开发环境区别： 压缩，devtool: 'inline-source-map'

?? 代码分离


性能优化
https://www.webpackjs.com/guides/build-performance/
### pc端 v0.0.1： 
webpack要求：基础框架，不同开发环境, 性能优化
组件内容：左侧，右侧，头部，列表 。增删改
?? 头部 不同布局，同个内容的实现
?? 接口调用死的