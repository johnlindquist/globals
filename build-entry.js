import { readdir, writeFile } from "fs/promises"
let files = await readdir("./src")
files = files.filter(f => f !== "index.ts")
// files = files.filter(f => f !== "replace-in-file.ts")
// files = files.filter(f => f !== "shelljs.ts")
// files = files.filter(f => f !== "uuid.ts")

let entryFileContent = `
${files.map(f => `export * from "../src/${f.replace(/\.ts$/, "")}"`).join("\n")}
`
await writeFile("./src/index.ts", entryFileContent)
