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
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            "style-loader", "css-loader"
          ]
        }   
      ]
    },
  };
};