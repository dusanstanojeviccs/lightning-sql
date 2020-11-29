import Lexer from './dbms/lexer';

export function tokenize(query) {
	let lexer = new Lexer(query);
	
	return lexer.readAllTokens();
}