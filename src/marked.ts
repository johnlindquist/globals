import marked from "marked"

export let md = (global.md = marked.parse)
