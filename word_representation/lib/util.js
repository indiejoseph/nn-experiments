import { XRegExp } from 'xregexp';
import tokenizer from './tokenizer';
import { EventEmitter } from 'events';

// tokenizer.rule('punctuation', XRegExp("\\p{P}+"));
tokenizer.rule('comma', /,/);

export function tokenize (str) {
	let tokens = tokenizer.tokenize(str);
	return tokens;
}
