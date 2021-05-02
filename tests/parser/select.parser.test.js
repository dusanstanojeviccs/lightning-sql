let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "SELECT * FROM users";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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







query = "SELECT * FROM users JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT * FROM users LEFT JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "LEFT",
                                    "value": "LEFT",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT * FROM users RIGHT JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "RIGHT",
                                    "value": "RIGHT",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT * FROM users OUTER JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "OUTER",
                                    "value": "OUTER",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT * FROM users WHERE id IN (SELECT user_id FROM approved_users)";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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







query = "SELECT * FROM users, charts";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
                    "children": [
                        {
                            "type": "STAR",
                            "value": "*",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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
                        },
                        {
                            "type": "COMMA",
                            "value": ",",
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
                                            "value": "charts",
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







query = "SELECT id, users.email FROM users";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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







query = "SELECT id, users.email FROM users JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT id, users.email FROM users LEFT JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "LEFT",
                                    "value": "LEFT",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT id, users.email FROM users RIGHT JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "RIGHT",
                                    "value": "RIGHT",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT id, users.email FROM users OUTER JOIN charts ON users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
                    "children": []
                },
                {
                    "type": "TABLES",
                    "children": [
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
                            "type": "ANY_JOIN",
                            "children": [
                                {
                                    "type": "OUTER",
                                    "value": "OUTER",
                                    "children": []
                                },
                                {
                                    "type": "JOIN",
                                    "value": "JOIN",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "TABLES",
                            "children": [
                                {
                                    "type": "COMPLEX_ID",
                                    "children": [
                                        {
                                            "type": "ID",
                                            "value": "charts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ON",
                            "value": "ON",
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
                                                            "value": "users",
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
                                                                    "value": "id",
                                                                    "children": []
                                                                }
                                                            ]
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
                                                    "type": "COMPLEX_ID",
                                                    "children": [
                                                        {
                                                            "type": "ID",
                                                            "value": "charts",
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
                                                                    "value": "user_id",
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







query = "SELECT id, users.email FROM users WHERE id IN (SELECT user_id FROM approved_users)";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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







query = "SELECT id, users.email FROM users, charts WHERE users.id = charts.user_id";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "SELECT_STMT",
            "children": [
                {
                    "type": "SELECT",
                    "value": "SELECT",
                    "children": []
                },
                {
                    "type": "SELECT_VALUE_LIST",
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
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "SELECT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "users",
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
                                                            "value": "email",
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
                },
                {
                    "type": "FROM",
                    "value": "FROM",
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
                        },
                        {
                            "type": "COMMA",
                            "value": ",",
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
                                            "value": "charts",
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
                                                    "value": "users",
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
                                                            "value": "id",
                                                            "children": []
                                                        }
                                                    ]
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
                                            "type": "COMPLEX_ID",
                                            "children": [
                                                {
                                                    "type": "ID",
                                                    "value": "charts",
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
                                                            "value": "user_id",
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
            ]
        }
    ]
}
test(query, () => {
	let lxr = new lightningSql.Lexer(query);
	let parser = new lightningSql.Parser(lxr);
	expect(JSON.stringify(parser.parseProgram())).toBe(JSON.stringify(result));
});



