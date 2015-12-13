'use strict';

angular.module('tabsSample')
  .controller('completeCtrl',
    ['$scope', '$location',

  function($scope, $location) {

    $scope.sendUser = function(user) {
      var userString = localStorage.getItem('storedUser') || null;
      if (userString) {
        $scope.user = JSON.parse(userString);
        // This is where we would send the data to the server
        // @todo create a user service with a method to send
        //Clean the user so when we reload the page we will be taken back
         localStorage.removeItem('storedUser');
      } else {
        $location.path('/register');
      }
    };

    $scope.sendUser();
}]);
