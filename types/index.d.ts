export interface Md {
  (markdown: string, containerClasses?: string): string
}

type ReadFileOptions = Parameters<typeof readFile>[1]
export interface EnsureReadFile {
  (path: string, defaultContent?: string, options?: ReadFileOptions): Promise<string>
}

export interface GlobalsApi {
  cwd: typeof process.cwd
  pid: typeof process.pid
  stderr: typeof process.stderr
  stdin: typeof process.stdin
  stdout: typeof process.stdout
  uptime: typeof process.uptime
  get: import("./axios").AxiosInstance["get"]
  put: import("./axios").AxiosInstance["put"]
  post: import("./axios").AxiosInstance["post"]
  patch: import("./axios").AxiosInstance["patch"]
  chalk: typeof import("chalk-template").default
  spawn: typeof import("child_process").spawn
  spawnSync: typeof import("child_process").spawnSync
  fork: typeof import("child_process").fork
  exec: typeof import("./execa").execaCommand
  execa: typeof import("./execa").execa
  execaSync: typeof import("./execa").execaSync
  execaCommand: typeof import("./execa").execaCommand
  execaCommandSync: typeof import("./execa").execaCommandSync
  execaNode: typeof import("./execa").execaNode

  download: typeof import("./download")
  emptyDir: typeof import("./fs-extra").emptyDir
  ensureFile: typeof import("./fs-extra").ensureFile
  ensureDir: typeof import("./fs-extra").ensureDir
  ensureLink: typeof import("./fs-extra").ensureLink
  ensureSymlink: typeof import("./fs-extra").ensureSymlink
  mkdirp: typeof import("./fs-extra").mkdirp
  mkdirs: typeof import("./fs-extra").mkdirs
  outputFile: typeof import("./fs-extra").outputFile
  outputJson: typeof import("./fs-extra").outputJson
  pathExists: typeof import("./fs-extra").pathExists
  readJson: typeof import("./fs-extra").readJson
  remove: typeof import("./fs-extra").remove
  writeJson: typeof import("./fs-extra").writeJson
  move: typeof import("./fs-extra").move
  readFile: typeof import("fs/promises").readFile
  writeFile: typeof import("fs/promises").writeFile
  appendFile: typeof import("fs/promises").appendFile
  readdir: typeof import("fs/promises").readdir
  copyFile: typeof import("fs/promises").copyFile

  stat: typeof import("fs/promises").stat
  lstat: typeof import("fs/promises").lstat

  rmdir: typeof import("fs/promises").rmdir
  unlink: typeof import("fs/promises").unlink
  symlink: typeof import("fs/promises").symlink
  readlink: typeof import("fs/promises").readlink
  realpath: typeof import("fs/promises").realpath
  access: typeof import("fs/promises").access
  rename: typeof import("fs/promises").rename

  chown: typeof import("fs/promises").chown
  lchown: typeof import("fs/promises").lchown
  utimes: typeof import("fs/promises").utimes
  lutimes: typeof import("fs/promises").lutimes

  createReadStream: typeof import("fs").createReadStream
  createWriteStream: typeof import("fs").createWriteStream
  Writable: typeof import("stream").Writable
  Readable: typeof import("stream").Readable
  Duplex: typeof import("stream").Duplex
  Transform: typeof import("stream").Transform
  compile: typeof import("./handlebars").compile

  md: Md
  marked: typeof import("./marked").marked
  uuid: typeof import("crypto").randomUUID
  replace: typeof import("./replace-in-file").replaceInFile
  $: $

  //custom
  ensureReadFile: EnsureReadFile
}

