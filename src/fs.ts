import fs from "fs"
import fsPromises from "fs/promises"

export let readFile = (global.readFile = fsPromises.readFile)
export let writeFile = (global.writeFile = fsPromises.writeFile)
export let appendFile = (global.appendFile = fsPromises.appendFile)
export let readdir = (global.readdir = fsPromises.readdir)
export let copyFile = (global.copyFile = fsPromises.copyFile)
export let stat = (global.stat = fsPromises.stat)
export let lstat = (global.lstat = fsPromises.lstat)
export let rmdir = (global.rmdir = fsPromises.rmdir)
export let unlink = (global.unlink = fsPromises.unlink)
export let symlink = (global.symlink = fsPromises.symlink)
export let readlink = (global.readlink = fsPromises.readlink)
export let realpath = (global.realpath = fsPromises.realpath)
export let access = (global.access = fsPromises.access)
export let chown = (global.chown = fsPromises.chown)
export let lchown = (global.lchown = fsPromises.lchown)
export let utimes = (global.utimes = fsPromises.utimes)
export let lutimes = (global.lutimes = fsPromises.lutimes)

export let createReadStream = (global.createReadStream = fs.createReadStream)
export let createWriteStream = (global.createWriteStream = fs.createWriteStream)
