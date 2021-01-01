import Token from './token';
import TokenType from './token-type';
import Lexer from './lexer';
import AstNode from './ast-node';
import RuleLang from './rule-lang';

const firstSet = RuleLang.firstSet;
const followSet = RuleLang.followSet;
const rules = RuleLang.rules;
const terminals = RuleLang.terminals;
const nonTerminals = RuleLang.nonTerminals;

const syntaxError = (text) => {
	throw new SyntaxError("Syntax error near " + text); 
}

function capitilize(str) {
	if (str.length) {
		return str.substring(0, 1).toLowerCase() + str.substring(1).toUpperCase();
	}
	return str;
}
function toCamelCase(text) {
	let originalParts = text.split("_", -1);
	let arr = [];
	for (let i = 0; i < originalParts.length; i++) {
		arr.push(capitilize(originalParts[i]));
	}

	return arr.join("");
}
function printRule(rule) {
	console.log("Rule", `${rule.lhs} -> ${rule.rhs.join(" ")}`);
}

export default class Parser {
	constructor(lexer, config) {
		this.lexer = lexer;
		
		if (config) {
			this.logMethods = config.logMethods;
		} else {
			this.logMethods = false;
		}
	}

	
	parseProgram() {
		// we start by parsing the program, finding the correct rule to parse and performing the next parse
		let programNode = new AstNode("PROGRAM");

		this.parseRule(programNode);

		return programNode;
	}

	parseRule(node) {
		if (this.logMethods) {
			console.log(`------------ Parsing ${node.type} ----------`);
		}
		let applicableRules = [];

		rules.forEach(rule => {
			if (rule.lhs == node.type) {
				applicableRules.push(rule);
			}
		});

		// we have a subset of rules
		// now we can check each rules first elements first set 
		// to see which one we can apply

		let token = this.lexer.getToken();

		let appliedRule;

		applicableRules.forEach(rule => {
			if (!appliedRule) {
				let firstSetOfTheRule = [];

				for (let i = 0; i < rule.rhs.length; i++) {

					if (terminals.indexOf(rule.rhs[i]) > -1) {
						firstSetOfTheRule.push(rule.rhs[i]);
						break;
					} else {
						let currentFirstSet = firstSet[rule.rhs[i]];

						currentFirstSet.forEach(element => {
							if (element != "epsilon") {
								firstSetOfTheRule.push(element)
							}
						});

						if (currentFirstSet.indexOf("epsilon") < 0) {
							break;
						}
					}
				}

				if (firstSetOfTheRule.indexOf(token.type.toLowerCase()) > -1) {
					appliedRule = rule;
				}
			}
		});

		if (this.logMethods) {
			printRule(appliedRule);
		}

		// here we need to recursively parse the rule

		if (appliedRule) {
			this.lexer.ungetToken(token);

			for (let i = 0; i < appliedRule.rhs.length; i++) {
				let elem = appliedRule.rhs[i];

				token = this.lexer.getToken();

				if (nonTerminals.indexOf(elem) > -1) {
					if (firstSet[elem].indexOf(token.type.toLowerCase()) > -1) {
						// we found the element
						// we need to create a new node to parse it

						this.lexer.ungetToken(token);
						let newNode = new AstNode(elem);

						let customParserMethod = "parse" + toCamelCase(elem);

						if (this[customParserMethod]) {
							this[customParserMethod](newNode).bind(this);
						} else {
							this.parseRule(newNode);
						}

						node.children.push(newNode);
					} else if (firstSet[elem].indexOf("epsilon") > -1 && followSet[elem].indexOf(token.type.toLowerCase())) { 
						// does this element support epsilon
						// we are basically skipping this by applying the rule goes to epsilon
						// so nothing to do here
						continue; // this continues the loop through rhs
					} else {
						// this is a problem and a syntax exception
						if (this.logMethods) {
							console.log("we are parsing something that does not even star");
						}
						syntaxError(token.value);
					}
				} else {
					// it's a terminal, let's check if it matches
					
					if (elem == token.type.toLowerCase()) {
						node.children.push(new AstNode(token.type, token.value));
					} else {
						if (this.logMethods) {
							console.log("token does not match the rule");
						}
						syntaxError(token.value);
					}
				}
			}
		} else {
			if (this.logMethods) {
				console.log("no rule");
			}
			syntaxError(token.value);
		}
	}
}