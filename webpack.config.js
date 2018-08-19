const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    output: {
      filename: "index.js",
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};