const path = require('path');
require('webpack');

module.exports = {
	entry : [
		'@babel/polyfill',
		path.join(__dirname , 'client/')  + 'index.js'
	],
	output : {
		filename : 'client.bundle.js', // output filename
		path : path.resolve(__dirname, 'build'), // output path
		publicPath : '/'
	},

	module : {
		rules : [
			{
				test : /\.jsx?$/,
				exclude: /(node_modules)/,
				use : {
					loader : 'babel-loader',
					options : {
						presets : ['@babel/preset-env', '@babel/preset-react']
					},
				}
			}
		],
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
			extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
	},
};
