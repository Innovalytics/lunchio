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
    $scope.meal = {
      items: [],
      metrics: {
        energy_kcal: 0
      }
    };

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

    $scope.getTotal = function (metric) {
      $scope.meal.metrics[metric] = 0;
      
      $scope.meal.items.forEach(function (item) {
        $scope.meal.metrics[metric] += item[metric];
      });
    }

    $scope.$watchCollection('meal.items', function () {
      $scope.getTotal('energy_kcal');
    })

    $scope.$on('addItemToMeal', function (event, item) {
      var mealItem = angular.copy(item);
      mealItem.id = Date.now();

      $scope.meal.items.push(mealItem);
      console.log(item);
    })

    $scope.$on('removeMealItem', function (event, index) {
      $scope.meal.items.splice(index, 1);
    })
  }]);
