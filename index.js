let lightningSql = require("./dist/lightning-sql.js").lightningSql;

let lxr = new lightningSql.Lexer("CREATE TABLE demo.users (id INT AUTO_INCREMENT, username VARCHAR length='10' default='') egine='demo_dbms'");

let parser = new lightningSql.Parser(lxr, {logMethods: true});

let ast = parser.parseProgram();

console.log(JSON.stringify(ast, null, 4));

let queryGen = new lightningSql.QueryGenerator(ast);

console.log(JSON.stringify(queryGen.generateQuery(), null, 4));



