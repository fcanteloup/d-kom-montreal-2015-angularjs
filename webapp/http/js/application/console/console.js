'use strict';

/* App Module */

angular.module('consoleApp', [ 'commonModule', 'ngRoute', 'example1Module', 'example2Module', 'example3Module', 'example4Module'])
		.config(['$routeProvider', function($routeProvider) {

					  $routeProvider
					  .when('/example1', {templateUrl: 'views/example1.html', controller: 'example1Controller'})
					  .when('/example2', {templateUrl: 'views/example2.html', controller: 'example2Controller'})
					  .when('/example3', {templateUrl: 'views/example3.html', controller: 'example3Controller'})
					  .when('/example4', {templateUrl: 'views/example4.html', controller: 'example4Controller'})
					  .otherwise({redirectTo : '/example1'});
					  //$locationProvider.html5Mode(true).hashPrefix('!');
					  

		}]).run(function ($rootScope, $routeParams, $route, $location) {

					$rootScope.currentPath = function() {
						return $route.current.originalPath;
					};
					$rootScope.$on( "$routeChangeStart",function(event, next, current){
						//console.info(next.params)
					});

				});