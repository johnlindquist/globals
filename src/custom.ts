import { readFile, writeFile } from "./fs"
import { ensureFile } from "./fs-extra"
type ReadFileOptions = Parameters<typeof readFile>[1]
export interface EnsureReadFile {
  (path: string, defaultContent?: string, options?: ReadFileOptions): Promise<string>
}

export let ensureReadFile: EnsureReadFile = async (
  pathLike: string,
  defaultContent: string = "",
  options = { encoding: "utf-8" }
) => {
  await ensureFile(pathLike)
  if (defaultContent) {
    let readContent = await readFile(pathLike, options)
    if (!readContent) {
      await writeFile(pathLike, defaultContent)
      return defaultContent
    }
  }

  return (await readFile(pathLike, options)) as string
}

global.ensureReadFile = ensureReadFile
