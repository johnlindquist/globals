import {$} from "zx"
export namespace zx{
  export type $ = typeof $
}

declare global {
  var $: zx.$

  namespace NodeJS {
    interface Global {
      $: zx.$
    }
  }
}

global.$ = $
