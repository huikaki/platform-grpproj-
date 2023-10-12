/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      iphone12: "390px",

      morethaniphone12: "391px",

      lesssm: "639px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      moresm: "680px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      moremd: "900px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      morelg: "1210px",

      xl: "1280px",
      morexl: "1300px",
      // => @media (min-width: 1280px) { ... }
      less2xls: "1152px",

      less2xl: "1372px",

      "2xl": "1536px",

      fullhd: "1920px",

      less2k: "2170px",

      "2k": "2559px",

      "4k": "3840px",
    },
  },

  plugins: [],
};
