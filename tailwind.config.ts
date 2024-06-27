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
          DEFAULT: "#3498db",
        },
        secondary: {
          DEFAULT: "#2ecc71",
        },
        accent: {
          DEFAULT: "#e74c3c",
        },
        neutral: {
          light: "#f5f5f5",
          medium: "#bdc3c7",
          dark: "#2c3e50",
        },
      },
    },
  },
  plugins: [],
};
export default config;
