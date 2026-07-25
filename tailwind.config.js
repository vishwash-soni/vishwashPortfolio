/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom color palette: black / dark gray / gray / white + a soft cyan-violet accent for glows
      colors: {
        ink: {
          950: "#050505", // true black background
          900: "#0b0b0d", // dark gray section background
          800: "#131316", // card surface
          700: "#1c1c20", // raised surface / hover
          600: "#2a2a2f", // borders
        },
      },
      fontFamily: {
        // Display font for headings - geometric, technical feel
        display: ["'Space Grotesk'", "sans-serif"],
        // Body font for readability
        sans: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        // Soft glow utilities used sparingly across the site
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.35)",
        "glow-cyan": "0 0 40px -10px rgba(34, 211, 238, 0.35)",
        "glow-white": "0 0 40px -10px rgba(255, 255, 255, 0.35)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};
