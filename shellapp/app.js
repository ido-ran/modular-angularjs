var angular = require('angular');

var rootElement = document.getElementById('the-app');

module.exports.initApp = function(modulesToLoad) {

	var app = angular.module('myApp', modulesToLoad);
	angular.bootstrap(rootElement, ['myApp']);

	console.log('myApp angular module is bootstrapped');

}
