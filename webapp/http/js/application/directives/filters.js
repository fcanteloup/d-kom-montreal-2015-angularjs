/**
 * aimed at printing deep property of an object
 */
angular.module('myFilters', []).filter("fringes", function() {
	return function(entity, character) {
		return entity?(character+entity+character):'';
	};
});