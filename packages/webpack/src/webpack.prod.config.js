const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
    ],
  },
});
