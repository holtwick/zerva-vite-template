// (C)opyright 2021-07-15 Dirk Holtwick, holtwick.it. All rights reserved.

import "cross-fetch/polyfill"
import { Logger, LoggerNodeHandler, LogLevel } from "zeed"
import { serveStop, serve } from "zerva"

import { setupService } from "./service"

Logger.setHandlers([
  LoggerNodeHandler({
    level: LogLevel.info,
    filter: "*",
    colors: true,
    padding: 16,
    nameBrackets: false,
    levelHelper: false,
  }),
])

const port = 8080
const url = `http://localhost:${port}`

describe("service", () => {
  beforeAll(async () => {
    setupService()
    await serve()
  })

  afterAll(async () => {
    await serveStop()
  })

  it("should connect", async () => {
    expect(await (await fetch(`${url}/`)).text()).toContain("Running")
  })
})
