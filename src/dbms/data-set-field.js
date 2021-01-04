export default class DataSetField {
	constructor(datasource, table, name, type, defaultValue) {
		this.datasource = datasource;
		this.table = table;
		this.name = name;
		this.type = type;
		this.defaultValue = defaultValue;
	}
}