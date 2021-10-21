import nodeFetch from "node-fetch"
export type fetch = typeof nodeFetch

declare global {
  var fetch: typeof nodeFetch

  namespace NodeJS {
    interface Global {
      fetch: typeof nodeFetch
    }
  }
}

global.fetch = nodeFetch
