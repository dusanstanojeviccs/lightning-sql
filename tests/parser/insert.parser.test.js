let lightningSql = require("../../dist/lightning-sql").lightningSql;

let query, result;

query = "INSERT INTO users (id, name) VALUES (1, 'demo')";
result = {
    "type": "PROGRAM",
    "children": [
        {
            "type": "INSERT_STMT",
            "children": [
                {
                    "type": "INSERT",
                    "value": "INSERT",
                    "children": []
                },
                {
                    "type": "INTO",
                    "value": "INTO",
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
                },
                {
                    "type": "LBRACE",
                    "value": "(",
                    "children": []
                },
                {
                    "type": "ID_LIST",
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
                        },
                        {
                            "type": "COMMA",
                            "value": ",",
                            "children": []
                        },
                        {
                            "type": "ID_LIST",
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
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "RBRACE",
                    "value": ")",
                    "children": []
                },
                {
                    "type": "VALUES",
                    "value": "VALUES",
                    "children": []
                },
                {
                    "type": "INSERT_VALUES",
                    "children": [
                        {
                            "type": "LBRACE",
                            "value": "(",
                            "children": []
                        },
                        {
                            "type": "INSERT_VALUE_LIST",
                            "children": [
                                {
                                    "type": "VALUE",
                                    "children": [
                                        {
                                            "type": "NUMBER",
                                            "value": "1",
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
                            "type": "RBRACE",
                            "value": ")",
                            "children": []
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


