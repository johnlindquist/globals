/// <reference types="node" />

declare class BodyMixin {
	constructor(body?: BodyInit, options?: {
		size?: number;
	});
	readonly body: NodeJS.ReadableStream | null;
	readonly bodyUsed: boolean;
	readonly size: number;
	buffer(): Promise<Buffer>;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	json(): Promise<unknown>;
	text(): Promise<string>;
}
declare class Headers {
	constructor(init?: HeadersInit);
	append(name: string, value: string): void;
	delete(name: string): void;
	get(name: string): string | null;
	has(name: string): boolean;
	set(name: string, value: string): void;
	forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
	[Symbol.iterator](): IterableIterator<[
		string,
		string
	]>;
	/**
	 * Returns an iterator allowing to go through all key/value pairs contained in this object.
	 */
	entries(): IterableIterator<[
		string,
		string
	]>;
	/**
	 * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
	 */
	keys(): IterableIterator<string>;
	/**
	 * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
	 */
	values(): IterableIterator<string>;
	/** Node-fetch extension */
	raw(): Record<string, string[]>;
}
declare class Request extends BodyMixin {
	constructor(input: RequestInfo, init?: RequestInit);
	/**
	 * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
	 */
	readonly headers: Headers;
	/**
	 * Returns request's HTTP method, which is "GET" by default.
	 */
	readonly method: string;
	/**
	 * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
	 */
	readonly redirect: RequestRedirect;
	/**
	 * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
	 */
	readonly signal: AbortSignal;
	/**
	 * Returns the URL of request as a string.
	 */
	readonly url: string;
	clone(): Request;
}
declare class Response extends BodyMixin {
	constructor(body?: BodyInit | null, init?: ResponseInit);
	readonly headers: Headers;
	readonly ok: boolean;
	readonly redirected: boolean;
	readonly status: number;
	readonly statusText: string;
	readonly type: ResponseType;
	readonly url: string;
	clone(): Response;
	static error(): Response;
}
export default function fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
export default nodeFetch;
export interface RequestInit {
	/**
	 * A BodyInit object or null to set request's body.
	 */
	body?: BodyInit | null;
	/**
	 * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
	 */
	headers?: HeadersInit;
	/**
	 * A string to set request's method.
	 */
	method?: string;
	/**
	 * A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
	 */
	redirect?: RequestRedirect;
	/**
	 * An AbortSignal to set request's signal.
	 */
	signal?: AbortSignal | null;
	// Node-fetch extensions to the whatwg/fetch spec
	agent?: Agent | ((parsedUrl) => Agent);
	compress?: boolean;
	counter?: number;
	follow?: number;
	hostname?: string;
	port?: number;
	protocol?: string;
	size?: number;
	highWaterMark?: number;
	insecureHTTPParser?: boolean;
}
export interface ResponseInit {
	headers?: HeadersInit;
	status?: number;
	statusText?: string;
}
export type AbortSignal = {
	readonly aborted: boolean;
	addEventListener: (type: "abort", listener: (this: AbortSignal) => void) => void;
	removeEventListener: (type: "abort", listener: (this: AbortSignal) => void) => void;
};
export type BodyInit = Blob | Buffer | NodeJS.ReadableStream | string;
export type HeadersInit = Headers | Record<string, string> | Iterable<readonly [
	string,
	string
]> | Iterable<Iterable<string>>;
export type RequestInfo = string | Request;
export type RequestRedirect = "error" | "follow" | "manual";
export type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

export {};
