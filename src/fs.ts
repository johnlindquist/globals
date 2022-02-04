import fs from "fs"
import fsPromises from "fs/promises"
import Stream from "stream"

export let readFile = (global.readFile = fsPromises.readFile)
export let writeFile = (global.writeFile = fsPromises.writeFile)
export let appendFile = (global.appendFile = fsPromises.appendFile)
export let readdir = (global.readdir = fsPromises.readdir)
export let copyFile = (global.copyFile = fsPromises.copyFile)
export let createReadStream = (global.createReadStream = fs.createReadStream)
export let createWriteStream = (global.createWriteStream = fs.createWriteStream)
export let Writable = (global.Writable = Stream.Writable)
export let Readable = (global.Readable = Stream.Readable)
export let Duplex = (global.Duplex = Stream.Duplex)
export let Transform = (global.Transform = Stream.Transform)
