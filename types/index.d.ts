import { ChildProcess } from "child_process"
import { Readable, Writable } from "stream"

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
  readonly stdin: Writable
  readonly stdout: Readable
  readonly stderr: Readable
  readonly exitCode: Promise<number>

  pipe(dest: ProcessPromise<ProcessOutput> | Writable): ProcessPromise<ProcessOutput>

  kill(signal?: string | number): Promise<void>
}

declare class ProcessOutput {
  readonly exitCode: number
  readonly stdout: string
  readonly stderr: string

  toString(): string
}

declare global {
  //path
  var path: typeof import("path")
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
  var md: typeof import("./marked").parse
  //nonoid
  var uuid: typeof import("./nanoid").nanoid
  //node-fetch
  var fetch: typeof import("./node-fetch")
  //replace-in-file
  var replace: typeof import("./replace-in-file").replaceInFile
  //zx
  var $: $

  namespace NodeJS {
    interface Global {
      path: typeof import("path")
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
      compile: typeof import("./handlebars").compile
      _: import("./lodash").LoDashStatic
      md: typeof import("./marked").parse
      uuid: typeof import("./nanoid").nanoid
      fetch: typeof import("./node-fetch")
      replace: typeof import("./replace-in-file").replaceInFile
      $: $
    }
  }
}
