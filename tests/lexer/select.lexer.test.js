let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "SELECT * FROM users";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"END-OF-FILE","",20,20),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"JOIN","JOIN",20,24),
    new lightningSql.Token(1,"ID","charts",25,31),
    new lightningSql.Token(1,"ON","ON",32,34),
    new lightningSql.Token(1,"ID","users",35,40),
    new lightningSql.Token(1,"PERIOD",".",41,41),
    new lightningSql.Token(1,"ID","id",41,43),
    new lightningSql.Token(1,"EQ","=",45,45),
    new lightningSql.Token(1,"ID","charts",46,52),
    new lightningSql.Token(1,"PERIOD",".",53,53),
    new lightningSql.Token(1,"ID","user_id",53,60),
    new lightningSql.Token(1,"END-OF-FILE","",61,61),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users LEFT JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"LEFT","LEFT",20,24),
    new lightningSql.Token(1,"JOIN","JOIN",25,29),
    new lightningSql.Token(1,"ID","charts",30,36),
    new lightningSql.Token(1,"ON","ON",37,39),
    new lightningSql.Token(1,"ID","users",40,45),
    new lightningSql.Token(1,"PERIOD",".",46,46),
    new lightningSql.Token(1,"ID","id",46,48),
    new lightningSql.Token(1,"EQ","=",50,50),
    new lightningSql.Token(1,"ID","charts",51,57),
    new lightningSql.Token(1,"PERIOD",".",58,58),
    new lightningSql.Token(1,"ID","user_id",58,65),
    new lightningSql.Token(1,"END-OF-FILE","",66,66),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users RIGHT JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"RIGHT","RIGHT",20,25),
    new lightningSql.Token(1,"JOIN","JOIN",26,30),
    new lightningSql.Token(1,"ID","charts",31,37),
    new lightningSql.Token(1,"ON","ON",38,40),
    new lightningSql.Token(1,"ID","users",41,46),
    new lightningSql.Token(1,"PERIOD",".",47,47),
    new lightningSql.Token(1,"ID","id",47,49),
    new lightningSql.Token(1,"EQ","=",51,51),
    new lightningSql.Token(1,"ID","charts",52,58),
    new lightningSql.Token(1,"PERIOD",".",59,59),
    new lightningSql.Token(1,"ID","user_id",59,66),
    new lightningSql.Token(1,"END-OF-FILE","",67,67),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users OUTER JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"OUTER","OUTER",20,25),
    new lightningSql.Token(1,"JOIN","JOIN",26,30),
    new lightningSql.Token(1,"ID","charts",31,37),
    new lightningSql.Token(1,"ON","ON",38,40),
    new lightningSql.Token(1,"ID","users",41,46),
    new lightningSql.Token(1,"PERIOD",".",47,47),
    new lightningSql.Token(1,"ID","id",47,49),
    new lightningSql.Token(1,"EQ","=",51,51),
    new lightningSql.Token(1,"ID","charts",52,58),
    new lightningSql.Token(1,"PERIOD",".",59,59),
    new lightningSql.Token(1,"ID","user_id",59,66),
    new lightningSql.Token(1,"END-OF-FILE","",67,67),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users WHERE id IN (SELECT user_id FROM approved_users)";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"WHERE","WHERE",20,25),
    new lightningSql.Token(1,"ID","id",26,28),
    new lightningSql.Token(1,"IN","IN",29,31),
    new lightningSql.Token(1,"LBRACE","(",33,33),
    new lightningSql.Token(1,"SELECT","SELECT",33,39),
    new lightningSql.Token(1,"ID","user_id",40,47),
    new lightningSql.Token(1,"FROM","FROM",48,52),
    new lightningSql.Token(1,"ID","approved_users",53,67),
    new lightningSql.Token(1,"RBRACE",")",68,68),
    new lightningSql.Token(1,"END-OF-FILE","",69,69),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT * FROM users, charts";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"STAR","*",8,8),
    new lightningSql.Token(1,"FROM","FROM",9,13),
    new lightningSql.Token(1,"ID","users",14,19),
    new lightningSql.Token(1,"COMMA",",",20,20),
    new lightningSql.Token(1,"ID","charts",21,27),
    new lightningSql.Token(1,"END-OF-FILE","",28,28),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"END-OF-FILE","",34,34),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"JOIN","JOIN",34,38),
    new lightningSql.Token(1,"ID","charts",39,45),
    new lightningSql.Token(1,"ON","ON",46,48),
    new lightningSql.Token(1,"ID","users",49,54),
    new lightningSql.Token(1,"PERIOD",".",55,55),
    new lightningSql.Token(1,"ID","id",55,57),
    new lightningSql.Token(1,"EQ","=",59,59),
    new lightningSql.Token(1,"ID","charts",60,66),
    new lightningSql.Token(1,"PERIOD",".",67,67),
    new lightningSql.Token(1,"ID","user_id",67,74),
    new lightningSql.Token(1,"END-OF-FILE","",75,75),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users LEFT JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"LEFT","LEFT",34,38),
    new lightningSql.Token(1,"JOIN","JOIN",39,43),
    new lightningSql.Token(1,"ID","charts",44,50),
    new lightningSql.Token(1,"ON","ON",51,53),
    new lightningSql.Token(1,"ID","users",54,59),
    new lightningSql.Token(1,"PERIOD",".",60,60),
    new lightningSql.Token(1,"ID","id",60,62),
    new lightningSql.Token(1,"EQ","=",64,64),
    new lightningSql.Token(1,"ID","charts",65,71),
    new lightningSql.Token(1,"PERIOD",".",72,72),
    new lightningSql.Token(1,"ID","user_id",72,79),
    new lightningSql.Token(1,"END-OF-FILE","",80,80),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users RIGHT JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"RIGHT","RIGHT",34,39),
    new lightningSql.Token(1,"JOIN","JOIN",40,44),
    new lightningSql.Token(1,"ID","charts",45,51),
    new lightningSql.Token(1,"ON","ON",52,54),
    new lightningSql.Token(1,"ID","users",55,60),
    new lightningSql.Token(1,"PERIOD",".",61,61),
    new lightningSql.Token(1,"ID","id",61,63),
    new lightningSql.Token(1,"EQ","=",65,65),
    new lightningSql.Token(1,"ID","charts",66,72),
    new lightningSql.Token(1,"PERIOD",".",73,73),
    new lightningSql.Token(1,"ID","user_id",73,80),
    new lightningSql.Token(1,"END-OF-FILE","",81,81),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users OUTER JOIN charts ON users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"OUTER","OUTER",34,39),
    new lightningSql.Token(1,"JOIN","JOIN",40,44),
    new lightningSql.Token(1,"ID","charts",45,51),
    new lightningSql.Token(1,"ON","ON",52,54),
    new lightningSql.Token(1,"ID","users",55,60),
    new lightningSql.Token(1,"PERIOD",".",61,61),
    new lightningSql.Token(1,"ID","id",61,63),
    new lightningSql.Token(1,"EQ","=",65,65),
    new lightningSql.Token(1,"ID","charts",66,72),
    new lightningSql.Token(1,"PERIOD",".",73,73),
    new lightningSql.Token(1,"ID","user_id",73,80),
    new lightningSql.Token(1,"END-OF-FILE","",81,81),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users WHERE id IN (SELECT user_id FROM approved_users)";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"WHERE","WHERE",34,39),
    new lightningSql.Token(1,"ID","id",40,42),
    new lightningSql.Token(1,"IN","IN",43,45),
    new lightningSql.Token(1,"LBRACE","(",47,47),
    new lightningSql.Token(1,"SELECT","SELECT",47,53),
    new lightningSql.Token(1,"ID","user_id",54,61),
    new lightningSql.Token(1,"FROM","FROM",62,66),
    new lightningSql.Token(1,"ID","approved_users",67,81),
    new lightningSql.Token(1,"RBRACE",")",82,82),
    new lightningSql.Token(1,"END-OF-FILE","",83,83),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});


