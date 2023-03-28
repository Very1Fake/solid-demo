import solid from "solid-start/vite";
import { defineConfig } from "vite";
import static_adapter from "solid-start-static";
import solidStyled from "vite-plugin-solid-styled";

export default defineConfig({
  plugins: [
    solid({ adapter: static_adapter() }),
    solidStyled({
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ],
});
