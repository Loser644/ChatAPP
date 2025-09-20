import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client",   // 👈 this tells Vite where your app lives
  plugins: [react()],
  server: {
    port: 3221,
    proxy: {
      "/myServer": {
        target: "http://127.0.0.1:3222",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/myServer/, ""),
      },
    },
  },
});
