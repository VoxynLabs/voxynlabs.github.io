import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  base: "/",
  plugins: [svelte(), tailwind()],
  build: {
    sourcemap: false,
    outDir: "dist",
    cssMinify: "lightningcss",
  },
});

// export default defineConfig({
//   root: ".",
//   base: "/",
//   plugins: [svelte(), tailwind()],
//   build: {
//     outDir: "dist",
//     minify: "terser",
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//         pure_funcs: [
//           "console.log",
//           "console.info",
//           "console.debug",
//           "console.warn",
//         ],
//         passes: 2,
//         ecma: 2020,
//       },
//       mangle: {
//         safari10: true,
//       },
//       format: {
//         comments: false,
//       },
//     },
//     sourcemap: true,
//     cssCodeSplit: false,
//     cssMinify: true,
//     emptyOutDir: true,
//     assetsInlineLimit: 4096,
//     rollupOptions: {
//       output: {
//         manualChunks: (id) => {
//           if (id.includes("node_modules")) {
//             if (id.includes("svelte") || id.includes("svelte-spa-router")) {
//               return "vendor";
//             }
//             if (id.includes("tailwindcss")) {
//               return "styles";
//             }
//             return "deps";
//           }
//         },
//         entryFileNames: "assets/[name]-[hash].js",
//         chunkFileNames: "assets/[name]-[hash].js",
//         assetFileNames: "assets/[name]-[hash].[ext]",
//       },
//       treeshake: {
//         moduleSideEffects: false,
//         propertyReadSideEffects: false,
//         tryCatchDeoptimization: false,
//       },
//     },
//     target: "es2020",
//     chunkSizeWarningLimit: 1000,
//     reportCompressedSize: false,
//   },
// });
