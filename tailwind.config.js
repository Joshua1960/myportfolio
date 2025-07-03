/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'maincolour':'#FFB923'
      },
      fontFamily: {
        title: ['IBMPlexSans', 'sans-serif'],
      }      
    },
  },
  plugins: [],
}
