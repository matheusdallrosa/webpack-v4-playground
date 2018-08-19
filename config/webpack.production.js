const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: "production",
    output: {
      filename: "[chunkhash].js",
    },
    plugins: [      
      new MiniCssExtractPlugin({
        filename: "[chunkhash].css",
      }),
      new HtmlWebpackPlugin(),      
    ],
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            MiniCssExtractPlugin.loader, "css-loader"
          ]
        }   
      ]
    },
  };
};