'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:TopCtrl
 * @description
 * # TopCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('TopCtrl', function ($scope) {
    $scope.all = {
    	meals: []
    };

    $scope.showAllMeals = function () {
    	console.log($scope.all);
    }

    $scope.$on('addMeal', function (event, meal) {
    	$scope.all.meals.push(meal);
    })
  });
