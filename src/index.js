import StringReader from './utils/string-reader';
import Lexer from './lang/lexer';
import RULES from './lang/rules';
import RuleLang from './lang/rule-lang';
import Parser from './lang/parser';


export {Lexer};
export {Parser};

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

export function testLexer() {
	console.log("Test 1");
	console.log(new Lexer("SELECT * FROM demo_table").readAllTokens());

	console.log("Test 2");
	console.log(new Lexer("UPDATE demo_table SET names = 'demo name' WHERE id = 20").readAllTokens());

	console.log("Test 3");
	console.log(new Lexer("CREATE TABLE demo_table (id int AUTO_INCREMENT);").readAllTokens());

	console.log("Test 4");
	console.log(new Lexer('UPDATE demo_table SET name = "harry"').readAllTokens());
}