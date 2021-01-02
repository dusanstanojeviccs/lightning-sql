import CodeException from './code-exception';

export default class Storage {
	constructor(config) {
		this.config = config;

		this.databases = {};
	}

	createDatabase(trx, data) {
		// we need to create a db
		
		let databaseName = data.databaseName;

		if (this.databases[databaseName]) {
			throw new CodeException(`A db with name '${databaseName}' already exists`);
		}

		this.databases[databaseName] = {};
	}
	createTable(trx, data) {
		// we need to create a table
		
		let databaseName = data.databaseName;

		if (!this.databases[databaseName]) {
			throw new CodeException(`A db with name '${databaseName}' does not exist`);
		}

		let database = this.databases[databaseName];

		let tableName = data.tableName;

		if (database[tableName]) {
			throw new CodeException(`A table with name '${tableName}' already exists`);
		}

		let table = {
			meta: {
				tableName: tableName,
				fields: data.fields
			},
			data: []
		};

		database[tableName] = table;
	}
	insertRecord(trx, data) {
		let databaseName = data.databaseName;

		if (!this.databases[databaseName]) {
			throw new CodeException(`A db with name '${databaseName}' does not exist`);
		}

		let tableName = data.tableName;

		if (database[tableName]) {
			throw new CodeException(`A table with name '${tableName}' does not exist`);
		}

		let database = this.databases[databaseName];
		let table = database[tableName];

		let row = [];

		let fields = table.meta.fields;
		for (let i = 0; i < fields.length; i++) {
			let field = fields[i];

			let val = data.values[field.name];

			if (val) {
				row.push(val);
			} else {
				row.push(field.default);
			}
		}

		table.data.push(row);
	}
	updateRecord(trx, data) {
		let databaseName = data.databaseName;

		if (!this.databases[databaseName]) {
			throw new CodeException(`A db with name '${databaseName}' does not exist`);
		}

		let tableName = data.tableName;

		if (database[tableName]) {
			throw new CodeException(`A table with name '${tableName}' does not exist`);
		}

		let database = this.databases[databaseName];
		let table = database[tableName];

		let row = table.data[data.index];

		let fields = table.meta.fields;
		for (let i = 0; i < fields.length; i++) {
			let field = fields[i];

			let val = data.values[field.name];

			if (val) {
				row[i] = val;
			}
		}
	}
	readRecords(trx, data) {
		let databaseName = data.databaseName;

		if (!this.databases[databaseName]) {
			throw new CodeException(`A db with name '${databaseName}' does not exist`);
		}

		let tableName = data.tableName;

		if (database[tableName]) {
			throw new CodeException(`A table with name '${tableName}' does not exist`);
		}

		let database = this.databases[databaseName];
		let table = database[tableName];

		let rows = [];

		let fieldsToIndex = [];

		for (let j = 0; j < data.query.fields.length; j++) {
			let found = false;
			for (let k = 0; k < table.meta.fields.length; k++) {
				if (table.meta.fields[k].name == data.query.fields[j].name) {
					fieldsToIndex.push(k);
					found = true;
					break;
				}
			}

			if (!found) {
				throw new CodeException(`A field with name '${table.meta.fields[k].name}' does not exist in the table ${tableName}`);
			}
		}

		for (let i = 0; i < table.data.length; i++) {
			let row = table.data[i];

			let matches = true;
			for (let j = 0; j < data.query.fields.length; j++) {
				let queryField = data.query.fields[j];

				if (queryField.compare == "=") {
					if (queryField.value != row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				} else if (queryField.compare == "<") {
					if (queryField.value >= row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				} else if (queryField.compare == ">") {
					if (queryField.value <= row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				} else if (queryField.compare == "<=") {
					if (queryField.value > row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				} else if (queryField.compare == ">=") {
					if (queryField.value < row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				} else if (queryField.compare == "!=") {
					if (queryField.value == row[fieldsToIndex[j]]) {
						matches = false;
						break;
					}
				}
			}

			if (matches) {
				rows.push(row);
			}
		}

		return rows;
	}
}