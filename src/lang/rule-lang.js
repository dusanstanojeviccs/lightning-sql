// both the lexer and the parser for our rules
// the result is a config file that can be passed to the first-follow-solver

// upper case are non terminals
// lowercase are terminals
// word epsilon is epsilon

import RULES from './rules';
import { solve, parseProgram, extractTerminals, validateSymbols } from 'first-follow-solver';

const syntaxError = (error, line) => {
	throw new SyntaxError(error + " on line: " + line); 
}

let split = "|";
let mode = "lowercase";
let epsilon = "epsilon";

let rulesWithoutComments = RULES.split("\n").filter(l => l.length && l.indexOf("//") != 0).join("\n");

let rules = parseProgram(rulesWithoutComments, split);

let terminals = extractTerminals(rules, mode, epsilon);

validateSymbols(rules, terminals, epsilon);

let problem = {
	rules: rules,
	terminals: terminals,
	start: "PROGRAM",
	epsilon: epsilon,
	eof: "$",
};

let result = solve(problem);

let nonTerminals = new Set();
for (let i = 0; i < rules.length; i++) {
	nonTerminals.add(rules[i].lhs);
}
nonTerminals = Array.from(nonTerminals);

export default {
	firstSet: result.firstSet, 
	followSet: result.followSet, 
	rules: rules,
	terminals: terminals,
	nonTerminals: nonTerminals
};
