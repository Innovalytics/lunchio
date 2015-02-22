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

    if (localStorage.allMeals) {
      allMeals = JSON.parse(localStorage.allMeals);
    }

    var persist = function () {
      localStorage.allMeals = JSON.stringify(allMeals);
      $rootScope.$broadcast('allMealsChanged');
    };

  	return {
  		add: function (meal) {
  			allMeals.push(meal);
        persist();
  		},
      remove: function (index) {
        allMeals.splice(index, 1);
        persist();
      },
  		getAll: function () {
  			return allMeals || [];
  		},
      clear: function () {
        allMeals = [];
        persist();
      }
  	};
  }]);
