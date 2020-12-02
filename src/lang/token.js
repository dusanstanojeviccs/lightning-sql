export default class Token {
	constructor(line, type, value, from, to) {
		this.line = line;
		this.type = type;
		this.value = value;
		// if no position from is given we will use -1
		this.from = from || -1;
		// if no position to is given we will make it the same as position from
		this.to = to || this.from;
	}
}