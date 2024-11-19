/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       "4xl": "2000px",
       "3xl": "1655px",
      }
    },
  },
  plugins: [],
}