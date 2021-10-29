import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
// import { zerva } from "../zerva"
import { viteZervaPlugin } from "zerva-vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "zerva/www",
    sourcemap: true,
  },
  plugins: [
    //
    vue(),
    viteZervaPlugin(async () => {
      const x = await import("../zerva")
      console.log("HELLO", process.env.NODE_PATH, x)
    }),
  ],
})
