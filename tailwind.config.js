/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        pRed: "#F33A3A",
        pGreen: "#16D761",
        pBlue: "#249AF3",
        pOrange: "#F68136",
        primaryTextColor: "#334150",
        secondaryTextColor: "#7F8FA4",
        secondaryTextColor2: "#BFC7D1",
        lineColor: "#E1E8EE",
      },
    },
  },
  plugins: [],
};
