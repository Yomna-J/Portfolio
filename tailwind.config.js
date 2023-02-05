/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inconsolata: ["Inconsolata", "sans-serif"],
      impact: ["impact", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#AD00FF",
      darkPrimary: "#6A36A5",
      secondary: "#F8EDFF",
      darkGray: "#161130",
      lightGray: "#262624",
    },
  },
  plugins: [],
};
