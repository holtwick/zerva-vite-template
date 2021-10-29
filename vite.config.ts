import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteZervaPlugin } from "zerva-vite-plugin"
import { setupService } from "./zerva/service"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "zerva/www",
    sourcemap: true,
  },
  plugins: [
    //
    vue(),
    viteZervaPlugin(setupService),
  ],
})
