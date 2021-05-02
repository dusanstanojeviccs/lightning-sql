let lightningSql = require("./dist/lightning-sql").lightningSql;

let queries = [
	"SELECT id, users.email FROM users, charts WHERE users.id = charts.user_id",
];

queries.forEach(query => {
	let lxr = new lightningSql.Lexer(query);
	
	console.log("query = " + JSON.stringify(query) + ";");
	console.log("result = [")

	lxr.readAllTokens().forEach(token => {
		console.log(
			"    new lightningSql.Token(" + 
			JSON.stringify(token.line) + "," +
			JSON.stringify(token.type) + "," +
			JSON.stringify(token.value) + "," +
			JSON.stringify(token.from) + "," +
			JSON.stringify(token.to) + 
			"),");
	})

	console.log("];");


	console.log("test(query, () => {");
	console.log("	let lxr = new lightningSql.Lexer(query);");
	console.log("	expect(lxr.readAllTokens()).toStrictEqual(result);");
	console.log("});");
	console.log();
	console.log();

	// console.log(JSON.stringify(lxr.readAllTokens(), null, 4));
})
