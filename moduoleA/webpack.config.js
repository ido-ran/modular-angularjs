var path = require("path");
const webpack = require('webpack');
module.exports = {
	entry: {
		"moduleA": "./moduleA.js",
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].umd.js",
		library: "ModuleA",
		libraryTarget: "umd"
	},
	externals: [
		"angular"
	],
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
	]
};
