import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir: "dist/web",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        sub: path.resolve(__dirname, "pages/sub.html"),
      }
    }
  }
})