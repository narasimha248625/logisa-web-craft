import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    // ✅ Set base path for GitHub Pages
    base: isProduction ? "/logisa-web-craft/" : "/",
    
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      // ✅ Only enable componentTagger in dev mode
      !isProduction && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
