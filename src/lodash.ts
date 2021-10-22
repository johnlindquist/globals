import _ from "lodash"
import { LoDashStatic } from "lodash"
export { LoDashStatic }

declare global {
  var _: LoDashStatic

  namespace NodeJS {
    interface Global {
      _: LoDashStatic
    }
  }
}

;(global as any)._ = _
