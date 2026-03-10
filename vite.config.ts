import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/hf-api': {
        target: 'https://router.huggingface.co/hf-inference',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/hf-api/, ''),
      },
      '/imgbb': {
        target: 'https://api.imgbb.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/imgbb/, ''),
      },
      '/serp-api': {
        target: 'https://serpapi.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/serp-api/, ''),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
