import * as util from '../word_representation/lib/util';
import 'should';

describe('util', function () {

	describe('tokenizer', function() {

		it('should tokenize a sentence', function () {
			let s = 'I\'m feel good, Professor, 你好, Haven\'t';
			let tokens = util.tokenize(s);

			console.log(tokens);
		});

	});

});
