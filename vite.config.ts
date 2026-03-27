import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/', // ✅ MUST ADD

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true // ✅ ADD
  }
})
