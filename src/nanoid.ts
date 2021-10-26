import { nanoid } from "nanoid"

export let uuid = (global.uuid = nanoid)
