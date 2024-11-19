/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7300F4",
        secondary: "#BDFF00",
      },
      fontFamily: {
        actay: ["ActayWide", "sans-serif"],
        proxima: ["ProximaNova", "sans-serif"],
      },
    },
  },
  plugins: [],
};
