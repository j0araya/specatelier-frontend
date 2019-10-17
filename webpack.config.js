const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
	return {
		entry: path.resolve(__dirname, 'src', 'main.js'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
		},
		devServer: {
			contentBase: './',
			port: 8080,
			compress: true,
			inline: true,
			historyApiFallback: true,
		},
		resolve: {
			extensions: ['.jsx', '.js'],
			alias: {
				Actions: path.resolve(__dirname, 'src/actions/'),
				Components: path.resolve(__dirname, 'src/components/'),
				Helpers: path.resolve(__dirname, 'src/helpers/'),
				Configuration: path.resolve(__dirname, 'src/config/'),
				Reducers: path.resolve(__dirname, 'src/reducers/'),
				Views: path.resolve(__dirname, 'src/views/'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
			],
		},
		externals: ['window'],
		plugins: [
			new webpack.ProgressPlugin(),
			new HtmlWebPackPlugin({
				template: './src/index.html',
			}),
			new webpack.DefinePlugin({
				ENVIRONMENT: JSON.stringify(env.NODE_ENV),
			}),
		],
	};
};
