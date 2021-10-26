import child_process from "child_process"

export let spawn = (global.spawn = child_process.spawn)
export let spawnSync = (global.spawnSync = child_process.spawnSync)
export let fork = (global.fork = child_process.fork)
