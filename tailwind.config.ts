import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#006fff",
          "secondary": "#ffc891",
          "secondary-content": "#002e00",
          "accent": "#a20000",
          "neutral": "#0d0d0d",
          "base-100": "#fffae4",
          "base-content": "#002e00",
          "info": "#007dff",
          "success": "#99f05c",
          "warning": "#ffb300",
          "error": "#ff6575",
        },
      },
    ],
  }
};
export default config;
