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
	},

	devtool: 'cheap-module-eval-source-map',

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

	plugins: [
		// new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(APP_PATH, `index.html`),
			filename: `index.html`,
		}),
	],

	devServer: {
		// disableHostCheck: true,
        port: 9004,
        contentBase: path.join(__dirname, "dist"),
        host: "127.0.0.1",
        openPage:'index.html'
	},
};

module.exports = webpackConfig;
