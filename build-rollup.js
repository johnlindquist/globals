import { readdir, writeFile } from "fs/promises"
import { rollup } from "rollup"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
import ignore from "rollup-plugin-ignore"
import replace from "replace-in-file"

await replace({
  files: "node_modules/node-fetch/@types/index.d.ts",
  from: [
    `/// <reference lib="dom" />`,
    `| URLSearchParams`,
    `: URL`,
  ],
  to: ``,
})

let files = await readdir("./src")
files = files.filter(f => f !== "index.ts")
// files = files.filter(f => f !== "replace-in-file.ts")
// files = files.filter(f => f !== "shelljs.ts")
// files = files.filter(f => f !== "uuid.ts")

let entryFileContent = `
${files
  .map(f => `export * from "./${f.replace(/\.ts$/, "")}"`)
  .join("\n")}
`
await writeFile("./src/index.ts", entryFileContent)

let bundle = await rollup({
  input: "./src/index.ts",
  treeshake: true,
  

  plugins: [
    typescript(),
    resolve({
      preferBuiltins: true,
    }),
    ignore(["electron"]),
    commonjs(),
    json(),
    terser(),
  ],
})

await bundle.write({
  file: "./dist/index.js",
  format: "esm",
  compact: true,
})

await bundle.close()


// A sad, sad hack :/
await replace.replaceInFile(
  {
    files: [`./dist/index.js`],
    from: `glob_1.Glob;`,
    to: ``
  }
)