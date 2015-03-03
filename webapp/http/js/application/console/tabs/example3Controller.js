angular.module('example3Module',['ngResource']).controller('example3Controller', function($scope, $resource) {

					$scope.search = {
							username:''
					};

					$scope.clearSearch = function(){
						this.search.username = '';
					}
					
					
    				var restService = $resource("users");

					$scope.$watch("search.username", function(username) {
						restService.query({mask:username}).$promise.then(
								function(users){
									$scope.users = users;
									$scope.userFound = users.length==1 && users[0].username===username;
									
									$scope.alerts = [];

                                    if(username) {
                                        if ($scope.users.length == 0) {
                                            $scope.alerts.push({successful: false, message: 'no.user.found'});
                                            $scope.alerts.push({successful: false, message: 'tryAgain'});
                                        } else {
                                            $scope.alerts.push({successful: true, message: 'users.found'});
                                        }
                                    }
								},
								function(error){
									$scope.userFound = false;
								}
						)
						
					});
					
				});
