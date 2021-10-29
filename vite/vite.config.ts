import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import { zerva } from "../zerva"
import { toPath } from "zeed"
import { viteZervaPlugin } from "zerva-vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "zerva/www",
    sourcemap: true,        
  },
  esbuild: {

  },
  plugins: [
    //
    vue(),
    viteZervaPlugin(async () => {
      // const x = await import(toPath("../ext/index.cjs"))

      // Trick to force reload https://ar.al/2021/02/22/cache-busting-in-node.js-dynamic-esm-imports/
      const x = await import(
        toPath(`../ext/index.cjs`) + `?update=${Math.random()}}`
      )

      // const x = await import(toPath("../zerva/"))
      console.log("HELLO FROM CONFIG", x)) // , process.env.NODE_PATH)
    }),
  ],
})
