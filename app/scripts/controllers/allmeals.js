'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:AllmealsCtrl
 * @description
 * # AllmealsCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('AllmealsCtrl', ['$scope', 'Allmealsservice', function ($scope, Allmealsservice) {
  	$scope.allMeals = Allmealsservice.getAll();
  }]);
