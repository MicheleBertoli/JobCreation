'use strict';

/**
 * @ngdoc function
 * @name jobCreationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobCreationApp
 */
angular.module('jobCreationApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    $scope.locations = [
      'flat',
      'house',
      'room'
    ];
    $scope.locationsCounter = -1;

    $scope.changeLocation = function () {
      $scope.location = $scope.locations[++$scope.locationsCounter % $scope.locations.length];
    };

    $scope.products = [
      'I have cleaning products',
      'I don\'t have cleaning products'
    ];
    $scope.productsCounter = -1;

    $scope.changeProduct = function () {
      $scope.product = $scope.products[++$scope.productsCounter % $scope.products.length];
    };

    $scope.init = function () {
      $timeout(function () {
         $scope.loaded = true;
      });
      $scope.changeLocation();
      $scope.changeProduct();
    };

  });
