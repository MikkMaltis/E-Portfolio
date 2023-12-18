/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Prompt: ['Prompt', 'sans-serif'],
        Cabin: ['Cabin', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
    colors: {
      color1: '#a83266',
      color2: '#66a832',
      color3: '#5dbea3',
      color4: '#000',
      color5: '#ebebeb',
      color6: '#fff',
      color7: '#2563EB',
      color8: '#f3f4f6',
      color9: '#aaaaaa',
    }
  },
  plugins: [],
}