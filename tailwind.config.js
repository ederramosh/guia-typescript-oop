module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
  future: {
    disableExperimentalFeatures: true,
  },
};

/*
comando para crear el watcher   
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
*/
