const path = require('path')

module.exports = {
  mode: 'production',   // 模式
  entry: path.join(__dirname, './src/index.js'),    // 入口文件
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  output: {   // 出口文件
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
}