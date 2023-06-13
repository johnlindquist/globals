import { rollup } from "rollup"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
import ignore from "rollup-plugin-ignore"
import { visualizer } from "rollup-plugin-visualizer"

let bundle = await rollup({
  input: "./src/index.ts",
  treeshake: true,
  inlineDynamicImports: true,

  plugins: [
    typescript(),
    resolve({
      preferBuiltins: true,
      exportConditions: ["node"], // add node option here,
      preferBuiltins: false,
    }),
    ignore(["electron"]),
    commonjs(),
    json(),
    terser({
      ecma: 2020,
      compress: {
        ecma: true,
      },
    }),
    visualizer({
      open: true,
      filename: "./dist/stats.html",
    }),
  ],
})

await bundle.write({
  file: "./dist/index.js",
  format: "esm",
  compact: true,
})

await bundle.close()

// A sad, sad hack :/ Maybe don't need it?
// await replace.replaceInFile({
//   files: [`./dist/index.js`, `./dist/index.cjs`],
//   from: `glob_1.Glob;`,
//   to: ``,
// })
