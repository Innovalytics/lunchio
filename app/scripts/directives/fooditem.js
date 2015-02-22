'use strict';

/**
 * @ngdoc directive
 * @name lunchioApp.directive:foodItem
 * @description
 * # foodItem
 */
angular.module('lunchioApp')
  .directive('foodItem', function () {
    return {
      templateUrl: 'templates/fooditem.html',
      restrict: 'E',
      scope: {
      	item: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
