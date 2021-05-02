let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "DELETE FROM db.users";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "DELETE_STMT",
            "children": [
                {
                    "type": "DELETE",
                    "value": "DELETE",
                    "children": []
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "COMPLEX_ID",
                    "children": [
                        {
                            "type": "ID",
                            "value": "db",
                            "children": []
                        },
                        {
                            "type": "PERIOD",
                            "value": ".",
                            "children": []
                        },
                        {
                            "type": "COMPLEX_ID",
                            "children": [
                                {
                                    "type": "ID",
                                    "value": "users",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	let parser = new lightningSql.Parser(lxr);
	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));
});







query = "DROP TABLE db.users";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "DROP_STMT",
            "children": [
                {
                    "type": "DROP",
                    "value": "DROP",
                    "children": []
                },
                {
                    "type": "TABLE",
                    "value": "TABLE",
                    "children": []
                },
                {
                    "type": "COMPLEX_ID",
                    "children": [
                        {
                            "type": "ID",
                            "value": "db",
                            "children": []
                        },
                        {
                            "type": "PERIOD",
                            "value": ".",
                            "children": []
                        },
                        {
                            "type": "COMPLEX_ID",
                            "children": [
                                {
                                    "type": "ID",
                                    "value": "users",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	let parser = new lightningSql.Parser(lxr);
	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));
});



