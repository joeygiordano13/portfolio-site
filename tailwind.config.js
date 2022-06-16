/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm":"480px"
      },
      spacing: {
        "big":"48rem"
      }
    },
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1072px",
      xl:"1280px",
    },
    fontFamily:{
      quicksand:['Quicksand', 'sans-serif']
    }
  },
  plugins: [],
}
