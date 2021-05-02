let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "INSERT INTO users (id, name) VALUES (1, 'demo')";
result = [
    new lightningSql.Token(1,"INSERT","INSERT",-1,6),
    new lightningSql.Token(1,"INTO","INTO",7,11),
    new lightningSql.Token(1,"ID","users",12,17),
    new lightningSql.Token(1,"LBRACE","(",19,19),
    new lightningSql.Token(1,"ID","id",19,21),
    new lightningSql.Token(1,"COMMA",",",22,22),
    new lightningSql.Token(1,"ID","name",23,27),
    new lightningSql.Token(1,"RBRACE",")",28,28),
    new lightningSql.Token(1,"VALUES","VALUES",29,35),
    new lightningSql.Token(1,"LBRACE","(",37,37),
    new lightningSql.Token(1,"NUMBER","1",-1,-1),
    new lightningSql.Token(1,"COMMA",",",39,39),
    new lightningSql.Token(1,"STRING","demo",40,46),
    new lightningSql.Token(1,"RBRACE",")",47,47),
    new lightningSql.Token(1,"END-OF-FILE","",48,48),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});

