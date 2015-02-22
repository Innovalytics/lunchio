'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:MealCtrl
 * @description
 * # MealCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('MealCtrl', ['$scope', 'Foodservice', function ($scope, Foodservice) {
  	$scope.foods = {};
    $scope.someResults = true;

    $scope.doSearch = function() {
      var term = $scope.searchTerm;
      var tasks = [];

      $scope.someResults = true;
      
      Object.keys(Foodservice.categories).forEach(function (key) {
        tasks.push(function (callback) {
          Foodservice.find(key, term, function (err, foods) {
            $scope.foods[key] = foods;
            callback();
          });
        })
      });

      async.parallelLimit(tasks, 2, function (err) {
        $scope.someResults = Object.keys($scope.foods).some(function (key) {
          if ($scope.foods[key] && $scope.foods[key].length > 0) {
            return true;
          }

          return false;
        });
      });
    }
  }]);
