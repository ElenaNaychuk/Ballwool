import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-light': ' #848793',
        'text-dark': ' #090A0D',
        'text-base': ' #1F2024',
        'extra-light': ' #C0C2CC',
      },
      fontFamily: {
        metropolis: ['Metropolis', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
