import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  port: 3221, // frontend
  proxy: {
    "/api": {
      target: "http://127.0.0.1:3222", // backend
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
},
  build:{
    outDir: "../server/public"
  }
})
