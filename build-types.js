import fs from "fs-extra"
import path from "path"
import replace from "replace-in-file"

let files = await fs.readdir(`./src`)

let libs = files.filter(f => !f.startsWith("index")).map(f => f.replace(/\.ts$/, ""))
libs.push("got")
libs.push("decompress")

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
    let libPath = path.resolve(`./types/${lib}`)
    let typePath = path.resolve(libPath, path.basename(copyPath))
    let typeDir = path.dirname(copyPath)

    await fs.ensureDir(libPath)
    await fs.copyFile(copyPath, typePath)

    let contents = await fs.readFile(copyPath, "utf-8")

    let refPaths = contents.match(/(?<=reference path=")(.*)(?=")/g)

    if (refPaths) {
      for (let rp of refPaths) {
        let refSource = path.resolve(typeDir, rp)
        let refDest = path.resolve(libPath, rp)

        await fs.ensureDir(path.dirname(refDest))
        await fs.copyFile(refSource, refDest)
      }
    }
  }

  //   let pkg = await readJsonExists(pkgPath)
  //   console.log(lib, pkg?.types)
}

await replace({
  files: [`./types/handlebars/index.d.ts`],
  from: /declare module.*\n.*\n.*\n.*\n.*\n.*\n.*/gm,
  to: `export = Handlebars`,
})

await replace({
  files: [`./types/replace-in-file/index.d.ts`],
  from: [/declare module.*/g, /^}/m],
  to: ``,
})

await replace({
  files: [`./types/download/index.d.ts`],
  from: [`"got"`, `"decompress"`],
  to: [`"../got"`, `"../decompress"`],
})
