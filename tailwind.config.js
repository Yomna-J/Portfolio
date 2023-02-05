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
      primary: "#721CFF",
      darkPrimary: "#4d0eb4",
      secondary: "#F8EDFF",
      darkGray: "#1B1A17",
      lightGray: "#262624",
    },
  },
  plugins: [],
};
