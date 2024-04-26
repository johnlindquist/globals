import { readFile, writeFile } from "fs/promises"
import { ensureFile, readJson, writeJson } from "fs-extra"
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
  defaultContent: object = {},
  options?: Parameters<typeof readJson>[1]
): Promise<T> => {
  await ensureFile(pathLike)
  if (defaultContent) {
    let readContent
    try {
      readContent = await readJson(pathLike, options)
    } catch (error) {}

    if (readContent) {
      return readContent
    }

    await writeJson(pathLike, defaultContent)
    return defaultContent as unknown as T
  }

  return readJson(pathLike, options)
}

global.ensureReadFile = ensureReadFile
global.ensureReadJson = ensureReadJson
