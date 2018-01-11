module.exports = [{
	test: /\.jsx?$/,
	exclude: /(node_modules\/)/,
	loader: 'babel-loader',
}, {
	test: /\.(css|scss|sass)$/,
	loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
	exclude: ['node_modules'],
}, {
	test: /\.(png|jpg|gif|jpeg|ico)$/,
	exclude: /(node_modules\/)/,
	loader: 'url-loader',
}];
