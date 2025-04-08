import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // Important for correct routing on Vercel

  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: true,
    proxy: {
      "/book": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      }
    }
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
});


