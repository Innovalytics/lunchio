'use strict';

/**
 * @ngdoc directive
 * @name lunchioApp.directive:foodSection
 * @description
 * # foodSection
 */
angular.module('lunchioApp')
  .directive('foodSection', function () {
    return {
      templateUrl: 'templates/foodsection.html',
      scope: {
      	search: '=',
      	section: '=',
      	sectionTitle: '@'
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
