import ncc from "@vercel/ncc"
import path from "path"
import fs from "fs-extra"
import { exec, execSync } from "child_process"

let libs = [
  "axios",
  "chalk",
  "degit",
  "download",
  "fs-extra",
  "handlebars",
  "lodash",
  "marked",
  "nanoid",
  "node-fetch",
  "replace-in-file",
  "zx",
]

for (let lib of libs) {
  let libPath = path.resolve("node_modules", lib)
  let pkgPath = path.resolve(libPath, "package.json")
  let pkg = await fs.readJson(pkgPath)
  let mainPath = path.resolve(libPath, pkg?.main || "index.js")
  console.log(`Start ${lib}`)
  execSync(`npx ncc build ${mainPath} --out ncc/${lib}`)
  console.log(`Done ${lib}`)
}

execSync(`npx ncc build ${path.resolve("src", "bundle.js")} --out dist`)

// let input = path.resolve("src", "index.ts")
// let result = await ncc(input, {
//   // provide a custom cache path or disable caching
//   //   cache: "./custom/cache/path" | false,
//   // externals to leave as requires of the build
//   externals: ["electron"],
//   // directory outside of which never to emit assets
//   filterAssetBase: process.cwd(), // default
//   minify: false, // default
//   sourceMap: false, // default
//   assetBuilds: false, // default
//   sourceMapBasePrefix: "../", // default treats sources as output-relative
//   // when outputting a sourcemap, automatically include
//   // source-map-support in the output file (increases output by 32kB).
//   sourceMapRegister: false, // default
//   watch: false, // default
//   license: "", // default does not generate a license file
//   v8cache: false, // default
//   quiet: false, // default
//   debugLog: false, // default
// })

console.log(`done`)
