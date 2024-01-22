import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#19222f",
          300: "#111827",
        },
        button: {
          primary: "#2aab5e",
          secondary: "#0f9344",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
