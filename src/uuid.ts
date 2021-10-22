import { nanoid } from "nanoid"

export namespace nanoid {
  export type uuid = typeof nanoid
}

declare global {
  var uuid: nanoid.uuid

  namespace NodeJS {
    interface Global {
      uuid: nanoid.uuid
    }
  }
}

global.uuid = nanoid