query = "SELECT id, users.email FROM users, charts WHERE users.id = charts.user_id";
result = [
    new lightningSql.Token(1,"SELECT","SELECT",-1,6),
    new lightningSql.Token(1,"ID","id",7,9),
    new lightningSql.Token(1,"COMMA",",",10,10),
    new lightningSql.Token(1,"ID","users",11,16),
    new lightningSql.Token(1,"PERIOD",".",17,17),
    new lightningSql.Token(1,"ID","email",17,22),
    new lightningSql.Token(1,"FROM","FROM",23,27),
    new lightningSql.Token(1,"ID","users",28,33),
    new lightningSql.Token(1,"COMMA",",",34,34),
    new lightningSql.Token(1,"ID","charts",35,41),
    new lightningSql.Token(1,"WHERE","WHERE",42,47),
    new lightningSql.Token(1,"ID","users",48,53),
    new lightningSql.Token(1,"PERIOD",".",54,54),
    new lightningSql.Token(1,"ID","id",54,56),
    new lightningSql.Token(1,"EQ","=",58,58),
    new lightningSql.Token(1,"ID","charts",59,65),
    new lightningSql.Token(1,"PERIOD",".",66,66),
    new lightningSql.Token(1,"ID","user_id",66,73),
    new lightningSql.Token(1,"END-OF-FILE","",74,74),
];
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	expect(lxr.readAllTokens()).toStrictEqual(result);
});
