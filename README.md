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

# Parser 

### Specification


<details>
  <summary>Expand the Tokens</summary>

```
SELECT
FROM
UPDATE
SET
WHERE
INSERT
INTO
CREATE
DATABASE
TABLE
USE
DROP
IF
EXISTS
PROCEDURE
BEGIN
END
DEFINER
HAVING
COUNT
VALUES
JOIN
LEFT
RIGHT
FULL
OUTER
ORDER
BY
ASC
DSC
AS
AUTO_INCREMENT
IN
LIKE
VIEW
XOR
NULL
RANDOM
INT
BIGINT
BIT
BOOL
BTREE
CASCADE
CASE
CHARSET
COMMIT
CONSTRAINT
INT
MEDIUMBLOB
MEDIUMINT
MEDIUMTEXT
SMALLINT
START
TIME
TIMESTAMP
TIMESTAMPADD
TIMESTAMPDIFF
TINYBLOB
TINYINT
TINYTEXT
VARCHAR
DATE
DATETIME
DAY
DAY_HOUR
DAY_MICROSECOND
DAY_MINUTE
DAY_SECOND
HOUR
HOUR_MICROSECOND
HOUR_MINUTE
HOUR_SECOND
MINUTE
MINUTE_MICROSECOND
MINUTE_SECOND
SECOND
SECOND_MICROSECOND
UTC_DATE
UTC_TIME
UTC_TIMESTAMP
REPLACE
ENGINE
AVG
ALGORITHM
ROLLBACK
TRANSACTION
AND
OR
ID
LBRACE
RBRACE
SEMICOLON
COMMA
PERIOD
STAR
EQ
LT
LTEQ
GT
GTEQ
NEQ
STRING
NUMBER
```
</details>


<details>
  <summary>Expand the Syntax</summary>

