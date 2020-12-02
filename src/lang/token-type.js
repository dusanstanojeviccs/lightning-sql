const TokenType = {
	SELECT: "SELECT",
	FROM: "FROM",
	UPDATE: "UPDATE",
	SET: "SET",
	WHERE: "WHERE",
	INSERT: "INSERT",
	INTO: "INTO",
	CREATE: "CREATE",
	DATABASE: "DATABASE",
	TABLE: "TABLE",
	USE: "USE",
	DROP: "DROP",
	IF: "IF",
	EXISTS: "EXISTS",
	PROCEDURE: "PROCEDURE",
	BEGIN: "BEGIN",
	END: "END",
	DEFINER: "DEFINER",
	HAVING: "HAVING",
	COUNT: "COUNT",
	VALUES: "VALUES",
	JOIN: "JOIN",
	LEFT: "LEFT",
	RIGHT: "RIGHT",
	FULL: "FULL",
	OUTER: "OUTER",
	ORDER: "ORDER",
	BY: "BY",
	ASC: "ASC",
	DSC: "DSC",
	AS: "AS",
	AUTO_INCREMENT: "AUTO_INCREMENT",
	IN: "IN",
	LIKE: "LIKE",
	VIEW: "VIEW",
	XOR: "XOR",
	NULL: "NULL",
	RANDOM: "RANDOM",
	INT: "INT",
	BIGINT: "BIGINT",
	BIT: "BIT",
	BOOL: "BOOL",
	BTREE: "BTREE",
	CASCADE: "CASCADE",
	CASE: "CASE",
	CHARSET: "CHARSET",
	COMMIT: "COMMIT",
	CONSTRAINT: "CONSTRAINT",
	INT: "INT",
	MEDIUMBLOB: "MEDIUMBLOB",
	MEDIUMINT: "MEDIUMINT",
	MEDIUMTEXT: "MEDIUMTEXT",
	SMALLINT: "SMALLINT",
	START: "START",
	TIME: "TIME",
	TIMESTAMP: "TIMESTAMP",
	TIMESTAMPADD: "TIMESTAMPADD",
	TIMESTAMPDIFF: "TIMESTAMPDIFF",
	TINYBLOB: "TINYBLOB",
	TINYINT: "TINYINT",
	TINYTEXT: "TINYTEXT",
	VARCHAR: "VARCHAR",
	DATE: "DATE",
	DATETIME: "DATETIME",
	DAY: "DAY",
	DAY_HOUR: "DAY_HOUR",
	DAY_MICROSECOND: "DAY_MICROSECOND",
	DAY_MINUTE: "DAY_MINUTE",
	DAY_SECOND: "DAY_SECOND",
	HOUR: "HOUR",
	HOUR_MICROSECOND: "HOUR_MICROSECOND",
	HOUR_MINUTE: "HOUR_MINUTE",
	HOUR_SECOND: "HOUR_SECOND",
	MINUTE: "MINUTE",
	MINUTE_MICROSECOND: "MINUTE_MICROSECOND",
	MINUTE_SECOND: "MINUTE_SECOND",
	SECOND: "SECOND",
	SECOND_MICROSECOND: "SECOND_MICROSECOND",
	UTC_DATE: "UTC_DATE",
	UTC_TIME: "UTC_TIME",
	UTC_TIMESTAMP: "UTC_TIMESTAMP",
	REPLACE: "REPLACE",
	ENGINE: "ENGINE",
	AVG: "AVG",
	ALGORITHM: "ALGORITHM",
	ROLLBACK: "ROLLBACK",
	TRANSACTION: "TRANSACTION",
	AND: "AND",
	OR: "OR",
	// everything above this line is a keyword
	ID: "ID",
	LBRACE: "LBRACE",
	RBRACE: "RBRACE",
	SEMICOLON: "SEMICOLON",
	COMMA: "COMMA",
	PERIOD: "PERIOD",
	STAR: "STAR",
	EQ: "EQ",
	LT: "LT",
	LTEQ: "LTEQ",
	GT: "GT",
	GTEQ: "GTEQ",
	NEQ: "NEQ",
	STRING: "STRING",
	NUMBER: "NUMBER",

	EOF: "END-OF-FILE"
};

TokenType.KEYWORDS = [
	TokenType.SELECT,
	TokenType.FROM,
	TokenType.UPDATE,
	TokenType.SET,
	TokenType.WHERE,
	TokenType.INSERT,
	TokenType.INTO,
	TokenType.CREATE,
	TokenType.DATABASE,
	TokenType.TABLE,
	TokenType.USE,
	TokenType.DROP,
	TokenType.IF,
	TokenType.EXISTS,
	TokenType.PROCEDURE,
	TokenType.BEGIN,
	TokenType.END,
	TokenType.DEFINER,
	TokenType.HAVING,
	TokenType.COUNT,
	TokenType.VALUES,
	TokenType.JOIN,
	TokenType.LEFT,
	TokenType.RIGHT,
	TokenType.FULL,
	TokenType.OUTER,
	TokenType.ORDER,
	TokenType.BY,
	TokenType.ASC,
	TokenType.DSC,
	TokenType.AS,
	TokenType.AUTO_INCREMENT,
	TokenType.IN,
	TokenType.LIKE,
	TokenType.VIEW,
	TokenType.XOR,
	TokenType.NULL,
	TokenType.RANDOM,
	TokenType.INT,
	TokenType.BIGINT,
	TokenType.BIT,
	TokenType.BOOL,
	TokenType.BTREE,
	TokenType.CASCADE,
	TokenType.CASE,
	TokenType.CHARSET,
	TokenType.COMMIT,
	TokenType.CONSTRAINT,
	TokenType.INT,
	TokenType.MEDIUMBLOB,
	TokenType.MEDIUMINT,
	TokenType.MEDIUMTEXT,
	TokenType.SMALLINT,
	TokenType.START,
	TokenType.TIME,
	TokenType.TIMESTAMP,
	TokenType.TIMESTAMPADD,
	TokenType.TIMESTAMPDIFF,
	TokenType.TINYBLOB,
	TokenType.TINYINT,
	TokenType.TINYTEXT,
	TokenType.VARCHAR,
	TokenType.DATE,
	TokenType.DATETIME,
	TokenType.DAY,
	TokenType.DAY_HOUR,
	TokenType.DAY_MICROSECOND,
	TokenType.DAY_MINUTE,
	TokenType.DAY_SECOND,
	TokenType.HOUR,
	TokenType.HOUR_MICROSECOND,
	TokenType.HOUR_MINUTE,
	TokenType.HOUR_SECOND,
	TokenType.MINUTE,
	TokenType.MINUTE_MICROSECOND,
	TokenType.MINUTE_SECOND,
	TokenType.SECOND,
	TokenType.SECOND_MICROSECOND,
	TokenType.UTC_DATE,
	TokenType.UTC_TIME,
	TokenType.UTC_TIMESTAMP,
	TokenType.REPLACE,
	TokenType.ENGINE,
	TokenType.AVG,
	TokenType.ALGORITHM,
	TokenType.ROLLBACK,
	TokenType.AND,
	TokenType.OR,
	TokenType.TRANSACTION
];

export default TokenType;