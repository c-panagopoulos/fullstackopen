import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // listen on 0.0.0.0, not just localhost
    port: 5173,
    strictPort: true,
    allowedHosts: true,  // or list specific hosts, see below
  },
})
