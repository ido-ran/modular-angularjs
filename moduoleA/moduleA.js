var angular = require('angular');

var rootElement = document.getElementById('the-app');

module.exports.initModule = function() {

	rootElement.appendChild(document.createElement('my-dir'));

	var moduleA = angular.module('moduleA', []);
	// app.controller('myCtrl', function($scope) {
	//     $scope.firstName = "John";
	//     $scope.lastName = "Doe";
	// });
	moduleA.directive('myDir', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div>this is the content of moduleA</div>',
			controllerAs: 'ctrl',
			scope: true
		};
	});

}
