/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#150E28",
        primarypurple: "#903AFF",
        primarypink: "#D434FE",
      },
      backgroundImage: (theme) => ({
        primary: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);",
      }),
    },
  },
  plugins: [],
};
