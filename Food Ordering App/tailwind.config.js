/** @type {require('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["ClashDisplay-Regular", ..._fontFamily.sans],
    },
    colors: {
      tomato: "#E50914",
      marigold: "#ffbe0b",
    },
  },
};
export const plugins = [];
