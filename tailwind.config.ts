import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      light: {
        100: "#fff",
        200: "#F0FFFB",
        300: "#C5D5E0",
      },
      grey: {
        light: "#313237",
        dark: "#2D2E33",
        400: "#9DAAB3",
        600: "#3E4047",
      },
      aqua: {
        100: "#6CF9D8",
      },
      orange: {
        100: "#E36D3A",
      },
      purple: {
        100: "#AA81FF",
      },
      teal: {
        100: "#44D2FF",
      },
    },
    fontSize: {
      xs: ["0.75rem", "1.05rem"], // [12px, 16.8px]
      sm: ["0.875rem", "1.225rem"], // [14px, 19.6px]
      md: ["1rem", "1.4rem"], // [16px, 22.4px]
      lg: ["1.125rem", "1.575rem"], // [18px, 25.2px]
      "heading-1": ["4rem", "4.4rem"], // [64px, 70.4x]
      "heading-2": ["3rem", "3.3rem"], // [48px, 52.8px]
      "heading-3": ["2rem", "2.2rem"], // [32px, 35.2px]
      "heading-4": ["1.5rem", "1.65rem"], // [24px, 26.4px]
    },
    letterSpacing: {
      "tight-1": "-0.28rem", // -4.48px
      "tight-2": "-0.18rem", // -2.88px
      "tight-3": "-0.14rem", // -2.24px
      "tight-4": "-0.12rem", // -1.92px
      "tight-5": "-0.04rem", // -0.64px
      "tight-6": "-0.03rem", // -0.48px
      "wide-4": "0.12rem", // 1.92px
    },
    extend: {
      animation: {
        scroll: "scroll var(--iteration-time) linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(var(--slide-width) * var(--no-of-slides)* -1))",
          },
        },
      },
      dropShadow: {
        "aqua-sm": [
          "0px 0px 8.286px #6CF9D8",
          "0px 0px 5.919px #00A27C",
          "0px 0px 1.578px rgba(0, 0, 0, 0.25)",
        ],
        aqua: [
          "0px 0px 13.811px #6CF9D8",
          "0px 0px 9.865px #00A27C",
          "0px 0px 2.631px rgba(0, 0, 0, 0.25)",
        ],
        "teal-sm": [
          "0px 0px 8.286px #7FE9E1",
          "0px 0px 5.919px #7FBCE9",
          "0px 0px 1.578px rgba(0, 0, 0, 0.25)",
        ],
        teal: [
          "0px 0px 13.811px #7FE9E1",
          "0px 0px 9.865px #7FBCE9",
          "0px 0px 2.631px rgba(0, 0, 0, 0.25)",
        ],
        "purple-sm": [
          "0px 0px 8.286px #E66DFA",
          "0px 0px 5.919px #974AE4",
          "0px 0px 1.578px rgba(0, 0, 0, 0.25)",
        ],
        purple: [
          "0px 0px 13.811px #E66DFA",
          "0px 0px 9.865px #974AE4",
          "0px 0px 2.631px rgba(0, 0, 0, 0.25)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
