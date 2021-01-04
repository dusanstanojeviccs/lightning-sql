import CodeException from './code-exception';
import DataSet from './data-set';

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

		database[tableName] = new DataSet(tableName, data.fields);
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
		let table = database[tableName]; // table is a dataset

		table.insert(data);
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

		table.update(data);
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

		return table.read(data);
	}
}