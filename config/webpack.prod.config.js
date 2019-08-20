const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new UglifyJSPlugin(), new OptimizeCSSAssetsPlugin()]
  }
};
