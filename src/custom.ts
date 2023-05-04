import { readFile, writeFile } from "fs/promises"
import { ensureFile } from "fs-extra"
export let ensureReadFile = async (
  pathLike: string,
  defaultContent: string = "",
  options = { encoding: "utf-8" } as Parameters<typeof readFile>[1]
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
