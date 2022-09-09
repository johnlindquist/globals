import { ProcessPromise } from './core.js';
export { $, Shell, Options, ProcessPromise, ProcessOutput, within, cd, log, LogEntry, } from './core.js';
export { argv, chalk, echo, fetch, fs, glob, globby, os, path, question, sleep, stdin, which, YAML, } from './goods.js';
export { Duration } from './util.js';
/**
 *  @deprecated Use $.nothrow() instead.
 */
export declare function nothrow(promise: ProcessPromise): ProcessPromise;
/**
 * @deprecated Use $.quiet() instead.
 */
export declare function quiet(promise: ProcessPromise): ProcessPromise;
