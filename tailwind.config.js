const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
  
      keyframes: {
        flicker: {
         ' 0%': {
            'opacity': '0.5',
            'text-shadow': '2px 2px 10px var(--blue)',
          },
          '100%': {
            'opacity': '1',
            'text-shadow': '2px 2px 20px var(--blue)',
          }
        }
      },
      
      screens: {
        "xs":'320',
        ...defaultTheme.screens,
        'sm':'640px',
        'md': '768px',
       'lg': '992px',
      'xl': '1280px',
      '2xl': '1536px',
      },
      
      padding: {
        '1/3': '33.33333%',
        '2/3': '60.66667%'
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "2rem",
        },
      },

      colors: {
        darker: "#02e1cf",
        beige:"#33383e",
        greendark: "#02e1cf",
        greenlight: "#02e1cf",
        // greenlight: "#BCFD4C",
        pink:"#00000"
      },

      transitionProperty: {
        width: "width",
      },
      
width:{
      "30pc": "30%",
      "31pc": "31%",
      "32pc": "32%",
      "49pc": "49%",
      "48pc": "48%",
      "1/8": "12.5%",
      "2/8": "25%",
      "3/8": "37.5%",
      "4/8": "50%",
      "5/8": "65.8%",
      "6/8": "75%",
      "7/8": "87.5%",
    },
    },
  },


}