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
        bg_card: "#F4F4F4",
        bg_hover_button: "#9a9a9a",
        bg_save_button: "#aadbf2",
        bg_hover_save_button: "#2a88b4",
      },
      lineHeight: {
        '24': "24px",
        '19': "19px",
      },
      inset: {
        '15': '60px',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "900px",
      md: "1060px",
      lg: "1320px",
      xl: "1300px",
    },
  },
}

