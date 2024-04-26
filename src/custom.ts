import { readFile, writeFile } from "fs/promises"
import { ensureFile, exists, readJson, writeJson } from "fs-extra"
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

export let ensureReadJson = async <T>(
  pathLike: string,
  defaultContent: T,
  options?: Parameters<typeof readJson>[1]
): Promise<T> => {
  if (await exists(pathLike)) {
    return await readJson(pathLike, options)
  }

  await ensureFile(pathLike)
  await writeJson(pathLike, defaultContent)
  return defaultContent
}

global.ensureReadFile = ensureReadFile
global.ensureReadJson = ensureReadJson
