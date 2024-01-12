/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        'custom':'1px'
      },
      colors:{
        myCustomColor:'#115E59'
      },
      width: {
        100:'400px'
      }
    },
  },
  plugins: [],
}