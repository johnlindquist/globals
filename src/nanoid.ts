import { nanoid } from "nanoid"
export default nanoid
export namespace nanoid {
  export type nanoid = typeof nanoid
}

declare global {
  var uuid: typeof import("nanoid").nanoid

  namespace NodeJS {
    interface Global {
      uuid: typeof import("nanoid").nanoid
    }
  }
}

global.uuid = nanoid
