import { compile } from "handlebars"
import h from "handlebars"
export type h = typeof h
export namespace handlebars {
  export type compile = typeof compile
}

declare global {
  var compile: typeof import("handlebars").compile

  namespace NodeJS {
    interface Global {
      compile: typeof import("handlebars").compile
    }
  }
}

global.compile = compile
