angular.module('jedd.ahyoung', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider
			.when('/about', { templateUrl: 'partials/about.html' })
			.when('/work', { templateUrl: 'partials/work.html' })
			.when('/resume', { templateUrl: 'partials/resume.html' })
			.when('/contact', { templateUrl: 'partials/contact.html' })
			.otherwise({ redirectTo: '/' });
	}]);