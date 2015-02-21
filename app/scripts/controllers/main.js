'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
