'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {

	$http.get('http://api.openweathermap.org/data/2.5/forecast?id=6325237&units=metric&lang=es').
	  success(function(data, status, headers, config) {
	  	console.log(data);
	    $scope.data = data;
	  }).
	  error(function(data, status, headers, config) {
	    alert("error get");
	  });

}]);