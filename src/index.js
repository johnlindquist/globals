import axios from "axios"

export let get = (global.get = axios.get)
export let put = (global.put = axios.put)
export let post = (global.post = axios.post)
export let patch = (global.patch = axios.patch)

import _chalk from "chalk"
export let chalk = (global.chalk = _chalk)

import child_process from "child_process"

export let spawn = (global.spawn = child_process.spawn)
export let spawnSync = (global.spawnSync = child_process.spawnSync)
export let fork = (global.fork = child_process.fork)

import _degit from "degit"

export let degit = (global.degit = _degit)

import _download from "download"

export let download = (global.download = _download)

import fsExtra from "fs-extra"

export let emptyDir = (global.emptyDir = fsExtra.emptyDir)
export let ensureFile = (global.ensureFile = fsExtra.ensureFile)
export let ensureDir = (global.ensureDir = fsExtra.ensureDir)
export let ensureLink = (global.ensureLink = fsExtra.ensureLink)
export let ensureSymlink = (global.ensureSymlink = fsExtra.ensureSymlink)
export let mkdirp = (global.mkdirp = fsExtra.mkdirp)
export let mkdirs = (global.mkdirs = fsExtra.mkdirs)
export let outputFile = (global.outputFile = fsExtra.outputFile)
export let outputJson = (global.outputJson = fsExtra.outputJson)
export let pathExists = (global.pathExists = fsExtra.pathExists)
export let readJson = (global.readJson = fsExtra.readJson)
export let remove = (global.remove = fsExtra.remove)
export let writeJson = (global.writeJson = fsExtra.writeJson)

import fs from "fs"
import fsPromises from "fs/promises"

export let readFile = (global.readFile = fsPromises.readFile)
export let writeFile = (global.writeFile = fsPromises.writeFile)
export let appendFile = (global.appendFile = fsPromises.appendFile)
export let readdir = (global.readdir = fsPromises.readdir)
export let copyFile = (global.copyFile = fsPromises.copyFile)
export let createReadStream = (global.createReadStream = fs.createReadStream)
export let createWriteStream = (global.createWriteStream = fs.createWriteStream)

import { compile as _compile } from "handlebars"

export let compile = (global.compile = _compile)

import __ from "lodash"
export let _ = (global._ = __)

import marked from "marked"

export let md = (global.md = marked.parse)

import { nanoid } from "nanoid"

export let uuid = (global.uuid = nanoid)

import nodeFetch from "node-fetch"

export let fetch = (global.fetch = nodeFetch)

import _path from "path"
export let path = (global.path = _path)

export let cwd = (global.cwd = process.cwd)
export let pid = (global.pid = process.pid)
export let stderr = (global.stderr = process.stderr)
export let stdin = (global.stdin = process.stdin)
export let stdout = (global.stdout = process.stdout)
export let uptime = (global.uptime = process.uptime)

import { replaceInFile } from "replace-in-file"

export let replace = (global.replace = replaceInFile)

import { $ as _$ } from "zx"

export let $ = (global.$ = _$)
