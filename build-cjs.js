import esbuild from "esbuild"

esbuild.buildSync({
  entryPoints: [`./src/index.ts`],
  treeShaking: true,
  platform: "node",
  bundle: true,
  format: "cjs",
  outfile: "./dist/index.cjs",
  minify: true,
  tsconfig: "./tsconfig.json",
  external: ["electron"],
  target: ["node16.10"],
})
