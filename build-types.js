import fs from "fs-extra"
import path from "path"
import replace from "replace-in-file"

let files = await fs.readdir(`./src`)

let libs = files.filter(f => !f.startsWith("index")).map(f => f.replace(/\.ts$/, ""))

for (let lib of libs) {
  let indexTypesPath = path.resolve(`./node_modules/${lib}/index.d.ts`)
  let pkgPath = path.resolve(`./node_modules/${lib}/package.json`)
  let atTypesPath = path.resolve(`./node_modules/@types/${lib}/index.d.ts`)
  let copyPath = ``
  if (await fs.pathExists(indexTypesPath)) {
    // console.log(lib, indexTypesPath)
    copyPath = indexTypesPath
  }
  if (await fs.pathExists(pkgPath)) {
    let pkg = await fs.readJson(pkgPath)
    if (pkg?.types) {
      //   console.log(lib, pkg?.types)
      copyPath = path.resolve(`node_modules`, lib, pkg.types)
    }
  }

  if (await fs.pathExists(atTypesPath)) {
    // console.log(lib, atTypesPath)
    copyPath = atTypesPath
  }

  console.log(copyPath)
  if (copyPath) {
    await fs.copyFile(copyPath, path.resolve(`./types/${lib}.d.ts`))
  }

  //   let pkg = await readJsonExists(pkgPath)
  //   console.log(lib, pkg?.types)
}

await replace({
  files: [`./types/handlebars.d.ts`],
  from: /declare module.*\n.*\n.*\n.*\n.*\n.*\n.*/gm,
  to: `export = Handlebars`,
})
