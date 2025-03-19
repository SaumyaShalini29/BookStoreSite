import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Ensures it binds to localhost
    port: 5173, // Change if needed
    strictPort: true, // Prevents it from switching ports
    open: true // Auto-opens browser
  }
})

