const webpack = require("webpack");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env, args) => {
  const isProduction = args.mode === "production";
  return {
    experiments: {
      asyncWebAssembly: true,
    },
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].[hash].js",
      clean: true, // Automatically clean the output directory in Webpack 5+
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "."),
      }),
      new CleanWebpackPlugin(), // Cleans up old files in the output directory
    ],
    resolve: {
      extensions: [".js", ".wasm"], // Automatically resolve .wasm modules
    },
    optimization: {
      splitChunks: {
        chunks: "all", // Improve caching by splitting shared modules
      },
    },
    devtool: isProduction ? "source-map" : "eval-source-map", // Improve debugging
  };
};
