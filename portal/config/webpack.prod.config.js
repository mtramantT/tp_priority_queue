// webpack.dev.config.js
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin  = require("optimize-css-assets-webpack-plugin");

const commonConfig = require("./webpack.config.js");

// const API_URL = 'localhost:8080/'

const prodConfigs = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    // new webpack.EnvironmentPlugin({ DeckBuilder_BASE_URL: API_URL }),
  ]
});

module.exports = prodConfigs;