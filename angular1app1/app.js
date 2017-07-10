var angular = require('angular');

var rootElement = document.getElementById('the-app');

module.exports.initApp = function() {

	rootElement.appendChild(document.createElement('my-dir'));

	var app = angular.module('myApp', []);
	// app.controller('myCtrl', function($scope) {
	//     $scope.firstName = "John";
	//     $scope.lastName = "Doe";
	// });
	app.directive('myDir', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div>this is the content of the directive wowowo</div>',
			controllerAs: 'ctrl',
			scope: true
		};
	});


	angular.bootstrap(rootElement, ['myApp']);

}
