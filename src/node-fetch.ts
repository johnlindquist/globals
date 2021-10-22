import { default as n } from "node-fetch"
import nodeFetch from "node-fetch"
export default nodeFetch

declare global {
  var fetch: typeof import("node-fetch").default

  namespace NodeJS {
    interface Global {
      fetch: typeof import("node-fetch").default
    }
  }
}

;(global as any).fetch = n
