import Token from './token';
import TokenType from './token-type';
import Lexer from './lexer';
import AstNode from './ast-node';
import AstNodeTypes from './ast-node-types';

const syntaxError = (position) => {
	throw new SyntaxError("Error on char " + position); 
}

export default class Lexer {
	constructor(query, config) {
		this.lexer = lexer;
		if (config) {
			this.logMethods = config.logMethods;
		} else {
			this.logMethods = false;
		}
	}

	
	parseProgram() {
		if (this.logMethods) {
			console.log("parseProgram");
		}

		let node = new AstNode(AstNodeTypes.PROGRAM);

		let token = lexer.getToken();

		if (token in first of SINGLE_STMT) {
			lexer.ungetToken();
			
			node.children = [parseSingleStmt()];

			token = lexer.getToken();

			if (token.type != TokenType.SEMICOLON || token.type != TokenType.SEMICOLON) {
				syntaxError(token.from);
			}
		} if (token.type == TokenType.BEGIN) {
			begin.transaction.id.semicolon.STMT_LIST.end.transaction.id.semicolon
		} else {
			syntaxError(token.from);
		}

		return node;
	}
	parseSingleStmt() {
		if (this.logMethods) {
			console.log("parseSingleStmt");
		}
	}
	parseStmt() {
		if (this.logMethods) {
			console.log("parseStmt");
		}
	}
	parseStmtList() {
		if (this.logMethods) {
			console.log("parseStmtList");
		}
	}
	parseSelectStmt() {
		if (this.logMethods) {
			console.log("parseSelectStmt");
		}
	}
	parseUpdateStmt() {
		if (this.logMethods) {
			console.log("parseUpdateStmt");
		}
	}
	parseDeleteStmt() {
		if (this.logMethods) {
			console.log("parseDeleteStmt");
		}
	}
	parseDropStmt() {
		if (this.logMethods) {
			console.log("parseDropStmt");
		}
	}
	parseCreateStmt() {
		if (this.logMethods) {
			console.log("parseCreateStmt");
		}
	}
	parseCreateDbStmt() {
		if (this.logMethods) {
			console.log("parseCreateDbStmt");
		}
	}
	parseUseDbStmt() {
		if (this.logMethods) {
			console.log("parseUseDbStmt");
		}
	}
	parseAlterTableStmt() {
		if (this.logMethods) {
			console.log("parseAlterTableStmt");
		}
	}
	parseInsertStmt() {
		if (this.logMethods) {
			console.log("parseInsertStmt");
		}
	}
	parseInsertValues() {
		if (this.logMethods) {
			console.log("parseInsertValues");
		}
	}
	parseAlterModificationList() {
		if (this.logMethods) {
			console.log("parseAlterModificationList");
		}
	}
	parseAlterModification() {
		if (this.logMethods) {
			console.log("parseAlterModification");
		}
	}
	parseColumnDef() {
		if (this.logMethods) {
			console.log("parseColumnDef");
		}
	}
	parseSettingsStmt() {
		if (this.logMethods) {
			console.log("parseSettingsStmt");
		}
	}
	parseSettingsList() {
		if (this.logMethods) {
			console.log("parseSettingsList");
		}
	}
	parseColumnDefList() {
		if (this.logMethods) {
			console.log("parseColumnDefList");
		}
	}
	parseAssignmentStmt() {
		if (this.logMethods) {
			console.log("parseAssignmentStmt");
		}
	}
	parseAssignmentList() {
		if (this.logMethods) {
			console.log("parseAssignmentList");
		}
	}
	parseSelectValueList() {
		if (this.logMethods) {
			console.log("parseSelectValueList");
		}
	}
	parseInsertValueList() {
		if (this.logMethods) {
			console.log("parseInsertValueList");
		}
	}
	parseValue() {
		if (this.logMethods) {
			console.log("parseValue");
		}
	}
	parseComplexId() {
		if (this.logMethods) {
			console.log("parseComplexId");
		}
	}
	parseMethodCall() {
		if (this.logMethods) {
			console.log("parseMethodCall");
		}
	}
	parseExpression() {
		if (this.logMethods) {
			console.log("parseExpression");
		}
	}
	parseComparrison() {
		if (this.logMethods) {
			console.log("parseComparrison");
		}
	}
	parseComparrisonConnective() {
		if (this.logMethods) {
			console.log("parseComparrisonConnective");
		}
	}
	parseBoolConnective() {
		if (this.logMethods) {
			console.log("parseBoolConnective");
		}
	}
	parseTables() {
		if (this.logMethods) {
			console.log("parseTables");
		}
	}


	readAst() {
		return this.parseProgram();
	}
}