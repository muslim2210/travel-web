/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5D50C6",
        secondary: "#F85E9F",
        light: "#EEEEEE",
        dark: "#222831",
        orange: "#FF5722",
      },
    },
  },
  plugins: [],
};
