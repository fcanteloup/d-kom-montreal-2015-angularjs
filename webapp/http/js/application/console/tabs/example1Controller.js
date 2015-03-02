angular.module('example1Module',[ 'commonModule']).controller('example1Controller', function($scope, $rootScope, $location) {

    $scope.search = {};

    $scope.clearSearch = function(){
        this.search.username = 'somevalue';
    }


});
