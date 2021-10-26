import fs from "fs"
import fsPromises from "fs/promises"

export let readFile = (global.readFile = fsPromises.readFile)
export let writeFile = (global.writeFile = fsPromises.writeFile)
export let appendFile = (global.appendFile = fsPromises.appendFile)
export let readdir = (global.readdir = fsPromises.readdir)
export let copyFile = (global.copyFile = fsPromises.copyFile)
export let createReadStream = (global.createReadStream = fs.createReadStream)
export let createWriteStream = (global.createWriteStream = fs.createWriteStream)
