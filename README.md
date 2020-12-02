# lightning-sql - Work in progress

Plan: SQL DBMS written fully in JavaScript

# Done

Lexer - 100%

# Working on

Parser - 10%

Website to demonstrate the Lexer - 0%

Tests setup - 0%

npm lib setup - 0%

Documentation website - 0%

Website to demonstrate the Parser - 0%

CDN setup - 0% 

CI/CD setup - 0%

Plugin architecture - 0%

Storage module - 0%

Column module - 0%

Query Optimizer module - 0%

Query metadata module - 0%

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

# Compile
npm run-script build
