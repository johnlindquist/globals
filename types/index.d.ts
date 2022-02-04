import { ChildProcess } from "child_process"
import { PlatformPath } from "path"

interface $ {
  (pieces: TemplateStringsArray, ...args: any[]): ProcessPromise<ProcessOutput>

  verbose: boolean
  shell: string
  cwd: string
  prefix: string
  quote: (input: string) => string
}

interface ProcessPromise<T> extends Promise<T> {
  child: ChildProcess
  readonly stdin: typeof import("stream").Writable
  readonly stdout: typeof import("stream").Readable
  readonly stderr: typeof import("stream").Readable
  readonly exitCode: Promise<number>

  pipe(dest: ProcessPromise<ProcessOutput> | typeof import("stream").Writable): ProcessPromise<ProcessOutput>

  kill(signal?: string | number): Promise<void>
}

declare class ProcessOutput {
  readonly exitCode: number
  readonly stdout: string
  readonly stderr: string

  toString(): string
}

interface Md {
  (markdown: string, containerClasses?: string): string
}

type PathPicker = (startPath?: string) => Promise<string>
export type PathSelector = PlatformPath & PathPicker

export interface GlobalsApi {
  path: PathSelector
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
  chalk: typeof import("./chalk")
  spawn: typeof import("child_process").spawn
  spawnSync: typeof import("child_process").spawnSync
  fork: typeof import("child_process").fork
  exec: typeof import("./execa").execaCommand
  execa: typeof import("./execa").execa
  execaSync: typeof import("./execa").execaSync
  execaCommand: typeof import("./execa").execaCommand
  execaCommandSync: typeof import("./execa").execaCommandSync
  execaNode: typeof import("./execa").execaNode
  degit: typeof import("./degit")
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
  readFile: typeof import("fs/promises").readFile
  writeFile: typeof import("fs/promises").writeFile
  appendFile: typeof import("fs/promises").appendFile
  readdir: typeof import("fs/promises").readdir
  copyFile: typeof import("fs/promises").copyFile
  createReadStream: typeof import("fs").createReadStream
  createWriteStream: typeof import("fs").createWriteStream
  Writable: typeof import("stream").Writable
  Readable: typeof import("stream").Readable
  Duplex: typeof import("stream").Duplex
  Transform: typeof import("stream").Transform
  compile: typeof import("./handlebars").compile
  _: import("./lodash").LoDashStatic
  md: Md
  uuid: typeof import("crypto").randomUUID
  fetch: typeof import("./node-fetch")
  replace: typeof import("./replace-in-file").replaceInFile
  $: $

  //custom
  ensureReadFile: typeof import("../src/custom").ensureReadFile
}

declare global {
  //path
  var path: PathSelector
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
  var chalk: typeof import("./chalk")
  //child_process
  var spawn: typeof import("child_process").spawn
  var spawnSync: typeof import("child_process").spawnSync
  var fork: typeof import("child_process").fork
  var degit: typeof import("./degit")
  // custom
  var ensureReadFile: typeof import("../src/custom").ensureReadFile
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
  //fs
  var createReadStream: typeof import("fs").createReadStream
  var createWriteStream: typeof import("fs").createWriteStream
  //handlebars
  var compile: typeof import("./handlebars").compile
  //lodash
  var _: import("./lodash").LoDashStatic
  //marked
  var md: Md
  //uuid
  var uuid: typeof import("crypto").randomUUID
  //node-fetch
  var fetch: typeof import("./node-fetch")
  //replace-in-file
  var replace: typeof import("./replace-in-file").replaceInFile
  // stream
  var Writable: typeof import("stream").Writable
  var Readable: typeof import("stream").Readable
  var Duplex: typeof import("stream").Duplex
  var Transform: typeof import("stream").Transform
  //zx
  var $: $

  namespace NodeJS {
    interface Global extends GlobalsApi {}
  }
}

//path
export var path: PathSelector
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
export var chalk: typeof import("./chalk")
//child_process
export var spawn: typeof import("child_process").spawn
export var spawnSync: typeof import("child_process").spawnSync
export var fork: typeof import("child_process").fork
export var degit: typeof import("./degit")
//custom
export var ensureReadFile: typeof import("../src/custom").ensureReadFile
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
//fs/promises
export var readFile: typeof import("fs/promises").readFile
export var writeFile: typeof import("fs/promises").writeFile
export var appendFile: typeof import("fs/promises").appendFile
export var readdir: typeof import("fs/promises").readdir
export var copyFile: typeof import("fs/promises").copyFile
//fs
export var createReadStream: typeof import("fs").createReadStream
export var createWriteStream: typeof import("fs").createWriteStream
//handlebars
export var compile: typeof import("./handlebars").compile
//lodash
export var _: import("./lodash").LoDashStatic
//marked
export var md: typeof import("./marked").parse
//nonoid
export var uuid: typeof import("crypto").randomUUID
//node-fetch
export var fetch: typeof import("./node-fetch")
//replace-in-file
export var replace: typeof import("./replace-in-file").replaceInFile
// stream
export var Writable: typeof import("stream").Writable
export var Readable: typeof import("stream").Readable
export var Duplex: typeof import("stream").Duplex
export var Transform: typeof import("stream").Transform
//zx
export var $: $
