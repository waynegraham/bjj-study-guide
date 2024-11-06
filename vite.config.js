import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bjj-study-guide',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
