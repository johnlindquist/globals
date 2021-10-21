import { v4 } from "uuid"

export namespace uuid {
  export type uuid = typeof v4
}

declare global {
  var uuid: uuid.uuid

  namespace NodeJS {
    interface Global {
      uuid: uuid.uuid
    }
  }
}

global.uuid = v4
