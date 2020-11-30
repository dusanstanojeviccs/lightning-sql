import Token from './token';
import TokenType from './token-type';
import StringReader from '../utils/string-reader';

const syntaxError = (position) => {
	throw new SyntaxError("Error on char " + position); 
}

const isLetter = (c) => {
	return c.toUpperCase() != c.toLowerCase();
}

export default class Lexer {
	constructor(query) {
		this.query = query;
		this.input = new StringReader(query);
		this.value = "";
		this.tokensUnread = [];
		this.line = 1;
	}

	ungetToken(token) {
		this.tokensUnread.push(token);
	}

	getStringToken() {
		// TODO: implement
	}
	getIdOrKeywordToken() {
		// TODO: implement
	}
	getNumberToken() {
		// TODO: implement
	}

	getToken() {
		if (this.tokensUnread.length) {
			return this.tokensUnread.pop();
		}
		
		let read = this.input.getChar();
		while (read == "" || read == "\n") {
			if (read == "\n") {
				this.line++;
			}
			read = this.input.getChar();
		}

		if (read == this.input.EOF) {
			return new Token(this.line, TokenType.EOF, "");
		}
		this.value = "";
		
		let nextChar;

		switch(read) {
			case "=":
				return new Token(this.line, TokenType.EQ, "=");
				break;
			case "<":
				nextChar = this.input.getChar();
				if (nextChar == "=") {
					return new Token(this.line, TokenType.LTEQ, "<=");
				} if (nextChar == ">") {
					return new Token(this.line, TokenType.NEQ, "<>");
				} else {
					this.input.ungetChar();
				}
				return new Token(this.line, TokenType.LT, "<");
				break;
			case ">":
				nextChar = this.input.getChar();
				if (nextChar == "=") {
					return new Token(this.line, TokenType.GTEQ, ">=");
				} else {
					this.input.ungetChar();
				}
				return new Token(this.line, TokenType.GT, ">");
				break;
			case "(":
				return new Token(this.line, TokenType.LBRACE, ">");
				break;
			case ")":
				return new Token(this.line, TokenType.RBRACE, ">");
				break;
			case ";":
				return new Token(this.line, TokenType.SEMICOLON, ">");
				break;
			case ",":
				return new Token(this.line, TokenType.COMMA, ">");
				break;
			case ".":
				return new Token(this.line, TokenType.PERIOD, ">");
				break;
			case "*":
				return new Token(this.line, TokenType.STAR, ">");
				break;
			case "!":
				nextChar = this.input.getChar();
				if (nextChar == "=") {
					return new Token(this.line, TokenType.NEQ, "!=");
				}
				
				syntaxError(this.input.getPosition());
				break;
			default:
				if (read == '"' || read == "'") { // it's a string
					this.input.ungetChar();
					return this.getStringToken();
				} else if (read == '`' || isLetter(read)) { // it's an id
					this.input.ungetChar();
					return this.getIdOrKeywordToken();
				} else if (isDigit(read)) {
					this.input.ungetChar();
					return this.getNumberToken();
				}
				syntaxError(this.input.getPosition());
		}
	}

	readAllTokens() {
		let tokens = [];

		let token;
		do {
			token = this.getToken();
			tokens.push(token);
		} while (token.type != TokenType.EOF);

		return tokens;
	}
}