const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    output: {
      filename: "index.js",
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};