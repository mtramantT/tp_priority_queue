// webpack.dev.config.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const commonConfig = require("./webpack.config.js");

const API_URL = 'http://localhost:8080/'

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ]
  },
  devServer: {
    port: process.env.PORT || 8888,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.EnvironmentPlugin({ DeckBuilder_BASE_URL: API_URL }),
    new ReactRefreshWebpackPlugin()
  ]
});

module.exports = devConfig;