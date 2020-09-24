var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js", //[name].[chunkhash].js
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 5500,
  },
  plugins: [
    //index에 css,js파일 직접 추가하는 과정 자동화
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
