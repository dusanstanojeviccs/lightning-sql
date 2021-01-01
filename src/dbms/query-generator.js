import TokenType from '../lang/token-type';

export default class QueryGenerator {
	constructor(ast) {
		this.ast = ast;
	}

	generateQuery(dataInfoMap) {
		// we need to evaluate SELECT statements, for now we will evaluate only the first SELECT statement we run into

		let current = this.ast;

		while (current.type != TokenType.SELECT) {
			current = current.children[0];

			if (!current) {
				break;
			}
		}

		// now we have our base query to solve
	}
}