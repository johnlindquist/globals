export * from "../src/axios"
export * from "../src/chalk"
export * from "../src/child_process"
export * from "../src/degit"
export * from "../src/download"
export * from "../src/fs-extra"
export * from "../src/fs"
export * from "../src/handlebars"
export * from "../src/lodash"
export * from "../src/marked"
export * from "../src/nanoid"
export * from "../src/node-fetch"
export * from "../src/path"
export * from "../src/process"
export * from "../src/replace-in-file"
export * from "../src/zx"

import { readFile } from "../src/fs"
import { ensureFile } from "../src/fs-extra"

type ReadFileParams = Parameters<typeof readFile>
export let ensureReadFile = async (pathLike: string, options: ReadFileParams[1] = "utf-8") => {
  await ensureFile(pathLike)
  return await readFile(pathLike, options)
}
