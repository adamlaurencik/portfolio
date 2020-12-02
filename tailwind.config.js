const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      spaceBlack: "rgb(27,24,31)",
      spacePurple: "rgb(50,4,89)",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
    }),
    extend: {
      width: { smallSpace: "300px", bigSpace: "600px" },
      height: { smallSpace: "300px", bigSpace: "600px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
