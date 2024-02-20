/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#5D5FEF",
          black: "#000000",
          white: "#FFFFFF",
          gray: {
            text: "#98949E",
            accent: "#FAFAFA",
          },
          red: {
            text: "#8F0A13",
            accent: "#FEF5F6",
          },
          green: {
            text: {
              1: "#38EF7D",
              2: "#11998E",
            },
            accent: "#F6FEF9",
          },
          blue: {
            text: {
              1: "#56CCF2",
              2: "#2F80ED",
            },
            accent: "#F6FCFE",
          },
          orange: {
            text: {
              1: "#EEA849",
              2: "#F46B45",
            },
            accent: "#FEFBF6",
          },
          purple: {
            text: {
              1: "#E100FF",
              2: "#7F00FF",
            },
            accent: "#FEF5FF",
          },
        },
      },
    },
  },
  plugins: [],
};
