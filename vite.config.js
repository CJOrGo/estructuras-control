import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/estructuras-control/', // Reemplaza con el nombre exacto de tu repositorio
  plugins: [vue()],
})
