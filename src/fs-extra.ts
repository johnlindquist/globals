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
  var emptyDir: fsExtra.emptyDir
  var ensureFile: fsExtra.ensureFile
  var ensureDir: fsExtra.ensureDir
  var ensureLink: fsExtra.ensureLink
  var ensureSymlink: fsExtra.ensureSymlink
  var mkdirp: fsExtra.mkdirp
  var mkdirs: fsExtra.mkdirs
  var outputFile: fsExtra.outputFile
  var outputJson: fsExtra.outputJson
  var pathExists: fsExtra.pathExists
  var readJson: fsExtra.readJson
  var remove: fsExtra.remove
  var writeJson: fsExtra.writeJson

  namespace NodeJS {
    interface Global {
      emptyDir: fsExtra.emptyDir
      ensureFile: fsExtra.ensureFile
      ensureDir: fsExtra.ensureDir
      ensureLink: fsExtra.ensureLink
      ensureSymlink: fsExtra.ensureSymlink
      mkdirp: fsExtra.mkdirp
      mkdirs: fsExtra.mkdirs
      outputFile: fsExtra.outputFile
      outputJson: fsExtra.outputJson
      pathExists: fsExtra.pathExists
      readJson: fsExtra.readJson
      remove: fsExtra.remove
      writeJson: fsExtra.writeJson
    }
  }
}
