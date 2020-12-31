import StringReader from './utils/string-reader';
import Lexer from './lang/lexer';
import RULES from './lang/rules';
import RuleLang from './lang/rule-lang';
// import Parser from './lang/parser';


export {Lexer};
export {RULES};

export function testStringReader(str) {
	let sr = new StringReader(str);

	console.log(sr.getChar());
	sr.ungetChar();
	console.log(sr.getChar());
	sr.ungetChar();
	console.log(sr.getChar());
	console.log(sr.getChar());
	console.log(sr.getChar());
	

	console.log("DONE");
}

export function testLexer(str) {
	let lexer = new Lexer(str);

	console.log(lexer.getToken());

	let token = lexer.getToken();
	console.log(token);

	lexer.ungetToken(token);

	console.log(lexer.getToken());
	console.log(lexer.getToken());
	console.log(lexer.getToken());
	console.log(lexer.getToken());
	console.log(lexer.getToken());
	console.log(lexer.getToken());
}