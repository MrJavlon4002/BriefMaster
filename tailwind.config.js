/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/index.html", "./src/**/*.{vue, js,ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: '#2766C9',
        darkBlue: '#012F90',
      },
    },
    fontFamily: {
      mainFont: ["sans-serif"],
    },
    container: {
      padding: '5%',
      center: true,
    },
  },
  plugins: [],
}