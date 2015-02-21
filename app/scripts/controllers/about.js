'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
