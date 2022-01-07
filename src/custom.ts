import { readFile, writeFile } from "./fs"
import { ensureFile } from "./fs-extra"

type ReadFileParams = Parameters<typeof readFile>
export interface EnsureReadFile {
  (pathLike: string, content: string, options: ReadFileParams[1]): Promise<string | Buffer>
}
export let ensureReadFile: EnsureReadFile = async (
  pathLike: string,
  defaultContent: string = "",
  options: ReadFileParams[1] = { encoding: "utf-8" }
) => {
  await ensureFile(pathLike)
  if (defaultContent) {
    let readContent = await readFile(pathLike, options)
    if (!readContent) {
      await writeFile(pathLike, defaultContent)
      return defaultContent
    }
  }

  return await readFile(pathLike, options)
}

global.ensureReadFile = ensureReadFile
