/*globals async:false, $:false*/

'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:MealCtrl
 * @description
 * # MealCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('MealCtrl', ['$scope', 'Foodservice', 'Allmealsservice', function ($scope, Foodservice, Allmealsservice) {

    function emptyMeal() {
      $scope.meal = {
        items: [],
        score: 0,
        metrics: {
          'energy_kcal': 0,
          'sodium_mg': 0,
          'protein_g': 0
        }
      };
    }

    function clearSearchResults() {
      $scope.foods = {};
      $scope.searchTerm = '';
    }

    emptyMeal();

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
        });
      });

      async.parallelLimit(tasks, 2, function () {
        $scope.someResults = Object.keys($scope.foods).some(function (key) {
          if ($scope.foods[key] && $scope.foods[key].length > 0) {
            return true;
          }

          return false;
        });
      });
    };

    $scope.getTotal = function (metric) {
      $scope.meal.metrics[metric] = 0;

      $scope.meal.items.forEach(function (item) {
        $scope.meal.metrics[metric] += item[metric];
      });

      return $scope.meal.metrics[metric];
    };

    $scope.checkScore = function () {
      var totalCalories = $scope.getTotal('energy_kcal');
      var totalSodium = $scope.getTotal('sodium_mg');
      var totalProtien = $scope.getTotal('protein_g');

      //Rudimentary score calculation
      //Numbers for comparson are derived from research and assumptions of consumer
      //See "/doc/calorie-intake.xlsx" for reference
      //TODO - Implement more encompassing scoring system that and include additional inputs such as consumer's gender and age
      //TODO - Add wider range of scores.  For now 1 = Good, 0 = Neutral, -1 = Bad
      if (totalCalories < 530 && totalSodium < 343 && totalProtien > 10) {
        $scope.meal.score = 1;
      }
      else if (totalCalories >= 530 && totalSodium >= 343) {
        $scope.meal.score = -1;
      }
      else {
        $scope.meal.score = 0;
      }

      $('#check-score-modal').modal('toggle');
    };

    $scope.addMeal = function () {
      Allmealsservice.add($scope.meal);
      emptyMeal();
      clearSearchResults();
      $('#check-score-modal').modal('toggle');
    };

    $scope.$watchCollection('meal.items', function () {
      $scope.getTotal('energy_kcal');
    });

    $scope.$on('addItemToMeal', function (event, item) {
      var mealItem = angular.copy(item);
      mealItem.id = Date.now();

      $scope.meal.items.push(mealItem);
      console.log(item);
    });

    $scope.$on('removeMealItem', function (event, index) {
      $scope.meal.items.splice(index, 1);
    });
  }]);
