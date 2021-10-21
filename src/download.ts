import * as download from "download"
export type download = typeof download

declare global {
  var download: download

  namespace NodeJS {
    interface Global {
      download: download
    }
  }
}

global.download = download
