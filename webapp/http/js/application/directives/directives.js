angular.module('alertsDirective', [])
.directive('alertsBox', function () {
	  return {
		    templateUrl: 'templates/directives/alerts.html',
		    restrict: 'E', // it kicks in on <alerts-box> elements
		    transclude: true,//replaces <alerts-box> tag with template content
		    replace: false,
		    scope: {
		      alerts: '='
		    },
		    link: function (scope, element, attrs) {
    			scope.dismissAlert = function(index){
    				scope.alerts.splice(index, 1);
    			};
		    }
		  };
		})
.directive('ngCrazy', function () {
	  return {
		    restrict: 'A', // it kicks in on attribute ng-crazy="" or data-ng-crazy=""
		    transclude: true,
		    replace: false,
		    scope: {
		    	ngCrazy : '@',
		    	ngModel : '='
		    },
		    link: function (scope, element, attrs) {
  			
		    	var size = attrs.ngCrazy;
		    	console.info(scope.ngCrazy, size)
		    	
		    	element.css("border-width", size)
		    	scope.$watch("ngModel",function(modelValue){
		    		console.info(element)
		    		element.css("border-color", getRandomColor())
		    	})
		    	
		    	function getRandomColor() {
		    	    var letters = '0123456789ABCDEF'.split('');
		    	    var color = '#';
		    	    for (var i = 0; i < 6; i++ ) {
		    	        color += letters[Math.floor(Math.random() * 16)];
		    	    }
		    	    return color;
		    	}

		    }
		  };
		});