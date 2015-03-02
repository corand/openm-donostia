'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/actual', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope,$http) {

	$http.get('http://api.openweathermap.org/data/2.5/weather?id=6325237&units=metric&lang=es').
	  success(function(data, status, headers, config) {
	  	console.log(data);
	    $scope.data = data;
	  }).
	  error(function(data, status, headers, config) {
	    alert("error get");
	  });

}]);