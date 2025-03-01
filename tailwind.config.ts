import type { Config } from "tailwindcss";
import { mtConfig } from "@material-tailwind/react";


const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [mtConfig({
    colors: {
      secondary: {default: "#ff0000"}
    }
  })],
};

export default config;
