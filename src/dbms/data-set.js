import DataSetField from './data-set-field';

function duplicateFields(fields) {
	fields.map(f => new DataSetField(f.datasource, f.table, f.name, f.type, f.defaultValue));
}

export default class DataSet {
	constructor(name, fields) {
		this.name = name;
		this.fields = fields;
		this.data = [];
	}

	insert(dataForInsert) {
		let row = [];

		let fields = this.fields;

		for (let i = 0; i < fields.length; i++) {
			let field = fields[i];

			let val = dataForInsert.values[field.name];

			if (val) {
				row.push(val);
			} else {
				row.push(field.defaultValue);
			}
		}

		this.data.push(row);
	}

	massInsert(dataForMassInsert) {
		dataForMassInsert.values.forEach(row => this.data.push(row));
	}

	update(dataForUpdate) {
		let row = this.data[dataForUpdate.index];

		let fields = this.fields;
		for (let i = 0; i < fields.length; i++) {
			let field = fields[i];

			let val = dataForUpdate.values[field.name];

			if (val) {
				row[i] = val;
			}
		}
	}

	read(dataForRead) {
		let queryPredicates = dataForRead.queryPredicates;
		let fieldsToRead = dataForRead.fieldsToRead;

		let rows = [];

		let fieldsToIndex = {};

		for (let k = 0; k < this.fields.length; k++) {
			let field = this.fields[k];
			fieldsToIndex[field.name] = k;
		}

		for (let j = 0; j < queryPredicates.length; j++) {
			let queryPredicate = queryPredicates[j];
			
			if (!fieldsToIndex[queryPredicate.name]) {
				let msg = `A field with name '${queryPredicate.name}' does not exist`;
				
				if (this.name) {
					msg = `${msg} in the table ${this.name}`;
				}
				throw new CodeException(msg);
			}
		}



		for (let i = 0; i < this.data.length; i++) {
			let row = this.data[i];

			let matches = true;
			for (let j = 0; j < queryPredicates.length; j++) {
				let queryPredicate = queryPredicates[j];

				if (queryPredicate.compare == "=") {
					if (queryPredicate.value != row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				} else if (queryPredicate.compare == "<") {
					if (queryPredicate.value >= row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				} else if (queryPredicate.compare == ">") {
					if (queryPredicate.value <= row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				} else if (queryPredicate.compare == "<=") {
					if (queryPredicate.value > row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				} else if (queryPredicate.compare == ">=") {
					if (queryPredicate.value < row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				} else if (queryPredicate.compare == "!=") {
					if (queryPredicate.value == row[fieldsToIndex[queryPredicate.name]]) {
						matches = false;
						break;
					}
				}
			}

			if (matches) {
				let responseTuple = [];
				if (fieldsToRead === "ALL") {
					for (let o = 0; o < row.length; o++) {
						responseTuple.push(row[o]);
					}
				} else {
					for (let m = 0; m < fieldsToRead.length; m++) {
						let field = fieldsToRead[m];

						responseTuple.push(row[fieldsToIndex[field.name]]);
					}
				}

				rows.push(responseTuple);
			}
		}

		let resultFields = duplicateFields(fieldsToRead.map(field => this.fields[fieldsToIndex[field.name]]));

		let resultAlias = dataForRead.resultAlias || this.name;

		resultFields.forEach(f => f.table = resultAlias);

		// we need to create a new data set for this data 
		let result = new DataSet(resultAlias, resultFields);

		result.massInsert({values: rows});

		return result;
	}

	fullCross(dataSet) {
		let rows = [];

		let resultFields = [];

		duplicateFields(this.fields).forEach(field => {
			resultFields.push(field);
		});

		duplicateFields(dataSet.fields).forEach(field => {
			resultFields.push(field);	
		});

		this.data.forEach(leftRow => {
			dataSet.data.forEach(rightRow => {
				if (on(leftRow, rightRow)) {
					let responseTuple = [];
					for (let o = 0; o < leftRow.length; o++) {
						responseTuple.push(leftRow[o]);
					}
					for (let o = 0; o < rightRow.length; o++) {
						responseTuple.push(rightRow[o]);
					}
					rows.add(responseTuple)
				}
			});
		});

		let result = new DataSet("", resultFields);

		result.massInsert({values: rows});

		return result;
	}
}