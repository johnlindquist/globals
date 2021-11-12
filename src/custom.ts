import { readFile } from "./fs"
import { ensureFile } from "./fs-extra"

type ReadFileParams = Parameters<typeof readFile>
export let ensureReadFile = (global.ensureReadFile = async (pathLike: string, options: ReadFileParams[1] = "utf-8") => {
  await ensureFile(pathLike)
  return await readFile(pathLike, options)
})