```
PROGRAM -> SINGLE_STMT
PROGRAM -> STMT
PROGRAM -> begin transaction id semicolon STMT_LIST end transaction id semicolon

SINGLE_STMT -> SELECT_STMT
SINGLE_STMT -> UPDATE_STMT
SINGLE_STMT -> DELETE_STMT
SINGLE_STMT -> CREATE_STMT
SINGLE_STMT -> DROP_STMT
SINGLE_STMT -> CREATE_DB_STMT
SINGLE_STMT -> USE_DB_STMT
SINGLE_STMT -> ALTER_TABLE_STMT
SINGLE_STMT -> INSERT_STMT
SINGLE_STMT -> ASSIGNMENT_STMT

STMT -> SINGLE_STMT semicolon
STMT -> semicolon

STMT_LIST -> STMT
STMT_LIST -> STMT STMT_LIST

SELECT_STMT -> select SELECT_VALUE_LIST from TABLES 
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST asc
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST desc

UPDATE_STMT -> update TABLES set ASSIGNMENT_LIST where EXPRESSION
UPDATE_STMT -> update TABLES set ASSIGNMENT_LIST

DELETE_STMT -> delete from COMPLEX_ID where EXPRESSION

DROP_STMT -> drop database id

CREATE_STMT -> create table id lbrace COLUMN_DEF_LIST rbrace SETTINGS_LIST;

CREATE_DB_STMT -> create database id

USE_DB_STMT -> use database id

ALTER_TABLE_STMT -> alter table id ALTER_MODIFICATION_LIST

INSERT_STMT -> insert into id values INSERT_VALUES
INSERT_STMT -> insert into id lbrace ID_LIST rbrace values INSERT_VALUES

INSERT_VALUES -> lbrace INSERT_VALUE_LIST rbrace
INSERT_VALUES -> INSERT_VALUES comma INSERT_VALUES

ALTER_MODIFICATION_LIST -> ALTER_MODIFICATION
ALTER_MODIFICATION_LIST -> ALTER_MODIFICATION comma ALTER_MODIFICATION

ALTER_MODIFICATION -> add column COLUMN_DEF
ALTER_MODIFICATION -> remove column id
ALTER_MODIFICATION -> change column id id COLUMN_DEF

COLUMN_DEF -> id TYPE_KEYWORD auto_increment SETTINGS_LIST
COLUMN_DEF -> id TYPE_KEYWORD SETTINGS_LIST

SETTINGS_STMT -> id equal id
SETTINGS_LIST -> SETTINGS_STMT
SETTINGS_LIST -> SETTINGS_STMT comma SETTINGS_LIST
SETTINGS_STMT -> ε

COLUMN_DEF_LIST -> COLUMN_DEF
COLUMN_DEF_LIST -> COLUMN_DEF comma COLUMN_DEF_LIST

ASSIGNMENT_STMT -> COMPLEX_ID equal COMPLEX_ID

ASSIGNMENT_LIST -> ASSIGNMENT_STMT
ASSIGNMENT_LIST -> ASSIGNMENT_STMT comma ASSIGNMENT_LIST

SELECT_VALUE_LIST -> star
SELECT_VALUE_LIST -> VALUE
SELECT_VALUE_LIST -> VALUE comma SELECT_VALUE_LIST

INSERT_VALUE_LIST -> VALUE
INSERT_VALUE_LIST -> VALUE comma VALUE

VALUE -> id
VALUE -> METHOD_CALL
VALUE -> number
VALUE -> string
VALUE -> COMPLEX_ID
VALUE -> null
VALUE -> lbrace VALUE rbrace

COMPLEX_ID -> id
COMPLEX_ID -> COMPLEX_ID dot id

METHOD_CALL -> id lbrace VALUE rbrace
METHOD_CALL -> id lbrace rbrace

EXPRESSION -> COMPARRISON
EXPRESSION -> EXPRESSION BOOL_CONNECTIVE EXPRESSION
EXPRESSION -> lbrace EXPRESSION rbrace

COMPARRISON -> VALUE COMPARRISON_CONNECTIVE VALUE
COMPARRISON -> lbrace COMPARRISON rbrace

COMPARRISON_CONNECTIVE -> GT
COMPARRISON_CONNECTIVE -> LT
COMPARRISON_CONNECTIVE -> LTEQ
COMPARRISON_CONNECTIVE -> GTEQ
COMPARRISON_CONNECTIVE -> EQUAL
COMPARRISON_CONNECTIVE -> NEQ

BOOL_CONNECTIVE -> AND
BOOL_CONNECTIVE -> OR
BOOL_CONNECTIVE -> XOR

TABLES -> id
TABLES -> id comma TABLES
TABLES -> TABLES join TABLES on EXPRESSION
TABLES -> SELECT_QUERY
TABLES -> lbrace TABLES rbrace
```
</details>

<details>
  <summary>Expand Sytax for TYPE_KEYWORD</summary>
  
