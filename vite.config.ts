import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/storeui/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Maps @ to the src directory
    },
  },
})
