import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This is optional, but if you have global styles like variables or mixins
        // you can import them here automatically
        additionalData: `
          @import "@/assets/styles/variables.scss";
        `,
      },
    },
  },
})
