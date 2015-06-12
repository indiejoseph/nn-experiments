import * as util from '../word_representation/lib/util';
import 'should';


describe('util', () => {

	describe('tokenizer', function() {

		it('should tokenize a sentence', () => {
			let s = 'I\'m feel good, Professor, 你好, Haven\'t';
			let tokens = util.tokenize(s);
			tokens.length.should.equal(7);
		});

		it('should tokenize a CJK punctuations', () => {
			let s = '、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟';
			let tokens = util.tokenize(s);
			tokens.length.should.equal(31);
		});

		it('should convert simplified chinese to traditional chinese', () => {
			let s = '愛爱';
			let tokens = util.tokenize(s);
			tokens[0].should.equal(tokens[1]);
			tokens.length.should.equal(2);
		});
	});

});
