const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#16161a",
          "200": "rgba(26, 26, 26, 0.81)",
        },
        lightgray: "rgba(212, 212, 212, 0.6)",
        black: "#000",
        white: "#fff",
        darkslategray: {
          "100": "#414141",
          "200": "#303030",
        },
        silver: "#c4c4c4",
        paragraph: "#94a1b2",
        gold: "#eedd43",
        yellow: "#ffc22e",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "2xs": "11px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "26xl": "2.81rem",
      "11xl": "1.88rem",
      lg: "1.13rem",
      "5xl": "1.5rem",
      "41xl": "3.75rem",
      inherit: "inherit",
    },
    screens: {
      xl: {
        max: "2040px",
      },
      lg: {
        max: "1280px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "640px",
      },
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: "",
              DEFAULT: "#16161A",
            }
          }
        },
        dark: {
          colors: {

          }
        }
      }
    })
  ],
  corePlugins: {
    preflight: false,
  },
};
