import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mission: {
          navy: "#30506c",
          gold: "#d3a63b",
          ink: "#14202b",
          mist: "#f3f6f8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
