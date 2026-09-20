import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/my-webresto/', // wajib ada nama repositori diawali dan diakhiri slash /
})