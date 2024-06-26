import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production",
      exclude: [/backend/]
    })
  ],
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
}));
