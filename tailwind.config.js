/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontSize: {
        "2hxl": "1.39rem"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
