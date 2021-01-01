import TokenType from '../lang/token-type';

export default class DataInfo {
	constructor(datasource, database, identifier, supportedOperations) {
		this.datasource = datasource;
		this.database = database;
		this.identifier = identifier;
		this.supportedOperations = supportedOperations;
	}
}