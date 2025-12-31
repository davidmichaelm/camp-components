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
            preventAssignment: true,
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
                "./events/calendar.widget.jsx",
                "./banners/banners.widget.jsx",
                "./categories/categories.widget.jsx",
                "./rates/rates.widget.jsx",
            ],
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Sanity client and image-url should be in their own chunk
                    if (id.includes('@sanity/client') || id.includes('@sanity/image-url')) {
                        return 'sanity';
                    }
                    // All other node_modules go to vendor
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    // Don't manually chunk application code - let Rollup decide
                    // This prevents circular dependencies
                },
                chunkFileNames: `[name].js`,
            },
        },
    },
});
