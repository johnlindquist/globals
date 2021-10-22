import degit from "degit"
export type degit = typeof degit

declare global {
  var degit: degit

  namespace NodeJS {
    interface Global {
      degit: degit
    }
  }
}

global.degit = degit
