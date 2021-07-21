// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      mainBG: "#262626",
      lighterBG: "#38393C",
      brightBG: "#C8714E",
      secondaryBG: "#D1977F",
      primaryText: "#9CDCFE",
      secondaryText: "#6EAAD0",
      hoverBG: "#56585D",
    },
    fontFamily: { display: "aileron, sans-serif" },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
