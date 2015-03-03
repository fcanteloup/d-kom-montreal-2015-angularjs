angular.module('example4Module',[ 'commonModule']).controller('example4Controller', function($scope, $rootScope, $filter) {

					$scope.search = {};

					$scope.clearSearch = function(){
						this.search.username = '';
					}
					
					
					$scope.users = [
						 		 	{id:"1", username:'Fred'},
						 			{id:"2", username:'John'},
						 			{id:"3", username:'Paul'},
						 			{id:"4", username:'Alex'},
						 			{id:"5", username:'James'},
						 			{id:"6", username:'Kate'},
						 			{id:"7", username:'Anne'}
						 		]
					
					$scope.timestamp = 1417192430699;
					$scope.formattedTimestamp = $filter('date')($scope.timestamp, "dd/MM/yyyy");
					
					$scope.$watch("search.username", function(username) {
						$scope.fringed = $filter('fringes')(username, "$");
					});

				});
