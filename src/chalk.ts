import chalk from "chalk"
global.chalk = chalk
export type chalk = typeof chalk

declare global {
  var chalk: typeof import("chalk")

  namespace NodeJS {
    interface Global {
      chalk: typeof import("chalk")
    }
  }
}
