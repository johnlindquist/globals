import nodeFetch from "node-fetch"

export let fetch = (global.fetch = nodeFetch)
