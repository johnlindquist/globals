import * as fs from "fs"
import * as fsPromises from "fs/promises"

global.readFile = fsPromises.readFile
global.writeFile = fsPromises.writeFile
global.appendFile = fsPromises.appendFile
global.readdir = fsPromises.readdir
global.copyFile = fsPromises.copyFile

global.createReadStream = fs.createReadStream
global.createWriteStream = fs.createWriteStream

declare global {
  var readFile: typeof import("fs/promises").readFile
  var writeFile: typeof import("fs/promises").writeFile
  var appendFile: typeof import("fs/promises").appendFile
  var readdir: typeof import("fs/promises").readdir
  var copyFile: typeof import("fs/promises").copyFile

  var createReadStream: typeof import("fs").createReadStream
  var createWriteStream: typeof import("fs").createWriteStream

  namespace NodeJS {
    interface Global {
      readFile: typeof import("fs/promises").readFile
      writeFile: typeof import("fs/promises").writeFile
      appendFile: typeof import("fs/promises").appendFile
      readdir: typeof import("fs/promises").readdir
      copyFile: typeof import("fs/promises").copyFile
      createReadStream: typeof import("fs").createReadStream
      createWriteStream: typeof import("fs").createWriteStream
    }
  }
}
