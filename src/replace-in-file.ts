import { replaceInFile } from "replace-in-file"
export * from "replace-in-file"

declare global {
  var replace: typeof import("replace-in-file").replaceInFile

  namespace NodeJS {
    interface Global {
      replace: typeof import("replace-in-file").replaceInFile
    }
  }
}

global.replace = replaceInFile
