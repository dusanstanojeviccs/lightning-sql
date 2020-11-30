const EOF = "EOF";

export default class StringReader {
	constructor(str) {
		this.str = str;
		this.position = 0;
		this.EOF = EOF;
	}

	getPosition() {
		return this.position;
	}

	ungetChar() {
		if (this.position > 0) {
			this.position--;
		}	
	}

	getChar() {
		if (this.position == this.str.length) {
			return EOF;
		}
		return this.str.charAt(this.position++);
	}
}