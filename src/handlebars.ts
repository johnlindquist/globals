import * as handlebars from "handlebars"

export type Handlebars = typeof handlebars

declare global {
  var compile: typeof Handlebars.compile

  namespace NodeJS {
    interface Global {
      compile: typeof Handlebars.compile
    }
  }
}

global.compile = handlebars.compile
