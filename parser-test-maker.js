let lightningSql = require("./dist/lightning-sql").lightningSql;

let queries = [
	"UPDATE users SET name = 'demo' WHERE id = 200",
	"UPDATE users SET name = 'demo', email='demo@email.com' WHERE id IN (SELECT user_id FROM demo_users)"
];


queries.forEach(query => {
	let lxr = new lightningSql.Lexer(query);
	
	let parser = new lightningSql.Parser(lxr, {logMethods: false});

    console.log("query = " + JSON.stringify(query) + ";");

    let str = JSON.stringify(parser.parseProgram(), null, 4);

	console.log("result = " + str);


    

	console.log("test(query, () => {");
	console.log("	let lxr = new lightningSql.Lexer(query);");
    console.log("	let parser = new lightningSql.Parser(lxr);");
	console.log("	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));");
	console.log("});");
	console.log();

    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();

	// console.log(JSON.stringify(lxr.readAllTokens(), null, 4));
})
