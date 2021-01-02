import AstType from '../lang/ast-type';

export default class QueryGenerator {
	constructor(ast) {
		this.ast = ast;
	}

	generateQuery(dataInfoMap) {
		let command = this.ast.children[0].children[0];
		
		if (command.type == AstType.SELECT_STMT) {

		} else if (command.type == AstType.UPDATE_STMT) {

		} else if (command.type == AstType.DELETE_STMT) {

		} else if (command.type == AstType.CREATE_STMT) {

		} else if (command.type == AstType.DROP_STMT) {

		} else if (command.type == AstType.CREATE_DB_STMT) {

		} else if (command.type == AstType.USE_DB_STMT) {

		} else if (command.type == AstType.ALTER_TABLE_STMT) {

		} else if (command.type == AstType.INSERT_STMT) {

		} else if (command.type == AstType.ASSIGNMENT_STMT) {

		}
	}
}