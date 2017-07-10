var path = require("path");
const webpack = require('webpack');
module.exports = {
	entry: {
		"app": "./app.js",
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].umd.js",
		library: "App1",
		libraryTarget: "umd"
	},
	externals: [
		"angular"
	],
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
	]
};
