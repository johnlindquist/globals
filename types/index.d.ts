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
  emptyDirSync: typeof import("./fs-extra").emptyDirSync
  ensureFile: typeof import("./fs-extra").ensureFile
  ensureFileSync: typeof import("./fs-extra").ensureFileSync
  ensureDir: typeof import("./fs-extra").ensureDir
  ensureDirSync: typeof import("./fs-extra").ensureDirSync
  ensureLink: typeof import("./fs-extra").ensureLink
  ensureLinkSync: typeof import("./fs-extra").ensureLinkSync
  ensureSymlink: typeof import("./fs-extra").ensureSymlink
  ensureSymlinkSync: typeof import("./fs-extra").ensureSymlinkSync
  mkdirp: typeof import("./fs-extra").mkdirp
  mkdirpSync: typeof import("./fs-extra").mkdirpSync
  mkdirs: typeof import("./fs-extra").mkdirs
  outputFile: typeof import("./fs-extra").outputFile
  outputFileSync: typeof import("./fs-extra").outputFileSync
  outputJson: typeof import("./fs-extra").outputJson
  outputJsonSync: typeof import("./fs-extra").outputJsonSync
  pathExists: typeof import("./fs-extra").pathExists
  pathExistsSync: typeof import("./fs-extra").pathExistsSync
  readJson: typeof import("./fs-extra").readJson
  readJsonSync: typeof import("./fs-extra").readJsonSync
  remove: typeof import("./fs-extra").remove
  removeSync: typeof import("./fs-extra").removeSync
  writeJson: typeof import("./fs-extra").writeJson
  writeJsonSync: typeof import("./fs-extra").writeJsonSync
  move: typeof import("./fs-extra").move
  moveSync: typeof import("./fs-extra").moveSync
  readFile: typeof import("fs/promises").readFile
  readFileSync: typeof import("fs").readFileSync
  writeFile: typeof import("fs/promises").writeFile
  writeFileSync: typeof import("fs").writeFileSync
  appendFile: typeof import("fs/promises").appendFile
  appendFileSync: typeof import("fs").appendFileSync
  readdir: typeof import("fs/promises").readdir
  readdirSync: typeof import("fs").readdirSync
  copyFile: typeof import("fs/promises").copyFile
  copyFileSync: typeof import("fs").copyFileSync

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

  globby: typeof import("globby").globby
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
  var emptyDirSync: typeof import("./fs-extra").emptyDirSync
  var ensureFile: typeof import("./fs-extra").ensureFile
  var ensureFileSync: typeof import("./fs-extra").ensureFileSync
  var ensureDir: typeof import("./fs-extra").ensureDir
  var ensureDirSync: typeof import("./fs-extra").ensureDirSync
  var ensureLink: typeof import("./fs-extra").ensureLink
  var ensureLinkSync: typeof import("./fs-extra").ensureLinkSync
  var ensureSymlink: typeof import("./fs-extra").ensureSymlink
  var ensureSymlinkSync: typeof import("./fs-extra").ensureSymlinkSync
  var mkdirp: typeof import("./fs-extra").mkdirp
  var mkdirpSync: typeof import("./fs-extra").mkdirpSync
  var mkdirs: typeof import("./fs-extra").mkdirs
  var outputFile: typeof import("./fs-extra").outputFile
  var outputFileSync: typeof import("./fs-extra").outputFileSync
  var outputJson: typeof import("./fs-extra").outputJson
  var outputJsonSync: typeof import("./fs-extra").outputJsonSync
  var pathExists: typeof import("./fs-extra").pathExists
  var pathExistsSync: typeof import("./fs-extra").pathExistsSync
  var readJson: typeof import("./fs-extra").readJson
  var readJsonSync: typeof import("./fs-extra").readJsonSync
  var remove: typeof import("./fs-extra").remove
  var removeSync: typeof import("./fs-extra").removeSync
  var writeJson: typeof import("./fs-extra").writeJson
  var writeJsonSync: typeof import("./fs-extra").writeJsonSync
  var move: typeof import("./fs-extra").move
  var moveSync: typeof import("./fs-extra").moveSync
  //fs/promises
  var readFile: typeof import("fs/promises").readFile
  var readFileSync: typeof import("fs").readFileSync
  var writeFile: typeof import("fs/promises").writeFile
  var writeFileSync: typeof import("fs").writeFileSync
  var appendFile: typeof import("fs/promises").appendFile
  var appendFileSync: typeof import("fs").appendFileSync
  var readdir: typeof import("fs/promises").readdir
  var readdirSync: typeof import("fs").readdirSync
  var copyFile: typeof import("fs/promises").copyFile
  var copyFileSync: typeof import("fs").copyFileSync

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

  var rename: typeof import("fs/promises").rename

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

  var globby: typeof import("globby").globby
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

export var globby: typeof import("globby").globby
