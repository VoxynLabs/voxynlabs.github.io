import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  base: "/",
  plugins: [svelte(), tailwind()],
});
