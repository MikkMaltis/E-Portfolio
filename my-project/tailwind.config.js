/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Prompt: ['Prompt', 'sans-serif'],
      }
    },
    colors: {
      color1: '#a83266',
      color2: '#66a832',
    }
  },
  plugins: [],
}