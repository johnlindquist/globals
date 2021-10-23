import { readdir } from "fs/promises"
import replaceInFile from "replace-in-file"

let srcDirFiles = await readdir("./src")
let libs = srcDirFiles.filter(
  file => !file.startsWith("index.ts")
)

let template = libs
  .map(file => {
    return `import "./${file.replace(".ts", "")}"`
  })
  .join("\n")

// await replaceInFile({
//   files: [`./types/index.d.ts`],
//   from: /^import.*$\n/gm,
//   to: ``,
// })

// await replaceInFile({
//   files: [`./types/index.d.ts`],
//   from: /^/g,
//   to: template,
// })

await replaceInFile({
  files: [`./types/index.d.ts`],
  from: /import\("(?!(child_process|fs"|fs\/))/g,
  to: `import("./`,
})

// await replaceInFile({
//   files: [`./types/index.d.ts`],
//   from: /^\/\/\/.*$\n/gm,
//   to: ``,
// })

await replaceInFile({
  files: [`./types/index.d.ts`],
  from: /typeof import\("\.\/(.*)"(?!.*\.(default|replace))\)/gm,
  to: `import("./$1").$1`,
})

await replaceInFile({
  files: [`./types/index.d.ts`],
  from: /\.fs-extra/gm,
  to: `.fsExtra`,
})

await replaceInFile({
  files: [`./types/index.d.ts`],
  from: /\.node-fetch/gm,
  to: `.nodeFetch`,
})

await replaceInFile({
  files: [`./types/index.d.ts`],
  from: /\.replace-in-file/gm,
  to: `.replaceInFile`,
})
