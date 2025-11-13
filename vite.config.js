import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // <-- importante para Netlify e GitHub Pages
  build: {
    rollupOptions: {
      external: [], // não exclui mais framer-motion
    },
  },
});
