import _marked from "marked"

export let marked = (global.marked = _marked)
export let md = (global.md = marked.parse)
