'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:TopCtrl
 * @description
 * # TopCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('TopCtrl', ['$scope', 'Allmealsservice', function ($scope, Allmealsservice) {
  	$scope.allMealsCount = Allmealsservice.getAll().length;

  	$scope.$on('mealAdded', function () {
	  	$scope.allMealsCount = Allmealsservice.getAll().length;
  	});
  }]);
