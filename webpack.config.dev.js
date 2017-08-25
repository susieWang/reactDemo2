var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main :[
			'./app/main.js',
			'webpack-hot-middleware/client'
		],
		vendor: ['react','react-dom','react-router']
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
		publicPath:'/'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loaders: ['react-hot-loader','babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	},
	plugins:[		
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.HotModuleReplacementPlugin()
	]
};