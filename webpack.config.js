const merge = require("webpack-merge");
const env = process.env.NODE_ENV || "development";
const baseConfig = require("./config/webpack.base.config");

let config = {};
if (env === "production") {
  console.log("webpack: production config selected");
  config = merge(baseConfig, require("./config/webpack.prod.config"));
} else if (env === "development") {
  console.log("webpack: development config selected");
  config = merge(baseConfig, require("./config/webpack.dev.config"));
}

module.exports = config;
