import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['var(--font-italiana)'],
        montserrat: ['var(--font-montserrat)'],
        sen: ['var(--font-sen)'],
        cinzel: ['var(--font-cinzel)'],
        caveat: ['var(--font-caveat)'],
        quicksand: ['var(--font-quicksand)'],
      },
      colors: {
        primary: '#353535',
        second: '#FEF9F1',
        third: '#DCEDE3',
        forth: '#E0DACA'
      },
    },
  },
  plugins: [],
};
export default config;
