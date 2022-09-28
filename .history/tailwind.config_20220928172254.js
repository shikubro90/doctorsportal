/** @type {import('tailwindcss').Config} */
import heroBg = require('../../assets/images/bg.png')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url()",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
       doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
