var path = require("path");
const webpack = require('webpack');
module.exports = {
	entry: {
		"moduleB": "./moduleB.js",
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].umd.js",
		library: "ModuleB",
		libraryTarget: "umd"
	},
	externals: [
		"angular"
	],
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
	]
};
