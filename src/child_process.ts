import child_process from "child_process"

global.spawn = child_process.spawn
global.spawnSync = child_process.spawnSync
global.fork = child_process.fork
