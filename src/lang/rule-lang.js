// both the lexer and the parser for our rules
// the result is a config file that can be passed to the first-follow-solver

// upper case are non terminals
// lowercase are terminals
// word epsilon is epsilon

import RULES from './rules';
import { solve } from 'first-follow-solver';

const syntaxError = (error, line) => {
	throw new SyntaxError(error + " on line: " + line); 
}

function isUppercase(str) {
	for (let i = 0; i < str.length; i++) {
		let c = str.charAt(i);

		if (c != "_" && c != "-" && !(c >= 'A' && c <= 'Z')) {
			return false;
		}
	}
	return true;
}


let ruleLines = RULES.split("\n");

let rules = [];
let terminals = [];
let nonTerminals = [];

let line = 0;
ruleLines.forEach(ruleLine => {
	line++;

	if (ruleLine != "") {
		if (ruleLine.indexOf("->") < 0) {
			syntaxError("Rule not found", line);
		}

		let ruleParts = ruleLine.split("->");

		if (ruleParts.length != 2) {
			syntaxError("Multiple rules must me defined on separate lines", line);
		}

		ruleParts[0] = ruleParts[0].trim();

		if (ruleParts[0] == "") {
			syntaxError("Rule cannot have an empty left hand side", line);
		}

		if (ruleParts[0].indexOf(" ") >= 0) {
			syntaxError("Rule head cannot contain a space", line);
		}

		if (!isUppercase(ruleParts[0])) {
			syntaxError("Rule head must be a non terminal", line);
		}
		let lhs = ruleParts[0];

		let rhs = ruleParts[1].trim().split(" ", -1);

		if (rhs.length == 0) {
			syntaxError("Right hand side cannot be empty", line);
		}

		rhs.forEach(rhsValue => {
			if (!isUppercase(rhsValue)) {
				if (terminals.indexOf(rhsValue) < 0) {
					terminals.push(rhsValue);
				}
			} else {
				if (nonTerminals.indexOf(rhsValue) < 0) {
					nonTerminals.push(rhsValue);
				}
			}
		});

		rules.push({lhs: lhs, rhs: rhs});
	}
});

// all non terminals have to be used on the lhs or we have a problem
nonTerminals.forEach(nonTerminal => {
	let found = false;
	rules.forEach(rule => {
		if (rule.lhs == nonTerminal) {
			found = true;
		}
	});

	if (!found) {
		syntaxError("Non Terminal " + nonTerminal + " has not been used on the left hand side of a rule");
	}
});

// at this point we should be able to generate the settings for the first follow set solver

let problem = {
	rules: rules,
	terminals: terminals, 
	start: "PROGRAM",
	epsilon: "epsilon",
	eof: "$",
};

let result = solve(problem);

export default {
	firstSet: result.firstSet, 
	followSet: result.followSet, 
	rules: rules,
	terminals: terminals,
	nonTerminals: nonTerminals
};