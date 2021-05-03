let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "UPDATE users SET name = 'demo' WHERE id = 200";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "UPDATE_STMT",
            "children": [
                {
                    "type": "UPDATE",
                    "value": "UPDATE",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                },
                {
                    "type": "SET",
                    "value": "SET",
                    "children": []
                },
                {
                    "type": "ASSIGNMENT_LIST",
                    "children": [
                        {
                            "type": "ASSIGNMENT_STMT",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "name",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "type": "EQ",
                                    "value": "=",
                                    "children": []
                                },
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "STRING",
                                            "value": "demo",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "WHERE",
                    "value": "WHERE",
                    "children": []
                },
                {
                    "type": "EXPRESSION",
                    "children": [
                        {
                            "type": "COMPARRISON",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "id",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARRISON_CONNECTIVE",
                                    "children": [
                                        {
                                            "type": "EQ",
                                            "value": "=",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "NUMBER",
                                            "value": "200",
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
    ]
}
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	let parser = new lightningSql.Parser(lxr);
	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));
});







query = "UPDATE users SET name = 'demo', email='demo@email.com' WHERE id IN (SELECT user_id FROM demo_users)";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "UPDATE_STMT",
            "children": [
                {
                    "type": "UPDATE",
                    "value": "UPDATE",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                },
                {
                    "type": "SET",
                    "value": "SET",
                    "children": []
                },
                {
                    "type": "ASSIGNMENT_LIST",
                    "children": [
                        {
                            "type": "ASSIGNMENT_STMT",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "name",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "type": "EQ",
                                    "value": "=",
                                    "children": []
                                },
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "STRING",
                                            "value": "demo",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "ASSIGNMENT_STMT",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "email",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "type": "EQ",
                                    "value": "=",
                                    "children": []
                                },
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "STRING",
                                            "value": "demo@email.com",
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
    ]
}
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	let parser = new lightningSql.Parser(lxr);
	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));
});





