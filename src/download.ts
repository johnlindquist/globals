import download from "download"
export type download = typeof download

declare global {
  var download: typeof import("download")

  namespace NodeJS {
    interface Global {
      download: typeof import("download")
    }
  }
}

global.download = download
