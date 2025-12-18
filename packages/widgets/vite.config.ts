import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // visualizer(),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: "es2020",
        minify: "esbuild",
        lib: {
            name: "widgets",
            entry: [
                "./events/events.widget.jsx",
                "./events/board-events.widget.jsx",
                "./banners/banners.widget.jsx",
                "./categories/categories.widget.jsx",
                "./rates/rates.widget.jsx",
            ],
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                manualChunks: (id) => {
                  if (id.includes("node_modules") ||
                      id.includes("packages/ui") ||
                      id.includes("packages/api") ||
                      id.includes("ApiContainer")
                  ) {
                      return "campphillip";
                  }
                },
                chunkFileNames: `[name].js`,
            },
        },
    },
});
