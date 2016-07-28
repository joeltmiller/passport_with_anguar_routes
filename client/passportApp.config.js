angular.module('passportApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .when('/success', {
      templateUrl: '/views/success.html'
    })
    .when('/failure', {
      templateUrl: '/views/failure.html'
    })

  $locationProvider.html5Mode(true);
}]);
