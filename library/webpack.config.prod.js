'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(process.cwd());
const APP_PATH = path.resolve(ROOT_PATH, 'src');

let webpackConfig = {
	entry: {
		main: './src/index.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [new CleanWebpackPlugin(['dist'])],
};

module.exports = webpackConfig;
