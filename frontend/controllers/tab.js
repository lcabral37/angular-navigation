'use strict';

angular.module('tabsSample')
  .controller('tabCtrl',
    ['$scope', '$location', '$route',
  function($scope, $location) {
    $scope.tabs = [
      {heading: 'About', route: '/about'},
      {heading: 'Register', route: '/register'},
      {heading: 'Confirm', route: '/confirm'},
      {heading: 'Complete', route: '/complete'}
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };

}]);
