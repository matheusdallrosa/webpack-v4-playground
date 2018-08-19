const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    output: {
      filename: "[chunkhash].js",
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};