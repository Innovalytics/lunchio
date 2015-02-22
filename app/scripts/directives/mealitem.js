'use strict';

/**
 * @ngdoc directive
 * @name lunchioApp.directive:mealItem
 * @description
 * # mealItem
 */
angular.module('lunchioApp')
  .directive('mealItem', function () {
    return {
   		scope: {
   			item: '=',
   			mealIndex: '&'
   		},
		templateUrl: 'templates/mealitem.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			scope.displayDetails = false;

			scope.showDetails = function () {
				scope.displayDetails = !scope.displayDetails;
			}

			scope.remove = function () {
				scope.$emit('removeMealItem', scope.mealIndex());
			}
		}
    };
  });
