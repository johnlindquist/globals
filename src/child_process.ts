import child_process from "child_process"

global.spawn = child_process.spawn
global.spawnSync = child_process.spawnSync
global.fork = child_process.fork

declare global {
  var spawn: typeof import("child_process").spawn
  var spawnSync: typeof import("child_process").spawnSync
  var fork: typeof import("child_process").fork

  namespace NodeJS {
    interface Global {
      spawn: typeof import("child_process").spawn
      spawnSync: typeof import("child_process").spawnSync
      fork: typeof import("child_process").fork
    }
  }
}

// export type child_process = typeof child_process
