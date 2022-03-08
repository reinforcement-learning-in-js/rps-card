const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    script: "./www/src/script"
  },
  output: {
    path: path.resolve(__dirname, '../www/build'),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./www/public/index.html",
          filename: "./index.html"
      })
  ]
};