import { parse } from "marked"
import m from "marked"
export type m = typeof m

export namespace marked {
  export type parse = typeof parse
}

declare global {
  var md: typeof import("marked").parse

  namespace NodeJS {
    interface Global {
      md: typeof import("marked").parse
    }
  }
}

global.md = parse
