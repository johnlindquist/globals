/// <reference types="decompress" />
/// <reference types="got" />

declare function download(url: string, destination?: string, options?: download.DownloadOptions): Promise<Buffer> & GotEmitter & Duplex;
declare function download(url: string, options?: download.DownloadOptions): Promise<Buffer> & GotEmitter & Duplex;
export declare namespace download {
	interface DownloadOptions extends DecompressOptions, GotOptions<string | null> {
		/**
		 * If set to `true`, try extracting the file using
		 * [`decompress`](https://github.com/kevva/decompress).
		 *
		 * @default false
		 */
		extract?: boolean | undefined;
		/**
		 * Name of the saved file.
		 */
		filename?: string | undefined;
	}
}
export declare type download = typeof download;
export interface DownloadOptions extends DecompressOptions, GotOptions<string | null> {
	/**
	 * If set to `true`, try extracting the file using
	 * [`decompress`](https://github.com/kevva/decompress).
	 *
	 * @default false
	 */
	extract?: boolean | undefined;
	/**
	 * Name of the saved file.
	 */
	filename?: string | undefined;
}

export {};
