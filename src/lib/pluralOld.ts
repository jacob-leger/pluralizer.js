/**
 * const numberOfCats = 3
 * const myPluralizedString = plural`${['s']}I have ${numberOfCats} cat${_FP}!`
 *
 * console.log(myPluralizedString) // "I have 3 cats!"
 * ```
 *
 * @format
 * @example ```typescript import { plural, _FP } from 'pluralizer.js'
 */

import Pluralizer from '../types';
import pluralize from '../helpers/pluralize';

const pluralOld = (
	strings: TemplateStringsArray,
	pluralizer: (string | Pluralizer)[],
	...values: any[]
) => values.unshift('') && pluralize(strings, values, pluralizer);

export default pluralOld;
