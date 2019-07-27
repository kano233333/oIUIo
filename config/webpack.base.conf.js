'use strict'
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts','.tsx','.js','.json']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        }
      },
      {
        test: /\.sass|\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        inject: "body"
      })
  ]
};