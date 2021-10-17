import { Logger } from "zeed"
import { on, useHttp } from "zerva"

const log = Logger("service")

export async function setupService() {
  useHttp({
    port: 8080,
  })

  on("httpInit", ({ get }) => {
    const started = new Date().toISOString()
    log.info(`Service started at ${started}`)

    get("/", ({ req }) => {
      return `Running since ${started}. Your IP is ${req.ip}.`
    })
  })

  // Example for repeating tasks - Cron like

  // https://www.npmjs.com/package/cron
  // https://blog.abelotech.com/posts/nodejs-scheduler-cron-timeout-interval/#explanation-of-a-cron-expression

  // const job = new CronJob(
  //   // "*/10 * * * * 0-6", // each 10 secs
  //   "0 0 * * 0-6", // midnight
  //   function () {
  //     log.info("Midnight update triggered", new Date())
  //   },
  //   null,
  //   true,
  //   "Europe/Berlin"
  // )
  //
  // log.info(
  //   `Next 10 scheduled jobs:\n${(job.nextDates(10) as any[])
  //     .map((date: any) => date.toString())
  //     .join("\n")}`
  // )
}
