import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For GitHub Pages, set the base path (uncomment and change if deploying to a subdirectory)
  // base: "/mvp-creative-showcase-main/", // Use this if deploying to a project subdirectory
  base: "./", // Use this for root deployment or subdirectory deployment
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist", // Output directory for the build
    sourcemap: false, // Set to true if you want source maps for debugging
    rollupOptions: {
      output: {
        // Optional: specify manual chunks to reduce bundle size
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
