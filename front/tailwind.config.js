/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'poppin':['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'soleil': "url('/assets/logo-sun.png')",
      },
      colors: {
        'bradery': "#025159",
        'dark-brown' : "#421F00",
      },
    },
  },
  plugins: [],
}

