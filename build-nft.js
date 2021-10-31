import { nodeFileTrace } from "@vercel/nft"
const files = ["./src/index.ts"]
const { fileList } = await nodeFileTrace(files)

console.log(fileList)
