import degit from "degit"
export type degit = typeof degit

declare global {
  var degit: typeof import("degit")

  namespace NodeJS {
    interface Global {
      degit: typeof import("degit")
    }
  }
}

global.degit = degit
