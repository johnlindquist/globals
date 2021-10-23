//axios
declare var get: import("./axios").AxiosInstance["get"]
declare var put: import("./axios").AxiosInstance["put"]
declare var post: import("./axios").AxiosInstance["post"]
declare var patch: import("./axios").AxiosInstance["patch"]
//chalk
declare var chalk: typeof import("./chalk")
//child_process
declare var spawn: typeof import("child_process").spawn
declare var spawnSync: typeof import("child_process").spawnSync
declare var fork: typeof import("child_process").fork
declare var degit: typeof import("./degit")
//download
declare var download: typeof import("./download")
//fs-extra
declare var emptyDir: typeof import("./fs-extra").emptyDir
declare var ensureFile: typeof import("./fs-extra").ensureFile
declare var ensureDir: typeof import("./fs-extra").ensureDir
declare var ensureLink: typeof import("./fs-extra").ensureLink
declare var ensureSymlink: typeof import("./fs-extra").ensureSymlink
declare var mkdirp: typeof import("./fs-extra").mkdirp
declare var mkdirs: typeof import("./fs-extra").mkdirs
declare var outputFile: typeof import("./fs-extra").outputFile
declare var outputJson: typeof import("./fs-extra").outputJson
declare var pathExists: typeof import("./fs-extra").pathExists
declare var readJson: typeof import("./fs-extra").readJson
declare var remove: typeof import("./fs-extra").remove
declare var writeJson: typeof import("./fs-extra").writeJson
//fs/promises
declare var readFile: typeof import("fs/promises").readFile
declare var writeFile: typeof import("fs/promises").writeFile
declare var appendFile: typeof import("fs/promises").appendFile
declare var readdir: typeof import("fs/promises").readdir
declare var copyFile: typeof import("fs/promises").copyFile
//fs
declare var createReadStream: typeof import("fs").createReadStream
declare var createWriteStream: typeof import("fs").createWriteStream
//handlebars
declare var compile: typeof import("./handlebars").compile
//lodash
declare var _: import("./lodash").LoDashStatic
//marked
declare var md: typeof import("./marked").parse
//nonoid
declare var uuid: typeof import("./nanoid").nanoid
//node-fetch
declare var fetch: typeof import("./node-fetch")
//replace-in-file
declare var replace: typeof import("./replace-in-file").replaceInFile
//zx
declare var $: import("./zx").$
