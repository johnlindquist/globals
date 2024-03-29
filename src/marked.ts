import { marked as _marked } from "marked"

export let marked = (global.marked = _marked)
export let md = (global.md = (markdown: string, containerClasses: string = `p-5 prose dark:prose-dark`) => {
  let html = _marked.parse(markdown)
  if (containerClasses) {
    return `<div class="${containerClasses}">${html}</div>`
  }

  return html
})
