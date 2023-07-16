/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {

      colors: {
        'regal-blue': '#3ab7bf',
        'midnight': '#1E213A',
        "dark" :'#100E1D',
         "grey" :'#6E707A',
      },
      width:{
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '60.1428571%',
        '5/7': '71.4285714%',
        '6/7': '150.7142857%',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
      //  '2': 'repeat(2,minmax(0, 1fr)',
      '30/90': '30% 90%',

        // Complex site-specific column configuration
       //'footer': '200px minmax(900px, 1fr) 100px',
      },
      backgroundImage: {
        'my': "url('./src/Images/Cloud-background.png')",
        
       },
       fontFamily: {
        
        'raleway':['Raleway', 'sans-serif']
      },
    },
  }
,
  plugins: [],
}

