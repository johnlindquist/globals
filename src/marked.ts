import _marked from "marked"

export let marked = (global.marked = _marked)
export let md = (global.md = (markdown: string, containerClasses: string = `p-5`) => {
  let html = _marked.parse(markdown)
  if (containerClasses) {
    return `<div class="${containerClasses}">${html}</div>`
  }

  return html
})
