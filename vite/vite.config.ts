process.env.NODE_PATH += resolve(process.cwd(), "..", "zerva", "node_modules")

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { zerva } from "../zerva"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "zerva/www",
    sourcemap: true,
  },
  plugins: [
    //
    vue(),
    zerva(),
  ],
})
