/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

