// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dim_dark: "#323232",
        dim_gray: "#8C8C8C",
        dim_light_gray: "#F9F9F9",
        dim_green: "#5CB7B2",
        dim_green_dark: '#318178',
        dim_popbg: "rgba(0, 0, 0, 0.2)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1320px",
      xl: "1300px",
    },
  },
}