```
TYPE_KEYWORD -> select
TYPE_KEYWORD -> from
TYPE_KEYWORD -> update
TYPE_KEYWORD -> set
TYPE_KEYWORD -> where
TYPE_KEYWORD -> insert
TYPE_KEYWORD -> into
TYPE_KEYWORD -> create
TYPE_KEYWORD -> database
TYPE_KEYWORD -> table
TYPE_KEYWORD -> use
TYPE_KEYWORD -> drop
TYPE_KEYWORD -> if
TYPE_KEYWORD -> exists
TYPE_KEYWORD -> procedure
TYPE_KEYWORD -> begin
TYPE_KEYWORD -> end
TYPE_KEYWORD -> definer
TYPE_KEYWORD -> having
TYPE_KEYWORD -> count
TYPE_KEYWORD -> values
TYPE_KEYWORD -> join
TYPE_KEYWORD -> left
TYPE_KEYWORD -> right
TYPE_KEYWORD -> full
TYPE_KEYWORD -> outer
TYPE_KEYWORD -> order
TYPE_KEYWORD -> by
TYPE_KEYWORD -> asc
TYPE_KEYWORD -> dsc
TYPE_KEYWORD -> as
TYPE_KEYWORD -> auto_increment
TYPE_KEYWORD -> in
TYPE_KEYWORD -> like
TYPE_KEYWORD -> view
TYPE_KEYWORD -> xor
TYPE_KEYWORD -> null
TYPE_KEYWORD -> random
TYPE_KEYWORD -> int
TYPE_KEYWORD -> bigint
TYPE_KEYWORD -> bit
TYPE_KEYWORD -> bool
TYPE_KEYWORD -> btree
TYPE_KEYWORD -> cascade
TYPE_KEYWORD -> case
TYPE_KEYWORD -> charset
TYPE_KEYWORD -> commit
TYPE_KEYWORD -> constraint
TYPE_KEYWORD -> int
TYPE_KEYWORD -> mediumblob
TYPE_KEYWORD -> mediumint
TYPE_KEYWORD -> mediumtext
TYPE_KEYWORD -> smallint
TYPE_KEYWORD -> start
TYPE_KEYWORD -> time
TYPE_KEYWORD -> timestamp
TYPE_KEYWORD -> timestampadd
TYPE_KEYWORD -> timestampdiff
TYPE_KEYWORD -> tinyblob
TYPE_KEYWORD -> tinyint
TYPE_KEYWORD -> tinytext
TYPE_KEYWORD -> varchar
TYPE_KEYWORD -> date
TYPE_KEYWORD -> datetime
TYPE_KEYWORD -> day
TYPE_KEYWORD -> day_hour
TYPE_KEYWORD -> day_microsecond
TYPE_KEYWORD -> day_minute
TYPE_KEYWORD -> day_second
TYPE_KEYWORD -> hour
TYPE_KEYWORD -> hour_microsecond
TYPE_KEYWORD -> hour_minute
TYPE_KEYWORD -> hour_second
TYPE_KEYWORD -> minute
TYPE_KEYWORD -> minute_microsecond
TYPE_KEYWORD -> minute_second
TYPE_KEYWORD -> second
TYPE_KEYWORD -> second_microsecond
TYPE_KEYWORD -> utc_date
TYPE_KEYWORD -> utc_time
TYPE_KEYWORD -> utc_timestamp
TYPE_KEYWORD -> replace
TYPE_KEYWORD -> engine
TYPE_KEYWORD -> avg
TYPE_KEYWORD -> algorithm
TYPE_KEYWORD -> rollback
TYPE_KEYWORD -> and
TYPE_KEYWORD -> or
TYPE_KEYWORD -> transaction
  ```
</details>




<details>
  <summary>Expand the First Set</summary>
  
