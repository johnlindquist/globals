import crypto from "crypto"

export let uuid = (global.uuid = crypto.randomUUID)
