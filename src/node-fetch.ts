import nodeFetch from "node-fetch"

if (typeof global.fetch === "undefined") {
  global.fetch = nodeFetch
}

export let fetch = global.fetch
