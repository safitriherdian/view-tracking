/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ['group-focus'],
      colors: {
        'pink-1': '#F26E70',
        'pink-2': '#FF9595',
        'pink-3': '#F8AFB0',
        'pink-4': '#FBE0E0',
        'blue-1': '#374151',
        'blue-2': '#475569',
        'blue-3': '#798AA4',
        'blue-4': '#BFCDE0',
        'blue-5': '#D9E5F6',
        'grey-1': '#C5C5C5',
        'grey-2': '#DDDDDD',
        'grey-3': '#858585',
        'grey-4': '#5A5A5A',
        'green-1': '#387652',
        'green-2': '#4C9D6E',
        'red-1': '#6F0904',
        'red-2': '#B22E27',
        'yellow-1': '#D39800',
        'yellow-2': '#FFB800',
      },
    },
  },
  plugins: [],
}
