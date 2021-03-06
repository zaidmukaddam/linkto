module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Rubik", "Helvetica", "Arial", "sans-serif"],
      serif: ["Domine", "serif"],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1370px",
      "3xl": "1536px",
      "4xl": "1660px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Semantic colors
      body: "hsl(300 7.7% 97.5%)",
      normalText: "hsl(252 4.0% 44.8%)",
      normalTextHover: "hsl(260 25.0% 11.0%)",
      btnColored: "hsl(336 80.0% 57.8%)",
      btnColoredHover: "hsl(336 73.7% 53.5%)",
      btnSecondary: "hsl(246 6.0% 9.0%)",
      btnSecondaryHover: "hsl(241 5.0% 14.3%)",
      btnDanger: "hsl(358 75.0% 59.0%)",
      btnDangerHover: "hsl(358 69.4% 55.2%)",
      dangerText: "hsl(358 69.4% 55.2%)",
      btnInfo: "hsl(206 100% 50.0%)",
      btnInfoHover: "hsl(208 100% 47.3%)",
      infoText: "hsl(211 100% 43.2%)",
      btnWarn: "hsl(53 92.0% 50.0%)",
      btnWarnHover: "hsl(50 100% 48.5%)",
      warnText: "hsl(48 100% 47.0%)",
      btnBorder: "hsl(0 0% 43.9%)",
      btnBorderHover: "hsl(0 0% 15.8%)",
      inputPlaceholder: "hsl(253 4.0% 63.7%)",
      inputBorder: "hsl(271 3.9% 86.3%)",
      inputBorderHover: "hsl(0 0% 78.0%)",
      inputBorderlessBg: "hsl(294 5.5% 95.3%)",
      inputDangerBorder: "hsl(359 69.5% 74.3%)",
      inputDangerBorderHover: "hsl(358 75.0% 59.0%)",
      // Normal colors
      black: "hsl(0 0% 0%)",
      white: "hsl(0 0% 100%)",
      mauve: {
        50: "hsl(300 20.0% 99.0%)",
        100: "hsl(300 7.7% 97.5%)",
        200: "hsl(294 5.5% 95.3%)",
        300: "hsl(289 4.7% 93.3%)",
        400: "hsl(283 4.4% 91.3%)",
        500: "hsl(278 4.1% 89.1%)",
        600: "hsl(271 3.9% 86.3%)",
        700: "hsl(255 3.7% 78.8%)",
        800: "hsl(252 4.0% 57.3%)",
        900: "hsl(253 3.5% 53.5%)",
        950: "hsl(252 4.0% 44.8%)",
        1000: "hsl(260 25.0% 11.0%)",
      },
      mauveDark: {
        50: "hsl(246 6.0% 9.0%)",
        100: "hsl(240 5.1% 11.6%)",
        200: "hsl(241 5.0% 14.3%)",
        300: "hsl(242 4.9% 16.5%)",
        400: "hsl(243 4.9% 18.8%)",
        500: "hsl(244 4.9% 21.5%)",
        600: "hsl(245 4.9% 25.4%)",
        700: "hsl(247 4.8% 32.5%)",
        800: "hsl(252 4.0% 45.2%)",
        900: "hsl(247 3.4% 50.7%)",
        950: "hsl(253 4.0% 63.7%)",
        1000: "hsl(256 6.0% 93.2%)",
      },
      gray: {
        50: "hsl(0 0% 99.0%)",
        100: "hsl(0 0% 97.3%)",
        200: "hsl(0 0% 95.1%)",
        300: "hsl(0 0% 93.0%)",
        400: "hsl(0 0% 90.9%)",
        500: "hsl(0 0% 88.7%)",
        600: "hsl(0 0% 85.8%)",
        700: "hsl(0 0% 78.0%)",
        800: "hsl(0 0% 56.1%)",
        900: "hsl(0 0% 52.3%)",
        950: "hsl(0 0% 43.5%)",
        1000: "hsl(0 0% 9.0%)",
      },
      grayDark: {
        50: "hsl(0 0% 8.5%)",
        100: "hsl(0 0% 11.0%)",
        200: "hsl(0 0% 13.6%)",
        300: "hsl(0 0% 15.8%)",
        400: "hsl(0 0% 17.9%)",
        500: "hsl(0 0% 20.5%)",
        600: "hsl(0 0% 24.3%)",
        700: "hsl(0 0% 31.2%)",
        800: "hsl(0 0% 43.9%)",
        900: "hsl(0 0% 49.4%)",
        950: "hsl(0 0% 62.8%)",
        1000: "hsl(0 0% 93.0%)",
      },
      red: {
        50: "hsl(359 100% 99.4%)",
        100: "hsl(359 100% 98.6%)",
        200: "hsl(360 100% 96.8%)",
        300: "hsl(360 97.9% 94.8%)",
        400: "hsl(360 90.2% 91.9%)",
        500: "hsl(360 81.7% 87.8%)",
        600: "hsl(359 74.2% 81.7%)",
        700: "hsl(359 69.5% 74.3%)",
        800: "hsl(358 75.0% 59.0%)",
        900: "hsl(358 69.4% 55.2%)",
        950: "hsl(358 65.0% 48.7%)",
        1000: "hsl(354 50.0% 14.6%)",
      },
      crimson: {
        50: "hsl(332 100% 99.4%)",
        100: "hsl(330 100% 98.4%)",
        200: "hsl(331 85.6% 96.6%)",
        300: "hsl(331 78.1% 94.2%)",
        400: "hsl(332 72.1% 91.1%)",
        500: "hsl(333 67.0% 86.7%)",
        600: "hsl(335 63.5% 80.4%)",
        700: "hsl(336 62.3% 72.9%)",
        800: "hsl(336 80.0% 57.8%)",
        900: "hsl(336 73.7% 53.5%)",
        950: "hsl(336 75.0% 47.2%)",
        1000: "hsl(340 65.0% 14.5%)",
      },
      plum: {
        50: "hsl(292 90.0% 99.4%)",
        100: "hsl(300 100% 98.6%)",
        200: "hsl(299 71.2% 96.4%)",
        300: "hsl(299 62.0% 93.8%)",
        400: "hsl(298 56.1% 90.5%)",
        500: "hsl(296 51.3% 85.8%)",
        600: "hsl(295 48.2% 78.9%)",
        700: "hsl(292 47.7% 70.8%)",
        800: "hsl(292 45.0% 51.0%)",
        900: "hsl(292 50.2% 46.9%)",
        950: "hsl(292 60.0% 42.5%)",
        1000: "hsl(291 66.0% 14.0%)",
      },
      pink: {
        50: "hsl(322 100% 99.4%)",
        100: "hsl(323 100% 98.4%)",
        200: "hsl(323 86.3% 96.5%)",
        300: "hsl(323 78.7% 94.2%)",
        400: "hsl(323 72.2% 91.1%)",
        500: "hsl(323 66.3% 86.6%)",
        600: "hsl(323 62.0% 80.1%)",
        700: "hsl(323 60.3% 72.4%)",
        800: "hsl(322 65.0% 54.5%)",
        900: "hsl(322 63.9% 50.7%)",
        950: "hsl(322 75.0% 46.0%)",
        1000: "hsl(320 70.0% 13.5%)",
      },
      lime: {
        50: "hsl(85 50.0% 98.7%)",
        100: "hsl(85 66.7% 96.5%)",
        200: "hsl(85 76.0% 92.3%)",
        300: "hsl(84 75.3% 87.5%)",
        400: "hsl(84 71.5% 81.9%)",
        500: "hsl(82 65.0% 74.6%)",
        600: "hsl(79 53.2% 61.8%)",
        700: "hsl(76 61.7% 45.1%)",
        800: "hsl(81 67.0% 50.0%)",
        900: "hsl(80 68.3% 46.9%)",
        950: "hsl(75 80.0% 26.0%)",
        1000: "hsl(78 70.0% 11.5%)",
      },
      green: {
        50: "hsl(116 50.0% 98.9%)",
        100: "hsl(120 60.0% 97.1%)",
        200: "hsl(120 53.6% 94.8%)",
        300: "hsl(121 47.5% 91.4%)",
        400: "hsl(122 42.6% 86.5%)",
        500: "hsl(124 39.0% 79.7%)",
        600: "hsl(126 37.1% 70.2%)",
        700: "hsl(131 38.1% 56.3%)",
        800: "hsl(131 41.0% 46.5%)",
        900: "hsl(132 43.1% 42.2%)",
        950: "hsl(133 50.0% 32.5%)",
        1000: "hsl(130 30.0% 14.9%)",
      },
      blue: {
        50: "hsl(206 100% 99.2%)",
        100: "hsl(210 100% 98.0%)",
        200: "hsl(209 100% 96.5%)",
        300: "hsl(210 98.8% 94.0%)",
        400: "hsl(209 95.0% 90.1%)",
        500: "hsl(209 81.2% 84.5%)",
        600: "hsl(208 77.5% 76.9%)",
        700: "hsl(206 81.9% 65.3%)",
        800: "hsl(206 100% 50.0%)",
        900: "hsl(208 100% 47.3%)",
        950: "hsl(211 100% 43.2%)",
        1000: "hsl(211 100% 15.0%)",
      },
      yellow: {
        50: "hsl(60 54.0% 98.5%)",
        100: "hsl(52 100% 95.5%)",
        200: "hsl(55 100% 90.9%)",
        300: "hsl(54 100% 86.6%)",
        400: "hsl(52 97.9% 82.0%)",
        500: "hsl(50 89.4% 76.1%)",
        600: "hsl(47 80.4% 68.0%)",
        700: "hsl(48 100% 46.1%)",
        800: "hsl(53 92.0% 50.0%)",
        900: "hsl(50 100% 48.5%)",
        950: "hsl(42 100% 29.0%)",
        1000: "hsl(40 55.0% 13.5%)",
      },
      blackAlpha: {
        50: "hsl(0 0% 0% / 0.012)",
        100: "hsl(0 0% 0% / 0.027)",
        200: "hsl(0 0% 0% / 0.047)",
        300: "hsl(0 0% 0% / 0.071)",
        400: "hsl(0 0% 0% / 0.090)",
        500: "hsl(0 0% 0% / 0.114)",
        600: "hsl(0 0% 0% / 0.141)",
        700: "hsl(0 0% 0% / 0.220)",
        800: "hsl(0 0% 0% / 0.439)",
        900: "hsl(0 0% 0% / 0.478)",
        950: "hsl(0 0% 0% / 0.565)",
        1000: "hsl(0 0% 0% / 0.910)",
      },
      whiteAlpha: {
        50: "hsl(0 0% 100% / 0)",
        100: "hsl(0 0% 100% / 0.013)",
        200: "hsl(0 0% 100% / 0.034)",
        300: "hsl(0 0% 100% / 0.056)",
        400: "hsl(0 0% 100% / 0.086)",
        500: "hsl(0 0% 100% / 0.124)",
        600: "hsl(0 0% 100% / 0.176)",
        700: "hsl(0 0% 100% / 0.249)",
        800: "hsl(0 0% 100% / 0.386)",
        900: "hsl(0 0% 100% / 0.446)",
        950: "hsl(0 0% 100% / 0.592)",
        1000: "hsl(0 0% 100% / 0.923)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-initial": "initial",
        "gradient-btn":
          "linear-gradient(to right, #e93d82, #df3c91, #d13ea0, #c043ae, #ab4aba)",
        "gradient-btn-hover":
          "linear-gradient(to right, #e03177, #d72c87, #ca2e97, #ba34a6, #a43cb4);",
        "gradient-btn-active":
          "linear-gradient(to right top, #f04f88, #e94c98, #de4ba7, #d04fb7, #bd54c6);",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
