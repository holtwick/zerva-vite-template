import { serve, useHttp, register, on } from "zerva"

function useCounter() {
  register("counter", ["http"])
  let counter = 1
  on("httpInit", ({ get }) => {
    get(
      "/",
      () => `Counter ${counter++}.<br><br>Reload page to increase counter.`
    )
  })
}

useHttp({
  port: 8080,
})

useCounter()

serve()
