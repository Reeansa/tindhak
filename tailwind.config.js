/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
    './src/**/*.{html,js}',
  './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Signika']
      }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
