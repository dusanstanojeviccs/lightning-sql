let lightningSql = require("../dist/lightning-sql").lightningSql;

let query, result;

query = "UPDATE users SET name = 'demo' WHERE id = 200";
result = [
    new lightningSql.Token(1,"UPDATE","UPDATE",-1,6),
    new lightningSql.Token(1,"ID","users",7,12),
    new lightningSql.Token(1,"SET","SET",13,16),
    new lightningSql.Token(1,"ID","name",17,21),
    new lightningSql.Token(1,"EQ","=",23,23),
    new lightningSql.Token(1,"STRING","demo",24,30),
    new lightningSql.Token(1,"WHERE","WHERE",31,36),
    new lightningSql.Token(1,"ID","id",37,39),
    new lightningSql.Token(1,"EQ","=",41,41),
    new lightningSql.Token(1,"NUMBER","200",-1,-1),
    new lightningSql.Token(1,"END-OF-FILE","",46,46),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "UPDATE users SET name = 'demo', email='demo@email.com' WHERE id IN (SELECT user_id FROM demo_users)";
result = [
    new lightningSql.Token(1,"UPDATE","UPDATE",-1,6),
    new lightningSql.Token(1,"ID","users",7,12),
    new lightningSql.Token(1,"SET","SET",13,16),
    new lightningSql.Token(1,"ID","name",17,21),
    new lightningSql.Token(1,"EQ","=",23,23),
    new lightningSql.Token(1,"STRING","demo",24,30),
    new lightningSql.Token(1,"COMMA",",",31,31),
    new lightningSql.Token(1,"ID","email",32,37),
    new lightningSql.Token(1,"EQ","=",38,38),
    new lightningSql.Token(1,"STRING","demo@email.com",38,54),
    new lightningSql.Token(1,"WHERE","WHERE",55,60),
    new lightningSql.Token(1,"ID","id",61,63),
    new lightningSql.Token(1,"IN","IN",64,66),
    new lightningSql.Token(1,"LBRACE","(",68,68),
    new lightningSql.Token(1,"SELECT","SELECT",68,74),
    new lightningSql.Token(1,"ID","user_id",75,82),
    new lightningSql.Token(1,"FROM","FROM",83,87),
    new lightningSql.Token(1,"ID","demo_users",88,98),
    new lightningSql.Token(1,"RBRACE",")",99,99),
    new lightningSql.Token(1,"END-OF-FILE","",100,100),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});

