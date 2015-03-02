angular.module('example2Module',[ 'commonModule', 'ngResource']).controller('example2Controller', function($scope, $rootScope, $location, $resource) {

					$scope.search = {};

					$scope.clearSearch = function(){
						this.search.username = '';
					}


                    var restService = $resource("users");

					$scope.$watch("search.username", function(username) {
						restService.query({mask:username}).$promise.then(
								function(users){
									$scope.users = users;
									$scope.userFound = users.length==1 && users[0].username==username;
								},
								function(error){
									$scope.userFound = false;
								}
						)
					});
				});
