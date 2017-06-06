var webpack = require('webpack');
var path = require('path');
var ExtractPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        loaders:[
            { test: [/\.jsx?$/,/\.js?$/] , exclude: /node_modules/, loader:'babel-loader', query: { plugins:['transform-runtime'] } }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json','.scss','.css']
    },
    devServer: {
        contentBase: './dist',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 3000
    },
    plugins:[
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractPlugin({
          filename: 'style.css',
          allChunks: true
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        files: {
            css: ['style.css'],
            js: [ "bundle.js"],
        }
      }),
    
  ]

}