myAppDev = angular.module('e2eBackendMocks', [ 'ngMockE2E']);
myAppDev.run(function($httpBackend, $rootScope, $filter) {
	$httpBackend.whenGET('./ressources/languages/en_US.json').respond(
	[
	 	{'no.user.found':'No user found'},
	 	{'users.found':'Some users have been found'},
	 	{'tryAgain':'Try again'},
	 	{'reinitSearch':'Re init search'},
	 	{'navigation.tabs.example1':'2-way binding'},
	 	{'navigation.tabs.example2':'Editable dropdown'},
	 	{'navigation.tabs.example3':'Directives'},
	 	{'navigation.tabs.example4':'Filters'},
		{'tabs.search.topic.lookupCustomers' : 'Lookup user'},
		{'tabs.search.label' : 'username'}
	]);
	
	var users = [
	 		 	{id:"1", username:'Fred'},
	 			{id:"2", username:'John'},
	 			{id:"6", username:'Kate'},
	 			{id:"3", username:'Paul'},
	 			{id:"7", username:'Anne'},
	 			{id:"4", username:'Alex'},
	 			{id:"5", username:'James'}
	 		]



    $httpBackend.when('GET', /users/, function(){return true}, function(){return true}).respond(function(method, url, data, headers){
        var index = url.indexOf("?mask=");
        var mask = index>1?url.substring(index+6):'';
        var filtered = $filter('filter')(users, mask);
        return [200, filtered];
    });

	//one only mocks the call to i18n resources
	$httpBackend.whenGET(/^views\//).passThrough();
	$httpBackend.whenGET(/^templates\//).passThrough();
});
angular.module('consoleApp').requires.push('e2eBackendMocks');