import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        colourdle: {
          red: "#FF0000",
          orange: "#FFA500",
          yellow: "#FFD700",
          green: "#008000",
          lightblue: "#87CEFA",
          blue: "#0000FF",
          purple: "#800080",
          pink: "#EE82EE",
          lightpink: "#FFC0CB",
          darkred: "#A52A2A",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
