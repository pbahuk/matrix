const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "main.[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              /**
               * https://github.com/webpack-contrib/css-loader#importloaders
               * importLoaders: How many loaders are allowed to be applied before this loaders.
               * TODO, Use: [path][name]__[local]--[hash:base64:5] for production
               */
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack 4 starter",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.[chunkhash].css"
    })
  ]
};
