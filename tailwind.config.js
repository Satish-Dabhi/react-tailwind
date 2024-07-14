import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #339FDE",
        bgprimary: "#e8f6ff",
        bgsecond: " #0F4767",
        bgcream: "#FCF1DE",
        darkyellow: " #EFB247",

        lightyellow: "#F9EC23",
        green: " #4BA96A",
      },
      fontFamily:{
        inter: ["Inter", 'sans-serif'],
        inria:["Inria Serif", 'serif']
      },
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform:"translateY(-10px)"
          },
          to:{
            opacity:"1",
            transform:"translateY(0)"
          }
        }
      },
      animation:{
        slidein:"slidein 1s ease var(--slidein-delay,0) forwards",
    
      }
    },
  },
  plugins: [],
});
