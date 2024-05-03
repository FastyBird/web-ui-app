import { isString } from './types';

class FastyBirdUiError extends Error {
	constructor(m: string) {
		super(m);
		this.name = 'FastyBirdUiError';
	}
}

export function throwError(scope: string, m: string): never {
	throw new FastyBirdUiError(`[${scope}] ${m}`);
}

export function debugWarn(err: Error): void;
export function debugWarn(scope: string, message: string): void;
export function debugWarn(scope: string | Error, message?: string): void {
	if (process.env.NODE_ENV !== 'production') {
		const error: Error | string = isString(scope) ? new FastyBirdUiError(`[${scope}] ${message}`) : scope;
		console.warn(error);
	}
}
