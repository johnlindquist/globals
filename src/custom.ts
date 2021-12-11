import { readFile } from "./fs"
import { ensureFile } from "./fs-extra"

type ReadFileParams = Parameters<typeof readFile>
export interface EnsureReadFile {
  (pathLike: string, options: ReadFileParams[1]): Promise<string | Buffer>
}
export let ensureReadFile: EnsureReadFile = async (
  pathLike: string,
  options: ReadFileParams[1] = { encoding: "utf-8" }
) => {
  await ensureFile(pathLike)
  return await readFile(pathLike, options)
}

global.ensureReadFile = ensureReadFile
