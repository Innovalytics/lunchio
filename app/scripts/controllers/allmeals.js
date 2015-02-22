'use strict';

/**
 * @ngdoc function
 * @name lunchioApp.controller:AllmealsCtrl
 * @description
 * # AllmealsCtrl
 * Controller of the lunchioApp
 */
angular.module('lunchioApp')
  .controller('AllmealsCtrl', ['$scope', '$location', 'Allmealsservice', function ($scope, $location, Allmealsservice) {
  	$scope.allMeals = Allmealsservice.getAll();

  	$scope.remove = function (index) {
  		Allmealsservice.remove(index);
  	};

  	$scope.createNewAllMeals = function () {
  		Allmealsservice.clear();
  		$location.path('/meal');
  	};

  	$scope.generateMailTo = function () {
  		var mail = {
  			subject: 'Meal List',
  			body: '' 
  		};

  		$scope.allMeals.forEach(function (meal, index) {
  			var mealStr = '\n\nMeal ' + (index + 1);

  			meal.items.forEach(function (item) {
  				mealStr += '\n' + item.food_name;
  			});

  			mail.body += mealStr;
  		});

  		return '?Subject=' + encodeURIComponent(mail.subject) + '&Body=' + encodeURIComponent(mail.body);
  	};

  	$scope.$on('allMealsChanged', function () {
	  	$scope.allMeals = Allmealsservice.getAll();
	});
  }]);
