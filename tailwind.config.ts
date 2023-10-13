import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        mauricio: "#069",
      },
    },
  },
  plugins: [],
};
export default config;
