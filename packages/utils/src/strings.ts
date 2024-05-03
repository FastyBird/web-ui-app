import { capitalize as toCapitalize } from 'vue';

export { camelize } from 'vue';
export {
	hyphenate,
	hyphenate as kebabCase, // alias
} from '@vue/shared';

/**
 * fork from {@link https://github.com/sindresorhus/escape-string-regexp}
 */
export const escapeStringRegexp = (string = ''): string => string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

// NOTE: improve capitalize types. Restore previous code after the [PR](https://github.com/vuejs/core/pull/6212) merge
export const capitalize = <T extends string>(str: T): Capitalize<T> => toCapitalize(str) as Capitalize<T>;
