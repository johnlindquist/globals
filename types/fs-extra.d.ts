declare function emptyDir(path: string): Promise<void>;
declare function emptyDir(path: string, callback: (err: Error) => void): void;
declare function ensureDir(path: string, callback?: (err: Error) => void): void;
declare function ensureDir(path: string, options?: EnsureOptions | number): Promise<void>;
declare function ensureDir(path: string, options?: EnsureOptions | number, callback?: (err: Error) => void): void;
declare function ensureFile(path: string): Promise<void>;
declare function ensureFile(path: string, callback: (err: Error) => void): void;
declare function ensureLink(src: string, dest: string): Promise<void>;
declare function ensureLink(src: string, dest: string, callback: (err: Error) => void): void;
declare function ensureSymlink(src: string, dest: string, callback: (err: Error) => void): void;
declare function ensureSymlink(src: string, dest: string, type: SymlinkType, callback: (err: Error) => void): void;
declare function ensureSymlink(src: string, dest: string, type?: SymlinkType): Promise<void>;
declare function mkdirp(dir: string): Promise<void>;
declare function mkdirp(dir: string, callback: (err: Error) => void): void;
declare function mkdirs(dir: string): Promise<void>;
declare function mkdirs(dir: string, callback: (err: Error) => void): void;
declare function outputFile(file: string, data: any, options: WriteFileOptions | string, callback: (err: Error) => void): void;
declare function outputFile(file: string, data: any, options?: WriteFileOptions | BufferEncoding | string): Promise<void>;
declare function outputFile(file: string, data: any, callback: (err: Error) => void): void;
declare function outputJson(file: string, data: any, options: WriteOptions | BufferEncoding | string, callback: (err: Error) => void): void;
declare function outputJson(file: string, data: any, callback: (err: Error) => void): void;
declare function outputJson(file: string, data: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
declare function pathExists(path: string): Promise<boolean>;
declare function pathExists(path: string, callback: (err: Error, exists: boolean) => void): void;
declare function readJson(file: string, options: ReadOptions | BufferEncoding | string, callback: (err: Error, jsonObject: any) => void): void;
declare function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
declare function readJson(file: string, options?: ReadOptions | BufferEncoding | string): Promise<any>;
declare function remove(dir: string, callback: (err: Error) => void): void;
declare function remove(dir: string, callback?: (err: Error) => void): Promise<void>;
declare function writeJson(file: string, object: any, options: WriteOptions | BufferEncoding | string, callback: (err: Error) => void): void;
declare function writeJson(file: string, object: any, callback: (err: Error) => void): void;
declare function writeJson(file: string, object: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
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
export interface EnsureOptions {
	mode?: number | undefined;
}
export interface ReadOptions {
	throws?: boolean | undefined;
	fs?: object | undefined;
	reviver?: any;
	encoding?: BufferEncoding | string | undefined;
	flag?: string | undefined;
}
export interface WriteFileOptions {
	encoding?: BufferEncoding | string | null | undefined;
	flag?: string | undefined;
	mode?: number | undefined;
}
export interface WriteOptions extends WriteFileOptions {
	fs?: object | undefined;
	replacer?: any;
	spaces?: number | string | undefined;
	EOL?: string | undefined;
}
export type SymlinkType = "dir" | "file" | "junction";

export {};
