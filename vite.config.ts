import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://us-central1-projeto-arch-deuner.cloudfunctions.net/email',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/api/, ''),
      },
    },
  },
});