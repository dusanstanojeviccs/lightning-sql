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

		table.data.push(data.values);		
	}
	updateRecord(trx, data) {

	}
	readRecord(trx, data) {

	}
}