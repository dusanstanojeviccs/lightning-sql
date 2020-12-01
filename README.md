# lightning-sql - Work in progress

Plan: SQL DBMS written fully in JavaScript

# Progress
npm lib setup - 0%
tests setup - 0%
cdn setup - 0% 
Lexer - 98%
Parser - 0%
Query Optimizer - 0%
DBMS Engine - 0%

# Lexer

Lexer takes in the SQL query in the string format and outputs a list of tokens.

## Example Usage

You can import the library from the compiled file in the dist directory

```
<script src="./dist/lightning-sql.js"></script>
```

To use the library create the lexer object and read it's tokens

```

let lxr = new lightningSql.Lexer("SELECT * FROM demo_table");

console.log(lxr.readAllTokens());
```

The output of the readAllTokens method defined in the Lexer will be a list of tokens:
```
[
	{line: 1, type: "SELECT", value: "SELECT"},
	{line: 1, type: "STAR", value: "*"},
	{line: 1, type: "FROM", value: "FROM"},
	{line: 1, type: "ID", value: "demo_table"},
	{line: 1, type: "END-OF-FILE", value: ""}
]
```

TODO: add from_char to_char in the actual parsed token, this will help with using the library for building IDEs and code editors

# Compile
npm run-script build
