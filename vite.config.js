import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from "path";
import { getEnvironmentData } from 'worker_threads';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
