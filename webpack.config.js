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
	devtool: 'inline-source-map',
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
        new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			//处理后目标位置
			filename: path.join(__dirname, 'build/index.html'),
			//模板位置
			template: './index.html',
			//是否插入
			inject: 'body',
			chunks: ['vendor','main']
		})
	]
};