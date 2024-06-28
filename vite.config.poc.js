import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir: "dist/poc",
    rollupOptions: {
      input: {
        poc: path.resolve(__dirname, "pages/poc.html"),
      }
    }
  }
})