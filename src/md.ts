import { marked as _marked } from "marked"
import _markedForms from "marked-forms"

_marked.use(_markedForms())

interface Md {
  (markdown: string, containerClasses?: string): string
}

export let marked = (global.marked = _marked)
export let md: Md = (global.md = (markdown: string, containerClasses: string = `p-5 prose dark:prose-dark`) => {
  let html = _marked.parse(markdown)
  if (containerClasses) {
    return `<div class="${containerClasses}">${html}</div>`
  }

  return html
})
