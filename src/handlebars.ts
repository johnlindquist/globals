import { compile as _compile } from "handlebars"

export let compile = (global.compile = _compile)
