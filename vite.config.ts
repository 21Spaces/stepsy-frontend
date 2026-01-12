import { defineConfig } from "vite";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "https://21spaces.github.io.github.io/stepsy-frontend",
  plugins: [vue(), tailwindcss()],
  optimizeDeps: {
    include: ["@apollo/client/core"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
