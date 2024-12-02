/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      boxShadow: {
        'left-shadow': '-4px 0 10px rgba(0, 0, 0, 0.03)', // Custom shadow for left side
      },
    },
  },
  plugins: [],
};
