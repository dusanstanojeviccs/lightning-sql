import AstType from '../lang/ast-type';
import TokenType from '../lang/token-type';
import Operation from './operation';

export default class QueryGenerator {
	constructor(ast) {
		this.ast = ast;
	}

	resolveComplexId(complexIdAstNode, arr) {
		console.log(JSON.stringify(complexIdAstNode, null, 4));
		arr = arr || [];
		
		if (complexIdAstNode.value) {
			arr.push(complexIdAstNode.value)
		} else {
			complexIdAstNode.children.forEach(child => {
				this.resolveComplexId(child, arr);
			});
		}

		return arr;
	}

	generateQuery() {
		let command = this.ast.children[0];

		if (command.type == AstType.SELECT_STMT) {
			let operations = [];
			
			let selectValueList = command.children[1];
			
			let fieldsToRead = [];

			selectValueList.children.forEach(child => {
				if (child.type === TokenType.STAR) {
					fieldsToRead = "ALL";					
				} else {
					fieldsToRead.push(child.value);
				}
			});

			let targetTableToReadFrom = command.children[3].children[0].value;

			let dataToRead = {
				queryPredicates: [],
				fieldsToRead: fieldsToRead,
				tableName: targetTableToReadFrom
			};

			operations.push(new Operation("readRecords", dataToRead));

			return operations;
		} else if (command.type == AstType.UPDATE_STMT) {

		} else if (command.type == AstType.DELETE_STMT) {

		} else if (command.type == AstType.CREATE_STMT) {
			let operations = [];

			let dataToCreateTable = {
				databaseName: command.children[1].value
			};

			operations.push(new Operation("createTable", dataToCreateTable));
		
			return operations;
		} else if (command.type == AstType.DROP_STMT) {

		} else if (command.type == AstType.CREATE_DB_STMT) {
			let operations = [];

			let dataToCreateDB = {
				identifier: this.resolveComplexId(command.children[2])
			};

			operations.push(new Operation("createDatabase", dataToCreateDB));
			
			return operations;
		} else if (command.type == AstType.USE_DB_STMT) {

		} else if (command.type == AstType.ALTER_TABLE_STMT) {

		} else if (command.type == AstType.INSERT_STMT) {

		} else if (command.type == AstType.ASSIGNMENT_STMT) {

		}
	}
}