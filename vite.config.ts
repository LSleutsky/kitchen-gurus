import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  ssr: {
    noExternal: [/^@mui\//],
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
