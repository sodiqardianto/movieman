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
      transitionProperty: {
        leftMove: "left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s",
      },
      ellipsis: {
        1: {
          display: "-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
        2: {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ellipsis-1": {
          display: "-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
        ".ellipsis-2": {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
