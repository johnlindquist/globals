import _ from "lodash"
import { LoDashStatic } from "lodash"
export { LoDashStatic }

declare global {
  var _: import("lodash").LoDashStatic

  namespace NodeJS {
    interface Global {
      _: import("lodash").LoDashStatic
    }
  }
}

;(global as any)._ = _
