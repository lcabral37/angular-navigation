'use strict';

angular.module('tabsSample')
  .controller('registerCtrl',
    ['$scope', '$location',

  function($scope, $location) {

    $scope.loadUser = function(user) {
      var userString = localStorage.getItem('storedUser');

      $scope.user = userString ? JSON.parse(userString) : {};
    }

    $scope.register = function(user) {
      // test
      if(! $scope.checkPassword(user.password, user.passwordCheck)) {
        return false;
      }
      //Store
      localStorage.setItem('storedUser', JSON.stringify(user));
      //move on
      $location.path('/confirm');
    };

    $scope.checkPassword = function (password, password2) {
      delete $scope.passwordError;
      delete $scope.passwordCheckError;

      if (!password || password.trim() == '') {
        $scope.passwordError = "Password cannot be empty";
        return false;
      }

      if (!password2 || password != password2) {
        $scope.passwordCheckError = "Passwords  do not match";
        return false;
      }

      return true;
    }

    $scope.loadUser();
}]);
