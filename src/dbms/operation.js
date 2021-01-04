export default class Operation {
	constructor(method, data, processor) {
		this.method = method;
		this.data = data;
		this.processor = processor; // function that accepts all previous results as it's input
	}
}