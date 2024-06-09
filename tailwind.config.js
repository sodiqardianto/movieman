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
      backgroundImage: {
        "opacity-layer":
          "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #041123 79.17%)",
      },
      backgroundColor: {
        "black-25": "rgba(0, 0, 0, 0.25)",
      },
      colors: {
        blackOne: "#04152D",
        blackTwo: "#041226",
        blackThree: "#020c1b",
        blueNew: "#3985F5",
        "black-light": "#173d77",
        "black-lighter": "#1c4b91",
      },
      borderColor: {
        whiteOp10: "1px solid rgba(255, 255, 255, 0.1)",
      },
      animation: {
        animateMobileMenu: "mobileMenu 0.3s ease forwards",
        dash: "dash 1.5s ease-in-out infinite",
        rotate: "rotate 2s linear infinite",
      },
      keyframes: {
        mobileMenu: {
          "0%": { transform: "translateY(-130%)" },
          "100%": { transform: "translateY(0)" },
        },
        dash: {
          "0%": { strokeDasharray: "1, 150", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "90, 150", strokeDashoffset: "-35" },
          "100%": { strokeDasharray: "90, 150", strokeDashoffset: "-124" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
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
        ".bg-blur-video": {
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(3.5px)",
          WebkitBackdropFilter: "blur(3.5px)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
