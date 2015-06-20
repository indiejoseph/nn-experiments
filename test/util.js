import * as util from '../word_representation/lib/util';
import 'should';


describe('util', () => {

	describe('tokenizer', () => {

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
			let tokens = util.tokenize(s, true);
			tokens[0].should.equal(tokens[1]);
			tokens.length.should.equal(2);
		});

	});

	describe('nGrammer', () => {

		it('should convert sequence to tri-grams', () => {
			let s = 'a b c d e f g h i j k l';
			let ngrams = util.nGrammer(s);
			ngrams.length.should.equal(12);
			ngrams[0].length.should.equal(3);
		});

		it('should convert sequence to 5-grams', () => {
			let s = 'a b c d e f g h i j k l';
			let ngrams = util.nGrammer(s, 5);
			ngrams.length.should.equal(10);
			ngrams[0].length.should.equal(5);
		});

	});

});
