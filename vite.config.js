import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // setup aliases if needed
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        // This is where you can include the path to your CSS
        includePaths: ["node_modules"],
      },
    },
  },
});
