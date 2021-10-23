import fs from "fs"
import fsPromises from "fs/promises"

global.readFile = fsPromises.readFile
global.writeFile = fsPromises.writeFile
global.appendFile = fsPromises.appendFile
global.readdir = fsPromises.readdir
global.copyFile = fsPromises.copyFile

global.createReadStream = fs.createReadStream
global.createWriteStream = fs.createWriteStream
