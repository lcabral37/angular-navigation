'use strict';

angular.module('tabsSample', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl',
      activetab: 'about'
  })

  .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'registerCtrl',
      activetab: 'register'
  })

  .when('/confirm', {
      templateUrl: 'views/confirm.html',
      controller: 'confirmCtrl',
      activetab: 'confirm'
  })

  .when('/complete', {
      templateUrl: 'views/complete.html',
      controller: 'completeCtrl',
      activetab: 'complete'
  })

  .otherwise({
    redirectTo: '/about'});
}]);
