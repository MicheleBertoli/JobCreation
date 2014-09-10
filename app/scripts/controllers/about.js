'use strict';

/**
 * @ngdoc function
 * @name jobCreationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobCreationApp
 */
angular.module('jobCreationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
