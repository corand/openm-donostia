'use strict';

angular.module('myApp.dailyView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/diario', {
    templateUrl: 'dailyView/daily.html',
    controller: 'DailyCtrl'
  });
}])

.controller('DailyCtrl', ['$scope','$http',function($scope,$http) {

	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily/?id=6325237&units=metric&lang=es').
	  success(function(data, status, headers, config) {
	  	console.log(data);
	    $scope.data = data;
	  }).
	  error(function(data, status, headers, config) {
	    alert("error get");
	  });

}]);