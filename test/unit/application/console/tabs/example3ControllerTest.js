'use strict';

describe('example3Controller test', function() {
	var $scope, $rootScope, userREST, restDeferred;
	var defaulUserList = [
			 		 	{id:"1", username:'Fred'},
			 			{id:"2", username:'John'}
			 		];

	beforeEach(function() {
		this.addMatchers({
			toEqualData : function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

	beforeEach(module('example3Module'));
	
	beforeEach(inject(function(_$rootScope_, $controller, $q) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		
		restDeferred = $q.defer();
		userREST = jasmine.createSpyObj('restService', ['query']);
		userREST.query.andReturn({
			$promise:restDeferred.promise
		});

		var $resource = function(){
			return userREST;
		};
		
		$controller('example3Controller', {
			$scope:$scope,
			$resource:$resource
		});

	}));
	it('controller should initialise with empty mask and no list', function() {
		$rootScope.$digest();
		expect(userREST.query).toHaveBeenCalledWith({mask:''});
		
		expect($scope.alerts).toBeUndefined();
		expect($scope.users).toBeUndefined();
		expect($scope.userFound).toBeUndefined();

		restDeferred.resolve(defaulUserList);
		$rootScope.$digest();
		
		expect($scope.users).toEqualData(defaulUserList);
		expect($scope.userFound).toBe(false);
		expect($scope.alerts).toEqualData([]);

	});

	it('controller should return empty user list and alerts when query returns nothing', function() {
		$scope.search.username = 'notmeaningful';
		$rootScope.$digest();
		expect(userREST.query).toHaveBeenCalledWith({mask:'notmeaningful'});
		
		expect($scope.alerts).toBeUndefined();
		expect($scope.users).toBeUndefined();
		expect($scope.userFound).toBeUndefined();

		restDeferred.resolve([]);
		$rootScope.$digest();
		
		expect($scope.users).toEqualData([]);
		expect($scope.userFound).toBe(false);
		expect($scope.alerts).toEqualData([{successful:false, message:'no.user.found'},{successful:false, message:'tryAgain'}]);

	});

	it('controller should return shoudl set userFound flag to true when exact match is found', function() {
		$scope.search.username = 'John';
		$rootScope.$digest();
		expect(userREST.query).toHaveBeenCalledWith({mask:'John'});
		
		expect($scope.alerts).toBeUndefined();
		expect($scope.users).toBeUndefined();
		expect($scope.userFound).toBeUndefined();

		restDeferred.resolve([defaulUserList[1]]);
		$rootScope.$digest();
		
		expect($scope.users).toEqualData([defaulUserList[1]]);
		expect($scope.userFound).toBe(true);
		expect($scope.alerts).toEqualData([{successful:true, message:'users.found'}]);

	});

});
