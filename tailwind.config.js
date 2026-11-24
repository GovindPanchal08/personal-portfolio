/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F4EF",
        "cream-dark": "#EBE8E1",
        ink: "#1A1A1A",
        "ink-light": "#2D2D2D",
        muted: "#888888",
        "muted-light": "#AAAAAA",
        lime: "#C8E972",
        lavender: "#C4B5FD",
        peach: "#F4A261",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "32px",
      },
      maxWidth: {
        container: "1340px",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "floatAlt 5s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "orbit": "orbit 12s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-scale": "fadeInScale 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px) rotate(-4deg)" },
          to: { opacity: "1", transform: "translateX(0) rotate(-4deg)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px) rotate(3deg)" },
          to: { opacity: "1", transform: "translateX(0) rotate(3deg)" },
        },
        orbit: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.06)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.08)",
        glow: "0 0 60px 20px rgba(180, 170, 220, 0.12)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
