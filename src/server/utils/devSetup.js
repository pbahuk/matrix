// Hot Module Replacement for Express Server with bundles.
const webpackConfig = require("../../../webpack.config");
const compiler = require("webpack")(webpackConfig);

module.exports = function(app) {
  if (process.env.NODE_ENV === "development") {
    app.use(
      require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        watchOptions: {
          aggregateTimeout: 500,
          poll: true
        },
        stats: {
          colors: true,
          chunks: false
        }
      })
    ),
      app.use(require("webpack-hot-middleware")(compiler));
  }
};
