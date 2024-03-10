import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist/app"
  },
  plugins: [react(), basicSsl()],
  server: {
    https: true,
    host: '127.0.0.1',
    port: 5000,
  },
  base: ''
})
