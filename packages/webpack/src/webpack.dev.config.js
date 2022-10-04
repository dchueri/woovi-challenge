const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

const cwd = process.cwd();
const outputPath = path.join(cwd, "build");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: outputPath,
    },
    allowedHosts: "all",
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    compress: true,
    open: true,
    port: "8444",
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [new ReactRefreshPlugin()],
});
