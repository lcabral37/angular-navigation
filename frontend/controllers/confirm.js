'use strict';

angular.module('tabsSample')
  .controller('confirmCtrl',
    ['$scope', '$location',

  function($scope, $location) {
    $scope.user = {};

    $scope.loadUser = function(user) {
      var userString = localStorage.getItem('storedUser');
      if (userString) {
        $scope.user = JSON.parse(userString);
        $scope.user.fakePassword = "**********";
      } else {
        $location.path('/register');
      }
    };

    $scope.complete = function(user) {
      $location.path('/confirm');
    };

    $scope.loadUser();
}]);
