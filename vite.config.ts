import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/5f01b666-4854-4165-904a-52bb8d3f82da/preview',
  plugins: [react()],
  server: {
    port: 5210,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5210,
    },
  },
})
