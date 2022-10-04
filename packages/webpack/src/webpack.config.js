const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotEnv = require("dotenv-webpack");
const webpack = require("webpack");

const cwd = process.cwd();
const outputPath = path.join(cwd, "build");

module.exports = {
  context: path.resolve(cwd, "./"),
  entry: ["./src/index.tsx"],
  output: {
    path: outputPath,
    publicPath: "/",
    pathinfo: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
    fallback: {
      fs: false,
      net: false,
      path: require.resolve("path-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ["babel-loader?cacheDirectory"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|csv|xlsx|ttf|woff(2)?)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new dotEnv({
      path: "./.env",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
