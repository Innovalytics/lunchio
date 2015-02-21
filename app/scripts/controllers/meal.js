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

  	Foodservice.find('sweets', function (err, foods) {
  		$scope.foods.sweets = foods;
  	});

  	Foodservice.find('fastfoods', function (err, foods) {
  		$scope.foods.fastfoods = foods;
  	});

  	Foodservice.find('snacks', function (err, foods) {
  		$scope.foods.snacks = foods;
  	});
  }]);
