import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `Zartasha-Portfolio` with your **repo name**
export default defineConfig({
  base: 'Zartasha-Portfolio',
  plugins: [react()],
})
