/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        // Terminal dark theme
        terminal: {
          bg: "#0c0c0c",
          "bg-light": "#1a1a1a",
          text: "#00ff00",
          "text-secondary": "#33ff33",
          amber: "#ffb000",
          red: "#ff5555",
          blue: "#55aaff",
          purple: "#bd93f9",
          cyan: "#8be9fd",
        },
        // Light theme
        light: {
          bg: "#f8f8f2",
          "bg-secondary": "#ffffff",
          text: "#282a36",
          "text-secondary": "#44475a",
          accent: "#50fa7b",
          border: "#e1e5e9",
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 1s infinite",
        type: "type 3s steps(40, end)",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        type: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
