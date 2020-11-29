import Token from './token';
import TokenType from './token-type';

export default class Lexer {
	constructor(query) {
		this.query = query;
	}

	readNextToken() {

	}

	readAllTokens() {
		let tokens = [];

		let token;
		do {
			token = this.readNextToken();
			tokens.push(token);
		} while (token.type != TokenType.EOF && token.type != TokenType.SYNTAX_ERROR);

		return tokens;
	}
}