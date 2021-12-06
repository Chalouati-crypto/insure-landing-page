module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "80em",
      imgchange: "40em",
      "big-desktop": "100em",
    },
    colors: {
      "dark-violet": "hsl(256, 26%, 20%)",
      "very-dark-violet": "hsl(270, 9%, 17%)",
      "dark-grayish-violet": "hsl(273, 4%, 51%)",
      "grayish-blue": "hsl(216, 30%, 68%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      body: "'Karla', sans-serif",
      headings: "'DM Serif Display', serif",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
