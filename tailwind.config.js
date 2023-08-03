/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: { mtblue: "#e1e4e9" } },
  },
  plugins: [require("autoprefixer"), require("tailwindcss")],
};
