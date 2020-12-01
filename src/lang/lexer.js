import Token from './token';
import TokenType from './token-type';
import StringReader from '../utils/string-reader';

const syntaxError = (position) => {
	throw new SyntaxError("Error on char " + position); 
}

const isLetter = (c) => {
	return c.toUpperCase() != c.toLowerCase();
}

const isDigit = (c) => {
	return c == "0" || 
		c == "1" || 
		c == "2" || 
		c == "3" || 
		c == "4" || 
		c == "5" || 
		c == "6" || 
		c == "7" || 
		c == "8" || 
		c == "9";
}


const escapedChars = ["0", "'", "\"", "b", "n", "r", "t", "Z", "\\", "%", "_"];

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

	// escaped sequences
	// \0  An ASCII NUL (X'00') character
	// \'  A single quote (') character
	// \"  A double quote (") character
	// \b  A backspace character
	// \n  A newline (linefeed) character
	// \r  A carriage return character
	// \t  A tab character
	// \Z  ASCII 26 (Control+Z); see note following the table
	// \\  A backslash (\) character
	// \%  A % character
	// \_  A _ character

	getStringToken() {
		let startChar = this.input.getChar();

		if (startChar != "'" && startChar != '"') {
			syntaxError();
		}

		let read;
		while (true) {
			let read = this.input.getChar();
			
			if (read == startChar) {
				break;
			}

			if (read == this.input.EOF) {
				this.input.ungetChar();
				break;
			}
			
			if (read == "\\") { // we're escaping a char
				// the next char is escaped
				let next = this.input.getChar();

				if (escapedChars.indexOf(next) < 0) {
					syntaxError();
				}

				this.value += read;
				this.value += next;
			} else {
				this.value += read;
			}
		}

		return new Token(this.line, TokenType.STRING, this.value);
	}

	// starts with a letter or _ followed by 
	//
	// regex definition (`(letter|_)(letter|_|digit)*`)|((letter|_)(letter|_|digit)*)
	//
	getIdOrKeywordToken() {
		let startChar = this.input.getChar();

		if (startChar != "`") {
			this.input.ungetChar();
		}

		while (true) {
			let read = this.input.getChar();
			
			if (startChar == "`" && read == startChar) {
				break;
			}

			if (read == this.input.EOF) {
				this.input.ungetChar();
				break;
			}

			if (!isLetter(read) && !isDigit(read) && read != "_") {
				this.input.ungetChar();
				break;
			}
			
			this.value += read;
		}
		if (startChar != "`") {
			let keywordPosition = TokenType.KEYWORDS.indexOf(this.value.toUpperCase());
			if (keywordPosition >= 0) {
				const keyWord = TokenType.KEYWORDS[keywordPosition];

				return new Token(this.line, keyWord, keyWord);	
			}
		}

		return new Token(this.line, TokenType.ID, this.value);
	}

	// regex definition (digit(digit)*.digit(digit*))|(digit(digit)*)
	getNumberToken() {
		// we read all before the dot first
		while (true) {
			let read = this.input.getChar();
			
			if (!isDigit(read)) {
				this.input.ungetChar();
				break;
			}
			
			this.value += read;
		}

		let dot = this.input.getChar();

		if (dot != ".") {
			this.input.ungetChar();
			return new Token(this.line, TokenType.NUMBER, this.value);
		}

		this.value += ".";

		while (true) {
			let read = this.input.getChar();
			
			if (!isDigit(read)) {
				this.input.ungetChar();
				break;
			}
			
			this.value += read;
		}

		// dot must be followed by at least one value
		if (this.value.charAt(this.value.length - 1) == ".") {
			syntaxError();
		}

		return new Token(this.line, TokenType.NUMBER, this.value);
	}

	getToken() {
		if (this.tokensUnread.length) {
			return this.tokensUnread.pop();
		}

		let read = this.input.getChar();
		while (read == " " || read == "\n") {
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
				return new Token(this.line, TokenType.LBRACE, "(");
				break;
			case ")":
				return new Token(this.line, TokenType.RBRACE, ")");
				break;
			case ";":
				return new Token(this.line, TokenType.SEMICOLON, ";");
				break;
			case ",":
				return new Token(this.line, TokenType.COMMA, ",");
				break;
			case ".":
				return new Token(this.line, TokenType.PERIOD, ".");
				break;
			case "*":
				return new Token(this.line, TokenType.STAR, "*");
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
				} else if (read == '`' || isLetter(read) || read == "_") { // it's an id
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