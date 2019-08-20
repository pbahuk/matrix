const COLORS = require("./src/browser/resources/colors");
const { FONT_SIZE, FONT_WEIGHT } = require("./src/browser/resources/variables");

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-constants")({
      defaults: {
        colors: COLORS,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT
      }
    })
  ]
};
