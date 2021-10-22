import { $ } from "zx"
export default $
export namespace zx {
  export type $ = typeof $
}

declare global {
  var $: typeof import("zx").$

  namespace NodeJS {
    interface Global {
      $: typeof import("zx").$
    }
  }
}

global.$ = $
