import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry: 'src/library/myLibrary.js',
      name: 'myLibrary',
      fileName: "myLibrary"
    },
    outDir: 'dist/lib',
  }
})