const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }, 
    devServer: {
        contentBase: './dist',
        hot: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], //extensions代表的是带这种后缀的文件可以自动解析
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'Output Management'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        options:{preset:[['babel-preset-env'],{modules:false}]}
      }]


    }
}

