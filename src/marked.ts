import marked from "marked"
export type marked = typeof marked

declare global {
  var md: typeof marked.parse

  namespace NodeJS {
    interface Global {
      md: typeof marked.parse
    }
  }
}

global.md = marked.parse