```
PROGRAM -> begin|semicolon|select|update|delete|create|drop|use|alter|insert|id
SINGLE_STMT -> select|update|delete|create|drop|use|alter|insert|id
STMT -> semicolon|select|update|delete|create|drop|use|alter|insert|id
STMT_LIST -> semicolon|select|update|delete|create|drop|use|alter|insert|id
SELECT_STMT -> select
UPDATE_STMT -> update
DELETE_STMT -> delete
DROP_STMT -> drop
CREATE_STMT -> create
CREATE_DB_STMT -> create
USE_DB_STMT -> use
ALTER_TABLE_STMT -> alter
INSERT_STMT -> insert
INSERT_VALUES -> lbrace
ALTER_MODIFICATION_LIST -> add|remove|change
ALTER_MODIFICATION -> add|remove|change
COLUMN_DEF -> id
SETTINGS_STMT -> id|ε
SETTINGS_LIST -> id|ε|comma
COLUMN_DEF_LIST -> id
ASSIGNMENT_STMT -> id
ASSIGNMENT_LIST -> id
SELECT_VALUE_LIST -> star|id|number|string|null|lbrace
INSERT_VALUE_LIST -> id|number|string|null|lbrace
VALUE -> id|number|string|null|lbrace
COMPLEX_ID -> id
METHOD_CALL -> id
EXPRESSION -> lbrace|id|number|string|null
COMPARRISON -> id|number|string|null|lbrace
COMPARRISON_CONNECTIVE -> GT|LT|LTEQ|GTEQ|EQUAL|NEQ
BOOL_CONNECTIVE -> AND|OR|XOR
TABLES -> id|SELECT_QUERY|lbrace
TYPE_KEYWORD -> select|from|update|set|where|insert|into|create|database|table|use|drop|if|exists|procedure|begin|end|definer|having|ount|values|join|left|right|full|outer|order|by|asc|dsc|as|auto_increment|in|like|view|xor|null|random|int|bigint|bit|bool|btree|cascade|case|charset|commit|constraint|mediumblob|mediumint|mediumtext|smallint|start|time|timestamp|timestampadd|timestampdiff|tinyblob|tinyint|tinytext|varchar|date|datetime|day|day_hour|day_microsecond|day_minute|day_second|hour|hour_microsecond|hour_minute|hour_second|minute|minute_microsecond|minute_second|second|second_microsecond|utc_date|utc_time|utc_timestamp|replace|engine|avg|algorithm|rollback|and|or|transaction
```
</details>


<details>
  <summary>Expand the Follow Set</summary>
 
```
PROGRAM -> ┤
SINGLE_STMT -> ┤|semicolon
STMT -> ┤|end|semicolon|select|update|delete|create|drop|use|alter|insert|id
STMT_LIST -> end
SELECT_STMT -> ┤|semicolon
UPDATE_STMT -> ┤|semicolon
DELETE_STMT -> ┤|semicolon
DROP_STMT -> ┤|semicolon
CREATE_STMT -> ┤|semicolon
CREATE_DB_STMT -> ┤|semicolon
USE_DB_STMT -> ┤|semicolon
ALTER_TABLE_STMT -> ┤|semicolon
INSERT_STMT -> ┤|semicolon
INSERT_VALUES -> ┤|comma|semicolon
ALTER_MODIFICATION_LIST -> ┤|semicolon
ALTER_MODIFICATION -> ┤|comma|semicolon
COLUMN_DEF -> ┤|comma|rbrace|semicolon
SETTINGS_STMT -> ┤|comma|rbrace|semicolon
SETTINGS_LIST -> ┤|comma|rbrace|semicolon
COLUMN_DEF_LIST -> rbrace
ASSIGNMENT_STMT -> ┤|where|comma|semicolon
ASSIGNMENT_LIST -> where|┤|semicolon
SELECT_VALUE_LIST -> from|┤|asc|desc|semicolon
INSERT_VALUE_LIST -> rbrace
VALUE -> from|┤|asc|desc|comma|rbrace|GT|LT|LTEQ|GTEQ|EQUAL|NEQ|order|semicolon|AND|OR|XOR|where|set|join|on
COMPLEX_ID -> where|equal|┤|from|asc|desc|comma|rbrace|dot|semicolon|GT|LT|LTEQ|GTEQ|EQUAL|NEQ|order|AND|OR|XOR|set|join|on
METHOD_CALL -> from|┤|asc|desc|comma|rbrace|GT|LT|LTEQ|GTEQ|EQUAL|NEQ|order|semicolon|AND|OR|XOR|where|set|join|on
EXPRESSION -> ┤|order|AND|OR|XOR|rbrace|where|set|join|on|semicolon
COMPARRISON -> ┤|order|rbrace|AND|OR|XOR|where|set|join|on|semicolon
COMPARRISON_CONNECTIVE -> id|number|string|null|lbrace
BOOL_CONNECTIVE -> lbrace|id|number|string|null
TABLES -> ┤|where|set|join|on|rbrace|semicolon
```
</details>
# Compile
npm run-script build
