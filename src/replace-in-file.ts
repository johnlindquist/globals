import {replaceInFile} from "replace-in-file"

export namespace replaceInFile{
    export type replaceInFile = typeof replaceInFile
}

declare global {
  var replace: replaceInFile.replaceInFile

  namespace NodeJS {
    interface Global {
      replace: replaceInFile.replaceInFile
    }
  }
}

global.replace = replaceInFile
