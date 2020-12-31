export default class AstNode {
	constructor(type, value, children = []) {
		this.type = type;
		this.value = value;
		this.children = children;
	}

	setType(type) {
		this.type = type;
	}
	setValue(value) {
		this.value = value;
	}
	setChildren(children) {
		this.children = children;
	}
}