// @ts-check

// If won't use `@ts-check` - just remove that comments (with `@type` JSDoc below).
let { readdirSync } = require("fs")

//strip dom

let inlinedLibraries = readdirSync("./src")
  .filter(p => !p.startsWith("index.ts"))
  .filter(p => !p.startsWith("fs.ts"))
  .filter(p => !p.startsWith("child_process.ts"))
  .map(p => p.replace(/\.ts$/, ""))

console.log({ inlinedLibraries })

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
let config = {
  compilationOptions: {
    preferredConfigPath: "./tsconfig.json",

  },

  entries: [
    {
      noCheck: true,
      filePath: "./src/index.ts",
      outFile: "./types/index.d.ts",
      output: {
        inlineDeclareGlobals: true,
        inlineDeclareExternals: true,
        sortNodes: true,

      },
      libraries: {
        inlinedLibraries,
      },
    },
  ],
}

module.exports = config
