const EOF = "EOF";

export default class StringReader {
	constructor(str) {
		this.str = str;
		this.position = 0;
		this.EOF = EOF;
	}

	checkpoint() {
		let checkpoint = new StringReader(this.str);

		checkpoint.position = this.position;
		checkpoint.EOF = this.EOF;

		return checkpoint;
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
		// we can read EOF multiple times
		if (this.position >= this.str.length) {
			this.position++
			return EOF;
		}
		return this.str.charAt(this.position++);
	}
}