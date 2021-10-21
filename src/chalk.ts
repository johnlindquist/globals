import * as chalk from "chalk"
export type chalk = typeof chalk

declare global {
  var chalk: chalk

  namespace NodeJS {
    interface Global {
      chalk: chalk
    }
  }
}

global.chalk = chalk
