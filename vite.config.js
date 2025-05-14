import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({

// })
// vite.config.js
export default {
  plugins: [react()],
  server: {
    host: true, // or '0.0.0.0'
    port: 5173,
  }
}
