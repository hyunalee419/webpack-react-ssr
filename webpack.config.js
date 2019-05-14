const { resolve } = require('path');

module.exports = {
	context : resolve(__dirname, 'client'),
	entry : [
		'raf/polyfill',
		'@babel/polyfill',
		'./index.js'
	],
	output : {
		filename : 'client.bundle.js', // output filename
		path : resolve(__dirname, 'build'), // output path
		publicPath : '/'
	},

	module : {
		rules : [
			{
				test : /\.jsx?$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader',
					options : {
						presets : ['@babel/preset-env', '@babel/preset-react'],
						plugins: ["transform-es3-property-literals", "transform-es3-member-expression-literals"]
					},
				}
			}
		],
	}
};
