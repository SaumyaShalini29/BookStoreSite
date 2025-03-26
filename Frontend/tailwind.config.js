import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables class-based dark mode

  theme: {
    extend: {},
  },

  plugins: [daisyui], // Use DaisyUI with ES Modules
};

export default config;
