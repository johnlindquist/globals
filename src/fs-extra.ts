import {
  emptyDir,
  ensureFile,
  ensureDir,
  ensureLink,
  ensureSymlink,
  mkdirp,
  mkdirs,
  outputFile,
  outputJson,
  pathExists,
  readJson,
  remove,
  writeJson,
} from "fs-extra"

export namespace fsExtra {
  export type emptyDir = typeof emptyDir
  export type ensureFile = typeof ensureFile
  export type ensureDir = typeof ensureDir
  export type ensureLink = typeof ensureLink
  export type ensureSymlink = typeof ensureSymlink
  export type mkdirp = typeof mkdirp
  export type mkdirs = typeof mkdirs
  export type outputFile = typeof outputFile
  export type outputJson = typeof outputJson
  export type pathExists = typeof pathExists
  export type readJson = typeof readJson
  export type remove = typeof remove
  export type writeJson = typeof writeJson
}

global.emptyDir = emptyDir
global.ensureFile = ensureFile
global.ensureDir = ensureDir
global.ensureLink = ensureLink
global.ensureSymlink = ensureSymlink
global.mkdirp = mkdirp
global.mkdirs = mkdirs
global.outputFile = outputFile
global.outputJson = outputJson
global.pathExists = pathExists
global.readJson = readJson
global.remove = remove
global.writeJson = writeJson

declare global {
  var emptyDir: typeof import("fs-extra").emptyDir
  var ensureFile: typeof import("fs-extra").ensureFile
  var ensureDir: typeof import("fs-extra").ensureDir
  var ensureLink: typeof import("fs-extra").ensureLink
  var ensureSymlink: typeof import("fs-extra").ensureSymlink
  var mkdirp: typeof import("fs-extra").mkdirp
  var mkdirs: typeof import("fs-extra").mkdirs
  var outputFile: typeof import("fs-extra").outputFile
  var outputJson: typeof import("fs-extra").outputJson
  var pathExists: typeof import("fs-extra").pathExists
  var readJson: typeof import("fs-extra").readJson
  var remove: typeof import("fs-extra").remove
  var writeJson: typeof import("fs-extra").writeJson

  namespace NodeJS {
    interface Global {
      emptyDir: typeof import("fs-extra").emptyDir
      ensureFile: typeof import("fs-extra").ensureFile
      ensureDir: typeof import("fs-extra").ensureDir
      ensureLink: typeof import("fs-extra").ensureLink
      ensureSymlink: typeof import("fs-extra").ensureSymlink
      mkdirp: typeof import("fs-extra").mkdirp
      mkdirs: typeof import("fs-extra").mkdirs
      outputFile: typeof import("fs-extra").outputFile
      outputJson: typeof import("fs-extra").outputJson
      pathExists: typeof import("fs-extra").pathExists
      readJson: typeof import("fs-extra").readJson
      remove: typeof import("fs-extra").remove
      writeJson: typeof import("fs-extra").writeJson
    }
  }
}
