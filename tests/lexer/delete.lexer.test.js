let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "DELETE FROM users";
result = [
    new lightningSql.Token(1,"DELETE","DELETE",-1,6),
    new lightningSql.Token(1,"FROM","FROM",7,11),
    new lightningSql.Token(1,"ID","users",12,17),
    new lightningSql.Token(1,"END-OF-FILE","",18,18),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "DELETE TABLE users";
result = [
    new lightningSql.Token(1,"DELETE","DELETE",-1,6),
    new lightningSql.Token(1,"TABLE","TABLE",7,12),
    new lightningSql.Token(1,"ID","users",13,18),
    new lightningSql.Token(1,"END-OF-FILE","",19,19),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});

