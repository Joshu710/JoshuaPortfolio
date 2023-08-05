/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: "#e1e4e9",
        sub: "#939eae",
        card: "#2e343d",
        pink8008: "#f44c7f",
      },
    },
  },
  plugins: [require("autoprefixer"), require("tailwindcss")],
};
