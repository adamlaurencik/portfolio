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
      width: { miniSpace: "270px", smallSpace: "350px", mediumSpace: "600px" },
      height: { miniSpace: "270px", smallSpace: "350px", mediumSpace: "600px" },
      rotate: {
        60: "60deg",
        120: "120deg",
      },
      screens: {
        miniSpace: "400px",
        smallSpace: "600px",
        mediumSpace: "800px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
