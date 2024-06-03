export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        blackOne: "#04152D",
        blackTwo: "#041226",
        blackThree: "#020c1b",
        blueNew: "#3985F5",
      },
      borderColor: {
        whiteOp10: "1px solid rgba(255, 255, 255, 0.1)",
      },
      animation: {
        animateMobileMenu: "mobileMenu 0.3s ease forwards",
      },
      keyframes: {
        mobileMenu: {
          "0%": { transform: "translateY(-130%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
