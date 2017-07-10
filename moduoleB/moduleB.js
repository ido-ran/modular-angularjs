var angular = require('angular');

var rootElement = document.getElementById('the-app');

module.exports.initModule = function() {

	rootElement.appendChild(document.createElement('module-b-dir'));

	var moduleB = angular.module('moduleB', []);
	// app.controller('myCtrl', function($scope) {
	//     $scope.firstName = "John";
	//     $scope.lastName = "Doe";
	// });
	moduleB.directive('moduleBDir', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div>Module B is the best</div>',
			controllerAs: 'ctrl',
			scope: true
		};
	});

}
