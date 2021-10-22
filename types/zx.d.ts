declare class ProcessOutput {
	readonly exitCode: number;
	readonly stdout: string;
	readonly stderr: string;
	toString(): string;
}
declare const $: $;
export declare namespace zx {
	type $ = typeof $;
}
export default $;
export interface ProcessPromise<T> extends Promise<T> {
	child: ChildProcess;
	readonly stdin: Writable;
	readonly stdout: Readable;
	readonly stderr: Readable;
	readonly exitCode: Promise<number>;
	pipe(dest: ProcessPromise<ProcessOutput> | Writable): ProcessPromise<ProcessOutput>;
	kill(signal?: string | number): Promise<void>;
}
interface $ {
	(pieces: TemplateStringsArray, ...args: any[]): ProcessPromise<ProcessOutput>;
	verbose: boolean;
	shell: string;
	cwd: string;
	prefix: string;
	quote: (input: string) => string;
}

export {};