declare global {
  //process
  var cwd: typeof process.cwd
  var pid: typeof process.pid
  var stderr: typeof process.stderr
  var stdin: typeof process.stdin
  var stdout: typeof process.stdout
  var uptime: typeof process.uptime
  //axios
  var get: import("./axios").AxiosInstance["get"]
  var put: import("./axios").AxiosInstance["put"]
  var post: import("./axios").AxiosInstance["post"]
  var patch: import("./axios").AxiosInstance["patch"]
  //chalk
  var chalk: typeof import("./chalk").default
  //child_process
  var spawn: typeof import("child_process").spawn
  var spawnSync: typeof import("child_process").spawnSync
  var fork: typeof import("child_process").fork

  // custom
  var ensureReadFile: EnsureReadFile
  // execa
  var exec: typeof import("./execa").execaCommand
  var execa: typeof import("./execa").execa
  var execaSync: typeof import("./execa").execaSync
  var execaCommand: typeof import("./execa").execaCommand
  var execaCommandSync: typeof import("./execa").execaCommandSync
  var execaNode: typeof import("./execa").execaNode
  //download
  var download: typeof import("./download")
  //fs-extra
  var emptyDir: typeof import("./fs-extra").emptyDir
  var ensureFile: typeof import("./fs-extra").ensureFile
  var ensureDir: typeof import("./fs-extra").ensureDir
  var ensureLink: typeof import("./fs-extra").ensureLink
  var ensureSymlink: typeof import("./fs-extra").ensureSymlink
  var mkdirp: typeof import("./fs-extra").mkdirp
  var mkdirs: typeof import("./fs-extra").mkdirs
  var outputFile: typeof import("./fs-extra").outputFile
  var outputJson: typeof import("./fs-extra").outputJson
  var pathExists: typeof import("./fs-extra").pathExists
  var readJson: typeof import("./fs-extra").readJson
  var remove: typeof import("./fs-extra").remove
  var writeJson: typeof import("./fs-extra").writeJson
  //fs/promises
  var readFile: typeof import("fs/promises").readFile
  var writeFile: typeof import("fs/promises").writeFile
  var appendFile: typeof import("fs/promises").appendFile
  var readdir: typeof import("fs/promises").readdir
  var copyFile: typeof import("fs/promises").copyFile

  var stat: typeof import("fs/promises").stat
  var lstat: typeof import("fs/promises").lstat

  var rmdir: typeof import("fs/promises").rmdir
  var unlink: typeof import("fs/promises").unlink
  var symlink: typeof import("fs/promises").symlink
  var readlink: typeof import("fs/promises").readlink
  var realpath: typeof import("fs/promises").realpath
  var access: typeof import("fs/promises").access

  var chown: typeof import("fs/promises").chown
  var lchown: typeof import("fs/promises").lchown
  var utimes: typeof import("fs/promises").utimes
  var lutimes: typeof import("fs/promises").lutimes

  //fs
  var createReadStream: typeof import("fs").createReadStream
  var createWriteStream: typeof import("fs").createWriteStream

  //handlebars
  var compile: typeof import("./handlebars").compile

  //marked
  var md: Md
  var marked: typeof import("./marked").marked
  //uuid
  var uuid: typeof import("crypto").randomUUID

  //replace-in-file
  var replace: typeof import("./replace-in-file").replaceInFile
  // stream
  var Writable: typeof import("stream").Writable
  var Readable: typeof import("stream").Readable
  var Duplex: typeof import("stream").Duplex
  var Transform: typeof import("stream").Transform

  namespace NodeJS {
    interface Global extends GlobalsApi {}
  }
}

//process
export var cwd: typeof process.cwd
export var pid: typeof process.pid
export var stderr: typeof process.stderr
export var stdin: typeof process.stdin
export var stdout: typeof process.stdout
export var uptime: typeof process.uptime
//axios
export var get: import("./axios").AxiosInstance["get"]
export var put: import("./axios").AxiosInstance["put"]
export var post: import("./axios").AxiosInstance["post"]
export var patch: import("./axios").AxiosInstance["patch"]
//chalk
export var chalk: typeof import("chalk-template").default
//child_process
export var spawn: typeof import("child_process").spawn
export var spawnSync: typeof import("child_process").spawnSync
export var fork: typeof import("child_process").fork

//custom
export var ensureReadFile: EnsureReadFile
//download
export var download: typeof import("./download")
// execa
export var exec: typeof import("./execa").execaCommand
export var execa: typeof import("./execa").execa
export var execaSync: typeof import("./execa").execaSync
export var execaCommand: typeof import("./execa").execaCommand
export var execaCommandSync: typeof import("./execa").execaCommandSync
export var execaNode: typeof import("./execa").execaNode
//fs-extra
export var emptyDir: typeof import("./fs-extra").emptyDir
export var ensureFile: typeof import("./fs-extra").ensureFile
export var ensureDir: typeof import("./fs-extra").ensureDir
export var ensureLink: typeof import("./fs-extra").ensureLink
export var ensureSymlink: typeof import("./fs-extra").ensureSymlink
export var mkdirp: typeof import("./fs-extra").mkdirp
export var mkdirs: typeof import("./fs-extra").mkdirs
export var outputFile: typeof import("./fs-extra").outputFile
export var outputJson: typeof import("./fs-extra").outputJson
export var pathExists: typeof import("./fs-extra").pathExists
export var readJson: typeof import("./fs-extra").readJson
export var remove: typeof import("./fs-extra").remove
export var writeJson: typeof import("./fs-extra").writeJson
export var move: typeof import("./fs-extra").move
//fs/promises
export var readFile: typeof import("fs/promises").readFile
export var writeFile: typeof import("fs/promises").writeFile
export var appendFile: typeof import("fs/promises").appendFile
export var readdir: typeof import("fs/promises").readdir
export var copyFile: typeof import("fs/promises").copyFile

export var stat: typeof import("fs/promises").stat
export var lstat: typeof import("fs/promises").lstat

export var rmdir: typeof import("fs/promises").rmdir
export var unlink: typeof import("fs/promises").unlink
export var symlink: typeof import("fs/promises").symlink
export var readlink: typeof import("fs/promises").readlink
export var realpath: typeof import("fs/promises").realpath
export var access: typeof import("fs/promises").access

export var chown: typeof import("fs/promises").chown
export var lchown: typeof import("fs/promises").lchown
export var utimes: typeof import("fs/promises").utimes
export var lutimes: typeof import("fs/promises").lutimes
export var rename: typeof import("fs/promises").rename

//fs
export var createReadStream: typeof import("fs").createReadStream
export var createWriteStream: typeof import("fs").createWriteStream
//handlebars
export var compile: typeof import("./handlebars").compile

//marked
export var md: Md
export var marked: typeof import("./marked").marked
//nonoid
export var uuid: typeof import("crypto").randomUUID
//replace-in-file
export var replace: typeof import("./replace-in-file").replaceInFile
// stream
export var Writable: typeof import("stream").Writable
export var Readable: typeof import("stream").Readable
export var Duplex: typeof import("stream").Duplex
export var Transform: typeof import("stream").Transform
