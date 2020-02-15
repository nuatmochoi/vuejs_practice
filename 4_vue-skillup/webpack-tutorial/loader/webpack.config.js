var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
				//use: ['style-loader', 'css-loader'],
			},
			// {
			//     test: /\.js$/,
			//     use: 'babel-loader'
			// },
			// {
			//     test: /\.vue$/,
			//     use: 'vue-loader'
			// }
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
