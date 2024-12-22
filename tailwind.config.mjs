/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgray: "#EAECF0",
        gray: "#5F5F5F",
        dark: "#2F2F2F",
        primary: "#FFFFFF",
      },

      keyframes: {
        slide_up: {
          "0%": {
            opacity: 0,
            transform: "translateY(2rem)",
          },
          "50%": {
            opacity: 0.5,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slide_right: {
          "0%": {
            opacity: "20",
            transform: "translateX(20rem)",
            transform: "translateY(100%)",
          },
          "50%": {
            opacity: "50",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "100",
            transform: "translateX(0)",
            transform: "translateY(0)",
          },
        },
        slide_left: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20rem)",
          },
          "50%": {
            opacity: "50",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "100",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slide_up: "slide_up 0.7s ease-out",
        slide_right: "slide_right .8s ease-out",
        slide_left: "slide_left .8s ease-out",
      },
    },
  },
  plugins: [],
};
