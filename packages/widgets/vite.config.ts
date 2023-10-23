import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer(),
        replace({
            "process.env.NODE_ENV": process.env.NODE_ENV === 'production' ? JSON.stringify("production") : JSON.stringify("development"),
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
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
            output: {
                manualChunks: (id) => {
                    if (id.includes("react") || id.includes("react-dom")) {
                        return "react";
                    } else if (
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
