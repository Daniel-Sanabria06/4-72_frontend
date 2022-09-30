/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      scale: {
      '102': '1.02',
      },
      transitionProperty: {
        left: "left",
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},

      'lg2': {'min': '1000px'},
      // => @media (max-width: 639px) { ... }




      '2xl2': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl2': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg22': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md2': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm2': {'min': '639px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
