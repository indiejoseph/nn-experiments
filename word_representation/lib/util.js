export function tokenize (str) {
	let splitter = [
		'([\u2000-\u206e])', // General punctuations
		'([\u3000-\u303F])', //  CJK punctuations
		'([a-zA-Z\p{L}\'\-]+)', // English word
		'([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d])' // CJK characters
	].join('|');
	let regex = new RegExp(splitter, 'g');
	let tokens = str.match(regex);
	return tokens;
}
