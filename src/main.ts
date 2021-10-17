import {
  Logger,
  LoggerFileHandler,
  LoggerNodeHandler,
  LogLevel,
  toPath,
} from "zeed"
import { serve } from "zerva"
import { setupService } from "./service"

Logger.setHandlers([
  LoggerFileHandler(toPath("data/zerva.log"), {
    level: LogLevel.debug,
  }),
  LoggerNodeHandler({
    level: LogLevel.info,
    filter: "*",
    colors: true,
    padding: 32,
    nameBrackets: false,
    levelHelper: false,
  }),
])

serve(setupService)
