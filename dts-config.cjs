// @ts-check

// If won't use `@ts-check` - just remove that comments (with `@type` JSDoc below).
let {
  readdirSync,
  writeFileSync,
  copyFileSync,
} = require("fs")
let { appendFileSync } = require("fs-extra")

//strip dom

let libs = readdirSync("./src").filter(
  p => !p.startsWith("index.ts")
)
// .filter(
//   p => p.startsWith("axios") || p.startsWith("chalk")
// )

let inlinedLibraries = libs
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
    ...libs.map(file => {
      return {
        noCheck: true,
        filePath: `./src/${file}`,

        outFile: `./types/${file.replace(".ts", ".d.ts")}`,
        output: {
          // inlineDeclareGlobals: true,
          inlineDeclareExternals: true,
          sortNodes: true,
          noBanner: true,
        },
        libraries: {
          inlinedLibraries: [file.replace(".ts", "")],
        },
      }
    }),
    {
      noCheck: true,
      filePath: `./src/index.ts`,

      outFile: `./types/index.d.ts`,
      output: {
        inlineDeclareGlobals: true,
        inlineDeclareExternals: false,
        exportReferencedTypes: false,
        sortNodes: true,
        noBanner: true,
      },
      libraries: {
        importedLibraries: [],
      },
    },
  ],
}

// copyFileSync(`./src/index.ts`, `./types/index.d.ts`)

module.exports = config
