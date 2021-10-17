import { viteZervaPlugin } from "zerva-vite-plugin"
import { setupService } from "./src/service"

export function zerva() {
  return viteZervaPlugin(setupService)
}
