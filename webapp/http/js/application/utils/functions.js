angular.module('functionsModule',[])
.factory('timedAlert', function($rootScope) {
	return function(model, field, alerts) {
		model[field] = alerts;
		setTimeout(function() {
			delete model[field];
			$rootScope.$digest();
		}, 3000);
	};
});