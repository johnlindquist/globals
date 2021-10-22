
declare global {
	var $: import("./zx").zx.$;
	namespace NodeJS {
		interface Global {
			$: import("./zx").zx.$;
		}
	}
}
declare global {
	var _: import("./lodash").LoDashStatic;
	namespace NodeJS {
		interface Global {
			_: import("./lodash").LoDashStatic;
		}
	}
}
declare global {
	var chalk: import("./chalk").chalk;
	namespace NodeJS {
		interface Global {
			chalk: import("./chalk").chalk;
		}
	}
}
declare global {
	var compile: import("./handlebars").handlebars.compile;
	namespace NodeJS {
		interface Global {
			compile: import("./handlebars").handlebars.compile;
		}
	}
}
declare global {
	var degit: import("./degit").degit;
	namespace NodeJS {
		interface Global {
			degit: import("./degit").degit;
		}
	}
}
declare global {
	var download: import("./download").download;
	namespace NodeJS {
		interface Global {
			download: import("./download").download;
		}
	}
}
declare global {
	var emptyDir: import("./fs-extra").fsExtra.emptyDir;
	var ensureFile: import("./fs-extra").fsExtra.ensureFile;
	var ensureDir: import("./fs-extra").fsExtra.ensureDir;
	var ensureLink: import("./fs-extra").fsExtra.ensureLink;
	var ensureSymlink: import("./fs-extra").fsExtra.ensureSymlink;
	var mkdirp: import("./fs-extra").fsExtra.mkdirp;
	var mkdirs: import("./fs-extra").fsExtra.mkdirs;
	var outputFile: import("./fs-extra").fsExtra.outputFile;
	var outputJson: import("./fs-extra").fsExtra.outputJson;
	var pathExists: import("./fs-extra").fsExtra.pathExists;
	var readJson: import("./fs-extra").fsExtra.readJson;
	var remove: import("./fs-extra").fsExtra.remove;
	var writeJson: import("./fs-extra").fsExtra.writeJson;
	namespace NodeJS {
		interface Global {
			emptyDir: import("./fs-extra").fsExtra.emptyDir;
			ensureFile: import("./fs-extra").fsExtra.ensureFile;
			ensureDir: import("./fs-extra").fsExtra.ensureDir;
			ensureLink: import("./fs-extra").fsExtra.ensureLink;
			ensureSymlink: import("./fs-extra").fsExtra.ensureSymlink;
			mkdirp: import("./fs-extra").fsExtra.mkdirp;
			mkdirs: import("./fs-extra").fsExtra.mkdirs;
			outputFile: import("./fs-extra").fsExtra.outputFile;
			outputJson: import("./fs-extra").fsExtra.outputJson;
			pathExists: import("./fs-extra").fsExtra.pathExists;
			readJson: import("./fs-extra").fsExtra.readJson;
			remove: import("./fs-extra").fsExtra.remove;
			writeJson: import("./fs-extra").fsExtra.writeJson;
		}
	}
}
declare global {
	var fetch: typeof import("./node-fetch").default;
	namespace NodeJS {
		interface Global {
			fetch: typeof import("./node-fetch").default;
		}
	}
}
declare global {
	var get: import("./axios").AxiosInstance["get"];
	var put: import("./axios").AxiosInstance["put"];
	var post: import("./axios").AxiosInstance["post"];
	var patch: import("./axios").AxiosInstance["patch"];
	namespace NodeJS {
		interface Global {
			get: import("./axios").AxiosInstance["get"];
			put: import("./axios").AxiosInstance["put"];
			post: import("./axios").AxiosInstance["post"];
			patch: import("./axios").AxiosInstance["patch"];
		}
	}
}
declare global {
	var md: import("./marked").marked.parse;
	namespace NodeJS {
		interface Global {
			md: import("./marked").marked.parse;
		}
	}
}
declare global {
	var readFile: typeof import("fs/promises").readFile;
	var writeFile: typeof import("fs/promises").writeFile;
	var appendFile: typeof import("fs/promises").appendFile;
	var readdir: typeof import("fs/promises").readdir;
	var copyFile: typeof import("fs/promises").copyFile;
	var createReadStream: typeof import("fs").createReadStream;
	var createWriteStream: typeof import("fs").createWriteStream;
	namespace NodeJS {
		interface Global {
			readFile: typeof import("fs/promises").readFile;
			writeFile: typeof import("fs/promises").writeFile;
			appendFile: typeof import("fs/promises").appendFile;
			readdir: typeof import("fs/promises").readdir;
			copyFile: typeof import("fs/promises").copyFile;
			createReadStream: typeof import("fs").createReadStream;
			createWriteStream: typeof import("fs").createWriteStream;
		}
	}
}
declare global {
	var replace: typeof import("./replace-in-file").replaceInFile;
	namespace NodeJS {
		interface Global {
			replace: typeof import("./replace-in-file").replaceInFile;
		}
	}
}
declare global {
	var spawn: typeof import("child_process").spawn;
	var spawnSync: typeof import("child_process").spawnSync;
	var fork: typeof import("child_process").fork;
	namespace NodeJS {
		interface Global {
			spawn: typeof import("child_process").spawn;
			spawnSync: typeof import("child_process").spawnSync;
			fork: typeof import("child_process").fork;
		}
	}
}
declare global {
	var uuid: import("./nanoid").nanoid.nanoid;
	namespace NodeJS {
		interface Global {
			uuid: import("./nanoid").nanoid.nanoid;
		}
	}
}
export declare namespace fsExtra {
	type emptyDir = typeof emptyDir;
	type ensureFile = typeof ensureFile;
	type ensureDir = typeof ensureDir;
	type ensureLink = typeof ensureLink;
	type ensureSymlink = typeof ensureSymlink;
	type mkdirp = typeof mkdirp;
	type mkdirs = typeof mkdirs;
	type outputFile = typeof outputFile;
	type outputJson = typeof outputJson;
	type pathExists = typeof pathExists;
	type readJson = typeof readJson;
	type remove = typeof remove;
	type writeJson = typeof writeJson;
}
export declare namespace handlebars {
	type compile = typeof compile;
}
export declare namespace marked {
	type parse = typeof parse;
}
export declare namespace nanoid {
	type nanoid = typeof nanoid;
}
export declare namespace zx {
	type $ = typeof $;
}
export declare type axios = typeof axios;
export declare type chalk = typeof chalk;
export declare type degit = typeof degit;
export declare type download = typeof download;
export declare type h = typeof h;
export declare type m = typeof m;

export {};
