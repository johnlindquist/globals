declare global {
  var get: import("./axios").AxiosInstance["get"]
  var put: import("./axios").AxiosInstance["put"]
  var post: import("./axios").AxiosInstance["post"]
  var patch: import("./axios").AxiosInstance["patch"]
  namespace NodeJS {
    interface Global {
      get: import("./axios").AxiosInstance["get"]
      put: import("./axios").AxiosInstance["put"]
      post: import("./axios").AxiosInstance["post"]
      patch: import("./axios").AxiosInstance["patch"]
    }
  }
}

declare global {
  var chalk: typeof import("./chalk")
  namespace NodeJS {
    interface Global {
      chalk: typeof import("./chalk")
    }
  }

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
}

declare global {
  var degit: typeof import("./degit")
  namespace NodeJS {
    interface Global {
      degit: typeof import("./degit")
    }
  }
}
declare global {
  var download: typeof import("./download")
  namespace NodeJS {
    interface Global {
      download: typeof import("./download")
    }
  }
}
declare global {
  var emptyDir: typeof import("./fs-extra").emptyDir
  var ensureFile: typeof import("./fs-extra").ensureFile
  var ensureDir: typeof import("./fs-extra").ensureDir
  var ensureLink: typeof import("./fs-extra").ensureLink
  var ensureSymlink: typeof import("./fs-extra").ensureSymlink
  var mkdirp: typeof import("./fs-extra").mkdirp
  var mkdirs: typeof import("./fs-extra").mkdirs
  var outputFile: typeof import("./fs-extra").outputFile
  var outputJson: typeof import("./fs-extra").outputJson
  var pathExists: typeof import("./fs-extra").pathExists
  var readJson: typeof import("./fs-extra").readJson
  var remove: typeof import("./fs-extra").remove
  var writeJson: typeof import("./fs-extra").writeJson
  namespace NodeJS {
    interface Global {
      emptyDir: typeof import("./fs-extra").emptyDir
      ensureFile: typeof import("./fs-extra").ensureFile
      ensureDir: typeof import("./fs-extra").ensureDir
      ensureLink: typeof import("./fs-extra").ensureLink
      ensureSymlink: typeof import("./fs-extra").ensureSymlink
      mkdirp: typeof import("./fs-extra").mkdirp
      mkdirs: typeof import("./fs-extra").mkdirs
      outputFile: typeof import("./fs-extra").outputFile
      outputJson: typeof import("./fs-extra").outputJson
      pathExists: typeof import("./fs-extra").pathExists
      readJson: typeof import("./fs-extra").readJson
      remove: typeof import("./fs-extra").remove
      writeJson: typeof import("./fs-extra").writeJson
    }
  }
}
declare global {
  var readFile: typeof import("fs/promises").readFile
  var writeFile: typeof import("fs/promises").writeFile
  var appendFile: typeof import("fs/promises").appendFile
  var readdir: typeof import("fs/promises").readdir
  var copyFile: typeof import("fs/promises").copyFile

  var createReadStream: typeof import("fs").createReadStream
  var createWriteStream: typeof import("fs").createWriteStream

  namespace NodeJS {
    interface Global {
      readFile: typeof import("fs/promises").readFile
      writeFile: typeof import("fs/promises").writeFile
      appendFile: typeof import("fs/promises").appendFile
      readdir: typeof import("fs/promises").readdir
      copyFile: typeof import("fs/promises").copyFile
      createReadStream: typeof import("fs").createReadStream
      createWriteStream: typeof import("fs").createWriteStream
    }
  }
}
declare global {
  var compile: typeof import("./handlebars").compile
  namespace NodeJS {
    interface Global {
      compile: typeof import("./handlebars").compile
    }
  }
}

declare global {
  var _: import("./lodash").LoDashStatic
  namespace NodeJS {
    interface Global {
      _: import("./lodash").LoDashStatic
    }
  }
}
declare global {
  var md: typeof import("./marked").parse
  namespace NodeJS {
    interface Global {
      md: typeof import("./marked").marked.parse
    }
  }
}

declare global {
  var uuid: import("./nanoid").nanoid
  namespace NodeJS {
    interface Global {
      uuid: import("./nanoid").nanoid
    }
  }
}
declare global {
  var fetch: typeof import("./node-fetch")
  namespace NodeJS {
    interface Global {
      fetch: typeof import("./node-fetch")
    }
  }
}

declare global {
  var replace: typeof import("./replace-in-file").replaceInFile
  namespace NodeJS {
    interface Global {
      replace: typeof import("./replace-in-file").replaceInFile
    }
  }
}
declare global {
  var $: import("./zx").$
  namespace NodeJS {
    interface Global {
      $: import("./zx").$
    }
  }
}
