angular.module('jedd.ahyoung', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider
			.when('/about', { templateUrl: 'partials/about.html' })
			.when('/resume', { templateUrl: 'partials/resume.html' })
			.otherwise({ redirectTo: '/' });
	}]);