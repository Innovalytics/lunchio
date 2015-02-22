'use strict';

/**
 * @ngdoc service
 * @name lunchioApp.Allmealsservice
 * @description
 * # Allmealsservice
 * Service in the lunchioApp.
 */
angular.module('lunchioApp')
  .service('Allmealsservice', ['$rootScope', function ($rootScope) {
  	var allMeals = [];

  	return {
  		add: function (meal) {
  			allMeals.push(meal);
			$rootScope.$broadcast('mealAdded', meal);
  		},
  		getAll: function () {
  			return allMeals || [];
  		}
  	}
  }]);
