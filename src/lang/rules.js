// longer rules should always be on top to prioritize them

const RULES = 
`
TYPE_KEYWORD -> int
TYPE_KEYWORD -> bigint
TYPE_KEYWORD -> bit
TYPE_KEYWORD -> bool
TYPE_KEYWORD -> mediumblob
TYPE_KEYWORD -> mediumint
TYPE_KEYWORD -> mediumtext
TYPE_KEYWORD -> smallint
TYPE_KEYWORD -> timestamp
TYPE_KEYWORD -> tinyblob
TYPE_KEYWORD -> tinyint
TYPE_KEYWORD -> tinytext
TYPE_KEYWORD -> varchar
TYPE_KEYWORD -> date
TYPE_KEYWORD -> datetime

// SIMPLICATION
// FOR NOW WE JUST SUPPORT SINGLE STATEMENT PROGRAMS
PROGRAM -> SELECT_STMT
PROGRAM -> UPDATE_STMT
PROGRAM -> DELETE_STMT
PROGRAM -> CREATE_STMT
PROGRAM -> DROP_STMT
PROGRAM -> CREATE_DB_STMT
PROGRAM -> DROP_DB_STMT
PROGRAM -> USE_DB_STMT
PROGRAM -> ALTER_TABLE_STMT
PROGRAM -> INSERT_STMT
PROGRAM -> ASSIGNMENT_STMT


// PROGRAM -> SINGLE_STMT
// PROGRAM -> STMT
// PROGRAM -> begin transaction id semicolon STMT_LIST end transaction id semicolon
// SINGLE_STMT -> SELECT_STMT
// SINGLE_STMT -> UPDATE_STMT
// SINGLE_STMT -> DELETE_STMT
// SINGLE_STMT -> CREATE_STMT
// SINGLE_STMT -> DROP_STMT
// SINGLE_STMT -> CREATE_DB_STMT
// SINGLE_STMT -> USE_DB_STMT
// SINGLE_STMT -> ALTER_TABLE_STMT
// SINGLE_STMT -> INSERT_STMT
// SINGLE_STMT -> ASSIGNMENT_STMT
// STMT -> SINGLE_STMT semicolon
// STMT -> semicolon
// STMT_LIST -> STMT
// STMT_LIST -> STMT STMT_LIST

SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST asc
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST desc
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION order by SELECT_VALUE_LIST
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES where EXPRESSION
SELECT_STMT -> select SELECT_VALUE_LIST from TABLES

UPDATE_STMT -> update TABLES set ASSIGNMENT_LIST where EXPRESSION
UPDATE_STMT -> update TABLES set ASSIGNMENT_LIST

DELETE_STMT -> delete from COMPLEX_ID where EXPRESSION
DELETE_STMT -> delete from COMPLEX_ID

DROP_STMT -> drop table COMPLEX_ID

DROP_DB_STMT -> drop database COMPLEX_ID

CREATE_STMT -> create table COMPLEX_ID lbrace COLUMN_DEF_LIST rbrace SETTINGS_LIST

CREATE_DB_STMT -> create database COMPLEX_ID

USE_DB_STMT -> use database COMPLEX_ID

ALTER_TABLE_STMT -> alter table id ALTER_MODIFICATION_LIST

INSERT_STMT -> insert into COMPLEX_ID values INSERT_VALUES
INSERT_STMT -> insert into COMPLEX_ID lbrace ID_LIST rbrace values INSERT_VALUES

ID_LIST -> COMPLEX_ID comma ID_LIST
ID_LIST -> COMPLEX_ID

INSERT_VALUES -> lbrace INSERT_VALUE_LIST rbrace
INSERT_VALUES -> INSERT_VALUE_LIST

ALTER_MODIFICATION_LIST -> ALTER_MODIFICATION
ALTER_MODIFICATION_LIST -> ALTER_MODIFICATION comma ALTER_MODIFICATION

ALTER_MODIFICATION -> add column COLUMN_DEF
ALTER_MODIFICATION -> remove column id
ALTER_MODIFICATION -> change column id id COLUMN_DEF

COLUMN_DEF -> id TYPE_KEYWORD auto_increment SETTINGS_LIST
COLUMN_DEF -> id TYPE_KEYWORD SETTINGS_LIST

SETTINGS_STMT -> id eq id
SETTINGS_LIST -> SETTINGS_STMT
SETTINGS_LIST -> SETTINGS_STMT comma SETTINGS_LIST
SETTINGS_STMT -> epsilon

COLUMN_DEF_LIST -> COLUMN_DEF comma COLUMN_DEF_LIST
COLUMN_DEF_LIST -> COLUMN_DEF

ASSIGNMENT_STMT -> COMPLEX_ID eq VALUE

ASSIGNMENT_LIST -> ASSIGNMENT_STMT comma ASSIGNMENT_LIST
ASSIGNMENT_LIST -> ASSIGNMENT_STMT

SELECT_VALUE_LIST -> VALUE comma SELECT_VALUE_LIST
SELECT_VALUE_LIST -> VALUE
SELECT_VALUE_LIST -> star

INSERT_VALUE_LIST -> VALUE comma VALUE
INSERT_VALUE_LIST -> VALUE

VALUE -> COMPLEX_ID
VALUE -> METHOD_CALL
VALUE -> number
VALUE -> string
VALUE -> null
VALUE -> lbrace VALUE rbrace

COMPLEX_ID -> id period COMPLEX_ID
COMPLEX_ID -> id

METHOD_CALL -> COMPLEX_ID lbrace VALUE rbrace
METHOD_CALL -> COMPLEX_ID lbrace rbrace

EXPRESSION -> EXPRESSION BOOL_CONNECTIVE EXPRESSION
EXPRESSION -> lbrace EXPRESSION rbrace
EXPRESSION -> COMPARRISON

COMPARRISON -> VALUE COMPARRISON_CONNECTIVE VALUE
COMPARRISON -> lbrace COMPARRISON rbrace

COMPARRISON_CONNECTIVE -> gt
COMPARRISON_CONNECTIVE -> lt
COMPARRISON_CONNECTIVE -> lteq
COMPARRISON_CONNECTIVE -> gteq
COMPARRISON_CONNECTIVE -> eq
COMPARRISON_CONNECTIVE -> neq

BOOL_CONNECTIVE -> and
BOOL_CONNECTIVE -> or
BOOL_CONNECTIVE -> xor

ANY_JOIN -> left join
ANY_JOIN -> right join
ANY_JOIN -> full join
ANY_JOIN -> outer join
ANY_JOIN -> join

TABLES -> TABLES ANY_JOIN TABLES on EXPRESSION
TABLES -> COMPLEX_ID comma TABLES
TABLES -> COMPLEX_ID
TABLES -> SELECT_STMT
TABLES -> lbrace TABLES rbrace
`;

export default RULES;