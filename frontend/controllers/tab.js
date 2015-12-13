'use strict';

angular.module('tabsSample')
  .controller('tabCtrl',
    ['$scope', '$location', '$route',
  function($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };

}]);
