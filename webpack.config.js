var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'main.js'
	},
	module: {
		loaders: [
		  {
		    test: /\.js$/,
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel-loader',
		    query: {
		      presets: ['es2015']
		    }
		  }
		]
	}
}