const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'lightning-sql.js',
		library: {
			name: 'lightningSql',
        	type: 'commonjs2',
		}
	},
	optimization: {
		minimize: false
	},
	watch: true
};
