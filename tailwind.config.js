/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.20rem',
      screens: {
        'xl': '1200px',
        '2xl': '1200px',
      },
    },
   fontFamily:{
    sans:["Montserrat", "sans-serif"]
   }
  },
  // daisyui: {
  //   themes: ["light", "dark", "cupcake"],
  // },
  plugins: [require('daisyui')],  
}
