const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
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
        'blue2':'#ABA8A9',
        'green': '#94AFAA',
        "lime":"#ebf6d6",
        'gray': '#a84b62',
        'green': '#779682',
        'rose': '#c2828f',
        'moon': '#ebf6d6',
        'midnight':"#003442",
        'beige':"#dedcd7",
        'dark':"#333333",
        'ring':"#aba89e",
        "blue-200":"#52949e"
      
      },

      colors: {
        soft: "#f0f0f0",
        brand: "#7364d0",
        brandAlt: "#867dd8",
        light: "#a2a1a6",
        mid: "#282833",
        dark: "#22222b",
        darker: "#1d1d23",
        beige:"#dedcd7",
        greendark: "#00837E",
        greenlight: "#00B37E"
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