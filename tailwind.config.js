const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.purple.300"),
            h1: {
              color: theme("colors.purple.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
