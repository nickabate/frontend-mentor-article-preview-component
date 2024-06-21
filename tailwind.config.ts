import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1024px'
      },
      colors: {
        primary: {
          10: 'hsl(217, 19%, 35%)',
          20: 'hsl(214, 17%, 51%)',
          30: 'hsl(212, 23%, 69%)',
          40: 'hsl(210, 46%, 95%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
